import Phaser from 'phaser'
import { setOriginalNode } from 'typescript';

var config = {
    type: Phaser.AUTO,
    width: 1900,
    height: 1800,
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

    sprite.on('')

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

var player;
var platforms;
var cursors;
var door1;
var door2;
var door3;
var door;
var game;

var glob =0;


window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [selectWorld, niveau1,niveau2,niveau3]
    };

    game= new Phaser.Game(config);
    game.scene.start("selectWorld");
}


class selectWorld extends Phaser.Scene{

constructor(){
     super({key: 'selectWorld' });
}

preload () {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('door1', 'assets/door1.png');
        this.load.image('door2', 'assets/door2.png');
        this.load.image('door3', 'assets/door3.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

create () {
    glob++;
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');
    
        door1 = this.add.sprite(600, 364,'door1'); //-36
        door2 = this.add.sprite(50, 214,'door2'); //-36
        door3 = this.add.sprite(750, 184,'door3'); //-36

       var coordsDepartX= localStorage.getItem("playerCoordsWhenLeavingX");
       var coordsDepartY= localStorage.getItem("playerCoordsWhenLeavingY");
       if (coordsDepartX === null || coordsDepartY === null) {
            player = this.physics.add.sprite(600, 360, 'dude');
        }
        else {
            player = this.physics.add.sprite(Math.floor(coordsDepartX), Math.floor( coordsDepartY), 'dude');
        }
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, platforms);
}

update () {
    if (cursors.left.isDown)  {
        console.log("level 0 left ("+glob+")");
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else  {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)  {
        player.setVelocityY(-330);
    }
    if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
        localStorage.setItem('playerCoordsWhenLeavingX',player.x );
        localStorage.setItem('playerCoordsWhenLeavingY',player.y );
        if (checkOverlap(player, door1)) {
             this.scene.start("niveau1");
        } 
        if (checkOverlap(player, door2)) {
            this.scene.start("niveau2");
        } 
         if (checkOverlap(player, door3)) {
            this.scene.start("niveau3");
        } 
    }
    
}
}




function checkOverlap(spriteA, spriteB) {
    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();
    var result = Phaser.Geom.Rectangle.Intersection(boundsA, boundsB);
    return (result.width !=0 || result.height!=0 )
}




class niveau1 extends Phaser.Scene{
constructor(){
     super({
        key: 'niveau1'
    });
}
preload () {
    /*
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('door', 'assets/door1.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });*/
}
 create () {
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        door = this.add.sprite(600, 516,'door1'); //-36
        player = this.physics.add.sprite(600, 516, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

       cursors = this.input.keyboard.createCursorKeys();
       this.physics.add.collider(player, platforms);
}

update () {
   console.log("niveau1");
    if (cursors.left.isDown)  {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else  {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)  {
        player.setVelocityY(-330);
    }
    if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
        if (checkOverlap(player, door)) {
            this.scene.start("selectWorld"); // on reveille la scene 
        } 
    }
}
}


class niveau2 extends Phaser.Scene{
constructor(){
     super({
        key: 'niveau2'
    });
}
preload () {/*
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('door', 'assets/door2.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });*/
}
 create () {
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        door = this.add.sprite(200, 516,'door2'); //-36
        player = this.physics.add.sprite(200, 516, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

       cursors = this.input.keyboard.createCursorKeys();
       this.physics.add.collider(player, platforms);
}

update () {
    if (cursors.left.isDown)  {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else  {
        player.setVelocityX(0);
        player.anims.play('turn');
    }
    if (cursors.up.isDown && player.body.touching.down)  {
        player.setVelocityY(-330);
    }
    if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
        if (checkOverlap(player, door)) {
             this.scene.start("selectWorld");
        } 
    }
}
}


class niveau3 extends Phaser.Scene{
constructor(){
     super({
        key: 'niveau3'
    });
}
preload () {
/*
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('door', 'assets/door3.png');
        this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });*/
}
 create () {
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        door = this.add.sprite(400, 516,'door3'); //-36
        player = this.physics.add.sprite(400, 516, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

       cursors = this.input.keyboard.createCursorKeys();
       this.physics.add.collider(player, platforms);
}

update () {
    if (cursors.left.isDown)  {
         console.log("level 3 left ("+glob+")");
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else  {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)  {
        player.setVelocityY(-330);
    }
    if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
        if (checkOverlap(player, door)) {
             this.scene.start("selectWorld");
        } 
    }
}
}
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
