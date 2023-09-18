/* import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      // topText: '',
      //bottomText: '',
      randomImg: 'https://memegen.link/',
      allMemeImgs: [],
    }; //empty state

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <div className="meme">
            <img src={this.state.randomImg} alt="https://memegen.link/" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
          </div>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            //value={this.state.topText}
            onClick={this.state.topText}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            // value={this.state.bottomText}
            onClick={this.state.bottomText}
          />
          <button>Gen</button>
        </form>
      </div>
    );
  }
  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    <form className="meme-form">
      <input
        type="text"
        name="topText"
        placeholder="Top Text"
        value={this.state.topText}
        onChange={this.handleChange}
      />

      <input
        type="text"
        name="bottomText"
        placeholder="Bottom Text"
        value={this.state.bottomText}
        onChange={this.handleChange}
      />
      <button>Gen</button>
    </form>;
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
}
export default MemeGenerator; */

import React from 'react';

//import memeData from './memesData';

export default function Form() {
  const [allMemeData, setMemeAllImages] = React.useState({});
  const [imgState, setImageState] = React.useState(false);
  /*   const [url, setImage] = React.useState("");
   */ const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  React.useEffect(() => {
    async function getMemesApi() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      setMemeAllImages(data);
    }
    getMemesApi();
  }, []);

  function imghandle(event) {
    let url = '';
    if (event.target.files.length !== 0) {
      url = URL.createObjectURL(event.target.files[0]);
    }
    // url = URL.createObjectURL(event.target.files[0]);

    if (url !== '') {
      setImageState(true);
      setMeme({
        ...meme,
        randomImage: url,
      });
    }
  }
  function handleClick() {
    const memesArray = allMemeData.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const imgUrl = memesArray[randomIndex].url;
    setImageState(true);
    setMeme({
      ...meme,
      randomImage: imgUrl,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme({
      ...meme,
      [name]: value,
    });

    /*const download () => {
  saveAs ("https://api.imgflip.com/get_memes", 'pasteimage') */
  }

  return (
    <div>
      <div className="form-class">
        <div className="form">
          <div className="input-container">
            <input
              type="text"
              className="input-text"
              onChange={handleChange}
              name="topText"
              value={meme.topText}
              placeholder="Top text"
            />
            <input
              type="text"
              className="input-text"
              onChange={handleChange}
              name="bottomText"
              value={meme.bottomText}
              placeholder="Bottom text"
            />
          </div>
          <button className="btn" onClick={handleClick}>
            Get a new random meme
          </button>
          <p className="download-meme">Download meme</p>
          <input
            type="file"
            name="downloadedImage"
            className="file"
            onChange={imghandle}
          />
        </div>
      </div>
      <div className="meme" style={{ display: imgState ? 'block' : 'none' }}>
        <img src={meme.randomImage} className="meme--img" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
/*
if (url !== '') {
  setMeme({
    topText: '',
    bottomText: '',
    randomImage: url,
  });
  return;
}
*/
