import React, { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal, Button } from "react-bootstrap";
import AddEmployeeForm from "./AddEmployeeForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employees]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-xs-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-xs-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white btn-group"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
            {/*  <button className="btn btn-danger" data-toggle="modal">
              <i className="material-icons">&#xE15C;</i> <span>Delete</span>
            </button> */}
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header">
          <Modal.Title>Add new employee</Modal.Title>{" "}
        </Modal.Header>
        <Modal.Body>
          <AddEmployeeForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;
