import { useState } from 'react';

function App() {

  const [ProgramState, SetProgramState] = useState("Home");
  
  switch (ProgramState) {
    case "Home":
      return (
        <>
          <div>
            <p>Home</p>
          </div>
        </>
      );
    default:
      return 
  }

};

export default App;
