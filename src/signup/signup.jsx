import React,{useState} from 'react';
import { CssVarsProvider} from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import {auth} from '../firebase/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {db} from '../firebase/firebase'
import { doc, setDoc } from "firebase/firestore"; 


export default function Signup() {
  const navigate = useNavigate()

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [uid,setUid] = useState("")
    const [courses,setCourses] = useState("")
    const [errorCode,setErrorCode] = useState("")
    const [errorMessage,setErrorMessage] = useState("")


 const handleSubmit = () =>{
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // localStorage.removeItem(uid)
      localStorage.setItem('uid',user.uid)
          console.log(user.uid)
          setDoc(doc(db, "userData", user.uid), {
            fName:fname,
            lName:lname,
            uid:uid
          })
          navigate('/profile');

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorCode(errorCode);
      setErrorMessage(errorMessage);
      // ..
    });
   }
  
  return (
   
    <CssVarsProvider>
    <main>
      <Sheet
        sx={{
          width: 500,
          mx: 'auto', 
          my: 4, 
          py: 3, 
          px: 2, 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
            </Typography>
          <Typography level="body2">Sign up to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            // html input attribute
            name="Fname"
            type="text"
            placeholder="your first name"
            onChange={(e)=>setFname(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
           name="Lname"
            type="text"
            placeholder="your last name"
            onChange={(e)=>setLname(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>UID</FormLabel>
          <Input
           name="uid"
            type="number"
            placeholder="2021300074"
            onChange={(e)=>setUid(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
           name="email"
            type="email"
            placeholder="krish.mehta@spit.ac.in"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>password</FormLabel>
          <Input
           name="password"
            type="password"
            placeholder="123"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
        {errorCode}
        {errorMessage}
        <Button onClick={handleSubmit} sx={{ mt: 1 /* margin top */ }}>Signup</Button>
        <Typography
          endDecorator={<Link href="./login">Sign in</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </main>
  </CssVarsProvider>
  );
}