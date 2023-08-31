import { Button, Form } from "react-bootstrap";

const AddEmployeeForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupName">
        <Form.Control type="text" placeholder="Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail" required>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Control as="textarea" placeholder="Address" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Button type="submit" variant="success" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddEmployeeForm;
