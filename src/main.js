import jsQR from "jsqr";
import {formatResult} from "./qr-utils.js";
import "./styles.css";
const file=document.querySelector("#file"),canvas=document.querySelector("#canvas"),image=document.querySelector("#image"),preview=document.querySelector("#preview"),output=document.querySelector("#output"),copy=document.querySelector("#copy");
let decoded="";
file.addEventListener("change",()=>{
 const selected=file.files?.[0];if(!selected)return;
 const url=URL.createObjectURL(selected);image.onload=()=>{
  const ctx=canvas.getContext("2d",{willReadFrequently:true});
  canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;ctx.drawImage(image,0,0);
  const pixels=ctx.getImageData(0,0,canvas.width,canvas.height);
  const result=formatResult(jsQR(pixels.data,pixels.width,pixels.height,{inversionAttempts:"attemptBoth"}));
  decoded=result.text;output.textContent=result.text;copy.disabled=!result.text||!result.location;
  preview.hidden=false;URL.revokeObjectURL(url);
 };image.onerror=()=>{output.textContent="Could not read this image.";URL.revokeObjectURL(url);};image.src=url;
});
copy.addEventListener("click",async()=>{if(decoded){await navigator.clipboard.writeText(decoded);copy.textContent="Copied";}});
