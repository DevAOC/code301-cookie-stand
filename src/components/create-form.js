import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CreateForm({ onCreate }) {
  function submitHandler(event) {
    event.preventDefault();
    onCreate({
      id: event.target.location.value,
      location: event.target.location.value,
      hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36],
    });
    event.target.reset();
  }
  return (
    <Container style={{ backgroundColor: '#C9B2D9', padding: '20px', borderRadius: '10px', width: '600px' }}>
      <Form onSubmit={submitHandler}>
        <legend style={{ color: 'black', fontSize: '2rem', textAlign: 'center' }}>Create Cookie Stand</legend>
        <Row>
          <Col>
            <FormGroup style={{ marginTop: '10px', marginBottom: '10px' }}>
              <Form.Label htmlFor="location">Location</Form.Label>
              <Form.Control style={{ width: '200px' }} type="text" name="location" />
            </FormGroup>
            <Button style={{ marginTop: '110px', marginBottom: '10px' }} type="submit">
              Create
            </Button>
          </Col>

          <Col>
            <FormGroup style={{ marginTop: '10px', marginBottom: '10px' }}>
              <Form.Label htmlFor="min-customers">Minimum Customers per Hour</Form.Label>
              <Form.Control style={{ width: '200px' }} type="number" name="min-customers" />
            </FormGroup>

            <FormGroup style={{ marginTop: '10px', marginBottom: '10px' }}>
              <Form.Label htmlFor="max-customers">Maximum Customers per Hour</Form.Label>
              <Form.Control style={{ width: '200px' }} type="number" name="max-customers" />
            </FormGroup>

            <FormGroup style={{ marginTop: '10px', marginBottom: '10px' }}>
              <Form.Label htmlFor="avg-cookies">Average Cookies per Sale</Form.Label>
              <Form.Control style={{ width: '200px' }} type="number" name="avg-cookies" step=".1" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
