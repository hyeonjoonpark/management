import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'name' : '박현준',
  'birthday' : '060327',
  'gender' : '남자',
  'job' : '부소마고'
}

class App extends Component {
  render() {
    return (
      <Customer 
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
