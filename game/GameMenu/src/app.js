import Phaser from 'phaser'

const {player, machine, commande} = require("./class.js");
const {map1} = require('./map1.js');
const {Menu_Principal} = require("./Menu.js");
const {Selection_Niveaux} = require("./Selection_Niveaux.js");


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
      scene: [map1,Menu_Principal, Selection_Niveaux]
  };

  var game = new Phaser.Game(config);
  game.scene.start(Menu_Principal);
}



























