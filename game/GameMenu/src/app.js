import Phaser from 'phaser'

var config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', 'bg.jpg');

}

function create ()
{
  this.add.image(1800, 1600, 'sky');
}

function update ()
{
}
