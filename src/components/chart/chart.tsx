// components/chart/Chart.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

// Enregistrer les composants de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type ChartComponentPropsType = {
    currentLabelXProps: string,
    dataXProps: number[],
    currentUnitProps: string
}

const ChartComponent = ({currentLabelXProps, dataXProps, currentUnitProps}:ChartComponentPropsType) => {

    const [currentLabelX, setCurrentLabelX] = useState<string[]>([])
    const [currentTitle, setCurrentTitle] = useState<string>("")
    const [currentUnit, setCurrentUnit] = useState<string>("")

    const week: string[] = ["Mon", "Tues", "Wed", "Thur", "Frid", "Sat", "Sun"]
    const month = ["week_1", "week_2", "week_3", "week_4"]

    useEffect(() => {
        const thisUnit = currentUnitProps == "KWH" ? "KWH" : "C02"
        if(currentLabelXProps == "week"){
            setCurrentLabelX(week)
            
            setCurrentTitle("Consommation en "+thisUnit+" sur une semaine")
        }
        if(currentLabelXProps == "month"){
            setCurrentLabelX(month)
            setCurrentTitle("Consommation en "+thisUnit+" sur un mois")
        }
    },[currentLabelXProps, currentUnitProps])

    //X
  const data = {
    labels: currentLabelX,
    datasets: [
      {
        label: currentTitle,
        data: dataXProps,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Sales Over Time',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
