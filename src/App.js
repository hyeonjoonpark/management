/* eslint-disable  */

// using name export
import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';
import data from './data/data.json';
import { styled } from '@emotion/styled';
import Paper from '@material-ui/core/Paper';

const schoolData = data;

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX : 'auto'
  },
  table: {
    minWidth :  1080
  }
})

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <div className="navBar">
          <div className="logo"><img src="./image/bsm.png"/></div>
          <button className="loginBtn">로그인</button>
        </div>

        <div className="title">
        <h2>학생종합관리</h2>
        <input className="search" type="text" placeholder='검색어를 입력해주세요'/>
        </div>
        
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>입학년도</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>역할</TableCell>
                <TableCell>…</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schoolData.map(c => {
                  return (
                    <Customer key={c.user_id} user_id={c.user_id} user_name={c.user_name} enter_year={c.enter_year} gender={c.gender} role={c.role}/>
                  )
                }
              )}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default styled(styles) (App);
