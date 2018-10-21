'use strict';


class CreateDiv {
  constructor ( {height, width, bg, fontSize, textAlign} ){
    // this.height = height;
    // this.width = width;
    // this.bg = bg;
    // this.fontSize = fontSize;
    // this.textAlign = textAlign;
    
    this.div = document.createElement('DIV');
    this.div.style.height     = height;
    this.div.style.width      = width;
    this.div.style.background = bg;
    this.div.style.fontSize   = fontSize;
    this.div.style.textAlign  = textAlign;
    
    this.div.textContent = 'TEST'; // чтоб сразу видно было
    document.body.appendChild(this.div);
  }
  
  // метод, изменяющий div на странице, ...
  settings( {message, styles} ) {
    this.div.textContent = message;
    this.div.style.cssText = styles; // это перезапишет некоторые стили которые до этого были на элементе
  }
}

let newElement = new CreateDiv( {height: 50, width: 200, bg: 'red', fontSize: '3rem', textAlign: 'right'} );

let tmpStr = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio fugiat incidunt inventore molestiae quibusdam sed sit tempora vitae voluptates. Cupiditate deserunt ea non quam quia reiciendis repudiandae voluptate! Fugiat laborum necessitatibus optio, placeat repudiandae tempore. Atque consequuntur facilis fugit illo, illum maxime';
let css = 'border: aquamarine 3px solid; border-radius: 30px; font-weight: bold; font-style: italic; padding: 10px;';


document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('btn').addEventListener('click', () =>{
    newElement.settings( {message: tmpStr, styles: css} );
  });
});