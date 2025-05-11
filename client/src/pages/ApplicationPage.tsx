import React from 'react';
import ApplicationForm from '../components/LoanApplication/ApplicationForm';
import ".././index.css"

const ApplicationPage: React.FC = () => {
  return (
    <div className="application-page">
      <h1>Apply for a Loan</h1>
      <ApplicationForm />
    </div>
  );
};

export default ApplicationPage;