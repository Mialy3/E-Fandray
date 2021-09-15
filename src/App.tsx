import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import img1 from "./image/FB_IMG_16227164225933030.jpg";
import img2 from "./image/FB_IMG_16232934451322666.jpg";
import img3 from "./image/FB_IMG_16244599974393143.jpg";
import img4 from "./image/FB_IMG_16233478258765771.jpg";
import img5 from "./image/FB_IMG_16241539507540796.jpg";
import img6 from "./image/FB_IMG_16233109743682877.jpg";

interface IState {
  personne: {
    name: string;
    min: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [personne] = useState<IState["personne"]>([
    {
      name: " Nyr Rija",
      min: 45,
      url: img1,
      note: " manaoana i Rija hiany",
    },
    {
      name: " Andritiana",
      min: 45,
      url: img2,
      note: " bonjour c'est Andritiana",
    },
    {
      name: " Swiftie",
      min: 45,
      url: img3,
      note: " coucou c'est Swiftie",
    },
    {
      name: " Aleck Astan",
      min: 45,
      url: img4,
      note: " Hello it's Aleck",
    },
    {
      name: " Ny Hasina",
      min: 45,
      url: img5,
      note: " Hey c'est Hasina!",
    },
    {
      name: " Miandry",
      min: 45,
      url: img6,
      note: " Salut c'est Miandry",
    },
  ]);

  return (
    <div className="App">
      <h1>REPERTOIRE de mialy_IMTICIA3_N°3</h1>
      <List personne={personne} />
    </div>
  );
}

export default App;
