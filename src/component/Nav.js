import React from 'react'
function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <span className="img">
            <img src={require(`../images/Troll Face.png`)} alt= '' className="img-logo" />
          </span>
          <span>Meme Generator</span>
        </div>
        <ul className="nav-bar">
          <p>React Course - Project 3</p>
        </ul>
      </nav>
    </>
  );
}

export default Nav