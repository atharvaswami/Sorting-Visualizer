import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
          <Navbar bg="primary" variant="dark">
            <Container style={{'justify-content': 'center'}}>
              <Navbar.Brand href="#home"><h2>Sorting Visualizer</h2></Navbar.Brand>
            </Container>
          </Navbar>
        </>
      );
}

export default Header