import React from 'react';
import { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchCoffeeByName } from '../../redux/actions/product';

function SearchProduct() {
  const dispatch = useDispatch();
  const nameRef = useRef(null);

  const handleSearch = () => {
    dispatch(searchCoffeeByName(nameRef.current.value));
  }

  return (
    <>
      <Container>
        <Form onSubmit={(e) => { e.preventDefault() }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nhập từ cần tìm kiếm</Form.Label>
            <Form.Control ref={nameRef} type="productName" placeholder="Từ khóa tìm kiếm" />
          </Form.Group>
          <Button onClick={handleSearch} variant="primary" type="button">
            Tìm kiếm
        </Button>
        </Form>
      </Container>
    </>
  )
}

export default SearchProduct;