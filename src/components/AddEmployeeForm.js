import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddEmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  /*const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(""); */

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Control
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button type="submit" variant="success w-100" block="true">
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddEmployeeForm;
