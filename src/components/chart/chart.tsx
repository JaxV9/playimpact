// components/chart/Chart.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

// Enregistrer les composants de Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type ChartComponentPropsType = {
    currentLabelXProps: string,
    dataXProps: number[]
}

const ChartComponent = ({currentLabelXProps, dataXProps}:ChartComponentPropsType) => {

    const [currentLabelX, setCurrentLabelX] = useState<string[]>([])

    const week: string[] = ["Mon", "Tues", "Wed", "Thur", "Frid", "Sat", "Sun"]
    const month = ["week_1", "week_2", "week_3", "week_4"]

    useEffect(() => {
        if(currentLabelXProps == "week"){
            setCurrentLabelX(week)
        }
        if(currentLabelXProps == "month"){
            setCurrentLabelX(month)
        }
    },[currentLabelXProps])

    //X
  const data = {
    labels: currentLabelX,
    datasets: [
      {
        label: 'Consommation en KWH sur une semaine',
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
        display: true,
        text: 'Sales Over Time',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
