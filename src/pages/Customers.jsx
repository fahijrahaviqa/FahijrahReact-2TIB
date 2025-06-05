import React, { useState } from 'react';
import AddCustomerForm from "../components/AddCustomerForm"; // pastikan path-nya sesuai

const Customers = () => {
  const [customers, setCustomers] = useState([
    { customerId: 'CUST001', customerName: 'Alya Putri', email: 'alya@example.com', phone: '081234567890', loyalty: 'Gold' },
    { customerId: 'CUST002', customerName: 'Rafi Hidayat', email: 'rafi@example.com', phone: '082345678901', loyalty: 'Silver' },
    { customerId: 'CUST003', customerName: 'Intan Permata', email: 'intan@example.com', phone: '083456789012', loyalty: 'Bronze' },
    { customerId: 'CUST004', customerName: 'Dimas Saputra', email: 'dimas@example.com', phone: '084567890123', loyalty: 'Gold' },
    { customerId: 'CUST005', customerName: 'Siti Aisyah', email: 'siti@example.com', phone: '085678901234', loyalty: 'Silver' },
    { customerId: 'CUST006', customerName: 'Bagus Santoso', email: 'bagus@example.com', phone: '086789012345', loyalty: 'Bronze' },
    { customerId: 'CUST007', customerName: 'Wulan Sari', email: 'wulan@example.com', phone: '087890123456', loyalty: 'Gold' },
    { customerId: 'CUST008', customerName: 'Rina Oktavia', email: 'rina@example.com', phone: '088901234567', loyalty: 'Silver' },
    { customerId: 'CUST009', customerName: 'Agus Prasetyo', email: 'agus@example.com', phone: '089012345678', loyalty: 'Bronze' },
    { customerId: 'CUST010', customerName: 'Lia Marlina', email: 'lia@example.com', phone: '081123456789', loyalty: 'Gold' },
    { customerId: 'CUST011', customerName: 'Budi Santosa', email: 'budi@example.com', phone: '081234567891', loyalty: 'Silver' },
    { customerId: 'CUST012', customerName: 'Citra Dewi', email: 'citra@example.com', phone: '082345678902', loyalty: 'Gold' },
    { customerId: 'CUST013', customerName: 'Teguh Irawan', email: 'teguh@example.com', phone: '083456789013', loyalty: 'Bronze' },
    { customerId: 'CUST014', customerName: 'Salsa Amelia', email: 'salsa@example.com', phone: '084567890124', loyalty: 'Silver' },
    { customerId: 'CUST015', customerName: 'Eko Prabowo', email: 'eko@example.com', phone: '085678901235', loyalty: 'Gold' },
    { customerId: 'CUST016', customerName: 'Nina Handayani', email: 'nina@example.com', phone: '086789012346', loyalty: 'Bronze' },
    { customerId: 'CUST017', customerName: 'Andi Firmansyah', email: 'andi@example.com', phone: '087890123457', loyalty: 'Silver' },
    { customerId: 'CUST018', customerName: 'Mega Ayu', email: 'mega@example.com', phone: '088901234568', loyalty: 'Gold' },
    { customerId: 'CUST019', customerName: 'Joko Harianto', email: 'joko@example.com', phone: '089012345679', loyalty: 'Bronze' },
    { customerId: 'CUST020', customerName: 'Dewi Anggraeni', email: 'dewi@example.com', phone: '081123456790', loyalty: 'Silver' },
    { customerId: 'CUST021', customerName: 'Fikri Aditya', email: 'fikri@example.com', phone: '082345678903', loyalty: 'Gold' },
    { customerId: 'CUST022', customerName: 'Lutfi Ramadhan', email: 'lutfi@example.com', phone: '083456789014', loyalty: 'Bronze' },
    { customerId: 'CUST023', customerName: 'Yuli Rahma', email: 'yuli@example.com', phone: '084567890125', loyalty: 'Silver' },
    { customerId: 'CUST024', customerName: 'Rina Kartika', email: 'rina2@example.com', phone: '085678901236', loyalty: 'Gold' },
    { customerId: 'CUST025', customerName: 'Rizki Maulana', email: 'rizki@example.com', phone: '086789012347', loyalty: 'Bronze' },
    { customerId: 'CUST026', customerName: 'Tiara Sari', email: 'tiara@example.com', phone: '087890123458', loyalty: 'Silver' },
    { customerId: 'CUST027', customerName: 'Ilham Nur', email: 'ilham@example.com', phone: '088901234569', loyalty: 'Gold' },
    { customerId: 'CUST028', customerName: 'Putri Damayanti', email: 'putri@example.com', phone: '089012345680', loyalty: 'Bronze' },
    { customerId: 'CUST029', customerName: 'Bayu Ardi', email: 'bayu@example.com', phone: '081234567892', loyalty: 'Silver' },
    { customerId: 'CUST030', customerName: 'Shinta Lestari', email: 'shinta@example.com', phone: '082345678904', loyalty: 'Gold' },
  ]);

  const [showForm, setShowForm] = useState(false);

  const handleAddCustomer = (newCustomer) => {
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold flex items-center gap-2">👥 Customers Dashboard</h2>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium"
            onClick={() => setShowForm(true)}
          >
            + Add Customer
          </button>
        </div>

        {showForm && (
          <AddCustomerForm
            onAddCustomer={handleAddCustomer}
            onClose={() => setShowForm(false)}
          />
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-4 py-3">Customer ID</th>
                <th className="px-4 py-3">Customer Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{customer.customerId}</td>
                  <td className="px-4 py-3">{customer.customerName}</td>
                  <td className="px-4 py-3">{customer.email}</td>
                  <td className="px-4 py-3">{customer.phone}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        customer.loyalty === 'Bronze'
                          ? 'bg-yellow-400 text-yellow-900'
                          : customer.loyalty === 'Silver'
                          ? 'bg-gray-300 text-gray-800'
                          : 'bg-yellow-500 text-white'
                      }`}
                    >
                      {customer.loyalty}
                    </span>
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

export default Customers;