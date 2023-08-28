import React, { Component } from 'react'

export default class FormEditStudent extends Component {
  hanldeCloseForm = () => {
    this.props.handleClose(false);
  }
  render() {
    return (
      <>
        <div
          className="modal fade"
          id="updateStudent"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Cập nhật thông tin
                </h5>
                <button
                  onClick={this.hanldeCloseForm}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-2">
                    <label htmlFor="studentCode" className="form-label">
                      Mã sinh viên
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="studentCode"
                    />
                    <div className="text-danger">
                      Mã sinh viên không được để trống.
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="studentName" className="form-label">
                      Tên sinh viên
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="studentName"
                    />
                    <div className="text-danger">
                      Mã sinh viên không được để trống.
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="dateOfBirth" className="form-label">
                      Ngày sinh
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dateOfBirth"
                    />
                    <div className="text-danger">
                      Ngày sinh không được để trống.
                    </div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="address" className="form-label">
                      Địa chỉ
                    </label>
                    <input type="text" className="form-control" id="address" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" />
                    <div className="text-danger">Email được để trống.</div>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                    <div className="text-danger">Mật khẩu được để trống.</div>
                  </div>
                  <div className="d-flex justify-content-end gap-3">
                    <button
                      onClick={this.hanldeCloseForm}
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button type="button" className="btn btn-primary">
                      Cập nhật
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
