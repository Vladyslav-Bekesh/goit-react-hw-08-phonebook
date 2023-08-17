import { Helmet } from 'react-helmet';

import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>
        Contact manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
