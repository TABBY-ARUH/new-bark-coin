// src/Tokenomics.tsx

import React, { useEffect, useRef } from 'react';
import Layout from './Layout';
import Chart from 'chart.js/auto';

const Tokenomics: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<'pie', number[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ['Development', 'Marketing', 'Community Rewards', 'Liquidity', 'Team'],
            datasets: [{
              label: 'Tokenomics Allocation',
              data: [20, 20, 25, 25, 10],
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
              ],
            }],
          },
          options: {
            plugins: {
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const labelIndex = context.dataIndex;
                    const label = context.label || '';
                    const dataValue = context.parsed || 0;
                    const total = context.dataset?.data.reduce((acc, val) => acc + val, 0) || 0;
                    const percentage = Math.round((100 * dataValue) / total);
                    return `${label}: ${percentage}%`;
                  }
                }
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <Layout>
      <div className="tokenomics">
        <h2>Tokenomics</h2>
        <canvas ref={chartRef} />
        <p>Total Supply: 1 billion Bark Coins (BARK).</p>
        <p>Allocation:</p>
        <ul>
          <li>Development: 20%</li>
          <li>Marketing: 20%</li>
          <li>Community Rewards: 25%</li>
          <li>Liquidity: 25%</li>
          <li>Team: 10%</li>
        </ul>
        <p>Distribution:</p>
        <ul>
          <li>Initial Offering: 40% available for public sale.</li>
          <li>Vesting Periods: Team tokens vested over a 2-year period for long-term commitment.</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Tokenomics;

