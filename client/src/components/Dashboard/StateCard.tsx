import React from 'react';
import "../../index.css"

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle }) => (
  <div className="stat-card">
    <h3>{title}</h3>
    <div className="stat-value">{value}</div>
    <div className="stat-subtitle">{subtitle}</div>
  </div>
);

export default StatCard;