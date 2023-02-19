import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';

const customers = [
{
  'id' : 1,
  'image' : './image/hyeonjoon.jpeg',
  'name' : '박현준',
  'birthday' : '2006.03.27',
  'gender' : '남자',
  'role' : '웹관리자'
},

{
  'id' : 2,
  'image' : './image/hyeonjae.jpeg',
  'name' : '장현제',
  'birthday' : '2001.11.09',
  'gender' : '남자',
  'role' : '선생님'

},

{
  'id' : 3,
  'image' : './image/ujin.jpeg',
  'name' : '김우진',
  'birthday' : 'NULL',
  'gender' : '남자',
  'role' : '선생님'
}
]

class App extends Component {
  render() {
    return (
      <div>
        <div className="logo"><img src="./image/logo.png"/></div>
        <div className="login">
          <button className="loginBtn"></button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>프로필사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>역할</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} role={c.role}/>)})}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
