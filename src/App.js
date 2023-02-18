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
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '박현준',
  'birthday' : '06년생',
  'gender' : '남자',
  'job' : '부소마고'
},

{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '장현제',
  'birthday' : '01년생',
  'gender' : '남자',
  'job' : '대학생'
},

{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '동빈나',
  'birthday' : null,
  'gender' : '남자',
  'job' : '개발자유튜버'
}
]

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>프로필사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
