import React from 'react';
import { Header, SolarSystem, Missions } from './components/index';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
