
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
import '../css/ContactUs.css';
// import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [error, setError] = useState('');

  const images = [
    'images/fox family-pana.svg',
    // 'images/avocado tree-cuate.svg',
    // 'images/cherry blossom-bro.svg',
    // 'images/cherry tree-amico.svg',
    // 'images/cherry tree-cuate.svg',
    // 'images/cherry tree-rafiki.svg',

  ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();


  //   if (!fullName || !email || !phone || !address || !education) {
  //     setError('Please fill in all fields');
  //     return;
  //   }

  //   toast.info(`Message sent Successfully`);

  //   // Perform further actions with the form data
  //   // e.g., send data to backend, display success message, etc.

  //   // Reset form fields
  //   setFullName('');
  //   setEmail('');
  //   setPhone('');
  //   setAddress('');
  //   setEducation('');
  //   setError('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!fullName || !email || !phone || !address || !education) {
      setError('Please fill in all fields');
      return;
    }

    // Email validation (optional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Reset previous errors
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, phone, address, education }),
      });

      if (response.ok) {
        toast.success('Message sent successfully');
        // Reset form fields
        setFullName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setEducation('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error sending message');
    }
  };




  return (
    <>
      <Container fluid className="contact-container">
        <ToastContainer style={{ marginTop: '30px' }} position="top-center" />

        <Row className="contact-row">
          <Col md={6} className="image-col">
            <Carousel className="contact-carousel">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img src={image} alt={`Carousel ${index}`} className="contact-image" />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6}>
            <div className="contact-form">
              <h2 className="form-title">Get in Touch</h2>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="fullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="education">
                      <Form.Label>Remark</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                      />
                    </Form.Group>
                  </Col>

                </Row>
                {error && <p className="error-text">{error}</p>}
                <Row>
                  <Col>
                    <Button type="cancel" variant="secondary" className="submit-button">
                      Cancel
                    </Button>
                  </Col>
                  <Col>
                    <Button type="submit" variant="primary" className="submit-button">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      {/* <Footer /> */}
      <br /><br /><br />
    </>
  );
};

export default ContactUs;




