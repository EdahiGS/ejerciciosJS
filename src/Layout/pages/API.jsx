import React from "react";

const API = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  const HttpCall = fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`
  );

  HttpCall.then((resp) => resp.json()).then(({ data }) => {
    const enlace = data.images.original.url;
    const imagen = document.querySelector(".gifs");
    imagen.src = enlace;
  });
  
  return (
    <>
      <div>
        <h1 className="tituloCalculadora">API GIF´S</h1>
        <div className="apiGIF">
          <img className="gifs " src="" alt="" />
          <p className="tituloCalculadora">USANDO GIPHY</p>
        </div>
      </div>
    </>
  );
};

export default API;
