Framework Used: ReactJS
Modules used: react, react-native, react-native-web, react-dom/client
React app was created using cli: > npx create-react-app takshashila
Files edited: index.js, App.js, App.css

The <React.StrictMode> restrictions has been removed from index.js to prevent userEffect() re-rendering twice.

#Frontend sample using ReactJS
#BY: MOHAMED ABDULLAH FAHAD

The root document of the server is the default App.js file used by ReactJS.
Imports:
  import './App.css';
  import NoPokemon from './no_pokemon.png';
  import { Text , Image } from 'react-native';
  import React, { useEffect, useState } from 'react';

  1. The App.css file contains the css styles and keyframes used in the webpage.
  2. The Text and Image React components have been used from react-native as margin and padding does not work with the default h1,h2,... and img tag in reactjs
     unless a seperate constructor is made for the component (which slows down the server).
  3. The useEffect and useState functions are imported from the react module in order to set a default state for elements and re-render the elements on updation of
     state without reloading the page.
  4. The fetch api is used to create a get request to the endpoint https://pokeapi.co/api/v2/pokemon/ with limit=1302 (count of pokemons whose details are provided by the
     pokeapi.co REST API)
  5. The then() function is used to create an async implementation to get the response from the fetch api and convert it into the json format after the response stream has
     been closed.
  6. Math.random() is used to generate a random number between 0 to 1032 and select a pokemon from the 1032 pokemons.
  7. Fetch api is used once again to get the details of the randomly selected pokemon from the pokemon sprites provided by the pokeapi REST API.
  8. The pokemon's image, type, height and weight is read from the sprites and is stored to the respective setState functions created by useState();.
  9. The necessary text and image elements has been created with the required styles, id and onClick events and has been set with the values fetched from pokeapi.
  10. A function named backgroundColor has been created to change the background color of the body and text color of all elements using DOM as in javascript using
      document.getElementById() to get the elements using their respective id to modify their properties.
  11. The entire content has been kept inside a div with the id 'allel' and the div has been assigned the class 'fadeStyle' to fade in on visiting the website.
  12. The div 'allel' is made to repeat the animation on clicking the pikachu image located on the top right corner of the screen by using the
      document.getElementById().animate(animation, options) function.
  13. The fetch api and the backgroundColor() function is decalred once again inside the onClick mehod of the pikachu image to load and set the details of a different
      pokemon and perform the fade in animation as well as change the theme from light to dark and vice versa alternately.
  14. An if condition is used to check the current background color and change the background color to black and text color to white (if the current background is white)
      after the pikachu image has been clicked.Similarly , the background turns white and the texts turn black if the current background color is black.

The App function is exported and then imported in the index.js to create the root element of the document using React and render the App.
