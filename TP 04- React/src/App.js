import { Component, useState, useEffect } from "react";
import Instrumentos from "./components/Instrumentos";
import Layout from "./components/Layout";

const App = () => {
  const [instrumentos, setInstrumentos] = useState(null)
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        setInstrumentos(data)
      });
  }, [])
  return (
    <div>
      <Layout>
        <Instrumentos instrumentos={instrumentos} />
      </Layout>
    </div>
  );
};

export default App;
