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
    const [currentPlatform, setCurrentPlatform] = useState<string>(currentPlatformProps)
    const [consumption, setConsumption] = useState<number>(0)

    const consumptionByDay: object[] = [
        {
            "day": "monday",
            "xbox-in-hours": 3,
            "playstation-in-hours": 1
        },
        {
            "day": "tuesday",
            "xbox-in-hours": 1,
            "playstation-in-hours": 2
        },
        {
            "day": "wednesday",
            "xbox-in-hours": 6,
            "playstation-in-hours": 0.3
        },
        {
            "day": "thursday",
            "xbox-in-hours": 3.2,
            "playstation-in-hours": 1
        },
        {
            "day": "friday",
            "xbox-in-hours": 0,
            "playstation-in-hours": 6
        },
        {
            "day": "saturday",
            "xbox-in-hours": 1,
            "playstation-in-hours": 2
        },
        {
            "day": "sunday",
            "xbox-in-hours": 3,
            "playstation-in-hours": 3
        },
    ]

    //Consommation en Kwh = puissance en watt x temps en heures / 1000
    //Consommation en C02 = Kwh * facteur d'émission en C02 (0,056)

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

return (
    <>
        <div className="ecoImpactContainer">
            {
                timeRange == "week" ?
                    <ChartComponent />
                    : null
            }
        </div>
    </>
)
}