//IMPORTACIONES--------------------------------------------------------------------------------------
/*
* Importamos los Hooks  de React y los estilos de bootstrap
*/
import { useEffect, useState } from 'react';
import { Alert, Button, Card, Container, Row } from 'react-bootstrap';
/*
* MODELO: Importamos el modelo
*/
import Instrumento from './Instrumento';
/*
* VISTA: Importamos los componentes a mostrar y la barra con botones para navegar por las distintas rutas
*/
import { ItemInstrumento } from './ItemInstrumento';
import { Navigation } from './Navigation';
/*
* CONTROLADOR: Importamos los métodos para hacer las peticiones al backend
*/
import { getInstrumentosJSONFetch } from './FuncionesApi';

//CREAMOS LA CLASE------------------------------------------------------------------------------------
export const Home = () => {
  /***
   * Definimos la variabe: Un array de objetos
   */  
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
  /***
   * SET: Método async await donde buscamos los datos y se lo seteamos al objeto instrumentos
   */ 
  const getInstrumentos = async () => {
    let datos: Instrumento[] = await getInstrumentosJSONFetch();
    setInstrumentos(datos);
  };
  /***
   * GET: Método useEffect donde mostramos los objetos instrumentos
   */ 
  useEffect(() => {
    getInstrumentos();
  }, []);

  //HACEMOS LA VISTA------------------------------------------------------------------------------------
  /***
   * HTML Donde realizamos la vista del objeto.
   */ 
    return (
        <>
        <Navigation></Navigation>                              //Llamamos al navegador
          <Container fluid="md">
              <Row>  
               {instrumentos.map((instrumento:Instrumento) => 
                <ItemInstrumento                              //Utilizamos el componente Item
                  key={instrumento.id} 
                  id={instrumento.id} 
                  instrumento={instrumento.nombre}
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

