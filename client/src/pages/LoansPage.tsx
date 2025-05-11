import React, {  useState } from 'react';
import LoansTable from '../components/LoansDashboard/LoansTable';
import ".././index.css"

const LoansPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');


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