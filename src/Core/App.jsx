import { useState } from 'react';

import PageManager from './Components/PageManager/PageManager';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

// Alle website sub-pages
// 1.Home
// 2.Over
// 3.Gedichten
// 4.Social media
// 5.Merch????

function App() {
  
  const [ProgramState, SetProgramState] = useState("Home");

  function SwitchPage(To) {
    SetProgramState(To);
  }

  return(
    <>
      <NavBar SwitchPage={(To) => {SwitchPage(To);}} ProgramState={ProgramState}></NavBar>
      <PageManager ProgramState={ProgramState}></PageManager>
      <Footer/>
    </>
  );

};

export default App;
