import { Slider } from "@/components/ui/slider"
import { useContext, useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Amountrange({ }) {

    const [range, setRange] = useState({ min: 0, max: 1000000 });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const numberValue = Number(value);

        if (name === "min") {
            setRange(prevRange => ({
                ...prevRange,
                min: numberValue > prevRange.max ? prevRange.max : numberValue
            }));
        } else if (name === "max") {
            setRange(prevRange => ({
                ...prevRange,
                max: numberValue < prevRange.min ? prevRange.min : numberValue
            }));
        }
    };

    const handleSliderChange = (value) => {
        setRange({
            min: value[0],
            max: value[1]
        });
    };


    return (
        <CardFooter className="flex flex-col gap-2 items-start p-6">
            <p>Amount Range</p>
            <div className="flex gap-4">
                <Input
                    name="min"
                    placeholder="0"
                    type="number"
                    value={range.min}
                    onChange={handleInputChange}
                    min="0"
                />
                <Input
                    name="max"
                    placeholder="1000000"
                    type="number"
                    value={range.max}
                    onChange={handleInputChange}
                    min={range.min}
                />
            </div>
            <Slider
                value={[range.min, range.max]}
                min={0}
                max={1000000}
                step={1000}
                onValueChange={handleSliderChange}
            />
            <div className="flex w-full justify-between">
                <p>{range.min}</p>
                <p>{range.max}</p>
            </div>
        </CardFooter>



    )
}