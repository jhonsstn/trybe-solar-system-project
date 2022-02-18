import React from 'react';
import { Header, SolarSystem, Title } from './components/index';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Title />
      </>
    );
  }
}

export default App;
