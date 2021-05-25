import Phaser from 'phaser'
import Menu_Principal from './Menu.js';
import Selection_Niveaux from './Selection_Niveaux.js';

const {player, machine} = require("./class.js");

const {map1} = require('./map1.js');

window.onload = function(){
  const config = {
      type: Phaser.AUTO,
      scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 1920,
          height: 1080
      },
      input: {
        gamepad: true
      },
      physics: {
          default: 'matter',
          matter: {
              gravity: {
                  x: 0,
                  y: 0
              }
          }
      },
      scene: [Menu_Principal, Selection_Niveaux,map1]
  };

  var game = new Phaser.Game(config);
  game.scene.start(Menu_Principal);
}



























