"use client";

import { api } from "@/lib/axios";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

const authPaths = ["/login", "/register"];

export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);



    const login = async (email, password) => {
        try {
            const res = await api.post("/auth/login", { email, password });

            localStorage.setItem("token", res.data.token);

            setUser(res.data.user);

            router.push("/info1");
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };

    const register = async (name, email, password) => {
        try {
            await api.post("/auth/register", {
                name,
                email,
                password,
            });

            router.push("/login");
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    };
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        router.push("/login"); // Redirect to login page after logout
    };

    useEffect(() => {
        const loadUser = async () => {
            try {
                setIsReady(false);

                const token = localStorage.getItem("token");

                if (!token) return;

                const res = await api.get("/user/me", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUser(res.data);
            } catch (err) {
                console.log(err);
                localStorage.removeItem("token");
                toast.error("Your session has expired. Please login again.");
            } finally {
                setIsReady(true);
            }
        };

        loadUser();
    }, []);

    useEffect(() => {
        if (authPaths.includes(pathname)) return;

        if (!isReady) return;

        if (!user) router.replace("/login");
    }, [pathname, user, isReady]);

    if (!isReady) return null;

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
