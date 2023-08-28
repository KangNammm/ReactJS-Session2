import React, { Component } from 'react'
import FormEditStudent from "./FormEditStudent";
import Modal from "./Modal";

export default class Table extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      delete: false,
      students: [
        {
          userId: 1,
          userName: "Nguyễn Văn A",
          age: 21,
          dateOfBirth: "12/12/2001",
          gender: 1,
        },
        {
          userId: 2,
          userName: "Trần Thị B",
          age: 25,
          dateOfBirth: "05/18/1998",
          gender: 0,
        },
        {
          userId: 3,
          userName: "Lê Minh C",
          age: 30,
          dateOfBirth: "09/03/1993",
          gender: 1,
        },
        {
          userId: 4,
          userName: "Phạm Thanh D",
          age: 28,
          dateOfBirth: "11/22/1995",
          gender: 0,
        },
        {
          userId: 5,
          userName: "Hoàng Quang E",
          age: 19,
          dateOfBirth: "07/10/2004",
          gender: 1,
        },
        {
          userId: 6,
          userName: "Ngô Thu F",
          age: 22,
          dateOfBirth: "03/29/1999",
          gender: 0,
        },
        {
          userId: 7,
          userName: "Vũ Anh G",
          age: 26,
          dateOfBirth: "02/15/1997",
          gender: 1,
        },
        {
          userId: 8,
          userName: "Đặng Hoài H",
          age: 31,
          dateOfBirth: "08/08/1992",
          gender: 0,
        },
        {
          userId: 9,
          userName: "Bùi Minh I",
          age: 24,
          dateOfBirth: "06/14/1999",
          gender: 1,
        },
        {
          userId: 10,
          userName: "Nguyễn Mai J",
          age: 27,
          dateOfBirth: "04/03/1996",
          gender: 0,
        },
      ],
    };
  }

  // show
  handleShow = () => {
    this.setState({
      show: true,
    })
  }

  // close
  handleClose = (status) => {
    this.setState({
      show: status,
    })
  }

  // show delete
  handleShowDelete = () => {
    this.setState({
      delete: true,
    })
  }

  // close delete
  handleCloseDelete = (hidden) => {
    this.setState({
      delete: hidden
    });
  }
  render() {
    return (
      <>
        {/* Edit Students */}
        {this.state.show === true ? (
          <FormEditStudent handleClose={this.handleClose} />
        ) : (
          <></>
        )}
        {/* Modal Delete */}
        {this.state.delete === true ? (
          <Modal handleCloseDelete={this.handleCloseDelete} />
        ) : (
          <></>
        )}

        <div className="m-5">
          <table className="table table-bordered table-hover table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Tên sinh viên</th>
                <th scope="col">Ngày sinh</th>
                <th scope="col">Tuổi</th>
                <th scope="col">Giới tính</th>
                <th className="text-center" colSpan={2} scope="col">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.students.map((student, index) => (
                <tr>
                  <td>{student.userId}</td>
                  <td>{student.userName}</td>
                  <td>{student.dateOfBirth}</td>
                  <td>{student.age}</td>
                  <td>{student.gender === 0 ? "Nam" : "Nữ"}</td>
                  <td>
                    <i
                      onClick={this.handleShow}
                      data-bs-toggle="modal"
                      data-bs-target="#updateStudent"
                      className="fa-solid fa-pen-to-square text-warning"
                    />
                  </td>
                  <td>
                    <i
                      onClick={this.handleShowDelete}
                      data-bs-toggle="modal"
                      data-bs-target="#confirmDelete"
                      className="fa-solid fa-trash text-danger"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
