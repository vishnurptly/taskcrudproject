import React, { useState ,useEffect} from 'react'
import { Grid, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UpdateUser() {

    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    const navigate = useNavigate();
    const { id }  = useParams();

    useEffect(()=>{
      axios.get('http://localhost:3000/getbyid/'+id)
      .then(res => {
          setEmail(res.data.email)
          setName(res.data.name)
          setAge(res.data.age)
          
    })
   .catch(err => console.error(err))
    },[])


    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = axios.put('http://localhost:3000/update/'+id,{email,name,age})
        
        if(!user){
          alert('please enter value')
         }else{
          navigate('/')
         }
    }
  return (
    <div>
     
    <Container maxWidth="xs"  sx={{ mt: 5,border:'solid 1px',borderRadius:'10px',background:'wight' }}>
    <Typography variant="h3"sx={{ textAlign:'center'}} component="h3">Update </Typography>
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
               value={name}
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
              value={email}
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
              value={age}
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

export default UpdateUser
