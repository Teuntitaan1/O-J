function Header(props) {
    return(
        <>
            <button onClick={() => {props.SwitchPage(props.PreviousProgramState)}}>Terug</button>
            <button onClick={() => {props.SwitchPage("Home")}}>Start</button>
            <button onClick={() => {props.SwitchPage("About")}}>Over</button>
            <button onClick={() => {props.SwitchPage("Social")}}>Schrijfwerk</button>
            <button onClick={() => {props.SwitchPage("Writing")}}>Sociaal</button>
            <button onClick={() => {props.SwitchPage("unirfipojeunr")}}>Error</button>
        </>
    );
  
  };
  
  export default Header;
  