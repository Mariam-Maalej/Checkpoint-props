import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
    return (
        <div className='footer'>
<Card>
  <Card.Header>Social contact</Card.Header>
  <Card.Body>
    <Card.Title>My social accounts</Card.Title>
    <Card.Text>
      Follow me
    </Card.Text>
    <Button variant="primary">My account</Button>
  </Card.Body>
</Card>
        </div>
    )
}
export default Footer;
