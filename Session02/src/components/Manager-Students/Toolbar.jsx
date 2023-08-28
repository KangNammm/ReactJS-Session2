import React, { Component } from "react";
import FormAddStudens from "./FormAddStudens";

export default class Toolbar extends Component {
  // khởi tạo constructor
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      userName: "Nguyen Van A"
    };
  }

  // tạo hàm show form
  handleShowForm = () => {
    this.setState({
      show: true,
      
    });
  };
  // hidden form
  handleClose = (status) => {
    this.setState({
      show: status,
    })
  }

  // hàm lắng  nghe sự thay đổi trong ô input
  handleChange = (event) => {
    console.log("event===>", event.target.value);
    this.setState({
      userName: event.target.value,
    })
  }
  render() {
    return (
      <>
        {/* Add students */}

        {this.state.show === true ? (
          <FormAddStudens handleClose={this.handleClose} />
        ) : (
          <></>
        )}
        <div className="d-flex m-5 justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <div style={{ width: 263, fontWeight: 600, fontSize: 20 }}>
              Quản lý sinh viên
            </div>
            <select className="form-select">
              <option value="">-- Sắp xếp theo tên --</option>
              <option value="">Tăng dần</option>
              <option value="">Giảm dần</option>
            </select>
          </div>
          <div className="d-flex align-items-center gap-4">
            <input
              style={{ minWidth: 300 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm sinh viên theo tên"
              value={this.state.userName}
              onChange={(e) => this.handleChange(e)}
            />
            <button
              style={{ minWidth: 170 }}
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={this.handleShowForm}
            >
              Thêm mới sinh viên
            </button>
          </div>
        </div>
      </>
    );
  }
}
