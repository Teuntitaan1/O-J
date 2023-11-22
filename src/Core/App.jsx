import { useState } from 'react';

import PageManager from './Components/PageManager';
import Header from './Components/Header';
import Footer from './Components/Footer';

// Alle website sub-pages
// 1.Home
// 2.Over
// 3.Gedichten
// 4.Social media
// 5.Merch????

function App() {
  
  const [ProgramState, SetProgramState] = useState("Home");
  const [PreviousProgramState, SetPreviousProgramState] = useState("Home");

  function SwitchPage(To) {
    if (To != ProgramState && ["Home", "About", "Writing", "Social"].includes(ProgramState)) {
      SetPreviousProgramState(ProgramState);
    }
    SetProgramState(To);
  }


  return(
    <>
      <Header SwitchPage={(To) => {SwitchPage(To);}} PreviousProgramState={PreviousProgramState}></Header>
      <PageManager ProgramState={ProgramState}></PageManager>
      <Footer/>
    </>
  );

};

export default App;
