import { useEffect, useState } from 'react';

import { getPlatosJSON as getInstrumentosJSON, getInstrumentoPorId } from './FuncionesApi';
import { ItemInstrumento } from './ItemInstrumento';
import { Navigation } from './Navigation';
import Instrumento from './Instrumento';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';


export const Home = () => {
    
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
    
    const getInstrumentos = () => {
      let datos:Instrumento[] = getInstrumentosJSON();
      setInstrumentos(datos);
    }

    useEffect(() => {
      getInstrumentos();
    }, []);

    
    return (
        <>
        <Navigation></Navigation>
          <Container fluid="md">
              <Row>  
               {instrumentos.map((instrumento:Instrumento) => 
                <ItemInstrumento 
                  key={instrumento.id} 
                  id={instrumento.id} 
                  instrumento={instrumento.instrumento}
                  marca={instrumento.marca}
                  modelo={instrumento.modelo}
                  imagen={instrumento.imagen}
                  precio={instrumento.precio} 
                  costoEnvio={instrumento.costoEnvio}
                  cantidadVendida={instrumento.cantidadVendida}
                  descripcion={instrumento.descripcion}
                  ></ItemInstrumento>
               )}
              </Row>
          </Container>
        </>
    )
}

