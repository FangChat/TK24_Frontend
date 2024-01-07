import './App.css';
import NoPokemon from './no_pokemon.png';
import { Text , Image } from 'react-native';
import React, { useEffect, useState } from 'react';

function App() {
  const [bgcolor, setBgColor] = useState("white");
  const [picture, setPicture] = useState([]);
  const [type, setType] = useState([]);
  const [name, setName] = useState([]);
  const [height, setHeight] = useState([]);
  const [weight, setWeight] = useState([]);

  const backgroundColor = () => {
    if(bgcolor === "white"){
      setBgColor("black");
      document.getElementById('allel').style.color = "white";
      document.getElementById('specialtext').style.color = "white";
      document.getElementById('clickhere').style.color = "white";
      const screenFading = [
        { opacity: 0 },
        { opacity: 0},
        { opacity: 0},
        { opacity: 1 },
      ];
      
      const screenFadingTiming = {
        duration: 3000,
        iterations: 1,
      };

      document.getElementById('allel').animate(screenFading, screenFadingTiming);
    }else{
      setBgColor("white");
      document.getElementById('allel').style.color = "black";
      document.getElementById('specialtext').style.color = "black";
      document.getElementById('clickhere').style.color = "black";
      const screenFading = [
        { opacity: 0 },
        { opacity: 0},
        { opacity: 0},
        { opacity: 1 },
      ];
      
      const screenFadingTiming = {
        duration: 3000,
        iterations: 1,
      };

      document.getElementById('allel').animate(screenFading, screenFadingTiming);
    }
  }

  useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
  }, [bgcolor]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302")
    .then((res) => res.json())
    .then((data) => {
      var results = data.results;
      const kk = Math.floor(Math.random() * (1302));
      var dict = results[kk];
      dict.name = dict.name.toUpperCase();
      setName(dict.name);
      fetch(dict.url)
      .then((res) => res.json())
      .then((data) => {
        var pokeinfo = data.sprites;
        var testpic = pokeinfo.other.dream_world.front_default;
        if(testpic == null){
          testpic = pokeinfo.other["official-artwork"].front_default;
        }
        if(testpic == null){
          testpic = NoPokemon;
        }
        setPicture(testpic);
        var typeString = "";
        data.types.forEach(function(item){
          typeString+=item.type.name+" ";
        });
        typeString = typeString.replace(' ',',');
        setType(typeString);
        setHeight(data.height);
        setWeight(data.weight);
      });
    });
  }, []);


  return (
    <div className='fadeStyle' id='allel'>
      <Text id='specialtext' style={
        {display: 'inline-block', fontFamily: 'Pokemon Solid', marginLeft: 10, fontSize: 30}
      }>pokémon</Text>
      <div>
      <Image onClick={() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302")
        .then((res) => res.json())
        .then((data) => {
          var results = data.results;
          const kk = Math.floor(Math.random() * (1302));
          var dict = results[kk];
          dict.name = dict.name.toUpperCase();
          setName(dict.name);
          fetch(dict.url)
          .then((res) => res.json())
          .then((data) => {
            var pokeinfo = data.sprites;
            var testpic = pokeinfo.other.dream_world.front_default;
            if(testpic == null){
              testpic = pokeinfo.other["official-artwork"].front_default;
            }
            if(testpic == null){
              testpic = NoPokemon;
            }
            setPicture(testpic);
            var typeString = "";
            data.types.forEach(function(item){
              typeString+=item.type.name+" ";
            });
            typeString = typeString.replace(' ',',');
            setType(typeString)
            setHeight(data.height);
            setWeight(data.weight);
          });
        });
        backgroundColor();
      }
      } style={{height: 70, width: 70, marginRight: 10, float: 'right', marginTop: -35}} source={require("./pikachu.png")}/>
      <Text id='clickhere' style={
        {display: 'inline-block', fontFamily: 'Pokemon Solid', float: 'right', marginRight: 20, marginTop: -25, fontSize: 30}
      }>Click here 👉</Text>
      </div>
      
      <div className='details' id='detailsdiv'>
      <img src={picture} alt='pokemon' className='pokeimg'/>
      <br/>
      <br/>
      <h1 className='pokename'>{name}</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3 className='pokeprops'>Type: {type}</h3>
      <h3 className='pokeprops'>Height: {height}</h3>
      <h3 className='pokeprops'>Weight: {weight}</h3>
      </div>
    </div>
  )
} 

export default App;
