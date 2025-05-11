import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import LoansTable from '../components/LoansDashboard/LoansTable';
import ".././index.css"

const LoansPage: React.FC = () => {
  const [loans, setLoans] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await api.getApplications();
        setLoans(response.data);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };
    fetchLoans();
  }, []);

  return (
    <div className="loans-page">
      <div className="header-actions">
        <div className="action-buttons">
          <button className="primary-btn">Borrow Cash</button>
          <button>Transact</button>
          <button>Deposit Cash</button>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for loans"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <LoansTable />
    </div>
  );
};

export default LoansPage;