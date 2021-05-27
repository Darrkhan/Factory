import Phaser from 'phaser'

const {player, machine, commande} = require("./class.js");
const {map1} = require('./map1.js');
const {map2} = require('./map2.js');
const {map3} = require('./map3.js');
const {map4} = require('./map4.js');
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
      scene: [map4,Menu_Principal, Selection_Niveaux, map1, map2, map3]
  };

  var game = new Phaser.Game(config);
}
