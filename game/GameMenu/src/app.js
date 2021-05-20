import Phaser from 'phaser'
import { setOriginalNode } from 'typescript';

var config = {
    type: Phaser.AUTO,
    width: 1900,
    height: 1100,
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);
var button;
var dab = 0;

function preload ()
{
  this.load.image('sky', 'AMOGUSTRUE.jpg')
  this.load.image('button', 'PlayGameNot.png');
  this.load.image('test', 'bg.jpg')

  

}

function create ()
{
    this.add.image(850,500,'sky');
 
    var sprite = this.add.sprite(900, 475, 'button').setInteractive();

    sprite.on('pointerdown', function (pointer) {

        console.log("TA GUEUELE");

    })

    sprite.on('pointerout', function (pointer) {

        console.log("TA GUEUELE 1");

    });

    sprite.on('pointerup', function (pointer) {

        dab = 1;

    });


}

function update ()
{
   if(dab == 1) {

        this.add.image(150,200,'test');
       
       
   }
}


