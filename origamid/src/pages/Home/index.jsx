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

  return (
    <Container>
      <header>
        <Buttons />
      </header>

      <main>
        {dados &&
          dados
            .slice(0, 6)
            .map((dado) => (
              <CardProduct
                key={dado.id}
                title={dado.nome}
                photo={dado.fotos[0].src}
                id={dado.id}
              />
            ))}
      </main>
    </Container>
  );
};

export default Home;
