import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TextField,IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


//  const navigate = useNavigate();


  


function Users() {



    const [user, setUser] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    
    
    useEffect(() => {
      axios.get('http://localhost:3000/getall')
        .then(res => setUser(res.data))
       
        .catch(err => console.error(err));
      
       
    },[]);

    

   const  deleteidtem =(id)=>{
    axios.delete(`http://localhost:3000/remove/${id}`)
     .then(() => setEmployees(employees.filter(emp => emp._id !== id)))
     window.location.reload()
      .catch(err =>console.error(err) )
      
     
    }

    const handleSearch = (event) => {
     
      const value = event.target.value.toLowerCase();
      
      setSearchTerm(value);
      if(!value){
        window.location.reload
      }else{
      
      const filtered = user.filter((item) =>
        item.name.toLowerCase().includes(value) || item.email.toLowerCase().includes(value)
      );
      setUser(filtered);
     
    };
  }
    

  return (
    <div>
      
     
     
     <TableContainer component={Paper}>
      <Table sx={{ minWidth:100}} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{background:'wight'}}>
            
            <TableCell align="right" sx={{  color: "#fff" }}>NAME</TableCell>
            <TableCell align="right" sx={{  color: "#fff" }}>AGE</TableCell>
            <TableCell align="right" sx={{  color: "#fff" }}>EMAIL</TableCell>
            <TableCell align="right" sx={{ color: "#fff" }}>
            <Button variant="text"
            sx={{backgroundColor: "#3f11b1", color: "#fff" }}  
              component={Link}
              to="/create"  
              >Create</Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
            
          {user.map((row) => (
            <TableRow 
            
            key={row.id}
            sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f5f5f5" }, "&:hover": { backgroundColor: "#e0e0e0" } }}
            >
             
              <TableCell align="right"  >{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
              
               <IconButton color="primary" component={Link}  to={`/update/${row._id}`} >
                  <EditIcon />
                </IconButton>

                <IconButton color="secondary" onClick={() => deleteidtem(row._id)}>
                  <DeleteIcon />
                </IconButton>
              
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Users
