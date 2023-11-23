import './NavBar.css';

function NavBar(props) {
    function SwitchPage(To) {
        props.SwitchPage(To);
    }
    function IsActive(Button) {
        console.log(Button);
        console.log(props.ProgramState);
        console.log(props.ProgramState == Button);
        return props.ProgramState == Button;
    }

    return(
        <>
        <div id="SideBarContainer">
            <button id={IsActive("Home") ? "Active" : "NonActive"} onClick={() => {SwitchPage("Home")}}>Start</button>
            <button id={IsActive("About") ? "Active" : "NonActive"} onClick={() => {SwitchPage("About")}}>Over</button>
            <button id={IsActive("Writing") ? "Active" : "NonActive"} onClick={() => {SwitchPage("Writing")}}>Mijn werk</button>
            <button id={IsActive("Social") ? "Active" : "NonActive"} onClick={() => {SwitchPage("Social")}}>Sociaal</button>
        </div>
        </>
    );
  
  };
  
  export default NavBar;
  