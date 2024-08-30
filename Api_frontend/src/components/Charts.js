"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { month: "January", Income: 186, Expense: 80 },
    { month: "February", Income: 305, Expense: 200 },
    { month: "March", Income: 237, Expense: 120 },
    { month: "April", Income: 73, Expense: 190 },
    { month: "May", Income: 209, Expense: 130 },
    { month: "June", Income: 214, Expense: 140 },
    { month: "July", Income: 214, Expense: 140 },
]

const chartConfig = {
    Income: {
        label: "Income",
        color: "#84CC16",
    },
    Expense: {
        label: "Expense",
        color: "#F97316",
    },
}

export function Charts() {
    return (
        <Card >
            <CardHeader>
                <CardTitle>Income - Expense</CardTitle>

            </CardHeader>


            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dashed" />}
                        />
                        <Bar dataKey="Income" fill="var(--color-Income)" radius={4} />
                        <Bar dataKey="Expense" fill="var(--color-Expense)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>


        </Card>
    )
}
