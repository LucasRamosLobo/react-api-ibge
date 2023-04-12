import React, { useState, useEffect } from 'react';
import StateCard from './StateCard';
import { Container, Form } from 'react-bootstrap';

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
    <Container>
      <h1>Selecione um estado:</h1>
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
    </Container>
  );
}

export default StateList;