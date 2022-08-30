import React from "react";
import ReactDom from "react-dom";
// import Count from "./component/Count";
import Main from "./component/Main";
import Nav from './component/Nav'
// import IsGoingOut from './component/IsGoingOut'
// import States from "./component/States";
// import Test from "./component/Test";
// import ContactCard from './component/ContactCard'
// import data from "./data";
// import answer from './ternary'
import './style.css'
const App = () => {
  // const isGoingOut = false;
  return (
    <div className="container">
      {/* <IsGoingOut /> */}
      <Nav />
      <Main />
      {/* <Test /> */}
      {/* <ContactCard /> */}
      {/* <States /> */}
      {/* <Count /> */}
    </div>
  );
};
ReactDom.render(<App />, document.getElementById("root"));
