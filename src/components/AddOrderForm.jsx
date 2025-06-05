import React, { useState } from 'react';

const AddOrderForm = ({ onAddOrder, onCancel }) => {
  const [form, setForm] = useState({
    orderId: '',
    customerName: '',
    status: 'Pending',
    totalPrice: '',
    orderDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.orderId || !form.customerName || !form.totalPrice || !form.orderDate) return;
    onAddOrder({ ...form, totalPrice: parseInt(form.totalPrice, 10) });
    setForm({
      orderId: '',
      customerName: '',
      status: 'Pending',
      totalPrice: '',
      orderDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 border rounded-lg shadow mb-6">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="orderId"
          value={form.orderId}
          onChange={handleChange}
          placeholder="Order ID"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          placeholder="Customer Name"
          className="p-2 border rounded"
          required
        />
        <select name="status" value={form.status} onChange={handleChange} className="p-2 border rounded">
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <input
          type="number"
          name="totalPrice"
          value={form.totalPrice}
          onChange={handleChange}
          placeholder="Total Price"
          className="p-2 border rounded"
          required
        />
        <input
          type="date"
          name="orderDate"
          value={form.orderDate}
          onChange={handleChange}
          className="p-2 border rounded col-span-2"
          required
        />
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-gray-800"
        >
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white">
          Add Order
        </button>
      </div>
    </form>
  );
};

export default AddOrderForm;
