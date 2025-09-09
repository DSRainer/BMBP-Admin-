import React from 'react';
import { enquiries, Enquiry } from '../data/enquiries';

const Enquiries = () => {
  return (
    <div>
      <h1 className="mb-4">Enquiries</h1>
      <div className="card">
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry: Enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.id}</td>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.phone}</td>
                  <td>{enquiry.date}</td>
                  <td>
                    <span className={`badge bg-${enquiry.status === 'Pending' ? 'warning' : enquiry.status === 'Reviewed' ? 'info' : 'success'}`}>
                      {enquiry.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Enquiries;