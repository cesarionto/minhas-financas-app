import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css'
import './custom.css'
import Rotas from './rotas'
import NavBar from './Components/NavBar';
function App() {
  return (
    <>
      <NavBar />
      <div className="container container-full-top">
        <Rotas />
      </div>
    </>
  );
}

export default App;
