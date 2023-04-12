import React from 'react';
import { Card } from 'react-bootstrap';

function StateCard({ state }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{state.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{state.sigla}</Card.Subtitle>
        <Card.Text>
          <p>Área: {state.regiao.nome}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StateCard;