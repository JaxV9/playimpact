import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ChartComponent from "../chart/chart";
// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

type EcoImpactPropsType = {
    currentPlatformProps: string
}

export const EcoImpact = ({ currentPlatformProps }: EcoImpactPropsType) => {

    const [timeRange, setTimeRange] = useState<string>("week")
    const [consumption, setConsumption] = useState<number>(0)
    const [dataY, setDataY] = useState<number[]>([])

    const consumptionByWeek: any = [
        {
            "day": "monday",
            "Xbox": 3,
            "playstation-in-hours": 1
        },
        {
            "day": "tuesday",
            "Xbox": 1,
            "playstation-in-hours": 2
        },
        {
            "day": "wednesday",
            "Xbox": 6,
            "playstation-in-hours": 0.3
        },
        {
            "day": "thursday",
            "Xbox": 3.2,
            "playstation-in-hours": 1
        },
        {
            "day": "friday",
            "Xbox": 0,
            "playstation-in-hours": 6
        },
        {
            "day": "saturday",
            "Xbox": 1,
            "playstation-in-hours": 2
        },
        {
            "day": "sunday",
            "Xbox": 3,
            "playstation-in-hours": 3
        },
    ]

    //Consommation en Kwh = puissance en watt x temps en heures / 1000
    //Consommation en C02 = Kwh * facteur d'émission en C02 (0,056)

    const convertInKWH = (pw: number, time: number) => {
        const result = pw * time / 1000
        return result
    }

    const consumptionByPlatform: object[] = [
        {
            "platform": "Xbox",
            "consumption-min": 160,
            "consumption-max": 200,
        },
        {
            "platform": "PS5",
            "consumption-min": 200,
            "consumption-max": 220,
        }
    ]

    useEffect(() => {
        if (currentPlatformProps == "Xbox") {
            setDataY([])
            consumptionByWeek.forEach((item: any) => {
                setDataY(prev => [...prev, convertInKWH(180,Number(item.Xbox))])
            });
        }
    }, [currentPlatformProps])

    return (
        <>
            <div className="ecoImpactContainer">
                {
                    timeRange == "week" ?
                        <ChartComponent currentLabelXProps={timeRange} dataXProps={dataY} />
                        : null
                }
            </div>
        </>
    )
}