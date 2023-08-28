import React, { Component } from 'react'
import Header from './Header'
import Toolbar from './Toolbar'
import Table from './Table'
export default class ShowStudents extends Component {
  render() {
    return (
      <>
        <Header />
        <Toolbar />
        <Table />
      </>
    );
  }
}
