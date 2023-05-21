import React from 'react'
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import {db} from "../firebase/firebase.js"
import { Pie } from 'react-chartjs-2';
import PieChart from './PieChart.js';


function AttendenceAnalysis() {
  const [attendenceData, setAttendenceData] = useState(0);
  const [totalData,setTotalData] = useState(0)
  const [course,setCourse] = useState('');
  const [uid,setUid] = useState('')

   
  const handleSubmit = async() =>{
    
    const ref = doc(db, "userData", localStorage.getItem('uid'))

      await getDoc(ref).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          setUid(data.uid)
        }
    })
    await getDoc(doc(db,course,uid))
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
          setAttendenceData(parseInt(data.attendence))
          console.log(data.attendenceData);
      }
  })
  
  await getDoc(doc(db,course,"details"))
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
          setTotalData(parseInt(data.totalAttendence))
          console.log(data.totalAttendence);
      }
  })
    }
  return (
    <div className="container">
              <FormControl>
        <FormLabel>Course Name</FormLabel>
          <Input
            // html input attribute
            name="course"
            type="text"
            placeholder="Enter course"
            value = {course}
            onChange={(e)=>setCourse(e.target.value)}
          />
        </FormControl>
    <Button onClick={handleSubmit} sx={{ mt: 1 /* margin top */ }}>Signup</Button>
    
      <h2 className="text-center" style={{ fontSize: '36px', color: '#000000', background:"#D3D3D3" }}>AttendenceAnalysis</h2>
      <div className="table-responsive text-center pt-5">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>UID No.</th>
              <th>Course Name</th>
              <th>No. of Lectures</th>
              <th>Attendence</th>
            </tr>
          </thead>
          <tbody>
            {<>
              
              <tr>
                <td>202130074</td>
                <td>DAA</td>
                <td>{totalData}</td>
                <td>{(attendenceData /totalData) * 100}%</td>
            
              </tr>
              </>
            }
          </tbody>
        </table>
        <PieChart ct = {attendenceData } tt = {totalData}/>
      </div>
    </div>
  );
}

export default AttendenceAnalysis;