import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import "../../index.css"
Chart.register(...registerables);

interface LoansChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

const LoansChart: React.FC<LoansChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [{
      label: 'Repayments Collected',
      data: data.values,
      borderColor: '#3498db',
      tension: 0.4,
    }]
  };

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default LoansChart;