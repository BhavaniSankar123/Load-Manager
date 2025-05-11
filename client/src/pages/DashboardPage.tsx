import React, { useEffect, useState } from 'react';
import StatCard from '../components/Dashboard/StateCard';
import LoansChart from '../components/Dashboard/LoansChart';
import Tickets from '../components/Dashboard/Tickets';
import { api } from '../services/api';
import ".././index.css"

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState({
    loans: 0,
    savings: 0,
    borrowers: 0,
    disbursed: 0,
    repaid: 0,
    received: 0
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.getDashboardStats();
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="dashboard-page">
      <div className="stats-grid">
        <StatCard title="LOANS" value={stats.loans.toString()} subtitle="Active Loans" />
        <StatCard title="SAVINGS" value={`$${stats.savings.toLocaleString()}`} subtitle="Total Savings" />
        <StatCard title="BORROWERS" value={stats.borrowers.toString()} subtitle="Active Borrowers" />
        <StatCard title="CASH DISBURSED" value={`$${stats.disbursed.toLocaleString()}`} subtitle="Total Disbursed" />
        <StatCard title="REPAID LOANS" value={stats.repaid.toString()} subtitle="Fully Repaid" />
        <StatCard title="CASH RECEIVED" value={`$${stats.received.toLocaleString()}`} subtitle="Total Repayments" />
      </div>

      <div className="chart-section">
        <LoansChart data={{
          labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        }} />
      </div>

      <Tickets />
    </div>
  );
};

export default DashboardPage;