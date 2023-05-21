import React from 'react';
import { Link } from 'react-router-dom';
import "./profile.css"

const dropdownStyle = {
  width: '200px',
  margin: '20px',
};

const dropdownItemStyle = {
  textDecoration: 'none',
  padding: '10px',
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'black',
  display: 'block',
};



const studentDetailsStyle = {
  width: '400px',
  height: '300px',
  backgroundColor: '#F9F7F7',
  borderRadius: '10px',
  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: 'auto',
  marginTop: '50px',
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#4E4E4E',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
};

const buttonStyle = {
  backgroundColor: 'rgb(212, 250, 252)',
  color: '#4E4E4E',
  fontWeight: 'bold',
  fontSize: '30px',
  border: 'none',
  borderRadius: '9px',
  padding: '60px 90px',
  margin: '0 30px',
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
};

export default function Home() {
  return (
    <div >
      <header className='headerStyle'>
        <h1 style={{ fontSize: '35px', margin: '0', color: '#A5D7E8', fontFamily: 'Instrument Serif'}}>Attendance Management</h1>
      </header>
      <header style={{ backgroundColor: '#D4FAFC', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ fontSize: '24px', margin: '0', color: '#2F0F5D',width:"50%",textAlign:"center" }}>Student Details</h2>
        </header>
        {/* <div style={{backgroundColor:'#A5D7E8',width:'200px', height:'200px'}}>  </div> */}
      <div style={studentDetailsStyle}>
        <p>Student Name: 123456</p>
        <p>UIDNO: 654321</p>
        <p>Course: Computer Science</p>
      </div>
      <div style={buttonContainerStyle}>
        <Link to="/qrcode" style={buttonStyle}>
          QR Code
        </Link>
        <Link to="/Attendence" style={buttonStyle}>
          Attendance Analysis
        </Link>
      </div>
    </div>
  );
}