import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const linkStyle = {
  textDecoration: 'none',
  margin: '0 10px',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '10px',
  backgroundColor: 'rgba(0,0,0,0.3)',
  borderRadius: '5px',
  outline: 'none', 
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: 'darkblue',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const nameStyle = {
  margin: '0 10px',
  color: 'white',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: 'darkblue',
  opacity: '0.9', 
  height:'70px'
};

const topicStyle = {
  fontSize: '35px',
  fontWeight: 'bold',
  color: 'white',
  margin: '10px',
};

const bgImageStyle = {
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  backgroundImage: 'url(./ab.png)',
};

export default function Home() {
  return (
    <div style={bgImageStyle}>
      <header style={headerStyle}>
        <h1 style={topicStyle} className='headingHome'>STUDENT PORTAL</h1>
        <nav>
          <Link to="/signup" style={linkStyle}>
            SIGNUP
          </Link>
          <Link to="/login" style={linkStyle}>
            LOGIN
          </Link>
        </nav>
      </header>
      <footer style={footerStyle}>
      <p style={{ ...nameStyle, fontSize: '18px', fontWeight: 'bold' }}>
          KNIGHT CODERS
        </p>
        <p style={nameStyle}>KRISHNAN</p>
        <p style={nameStyle}>SANIKA</p>
        <p style={nameStyle}>KRISH</p>
        <p style={nameStyle}>ONAM</p>
      </footer>
    </div>
  );
}