import Keyboard from "./keyboard.js";
 
 const keyboard = new Keyboard();
 
 window.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('lang') === 'false') {
     keyboard.properties.isRussian = false;
   }
   if (localStorage.getItem('lang') === 'true') {
     keyboard.properties.isRussian = true;
   }
   keyboard.initTextarea();
   keyboard.initVirtual();
   keyboard.initReal();
 });