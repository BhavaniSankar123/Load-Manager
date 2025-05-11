import React from 'react';
import "../../index.css"

interface Ticket {
  title: string;
  status: 'VERIFIED' | 'CHOICE';
  updated: string;
  user: string;
  date: string;
  time: string;
}

const Tickets: React.FC = () => {
  const tickets: Ticket[] = [
    {
      title: "Payment not going through",
      status: "VERIFIED",
      updated: "2 days ago",
      user: "Christian Bole",
      date: "09/24/05,2019",
      time: "5:00 PM"
    },
    // Add more tickets
  ];

  return (
    <div className="tickets-container">
      <h2>Recent Tickets</h2>
      <div className="tickets-list">
        {tickets.map((ticket, index) => (
          <div key={index} className="ticket-item">
            <div className="ticket-header">
              <h4>{ticket.title}</h4>
              <span className={`status ${ticket.status.toLowerCase()}`}>
                {ticket.status}
              </span>
            </div>
            <div className="ticket-meta">
              <span>{ticket.user}</span>
              <span>{ticket.date}</span>
              <span>{ticket.time}</span>
            </div>
            <div className="ticket-updated">Updated {ticket.updated}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;