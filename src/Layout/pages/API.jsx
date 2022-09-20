import { useState, useEffect } from "react";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
import ApiCard from "../components/ApiCard";

const API = () => {
  const [imagenes, setImagenes] = useState([]);

  const getGifs = async () => {
    const api_key = "q4ztbSSk5kcxdgLDkT6dgLRwOI10akh7";
    const category = "Valorant";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=15`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((data) => {
      return {
        url: data.images.downsized_medium.url,
        id: data.id,
      };
    });

    setImagenes(gifs);
  };

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <>
      <div>
        <h1 className="tituloCalculadora">API GIF´S</h1>
        <div className="apiGIF">
          {imagenes.map((imagen) => (
            <ApiCard key={imagen.id} img={imagen} />
          ))}
          <p className="tituloCalculadora">USANDO GIPHY</p>
        </div>
      </div>
    </>
  );
};

export default API;
