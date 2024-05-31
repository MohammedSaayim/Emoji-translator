import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍕": "pizza",
  "🍔": "beefburger",
  "🍟": "french fries",
  "🌭": "hotdog",
  "🍿": "popcorn",
  "🥚": "egg",
  "🍞": "bread",
  "🥯": "bagel",
  "🥖": "baguette bread",
  "🥨": "pretzel",
  "🥐": "croissant",
  "🧀": "cheese",
  "🍳": "cooking",
  "🥓": "bacon",
  "🥩": "cut of meat",
  "🍗": "poultry leg",
  "🍖": "meat on bone",
  "🌮": "taco",
  "🌯": "burrito",
  "🥙": "stuffed flatbread",
  "🧆": "falafel",
  "🍝": "spaghetti",
  "🍜": "steaming bowl",
  "🍲": "pot of food",
  "🍛": "curry rice",
  "🍣": "sushi",
  "🍱": "bento box",
  "🥟": "dumpling",
  "🍤": "fried shrimp",
  "🍙": "rice ball",
  "🍚": "cooked rice",
  "🍘": "rice cracker",
  "🥠": "fortune cookie",
  "🍥": "fish cake with swirl",
  "🥮": "moon cake",
  "🍢": "oden",
  "🍡": "dango",
  "🍧": "shaved ice",
  "🍨": "ice cream",
  "🍦": "soft ice cream",
  "🍰": "shortcake",
  "🎂": "birthday cake",
  "🧁": "cupcake",
  "🥧": "pie",
  "🍮": "custard",
  "🍬": "candy",
  "🍭": "lollipop",
  "🍫": "chocolate bar",
  "🍿": "popcorn",
  "🍩": "doughnut",
  "🍪": "cookie",
  "🌰": "chestnut",
  "🥜": "peanuts",
  "🍯": "honey pot",
  "🥛": "glass of milk",
  "🍼": "baby bottle",
  "☕": "hot beverage",
  "🍵": "teacup without handle",
  "🍶": "sake",
  "🍾": "bottle with popping cork",
  "🍷": "wine glass",
  "🍸": "cocktail glass",
  "🍹": "tropical drink",
  "🍺": "beer mug",
  "🍻": "clinking beer mugs",
  "🥂": "clinking glasses",
  "🥃": "tumbler glass",
  "🥤": "cup with straw",
  "🧋": "bubble tea",
  "🧃": "beverage box",
  "🧉": "mate drink",
  "🧊": "ice",
  "🥢": "chopsticks",
  "🍽️": "fork and knife with plate",
  "🍴": "fork and knife",
  "🥄": "spoon",
  "🥗": "green salad",
  "🥘": "shallow pan of food",
  "🥙": "stuffed flatbread",
  "🥫": "canned food",
  "🥛": "glass of milk",
  "🍼": "baby bottle",
  "🥤": "cup with straw",
  "🧋": "bubble tea",
  "🧃": "beverage box",
  "🧉": "mate drink",
  "🧊": "ice"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Translator for Foodies!</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>{" "}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
