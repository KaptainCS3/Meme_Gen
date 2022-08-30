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
    const randomIndex = Math.floor(Math.random() * memeObjectUrl.length - 1) + 1;
    const url = memeObjectUrl[randomIndex];
  setMeme((prevImage) => ({
        ...prevImage,
        randomImage: url
    }));
  }

  // const [memeImage, setMemeImage] = useState({
  //   topText: "",
  //   bottomText: "",
  //   randomImage: "https://i.imgflip.com/2d3al6.jpg",
  // });
  // const [allMemeImages, setAllMemeImages] = useState(memesObject);
  // function genImgUrl() {
  //   const memeImg = allMemeImages.data.memes.map((items) => {
  //     return items.url;
  //   });
  //   const memeImgIndex = Math.floor(Math.random() * memeImg.length - 1) + 1;
  //   const url = memeImg[memeImgIndex];
  //   setMemeImage((prevMemeData) => ({
  //     ...prevMemeData,
  //     randomImage: url,
  //   }));
  // }
  return (
    <main>
      <section className="meme-gen">
        <div className="meme-container">
          <div className="inputs">
            <input type="text" placeholder="Top text" />
            <input type="text" placeholder="Bottom text" />
          </div>
          <div className="get-meme">
            <button onClick={fetchMemeImage}>Get a new meme image</button>
          </div>
        </div>
        <div className="meme-img">
          <img src={meme.randomImage} alt="" />
        </div>
      </section>
    </main>
  );
};

export default Main;
