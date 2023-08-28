import React, { Component } from 'react'

export default class Children_Class_Comp extends Component {
    // ham handle click
    handleClick = () => {
        this.props.handleChangeName("Jennie");
    }
  render() {
    return (
      <>
      <div>
      UserName ở Children_Class_Comp: {this.props.userName}
      </div>
      
      <button onClick={this.handleClick}> Change Props</button>
      </>
      
    )
  }
}
