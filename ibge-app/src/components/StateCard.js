import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Form } from 'react-bootstrap';

function StateCard({ state }) {
  const [municipios, setMunicipios] = useState([]);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const [area, setArea] = useState(null);

  useEffect(() => {
    async function loadMunicipios() {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.id}/municipios`);
      const data = await response.json();
      setMunicipios(data);
    }

    loadMunicipios();
  }, [state]);

  async function handleSelectMunicipio(event) {
    const selectedMunicipioNome = event.target.value;
    const selectedMunicipio = municipios.find(municipio => municipio.nome === selectedMunicipioNome);
    setSelectedMunicipio(selectedMunicipio);
    const response = await fetch(`https://servicodados.ibge.gov.br/api/v3/malhas/municipios/${selectedMunicipio.id}/metadados`);
    const data = await response.json();
    setArea(data[0].area.dimensao);
  }

  return (
    <Container className="mt-3">
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col>
              <h2 className="text-center">{state.nome}</h2>
              <p>Sigla: {state.sigla}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

        <Card.Body>
          <Form>
            <Form.Group controlId="formStateSelect">
              <Form.Label>Município</Form.Label>
              <Form.Control as="select" value={selectedMunicipio ? selectedMunicipio.nome : ''} onChange={handleSelectMunicipio}>
                <option value="">Selecione um município</option>
                {municipios.map(municipio => (
                  <option key={municipio.id} value={municipio.nome}>{municipio.nome}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          {selectedMunicipio && (
            <div>
              <hr />
              <Row>
                <Col md={6} sm={12}>
                  <p className="text-center">Microregião: {selectedMunicipio.microrregiao.nome}</p>
                </Col>
                <Col md={6} sm={12}>
                  <p className="text-center">área: {area}</p>
                </Col>
              </Row>
            </div>
          )}
        </Card.Body>
 
    </Container>
  );
}

export default StateCard;