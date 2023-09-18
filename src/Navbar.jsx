import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Navbar = ({ onAddItems }) => {

    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(1);

    function HandleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() }

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);

    }

    return (
        <nav className="container-fluid p-2 bg-dark text-white text-center">
            <Container>
                <form onSubmit={HandleSubmit}>
                    <Row>
                        <Col className="h4 mb-0 d-flex align-items-center justify-content-center" sm={6}>What do you need for your trip! 😍</Col>

                        {/* //item Count */}

                        <Col xs={3} sm={2} md={2} xl={1} className="d-flex align-items-center justify-content-center">
                            <Form.Select aria-label="Select Number" size="sm" value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}>
                                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                                    <option value={num} key={num}>
                                        {num}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>

                        {/* Item Name */}
                        <Col sm={4} xs={9} className="d-flex align-items-center justify-content-center">
                            <InputGroup size="sm" >
                                <Form.Control
                                    placeholder="Item"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} />
                                <Button onClick={HandleSubmit}
                                    variant="outline-primary">
                                    Add
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </form>
            </Container>
        </nav >
    )
}

export default Navbar
