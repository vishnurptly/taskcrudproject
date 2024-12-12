import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Grid, Container } from '@mui/material';


function CreateUser() {

  const navigate = useNavigate();

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    const user =axios.post('http://localhost:3000/create',{name,email,age})
       if(!user){
        alert('please enter value')
       }else{
        navigate('/')
       }
    }
  return (
    <div>
      


    <Container maxWidth="xs"  sx={{ mt: 5,border:'solid 1px',borderRadius:'10px',background:'#002D62' }}>
    <Typography variant="h3"sx={{ textAlign:'center'}} component="h3">Add </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              sx={{background:'#ffff'}}
              label="Name"
              type="text"
               name='name'
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              required
              
            />
          </Grid>
          
          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              sx={{background:'#ffff'}}
              label="Email"
              type="email"
              name='email'
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>

          {/* Address Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              sx={{background:'#ffff'}}
              label="Age"
              variant="outlined"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
  )
}

export default CreateUser
