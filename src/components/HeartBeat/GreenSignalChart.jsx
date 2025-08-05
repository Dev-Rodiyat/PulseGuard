import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, LinearScale, CategoryScale } from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, CategoryScale);

const GreenSignalChart = ({ data }) => {
    const chartData = {
        labels: data.map((_, i) => i),
        datasets: [
            {
                label: "Green Signal",
                data: data,
                borderWidth: 2,
                borderColor: "green",
                fill: false,
                tension: 0.3
            },
        ],
    };

    const options = {
        responsive: true,
        animation: false,
        scales: {
            x: { display: false },
            y: { beginAtZero: true },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default GreenSignalChart;