import { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
import {  doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate=useNavigate();
  const [currLocationJs, setCurrLocationJs] = useState(null);
  const [locationMatched, setLocationMatched] = useState(false);
  const [attendence, setAttendence] = useState(0);
  const[data,setData]=useState('');
  const [flag, setFlag] = useState(false);
  const [course,setCourse]=useState('PCS21/12/');
  const [uid,setUid]=useState('');


  useEffect(() => {
    getLocationJs();
  }, []);

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });

      // Check if the user's location matches the desired location
      const desiredLatitude = 19.12323;
      const desiredLongitude = 72.83599;
      const locationMatched =
        Math.abs(latitude - desiredLatitude) < 0.0005 &&
        Math.abs(longitude - desiredLongitude) < 0.0005;
      setLocationMatched(locationMatched);
    });
  };


  const handleScan = (data) => {
    if (data) {
      const myArray = data.text.split("/");
      let word = myArray[0];
      setCourse(word);
      console.log(setCourse)
      setAttendence(attendence+1)
      getDoc(doc(db,"userData",localStorage.getItem('uid')))
      .then((docSnapshot) =>{
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
        setUid(data.uid)
        }
      })
        
      const ref = doc(db, course,uid);
    getDoc(ref).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data();
          if(flag!==true){
            updateDoc(ref, { attendence: attendence,flag: true})
            .then(() => {
              console.log("Attendance updated successfully.");
            })
            .catch((error) => {
              console.error("Error updating attendance:", error);
            });
          }
          setFlag(data.flag);
          console.log(data.flag);
        } else {
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
     
    }
  };

  const handleError = (error) => {
    console.error("QR scanner error:", error);
  };

  const previewStyle = {
    height: 350,
    width: 400,
  };

  return (
    <div>
      {
        <QrReader
          delay={100}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
      }

    </div>
  );
}

export default App;
