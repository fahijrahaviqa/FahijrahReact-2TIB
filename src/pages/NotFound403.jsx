import React from 'react';
import { Link } from 'react-router-dom';
import { FaBan } from 'react-icons/fa';

const Error403 = () => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.iconContainer, animation: 'bounce 1s infinite' }}>
        <FaBan size={100} color="#fff" />
      </div>
      <h1 style={styles.heading}>403 - Akses Terlarang</h1>
      <p style={styles.message}>
        Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi admin jika ini adalah sebuah kesalahan.
      </p>
      <Link to="/" style={styles.homeLink}>
        ⬅ Kembali ke Beranda
      </Link>

      {/* Animasi bounce */}
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
    background: 'linear-gradient(to right, #ff8c42, #ff682c)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  iconContainer: {
    backgroundColor: '#f57c00',
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
    backgroundColor: '#ffa76d',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    transition: 'all 0.3s ease',
  },
};

export default Error403;
