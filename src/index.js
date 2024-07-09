import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./styles.css";

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);

//2. Create a App.jsx component.
// created app.jsx file within components folder
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
// created header.jsx file within components file
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
// created note.jsx 
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
