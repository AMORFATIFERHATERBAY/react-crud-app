import { Button, Form } from "react-bootstrap";
import { useContext, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddEmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

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
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Control
          as="textarea"
          placeholder="Address"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Control
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="success w-100" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddEmployeeForm;
