import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MainContent = () => {
  // Data for Bubble Chart using Chart.js
  const bubbleData = {
    datasets: [
      {
        label: 'Total IPO',
        data: [{ x: -5, y: 0, r: 70 }],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'IPO in Gain',
        data: [{ x:4, y: 4, r:60 }],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'IPO in Loss',
        data: [{ x: 0, y: 0, r: 50 }],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const bubbleOptions = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw.r}`;
          },
        },
      },
    },
    layout: {
      padding: 20,
    },
  };

  // Data and options for the Donut Chart using ApexCharts
  const donutSeries = [15, 25, 2];

  const donutOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Upcoming', 'New Listed', 'Ongoing'],
    colors: ['#4BC0C0', '#9966FF', '#FF9F40'],
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total',
              formatter: function () {
                return '42';
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
  };

  return (
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-8 mt-8">
        {/* IPO Dashboard with Chart.js Bubble Chart */}
        <div className="bg-white p-6 border-e-2">
          <h2 className="text-xl font-semibold">IPO Dashboard India</h2>
          <p className="text-green-500 mt-2">20 IPO in Gain</p>
          <div className="mt-4">
            <Bubble data={bubbleData} options={bubbleOptions} />
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white p-6 border-e-2">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex justify-between">
              <span>NSE India</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
            <li className="flex justify-between">
              <span>BSE India</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
            <li className="flex justify-between">
              <span>SEBI</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
            <li className="flex justify-between">
              <span>Money Control</span>
              <a href="#" className="text-blue-500">Visit Now</a>
            </li>
          </ul>
        </div>

        {/* Main Board IPO Section with ApexCharts Donut Chart */}
        <div className="bg-white p-6 border-e-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Main Board IPO</h2>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg">View Report</a>
          </div>
          <p className="mt-2">From 01 Jan 2024</p>
          <div className="relative mt-4">
            <ReactApexChart
              options={donutOptions}
              series={donutSeries}
              type="donut"
              height={250}
            />
          </div>
          <div className="mt-8">
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Upcoming</span>
                <span>15</span>
              </li>
              <li className="flex justify-between">
                <span>New Listed</span>
                <span>25</span>
              </li>
              <li className="flex justify-between">
                <span>Ongoing</span>
                <span>2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
