import Phaser from 'phaser'
const {player} = require("./class.js");
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
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
/*var player1.pad;
var player2.pad;
var player3.pad;
var player4.pad;*/

var player1 = new player(1, "");
var player2 = new player(2, "");
var player3 = new player(3, "");
var player4 = new player(4, "");
var r1;
var control1;
var control2;
var control3;
var control4;
var car;
console.log(player1.type, player2.type, player3.type, player4.type);
var indicator1;
var indicator2;
var game = new Phaser.Game(config);
var cursors;

function preload (){
  //PRELOAD MAP TITLED
  this.load.image('block', 'assets/block.png');
  this.load.image('tiles', 'assets/tilesets/asset.png');

  this.load.tilemapTiledJSON('map', 'assets/tilemaps/1erMonde.json');

  this.load.image('fond', 'assets/fond.png');
  this.load.spritesheet('dude', 'assets/perso.png', { frameWidth: 64, frameHeight: 64 });
  this.load.spritesheet('dude1', 'assets/persoB.png', { frameWidth: 64, frameHeight: 64 });
  this.load.spritesheet('dude2', 'assets/persoC.png', { frameWidth: 64, frameHeight: 64 });
  this.load.spritesheet('dude3', 'assets/persoD.png', { frameWidth: 64, frameHeight: 64 });
  this.load.spritesheet('control1', 'assets/controlPerso.png', { frameWidth: 35, frameHeight: 35 });
  this.load.spritesheet('control2', 'assets/controlPersoB.png', { frameWidth: 35, frameHeight: 35 });
  this.load.spritesheet('control3', 'assets/controlPersoC.png', { frameWidth: 35, frameHeight: 35 });
  this.load.spritesheet('control4', 'assets/controlPersoD.png', { frameWidth: 35, frameHeight: 35 });
  //this.load.spritesheet('controller-indicator', 'assets/dude1.png', 16,16);
}

function create (){
  /***************************************WALL*********************************************/

  /*###########################top######################*/
  var w1 = this.add.rectangle(0, 0, 1700, 100, 0.2);
  this.matter.add.gameObject(w1).setStatic(true);
  var w2 = this.add.rectangle(825, 0, 55, 300, 0.2);
  this.matter.add.gameObject(w2).setStatic(true);
  var w3 = this.add.rectangle(983, 0, 55, 300, 0.2);
  this.matter.add.gameObject(w3).setStatic(true);
  var w4 = this.add.rectangle(1800, 0, 1650, 100, 0.2);
  this.matter.add.gameObject(w4).setStatic(true);


  /*###########################left######################*/
  var w5 = this.add.rectangle(0, 0, 100, 1920, 0.2);
  this.matter.add.gameObject(w5).setStatic(true);


  /*###########################bot######################*/
  var w6 = this.add.rectangle(0, 973, 3620, 100, 0);
  this.matter.add.gameObject(w6).setStatic(true);

  var w8 = this.add.rectangle(505, 842, 52, 155, 0.2);
  this.matter.add.gameObject(w8).setStatic(true);


  /*###########################right######################*/
  var w9 = this.add.rectangle(1795, 0, 70, 1950, 0.2);
  this.matter.add.gameObject(w9).setStatic(true);


  /*###########################middle######################*/
  var w7 = this.add.rectangle(505, 535, 52, 155, 0.2);
  this.matter.add.gameObject(w7).setStatic(true);
  var w10 = this.add.rectangle(1149, 483, 1335, 55, 0.2);
  this.matter.add.gameObject(w10).setStatic(true);


  /*###########################table######################*/
  var t1 = this.add.rectangle(1155, 83, 70, 60, 0.2);
  this.matter.add.gameObject(t1).setStatic(true);
  var t2 = this.add.rectangle(1708, 371, 100, 100, 0.2);
  this.matter.add.gameObject(t2).setStatic(true);


  /*###########################machines######################*/
  var m1 = this.add.rectangle(720, 540, 160, 70, 0.2);
  this.matter.add.gameObject(m1).setStatic(true);
  var m2 = this.add.rectangle(1200, 540, 160, 70, 0.2);
  this.matter.add.gameObject(m2).setStatic(true);
  var m3 = this.add.rectangle(1680, 540, 160, 70, 0.2);
  this.matter.add.gameObject(m3).setStatic(true);
  var pipe = this.add.rectangle(1149, 540, 1335, 20, 0.2);
  this.matter.add.gameObject(pipe).setStatic(true);

  /*-----------------pointer coord---------------------*/
  this.pointer = this.input.activePointer;

  /***************************************MAP**********************************************/
  const map = this.make.tilemap({ key : 'map'});
  const tileset = map.addTilesetImage('asset', 'tiles');
  const firstlayer = map.createLayer('Sol', tileset);
  const slayer = map.createLayer('Mur', tileset);
  const tlayer = map.createLayer('Mur Jardin', tileset);
  const qlayer = map.createLayer('Machine', tileset);
  const clayer = map.createLayer('Decor', tileset);
  firstlayer.scaleX = 1.065;
  firstlayer.scaleY = 1.025;

  slayer.scaleX = 1.065;
  slayer.scaleY = 1.025;

  tlayer.scaleX = 1.065;
  tlayer.scaleY = 1.025;

  qlayer.scaleX = 1.065;
  qlayer.scaleY = 1.025;

  clayer.scaleX = 1.065;
  clayer.scaleY = 1.025;

  player1.img = this.matter.add.sprite(200, 420, 'dude');
  player2.img = this.matter.add.sprite(200, 570, 'dude1');
  player3.img = this.matter.add.sprite(200, 720, 'dude2');
  player4.img = this.matter.add.sprite(200, 870, 'dude3');
  control1 = this.add.sprite(35, 30, 'control1');
  control2 = this.add.sprite(75, 30, 'control2');
  control3 = this.add.sprite(115, 30, 'control3');
  control4 = this.add.sprite(155, 30, 'control4');

  /***************************************test wall*******************************************************/


  /*var t3 = this.add.rectangle(505, 535, 52, 155, 0.2);
  this.matter.add.gameObject(t3).setStatic(true);
  var t4 = this.add.rectangle(1149, 483, 1335, 55, 0.2);
  this.matter.add.gameObject(t4).setStatic(true);
  var t5 = this.add.rectangle(505, 535, 52, 155, 0.2);
  this.matter.add.gameObject(t5).setStatic(true);*/


  this.anims.create({
      key: 'manette1',
      frames: this.anims.generateFrameNumbers('control1', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'manette2',
      frames: this.anims.generateFrameNumbers('control2', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'manette3',
      frames: this.anims.generateFrameNumbers('control3', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'manette4',
      frames: this.anims.generateFrameNumbers('control4', { start: 0, end: 1 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'manette11',
      frames: this.anims.generateFrameNumbers('control1', { start: 1, end: 1 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'manette22',
      frames: this.anims.generateFrameNumbers('control2', { start: 1, end: 1 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'manette33',
      frames: this.anims.generateFrameNumbers('control3', { start: 1, end: 1 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'manette44',
      frames: this.anims.generateFrameNumbers('control4', { start: 1, end: 1 }),
      frameRate: 10,
      repeat: -1
  });

//------------------------PLAYER 1---------------------------------------------------------
  this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 0 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
  cursors = this.input.keyboard.createCursorKeys();
//------------------------PLAYER 2---------------------------------------------------------
  this.anims.create({
      key: 'left1',
      frames: this.anims.generateFrameNumbers('dude1', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn1',
      frames: [ { key: 'dude1', frame: 0 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right1',
      frames: this.anims.generateFrameNumbers('dude1', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'up1',
      frames: this.anims.generateFrameNumbers('dude1', { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'down1',
      frames: this.anims.generateFrameNumbers('dude1', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  //------------------------PLAYER 3---------------------------------------------------------
  this.anims.create({
      key: 'left2',
      frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn2',
      frames: [ { key: 'dude', frame: 0 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right2',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'up2',
      frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'down2',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  //------------------------PLAYER 4---------------------------------------------------------
  this.anims.create({
      key: 'left3',
      frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn3',
      frames: [ { key: 'dude', frame: 0 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right3',
      frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'up3',
      frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'down3',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
}

function update (){
  if(this.pointer.leftButtonDown()){
    console.log('(x: ' + this.pointer.x + ', y: ' + this.pointer.y + ')');
  }
  if (this.input.gamepad.total === 0){
        return;
    }

    player1.pad = this.input.gamepad.getPad(0);
    player2.pad = this.input.gamepad.getPad(1);
    player3.pad = this.input.gamepad.getPad(2);
    player4.pad = this.input.gamepad.getPad(3);

control1.anims.play('manette1',true);
control2.anims.play('manette2',true);
control3.anims.play('manette3',true);
control4.anims.play('manette4',true);
//------------------------PLAYER 1---------------------------------------------------------
  if(player1.pad != undefined){
    control1.anims.play('manette11');
    if (player1.pad.axes.length)
    {
        var axisH = player1.pad.axes[0].getValue();
        var axisV = player1.pad.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player1.img.anims.play('left',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player1.img.anims.play('left',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player1.img.anims.play('up',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player1.img.anims.play('down', true);
        }
        else if(axisV == 0 && axisH == 0){
          player1.img.anims.play('turn');
        }
        player1.img.x += 4 * axisH;
        player1.img.y += 4 * axisV;

        player1.img.flipX = (axisH > 0);
    }
  }
  else {
    control1.anims.play('manette1',true);
  }

//------------------------PLAYER 2---------------------------------------------------------
  if(player2.pad != undefined){
    control2.anims.play('manette22');
    if (player2.pad.axes.length)
    {
        var axisH = player2.pad.axes[0].getValue();
        var axisV = player2.pad.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player2.img.anims.play('left1',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player2.img.anims.play('left1',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player2.img.anims.play('up1',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player2.img.anims.play('down1', true);
        }
        else if(axisV == 0 && axisH == 0){
          player2.img.anims.play('turn1');
        }
        player2.img.  x += 4 * axisH;
        player2.img.y += 4 * axisV;

        player2.img.flipX = (axisH > 0);
    }
  }
  else {
    control2.anims.play('manette2',true);
  }

//------------------------PLAYER 3---------------------------------------------------------
  if (player3.pad != undefined){
    control3.anims.play('manette33');
    if (player3.pad.axes.length)
    {
        var axisH = player3.pad.axes[0].getValue();
        var axisV = player3.pad.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player3.img.anims.play('left2',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player3.img.anims.play('left2',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player3.img.anims.play('up2',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player3.img.anims.play('down2', true);
        }
        else if(axisV == 0 && axisH == 0){
          player3.img.anims.play('turn2');
        }
        player3.img.x += 4 * axisH;
        player3.img.y += 4 * axisV;

        player3.img.flipX = (axisH > 0);
    }
  }
  else {
    control3.anims.play('manette3',true);
  }

//------------------------PLAYER 4---------------------------------------------------------
  if (player4.pad != undefined){
    control4.anims.play('manette44');
    if (player4.pad.axes.length)
    {
        var axisH = player4.pad.axes[0].getValue();
        var axisV = player4.pad.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player4.img.anims.play('left3',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player4.img.anims.play('left3',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player4.img.anims.play('up3',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player4.img.anims.play('down3', true);
        }
        else if(axisV == 0 && axisH == 0){
          player4.img.anims.play('turn3');
        }
        player4.img.x += 4 * axisH;
        player4.img.y += 4 * axisV;

        player4.img.flipX = (axisH > 0);
    }
  }
  else {
    control4.anims.play('manette4',true);
  }


/*
  if(cursors.left.isDown || cursors.right.isDown || cursors.up.isDown || cursors.down.isDown){
    if (cursors.left.isDown)
    {
        player1.x -= 10;
        player1.anims.play('left', true);
    }
    if (cursors.right.isDown)
    {
        player1.x += 10;
        player1.anims.play('right', true);
    }
    if (cursors.up.isDown)
    {
        player1.y -= 10;
        player1.anims.play('up', true);
    }
    if (cursors.down.isDown)
    {
        player1.y += 10;
        player1.anims.play('down', true);
    }
  else{
      player1.anims.play('turn');
  }*/
  function render() {
      game.debug.spriteInfo(s, 20, 32);

  }
}
