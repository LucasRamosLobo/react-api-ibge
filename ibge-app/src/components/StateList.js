import React, { useState, useEffect } from 'react';
import StateCard from './StateCard';
import { Container, Form, Card } from 'react-bootstrap';

function StateList() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    async function loadStates() {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const data = await response.json();
      setStates(data);
    }

    loadStates();
  }, []);

  function handleSelectState(event) {
    setSelectedState(event.target.value);
  }

  const selectedStateData = states.find(state => state.nome === selectedState);

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Card className="p-3" style={{minWidth: '300px', backgroundColor:'#white', border: '5px solid black', borderRadius:'10px'}}>
        <Card.Body>
          <Card.Title>
            <h1 style={{textAlign:'center'}}>Escolha seu estado:</h1>
          </Card.Title>
          <Form>
            <Form.Group controlId="formStateSelect">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" value={selectedState} onChange={handleSelectState}>
                <option value="">Selecione um estado</option>
                {states.map(state => (
                  <option key={state.id} value={state.nome}>{state.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          {selectedStateData && (
            <StateCard state={selectedStateData} />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default StateList;