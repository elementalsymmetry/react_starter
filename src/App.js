import React from 'react';
import Container from './components/Container/Container.js';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
  return(  
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default App;
