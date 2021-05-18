import Phaser from 'phaser'

var config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1600,
    scene: {
        preload: preload,
        create: create,
        physics:{
          arcade:{
            debug : true,
            gravity:{y : 100}
          },
          matter:{
            debug : true,
            gravity:{y : 0.5}
          }
        },
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('block', 'block.png');

}

function create ()
{
  this.matter.add.image(10, 170, 'block', null, { isStatic: true });
  var block = this.matter.add.image(100, 100, 'block');
  block.setVelocity(0,0);
}

function update ()
{
}
