import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, ImgDetails, ContainerText } from './styles';
import Buttons from '../../components/Buttons';

const Details = () => {
  const { id } = useParams();
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
      .then((response) => response.json())
      .then((json) => setResponse(json));
  }, [id]);

  return (
    <Container>
      <header>
        <Buttons />
      </header>

      <main>
        <ImgDetails>
          {response &&
            response.fotos.map((foto, index) => (
              <img key={index} src={foto.src} />
            ))}
        </ImgDetails>
        <ContainerText>
          <h2>{response ? response.nome : 'Carregando...'}</h2>
          <h3>{response ? `R$: ${response.preco}` : 'Carregando...'}</h3>
          <p>{response ? response.descricao : 'Carregando...'}</p>
        </ContainerText>
      </main>
    </Container>
  );
};

export default Details;
