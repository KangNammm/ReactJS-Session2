import React, { Component } from 'react'

export default class FormAddStudens extends Component {
  // khởi tạo constructor
  constructor(props) {
    super(props);
    this.state = {
      userCode: "",
      userName: "",
      dateOfbirth: "",
      adress: "",
      email: "",
      password: "",
    };
  }

  // hàm lắng nghe sự thay đổi của các ô input
  handleChangeInput = (e) => {
    this.setState({
      userCode: e.target.value,
      userName: e.target.value,
      dateOfbirth: e.target.value,
      adress: e.target.value,
      email: e.target.value,
      password: e.target.value,
    });
  }

  // hàm xử lí gửi dữ liệu
  handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      userCode: this.state.userCode,
      userName: this.state.userName,
      dateOfbirth: this.state.dateOfbirth,
      adress: this.state.adress,
      email: this.state.email,
      password: this.state.password,
    };
    console.log("newUser===>",newUser);
  };

  // đóng form
  handleCloseForm = () => {
    this.props.handleClose(false);
  }
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Thêm mới sinh viên
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={this.handleCloseForm}
                />
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  {" "}
                  // sự kiện submit form
                  <div className="mb-2">
                    <label htmlFor="studentCode" className="form-label">
                      Mã sinh viên
                    </label>
                    <input
                      type="text"
                      name="userCode"
                      className="form-control"
                      id="studentCode"
                      value={this.userCode}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    {/* <div className="text-danger">
                      Mã sinh viên không được để trống.
                    </div> */}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="studentName" className="form-label">
                      Tên sinh viên
                    </label>
                    <input
                      type="text"
                      name="userName"
                      className="form-control"
                      id="studentName"
                      value={this.userName}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    {/* <div className="text-danger">
                      Mã sinh viên không được để trống.
                    </div> */}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Ngày sinh
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      className="form-control"
                      id="dateOfBirth"
                      value={this.dateOfbirth}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    {/* <div className="text-danger">
                      Ngày sinh không được để trống.
                    </div> */}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="form-label">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      name="adress"
                      className="form-control"
                      id="address"
                      value={this.adress}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      value={this.email}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    {/* <div className="text-danger">Email được để trống.</div> */}
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      value={this.password}
                      onChange={(e) => this.handleChangeInput(e)}
                    />
                    {/* <div className="text-danger">Mật khẩu được để trống.</div> */}
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      onClick={this.handleCloseForm}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
