import Phaser from 'phaser'


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
  		default: 'arcade',
  		arcade: {
  			gravity: { y: 300 }
  		}
  	},
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload (){
  this.load.image('sky', 'assets/sky.png');
  this.load.image('star', 'assets/star.png');
}

function create (){
  this.add.image(400,300,'sky');
  this.add.image(400, 300, 'star');
}

function update (){

}
