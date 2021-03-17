import React, { useState } from 'react';

import ahri from './heroes/RiotX_ChampionList_ahri.jpg';
import amumu from './heroes/RiotX_ChampionList_amumu.jpg';
import anivia from './heroes/RiotX_ChampionList_anivia.jpg';
import ashe from './heroes/RiotX_ChampionList_ashe.jpg';
import annie from './heroes/RiotX_ChampionList_annie.jpg';
import corki from './heroes/RiotX_ChampionList_corki.jpg';
import drmundo from './heroes/RiotX_ChampionList_drmundo.jpg';

function App() {

  const [score, setScore] = useState(0);
  const [imageCount, setImageCount] = useState([])


  const shuffleDeck = (img) => {
    return (img.sort(() => Math.random() - 0.5));
  };

  const simulateGame = (imgName) => {
    if (imageCount.includes(imgName)) {
      setScore(0)
      setImageCount([])
    } else {
      setImageCount([...imageCount, imgName])
      setScore(score + 1);
    }
  }

  const handleClick = (event) => {
    let imageName = event.target.alt;
    const deck = [...document.querySelectorAll('.heroCard')];

    const images = [[ahri, 'ahri'],
                    [amumu, 'amumu'],
                    [anivia, 'anivia'],
                    [ashe, 'ashe'],
                    [annie, 'annie'],
                    [corki, 'corki'],
                    [drmundo, 'drmundo']];

    let shuffledImages = shuffleDeck(images)
    console.log(shuffledImages, 'hoo');
    let myImages = images

    deck.forEach(cell => {
      const image = cell.firstChild
      const heroName = cell.lastChild
      const poppedImage = myImages.pop();
      image.src = poppedImage[0];
      image.alt = poppedImage[1];
      heroName.textContent = poppedImage[1];
      //imageName = 
    });

    simulateGame(imageName);


fdf
  }

  const DOM = () => {
    const renderDeck = () => {
      const images = ['ahri', 'amumu', 'anivia', 'ashe', 'annie', 'corki', 'drmundo'];
      images.forEach(hero => {
       const heroCard = document.createElement('div');
       const heroImg = document.createElement('img');
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> LoL-Style Memory Game</h1>
      </header>
      <body>
        <p>Get points by clicking on a hero. The game is over if you click on the same heroImg twice</p>
        <p>Score {score}</p>
        <div onClick={handleClick} className="deck">
          <div className="heroCard">
            <img src={ahri} className="heroImg cell-2" alt="ahri" id="0" />
            <span>ahri</span>
          </div>
          <div className="heroCard">
            <img src={amumu} className="heroImg" alt="amumu" id="1" />
            <span>amumu</span>
          </div>
          <div className="heroCard">
            <img src={anivia} className="heroImg" alt="anivia" id="2" />
            <span>anivia</span>
          </div>
          <div className="heroCard">
            <img src={ashe} className="heroImg" alt="ashe" id="3" />
            <span>ashe</span>
          </div>
          <div className="heroCard">
            <img src={annie} className="heroImg" alt="annie" id="4" />
            <span>annie</span>
          </div>
          <div className="heroCard">
            <img src={corki} className="heroImg" alt="corki" id="5" />
            <span>corki</span>
          </div>
          <div className="heroCard">
            <img src={drmundo} className="heroImg" alt="drmundo" id="6" />
            <span>drmundo</span>
          </div>  
        </div>
      </body>
    </div>
  );
}

export default App;
