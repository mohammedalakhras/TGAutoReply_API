"use client"
import React from 'react'
// import styles from './page.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { client } from "@gradio/client";
import Image from 'next/image';
import img from "../../public/img.jpg"

export default function App() {
  async function Connect() {
    const app = await client("https://mohammedalakhras-telegram-api.hf.space/");
    const result = await app.predict("/predict", []);

    console.log(result.data);
  }

  return (
    <div className="container center" style={{ textAlign: "center" ,fontSize:20}}  >
      <h1>Telegram API</h1>

      <div style={{  border: "2px solid #ccc",
borderRadius: '50%', overflow: 'hidden',width:"250px",height:"250px",margin:"0 auto"}} >
<Image src={img}
width={250}
height={250}
alt="img"
/>
</div>
       <button
        type="button"
        className="btn btn-outline-success bt-lg"
        onClick={Connect}
      ><br />
        Activate
      </button>
    </div>
  );
}