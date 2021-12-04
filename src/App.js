import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function App() {
	
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    setResult(0);
    event.preventDefault();
    let result = 0;
    const k = event.target.k.value;
    if(k === 0) {
      result = 0;
    } else if(k === 1 || k === 2) {
      result = 1;
    } else {
      let first = 1;
      let secound = 1;
      for(let i=2; i<k ; i++) {
        result = first + secound;
        first = secound;
        secound = result;
      }
    }
    setResult(result);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Enter k number of fibonacci sequence</Form.Label>
        <br/>
        <Form.Control type='number' name='k'></Form.Control>
        <br/>
        <Button variant='primary' type='submit'>
          Calculate
        </Button>
        <br/>
        Result: {result}
      </Form>
    </Container>
  );
}

export default App;
