import Phaser from 'phaser'


window.onload = function(){
  const config = {
      type: Phaser.AUTO,
      scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
          width: 1920,
          height: 1080
      },
      physics: {
          default: 'arcade',
          matter: {
              gravity: {
                  x: 0,
                  y: 0
              }
          }
      },
      scene: [Menu_Principal,Selection_Niveaux]
  };

  var game = new Phaser.Game(config);
  game.scene.start(Menu_Principal);
}
