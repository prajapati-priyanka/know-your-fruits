import React, { useState } from "react";
import "./styles.css";
var fruitEmojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato"
};

var fruitWeKnow = Object.keys(fruitEmojiDictionary);
// console.log(fruitWeKnow);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var inputFruitEmoji = event.target.value;

    // console.log(inputFruitEmoji);
    if (inputFruitEmoji in fruitEmojiDictionary) {
      setMeaning(fruitEmojiDictionary[inputFruitEmoji]);
    } else {
      setMeaning("This fruit is not in our database");
    }
  }

  function emojiCLickHandler(fruit) {
    setMeaning(fruitEmojiDictionary[fruit]);
  }

  return (
    <div className="App">
      <h1> Know Your Fruits </h1>
      <input
        onChange={inputChangeHandler}
        placeholder=" Enter Fruits Emoticons.. "
      />
      <div className="fruit-meaning"> {meaning} </div>
      <div className="fruit-container">
        <ul>
          {fruitWeKnow.map((fruit, index) => {
            return (
              <li
                key={index}
                className="fruit-container-items"
                onClick={() => emojiCLickHandler(fruit)}
              >
                {fruit}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
