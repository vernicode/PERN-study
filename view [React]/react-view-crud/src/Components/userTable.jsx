import * as React from 'react';

import '../css/userTable.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Button } from '@mui/material';

import axios from 'axios'

export default function BasicTable() {
  const [ Users, setUsers ] = React.useState([{}]);
  const [ isChanging, setIsChanging ] = React.useState(false)

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/user')
    .then(res => setUsers(res.data))
    .catch(err => console.log('Error', err))
  }, []);
  
  const UserControl = {
    delete: async function(id) {
      const destroyUser = await axios.delete(`http://localhost:5000/api/user/${id}`)
      // setUsers(() => Users.find((obj, idx) => obj.id_u === idx))
      // myArray.find(x => x.id === '45')
      return destroyUser.json({'Result': 'Ok'})
    },
    update: async function(id, name, surname) {
      setIsChanging(false)
    }
  }

  const keyParams={id:2}

  return (
    <TableContainer component={Paper}>
      <Table key={keyParams.id} sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Surname</b></TableCell>
            <TableCell><b>Delete</b></TableCell>
            <TableCell><b>Update</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            Users.map((obj) => 
              <TableRow key={obj.id_u}>
                <TableCell>{obj.id_u}</TableCell>
                <TableCell>{obj.name}</TableCell>
                <TableCell>{obj.surname}</TableCell>
                <TableCell><Button variant="outlined" onClick={() => UserControl.delete(obj.id_u)}>Delete</Button></TableCell>
                <TableCell><Button variant='contained' onClick={() => setIsChanging(true)}>Update</Button></TableCell>
                {
                  // isChanging
                  
                   
                }
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}