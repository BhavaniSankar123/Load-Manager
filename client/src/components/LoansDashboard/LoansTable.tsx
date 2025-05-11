import React from 'react';
import "../../index.css"

interface Loan {
  id: string;
  borrowerName: string;
  amount: number;
  interestRate: number;
  status: 'pending' | 'approved' | 'rejected' | 'closed';
  createdAt: string;
  dueDate: string;
}

const staticLoans: Loan[] = [
  {
    id: '1',
    borrowerName: 'John Doe',
    amount: 5000,
    interestRate: 5.5,
    status: 'approved',
    createdAt: '2024-03-01',
    dueDate: '2024-09-01'
  },
  {
    id: '2',
    borrowerName: 'Jane Smith',
    amount: 15000,
    interestRate: 7.2,
    status: 'pending',
    createdAt: '2024-03-05',
    dueDate: '2024-09-05'
  },
  {
    id: '3',
    borrowerName: 'Mike Johnson',
    amount: 10000,
    interestRate: 6.8,
    status: 'rejected',
    createdAt: '2024-03-10',
    dueDate: '2024-09-10'
  }
];

const LoansTable: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusBadge = (status: string) => {
    const statusClasses = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800',
      closed: 'bg-gray-100 text-gray-800',
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-sm ${statusClasses[status as keyof typeof statusClasses]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg border shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Borrower</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Interest Rate</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {staticLoans.map((loan) => (
            <tr key={loan.id}>
              <td className="px-6 py-4 whitespace-nowrap">{loan.borrowerName}</td>
              <td className="px-6 py-4 whitespace-nowrap">${loan.amount.toLocaleString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{loan.interestRate}%</td>
              <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(loan.status)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(loan.createdAt)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{formatDate(loan.dueDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoansTable;