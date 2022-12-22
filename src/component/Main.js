import { useState, useEffect } from "react";
const Main = () => {
  //create a meme state variable to store current meme display image
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3si4.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);
useEffect(() =>{
  fetch('https://api.imgflip.com/get_memes')
  .then(res => res.json())
  .then(data => setAllMemes(data.data.memes))
}, [])
console.log(allMemes)
function fetchMemeImage(){
  const randonIndex = Math.floor(Math.random() * allMemes.length)
  const url = allMemes[randonIndex].url
  setMeme(prevMeme =>({
    ...prevMeme,
    randomImage: url
  }))
}


  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <section className="meme-gen">
        <div className="meme-container">
          <div className="inputs">
            <input
              type="text"
              placeholder="Top text"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Bottom text"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </div>
          <div className="get-meme">
            <button 
            onClick={fetchMemeImage}
            >Get a new meme image</button>
          </div>
        </div>
        <div className="meme-img">
          <img src={meme.randomImage} alt={allMemes.name} />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </section>
    </main>
  );
};

export default Main;
