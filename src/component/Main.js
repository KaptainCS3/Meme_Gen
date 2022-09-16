import React, { useState } from "react";
import memesObject from "../memesData";
const Main = () => {
  //create a meme state variable to store current meme display image
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/2d3al6.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState(memesObject);

  //function to fetch random image from meme data object

  function fetchMemeImage() {
    //map and return meme object url
    const memeObjectUrl = memesObject.data.memes.map((items) => {
      return items.url;
    });
    // generate random index to access meme data object url
    const randomIndex =
      Math.floor(Math.random() * memeObjectUrl.length - 1) + 1;
    const url = memeObjectUrl[randomIndex];
    setMeme((prevImage) => ({
      ...prevImage,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  console.log(meme)

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
            <button onClick={fetchMemeImage}>Get a new meme image</button>
          </div>
        </div>
        <div className="meme-img">
          <img src={meme.randomImage} alt="" />
          <h2 className='meme-text top'>{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      </section>
    </main>
  );
};

export default Main;
