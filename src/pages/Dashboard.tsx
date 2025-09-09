import React from 'react';
import { Link } from 'react-router-dom';
import { enquiries } from '../data/enquiries';
import { bookings } from '../data/bookings';

const Dashboard: React.FC = () => {
  const recentLeads = enquiries.slice(0, 5);
  const upcomingEvents = bookings.filter(b => b.status === 'Confirmed');

  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">Home</li>
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
        <div className="d-flex align-items-center gap-3">
          <small className="text-muted">Birthday chaos? Not on our watch.</small>
          <div className="dropdown">
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Theme: Default
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item">Default</button></li>
              <li><button className="dropdown-item">Dark</button></li>
            </ul>
          </div>
        </div>
      </div>

      <h4 className="mb-3">Dashboard Overview</h4>

      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="text-muted">Total Leads</span>
                <span className="text-muted">👥</span>
              </div>
              <div className="display-6">{enquiries.length}</div>
              <small className="text-muted">{enquiries.filter(e => e.status === 'Reviewed').length} converted</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="text-muted">Confirmed Bookings</span>
                <span className="text-muted">📅</span>
              </div>
              <div className="display-6">{bookings.filter(b => b.status === 'Confirmed').length}</div>
              <small className="text-muted">{bookings.filter(b => b.status === 'Pending').length} pending</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="text-muted">Total Conversations</span>
                <span className="text-muted">💬</span>
              </div>
              <div className="display-6">0</div>
              <small className="text-muted">Across all leads</small>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <span className="text-muted">Upcoming Events</span>
                <span className="text-muted">💲</span>
              </div>
              <div className="display-6">{upcomingEvents.length}</div>
              <small className="text-muted">Confirmed events</small>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Recent Leads</h5>
              <div className="d-flex flex-column gap-3">
                {recentLeads.map(lead => (
                  <div className="d-flex justify-content-between" key={lead.id}>
                    <div>{lead.name}</div>
                    <div className="text-end">
                      <div className={`text-${lead.status === 'Pending' ? 'primary' : lead.status === 'Reviewed' ? 'success' : 'muted'} small`}>{lead.status}</div>
                      <div className="text-muted small">{lead.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link to="/enquiries" className="btn btn-outline-secondary w-100">
                  View All Leads ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Upcoming Events</h5>
              <div className="d-flex flex-column gap-3">
                {upcomingEvents.map(event => (
                  <div className="d-flex justify-content-between align-items-start" key={event.id}>
                    <div>
                      <div className="fw-semibold">{event.package}</div>
                      <div className="text-muted small">{event.customerName}</div>
                    </div>
                    <div className="text-end">
                      <div className="small">{event.eventDate}</div>
                      <div className={`badge text-bg-${event.status === 'Confirmed' ? 'success' : 'warning'}`}>{event.status}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <Link to="/bookings" className="btn btn-outline-secondary w-100">
                  View All Bookings →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



