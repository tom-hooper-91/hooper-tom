import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from './components/NavBar';


const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await axios.get('/api')

      setPeople(response.data)
    }
    
    fetchPeople()
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Container>
        <NavBar />
        <Row>
          <Col as='h1'>
            Tom Hooper
          </Col>
        </Row>
        <Row>
          <Col as='h1'>
            Software Engineer
          </Col>  
        </Row>   
      </Container>
    </>
  )
}

export default App;
