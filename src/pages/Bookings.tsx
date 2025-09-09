import React from 'react';
import { bookings, Booking } from '../data/bookings';
import Icon from '../components/Icon';
import { FiPlus, FiEdit, FiTrash2 } from 'react-icons/fi';

const Bookings = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Bookings</h1>
        <button className="btn btn-primary">
          <Icon component={FiPlus} className="me-2" />
          Add Booking
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Event Date</th>
                  <th>Package</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking: Booking) => (
                  <tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.customerName}</td>
                    <td>{booking.eventDate}</td>
                    <td>{booking.package}</td>
                    <td>
                      <span className={`badge bg-${booking.status === 'Confirmed' ? 'success' : booking.status === 'Pending' ? 'warning' : 'danger'}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        <Icon component={FiEdit} className="me-1" />
                        Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <Icon component={FiTrash2} className="me-1" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
