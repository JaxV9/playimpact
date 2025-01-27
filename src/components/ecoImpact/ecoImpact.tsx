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
import { LoadMoreBtn } from "../ui/buttons/loadMoreBtn/loadMoreBtn";
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
    const [currentUnit, setCurrentUnit] = useState<string>("KWH")
    const [dataY, setDataY] = useState<number[]>([])

    const consumptionByDays: any = [
        {
            "day": "monday",
            "Xbox": 3,
            "Playstation": 1
        },
        {
            "day": "tuesday",
            "Xbox": 1,
            "Playstation": 2
        },
        {
            "day": "wednesday",
            "Xbox": 6,
            "Playstation": 0.3
        },
        {
            "day": "thursday",
            "Xbox": 3.2,
            "Playstation": 1
        },
        {
            "day": "friday",
            "Xbox": 0,
            "Playstation": 6
        },
        {
            "day": "saturday",
            "Xbox": 1,
            "Playstation": 2
        },
        {
            "day": "sunday",
            "Xbox": 3,
            "Playstation": 3
        },
    ]

    const consumptionByWeeks: any = [
        {
            "week": "1",
            "Xbox": 5,
            "Playstation": 10 
        },
        {
            "week": "2",
            "Xbox": 10,
            "Playstation": 6
        },
        {
            "week": "3",
            "Xbox": 10,
            "Playstation": 5
        },
        {
            "week": "4",
            "Xbox": 9,
            "Playstation": 8
        }
    ]

    //Consommation en Kwh = puissance en watt x temps en heures / 1000
    //Consommation en C02 = Kwh * facteur d'émission en C02 (0,056)

    const convertIn = (pw: number, time: number) => {
        if(currentUnit == "KWH"){
            const resultInKWH = pw * time / 1000
            return resultInKWH
        }
        if(currentUnit == "C02"){
            const resultInKWH = pw * time / 1000
            const resultInC02 = resultInKWH * 0.056
            return resultInC02
        }
        return 0
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
        if (currentPlatformProps == "Xbox" && timeRange == "week") {
            setDataY([])
            consumptionByDays.forEach((item: any) => {
                setDataY(prev => [...prev, convertIn(180, Number(item.Xbox))])
            });
        }
        if (currentPlatformProps == "Playstation" && timeRange == "week") {
            console.log("hello")
            setDataY([])
            consumptionByDays.forEach((item: any) => {
                setDataY(prev => [...prev, convertIn(180, Number(item.Playstation))])
            });
            console.log("here" +consumptionByDays[0].Playstation)
        }
        if (currentPlatformProps == "Xbox" && timeRange == "month") {
            setDataY([])
            consumptionByWeeks.forEach((item: any) => {
                setDataY(prev => [...prev, convertIn(180, Number(item.Xbox))])
            });
        }
        if (currentPlatformProps == "Playstation" && timeRange == "month") {
            setDataY([])
            consumptionByWeeks.forEach((item: any) => {
                setDataY(prev => [...prev, convertIn(180, Number(item.Playstation))])
            });
        }
    }, [currentPlatformProps, timeRange, currentUnit])

    return (
        <>
            <div className="ecoImpactContainer">
                {
                    timeRange == "week" ?
                        <ChartComponent currentLabelXProps={timeRange} dataXProps={dataY} currentUnitProps={currentUnit} />
                        : null
                }
                {
                    timeRange == "month" ?
                        <ChartComponent currentLabelXProps={timeRange} dataXProps={dataY} currentUnitProps={currentUnit} />
                        : null
                }
                <div className="buttonsContainer">
                    <LoadMoreBtn functionProps={() => setTimeRange("week")} textProps="Semaine" />
                    <LoadMoreBtn functionProps={() => setTimeRange("month")} textProps="Mois" />
                    <LoadMoreBtn functionProps={() => setCurrentUnit("KWH")} textProps="KWH" />
                    <LoadMoreBtn functionProps={() => setCurrentUnit("C02")} textProps="C02" />
                </div>
            </div>
        </>
    )
}