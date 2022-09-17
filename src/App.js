import React from "react";
import Main from "./component/Main";
import Nav from "./component/Nav";
const App = () =>{
    // const [show, setShow] = useState(true);
    // function toggle() {
    //   setShow((prevShow) => !prevShow);
    // }
    return (
      <div className="container">
        <Nav />
        <Main />
      </div>
    );
}
export default App;
