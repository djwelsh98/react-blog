import { Form, Button } from 'react-bootstrap';

function SubmitForm (){
    return (
<Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="bg-white">Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label className="bg-white">Comments here</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
    )
}

export default SubmitForm