import React, { useState } from 'react';

const AddCustomerForm = ({ onAddCustomer, onClose }) => {
  const [formData, setFormData] = useState({
    customerId: '',
    customerName: '',
    email: '',
    phone: '',
    loyalty: 'Gold',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.customerId ||
      !formData.customerName ||
      !formData.email ||
      !formData.phone
    ) {
      alert('Please fill in all fields.');
      return;
    }

    onAddCustomer(formData);
    onClose();
  };

  return (
    <div className="bg-white shadow-md rounded p-6 mb-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4">➕ Add New Customer</h3>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="customerId"
          placeholder="Customer ID (e.g. CUST031)"
          value={formData.customerId}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
        <select
          name="loyalty"
          value={formData.loyalty}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Bronze">Bronze</option>
        </select>

        <div className="flex justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomerForm;
