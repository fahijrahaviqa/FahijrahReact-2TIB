import React, { useState } from 'react';
import AddOrderForm from '../components/AddOrderForm';

const Orders = () => {
  const orders = [
    { orderId: 'ORD001', customerName: 'Alya Putri', status: 'Pending', totalPrice: 120000, orderDate: '2025-04-01' },
    { orderId: 'ORD002', customerName: 'Rafi Hidayat', status: 'Completed', totalPrice: 275000, orderDate: '2025-04-02' },
    { orderId: 'ORD003', customerName: 'Intan Permata', status: 'Cancelled', totalPrice: 89000, orderDate: '2025-04-02' },
    { orderId: 'ORD004', customerName: 'Dimas Saputra', status: 'Completed', totalPrice: 150000, orderDate: '2025-04-03' },
    { orderId: 'ORD005', customerName: 'Siti Aisyah', status: 'Pending', totalPrice: 134000, orderDate: '2025-04-03' },
    { orderId: 'ORD006', customerName: 'Bagus Santoso', status: 'Cancelled', totalPrice: 112000, orderDate: '2025-04-04' },
    { orderId: 'ORD007', customerName: 'Wulan Sari', status: 'Completed', totalPrice: 98000, orderDate: '2025-04-04' },
    { orderId: 'ORD008', customerName: 'Rina Oktavia', status: 'Pending', totalPrice: 156000, orderDate: '2025-04-05' },
    { orderId: 'ORD009', customerName: 'Agus Prasetyo', status: 'Completed', totalPrice: 123000, orderDate: '2025-04-05' },
    { orderId: 'ORD010', customerName: 'Lia Marlina', status: 'Cancelled', totalPrice: 142000, orderDate: '2025-04-06' },
    { orderId: 'ORD011', customerName: 'Budi Santosa', status: 'Pending', totalPrice: 97000, orderDate: '2025-04-06' },
    { orderId: 'ORD012', customerName: 'Citra Dewi', status: 'Completed', totalPrice: 205000, orderDate: '2025-04-07' },
    { orderId: 'ORD013', customerName: 'Teguh Irawan', status: 'Pending', totalPrice: 189000, orderDate: '2025-04-07' },
    { orderId: 'ORD014', customerName: 'Salsa Amelia', status: 'Completed', totalPrice: 102000, orderDate: '2025-04-08' },
    { orderId: 'ORD015', customerName: 'Eko Prabowo', status: 'Cancelled', totalPrice: 117000, orderDate: '2025-04-08' },
    { orderId: 'ORD016', customerName: 'Nina Handayani', status: 'Pending', totalPrice: 163000, orderDate: '2025-04-09' },
    { orderId: 'ORD017', customerName: 'Andi Firmansyah', status: 'Completed', totalPrice: 99000, orderDate: '2025-04-09' },
    { orderId: 'ORD018', customerName: 'Mega Ayu', status: 'Completed', totalPrice: 175000, orderDate: '2025-04-10' },
    { orderId: 'ORD019', customerName: 'Joko Harianto', status: 'Cancelled', totalPrice: 84000, orderDate: '2025-04-10' },
    { orderId: 'ORD020', customerName: 'Dewi Anggraeni', status: 'Pending', totalPrice: 145000, orderDate: '2025-04-11' },
    { orderId: 'ORD021', customerName: 'Fikri Aditya', status: 'Completed', totalPrice: 155000, orderDate: '2025-04-11' },
    { orderId: 'ORD022', customerName: 'Lutfi Ramadhan', status: 'Pending', totalPrice: 132000, orderDate: '2025-04-12' },
    { orderId: 'ORD023', customerName: 'Yuli Rahma', status: 'Cancelled', totalPrice: 101000, orderDate: '2025-04-12' },
    { orderId: 'ORD024', customerName: 'Rina Kartika', status: 'Completed', totalPrice: 184000, orderDate: '2025-04-13' },
    { orderId: 'ORD025', customerName: 'Rizki Maulana', status: 'Pending', totalPrice: 166000, orderDate: '2025-04-13' },
    { orderId: 'ORD026', customerName: 'Tiara Sari', status: 'Completed', totalPrice: 115000, orderDate: '2025-04-14' },
    { orderId: 'ORD027', customerName: 'Ilham Nur', status: 'Cancelled', totalPrice: 91000, orderDate: '2025-04-14' },
    { orderId: 'ORD028', customerName: 'Putri Damayanti', status: 'Pending', totalPrice: 109000, orderDate: '2025-04-15' },
    { orderId: 'ORD029', customerName: 'Bayu Ardi', status: 'Completed', totalPrice: 176000, orderDate: '2025-04-15' },
    { orderId: 'ORD030', customerName: 'Shinta Lestari', status: 'Cancelled', totalPrice: 94000, orderDate: '2025-04-16' },
  ];

  const [showForm, setShowForm] = useState(false);

  const handleAddOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold flex items-center gap-2">📦 Orders Dashboard</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium"
          >
            + Add Order
          </button>
        </div>

        {showForm && <AddOrderForm onAddOrder={handleAddOrder} onCancel={() => setShowForm(false)} />}

        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-3">Order ID</th>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Total Price</th>
                <th className="px-4 py-3">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{order.orderId}</td>
                  <td className="px-4 py-3">{order.customerName}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'Pending'
                          ? 'bg-yellow-300 text-yellow-900'
                          : order.status === 'Completed'
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">Rp {order.totalPrice.toLocaleString('id-ID')}</td>
                  <td className="px-4 py-3">{order.orderDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;