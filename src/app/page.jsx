"use client"
import React from 'react'

import styles from './page.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "@gradio/client";

export default function App() {
  async function Connect() {
    const app = await client("https://mohammedalakhras-telegram-api.hf.space/");
    const result = await app.predict("/predict", []);

    console.log(result.data);
  }

  return (
    <div className="App">
      <h1>Telegram API</h1>

      <button
        type="button"
        className="btn btn-outline-success bt-lg"
        onClick={Connect}
      >
        Activate
      </button>
    </div>
  );
}