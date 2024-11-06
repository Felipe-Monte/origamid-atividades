import React from 'react';
import { Container } from './styles';
import Buttons from '../../components/Buttons';
import CardProduct from '../../components/CardProduct';

const Home = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    console.log(dados);
  }, [dados]);

  return (
    <Container>
      <header>
        <Buttons />
      </header>

      <div>{dados ? <h2>{dados[3].nome}</h2> : <h2>Carregando...</h2>}</div>

      <main>
        {dados && dados.map((dado) => <CardProduct key={dado.id} title={dado.nome} />)}
      </main>
    </Container>
  );
};

export default Home;
