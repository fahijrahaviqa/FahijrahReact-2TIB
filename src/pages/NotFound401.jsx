import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const Error401 = () => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.iconContainer, animation: 'bounce 1s infinite' }}>
        <FaLock size={100} color="#fff" />
      </div>
      <h1 style={styles.heading}>401 - Akses Ditolak</h1>
      <p style={styles.message}>
        Anda belum masuk atau tidak memiliki izin untuk mengakses halaman ini. Silakan login terlebih dahulu untuk melanjutkan.
      </p>
      <Link to="/login" style={styles.homeLink}>
        🔐 Masuk Sekarang
      </Link>

      {/* Tambahkan animasi dengan style tag */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #4e54c8, #8f94fb)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  iconContainer: {
    backgroundColor: '#5c6bc0',
    padding: '20px',
    borderRadius: '50%',
    marginBottom: '20px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  message: {
    fontSize: '18px',
    marginBottom: '30px',
    color: '#f1f1f1',
  },
  homeLink: {
    fontSize: '16px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#6c7ae0',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    transition: 'all 0.3s ease',
  },
};

export default Error401;
