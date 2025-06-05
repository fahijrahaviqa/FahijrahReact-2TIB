import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error400 = () => {
  return (
    <div style={styles.container}>
      <div style={{ ...styles.iconContainer, animation: 'shake 0.8s infinite' }}>
        <FaExclamationTriangle size={100} color="#fff" />
      </div>
      <h1 style={styles.heading}>400 - Permintaan Tidak Valid</h1>
      <p style={styles.message}>
        Ups! Sepertinya ada yang salah dengan permintaan Anda. Mungkin URL-nya salah atau data yang dikirim tidak sesuai.
      </p>
      <Link to="/" style={styles.homeLink}>
        ⬅ Kembali ke Beranda
      </Link>

      {/* Tambahkan animasi dengan style tag */}
      <style>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
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
    background: 'linear-gradient(to right, #ff4b5c, #ff1a2a)',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  iconContainer: {
    backgroundColor: '#d9534f',
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
    backgroundColor: '#ff6f61',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    transition: 'all 0.3s ease',
  },
};

export default Error400;
