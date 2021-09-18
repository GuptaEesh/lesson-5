import React, { useState } from "react";
import "./styles.css";
var emojiDic = {
  "😄": "Happy",
  "😡": "Angry",
  "😭": "like crying",
  "😎": "Smart",
  "😴": "Sleepy",
  "😔": "sad",
  "😑": "Annoyed",
  "❤": "Loved",
  "😩": "Tired",
  "🤩": "Star gazed",
  "😯": "Surprised"
};
var emojisNow = Object.keys(emojiDic);
// var shoppingList=["Flowers","Kundan","Chandan","Dhoop","Milk","Bread","Maggi","Pasta"]
export default function App() {
  var [inputEmoji, setUserInput] = useState("");
  function inputChangeHandler(event) {
    var userTypo = event.target.value;
    var meaning = emojiDic[userTypo];
    if (meaning === undefined) {
      meaning = "This is beyond the scope of this emoji predictor";
    }
    setUserInput(meaning);
  }
  function emojiHandler(emoji) {
    var meaning = emojiDic[emoji];
    if (meaning === undefined) {
      meaning = "This is beyond the scope of this emoji predictor";
    }
    setUserInput(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Out, Put your emoji in search bar to know it's meaning</h1>
      <input
        onChange={inputChangeHandler}
        style={{ fontSize: "xx-large" }}
      ></input>

      <h2>Click on each to know👇</h2>
      <div className="emojiList">
        {" "}
        {emojisNow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
        <div
          style={{ paddingTop: "2rem", color: "#a78bfa", fontSize: "xx-large" }}
        >
          I am feeling{" "}
          <span
            style={{
              color: "#a78bfa",
              fontSize: "xx-large",
              fontWeight: "700",
              backgroundColor: "yellow"
            }}
          >
            {inputEmoji}
          </span>
        </div>
      </div>
      <footer>
        <a href="https://emojipedia.org/people/">To know more</a>
      </footer>
    </div>
  );
}
