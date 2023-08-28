import React, { Component } from "react";
import Children_Class_Comp from "./components/Children_Class_Comp";

export default class Class_Comp extends Component {
  // khai báo constructor => hàm khởi tạo hay là bản thiết kế của 1 đối tượng
  constructor(props) {
    super(props); // Super được sử dụng để kế thừa lại tất cả các phương thức và thuộc tính của lớp cha
    // khai báo state
    this.state = {
      // Danh sách các state muốn khai báo
      company: "Rikkei Academy",
      status: false,
      userName: "David Beckham",
    };
  }

  // hàm HandleClick
  handleClick = () => {
    console.log("Clicked...");
    // cập nhật lại state
    this.setState({
      company: " Rikkei Soft",
    });
  };
  // ham su li trang thai status
  handleStatus = () => {
    this.setState({
      status: !this.state.status,
      
    });
  };

// hàm cập nhật lại state userName
handleChangeName = (name) => {
    console.log(" Da nhan", name);
    // cập nhật lại state
    this.setState({
        userName: name,
    })
}

  render() {
    return (
      <>
        <div>Tên công ty: {this.state.company}</div>
        <button onClick={(e) => this.handleClick(e)}>Change State</button>
        <button onClick={this.handleStatus}>
          {this.state.status ? " Show" : "Hidden"}
        </button>

        {/* gọi đến thằng con */}
        <h1>UserName bên trong Class_Comp: {this.state.userName}</h1>
        <Children_Class_Comp 
        userName={this.state.userName} 
        handleChangeName={this.handleChangeName}/>
      </>
    );
  }
}

// có 1 nút button có title là show
// khi click vào thì hiển thị là ẩn khi click lần nữa thì hiển thi là hiện
// tạo ra 1 state có tên là title có giá trị là hiện,
// viết 1 hàm để set lại state
