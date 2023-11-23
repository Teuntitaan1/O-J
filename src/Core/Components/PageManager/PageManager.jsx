import ErrorPage from '../../Pages/Error-Page/ErrorPage';

function PageManager(props) {
    return(
        <>
            {props.ProgramState == "Home" ? <p>Home</p> : null}
            {props.ProgramState == "About" ? <p>About</p> : null}
            {props.ProgramState == "Writing" ? <p>Writing</p> : null}    
            {props.ProgramState == "Social" ? <p>Social</p> : null}

            {!["Home", "About", "Writing", "Social"].includes(props.ProgramState) ? <ErrorPage/> : null}
        </>
    );
  
  };
  
  export default PageManager;
  