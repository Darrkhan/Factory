import Phaser from 'phaser'

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    input: {
      gamepad: true
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var pad1;
var pad2;
var pad3;
var pad4;

var player1;
var player2;
var player3;
var player4;

var control1;
var control2;
var control3;
var control4;

var indicator1;
var indicator2;
var game = new Phaser.Game(config);
var cursors;

function preload (){
  this.load.image('fond', 'assets/fond.png');
  //this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
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
  this.add.image(960, 540,'fond');
  player1 = this.add.sprite(500, 450, 'dude');
  player2 = this.add.sprite(500, 600, 'dude1');
  player3 = this.add.sprite(500, 750, 'dude2');
  player4 = this.add.sprite(500, 900, 'dude3');
  control1 = this.add.sprite(35, 30, 'control1');
  control2 = this.add.sprite(75, 30, 'control2');
  control3 = this.add.sprite(115, 30, 'control3');
  control4 = this.add.sprite(155, 30, 'control4');

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
    //if(game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad1.connected) {
      //indicator1.animations.frame = 0;
  //} else {
      //indicator1.animations.frame = 1;
  //}
  //if(game.input.gamepad.supported && game.input.gamepad.active && game.input.gamepad.pad2.connected) {
      //indicator2.animations.frame = 0;
  //} else {
    //  indicator2.animations.frame = 1;
  //}

  if (this.input.gamepad.total === 0){
        return;
    }

    var pad1 = this.input.gamepad.getPad(0);
    var pad2 = this.input.gamepad.getPad(1);
    var pad3 = this.input.gamepad.getPad(2);
    var pad4 = this.input.gamepad.getPad(3);

control1.anims.play('manette1',true);
control2.anims.play('manette2',true);
control3.anims.play('manette3',true);
control4.anims.play('manette4',true);
//------------------------PLAYER 1---------------------------------------------------------
  if(pad1 != undefined){
    control1.anims.play('manette11');
    if (pad1.axes.length)
    {
        var axisH = pad1.axes[0].getValue();
        var axisV = pad1.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player1.anims.play('left',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player1.anims.play('left',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player1.anims.play('up',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player1.anims.play('down', true);
        }
        else if(axisV == 0 && axisH == 0){
          player1.anims.play('turn');
        }
        player1.x += 4 * axisH;
        player1.y += 4 * axisV;

        player1.flipX = (axisH > 0);
    }
  }
  else {
    control1.anims.play('manette1',true);
  }

//------------------------PLAYER 2---------------------------------------------------------
  if(pad2 != undefined){
    control2.anims.play('manette22');
    if (pad2.axes.length)
    {
        var axisH = pad2.axes[0].getValue();
        var axisV = pad2.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player2.anims.play('left1',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player2.anims.play('left1',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player2.anims.play('up1',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player2.anims.play('down1', true);
        }
        else if(axisV == 0 && axisH == 0){
          player2.anims.play('turn1');
        }
        player2.x += 4 * axisH;
        player2.y += 4 * axisV;

        player2.flipX = (axisH > 0);
    }
  }
  else {
    control2.anims.play('manette2',true);
  }

//------------------------PLAYER 3---------------------------------------------------------
  if (pad3 != undefined){
    control3.anims.play('manette33');
    if (pad3.axes.length)
    {
        var axisH = pad3.axes[0].getValue();
        var axisV = pad3.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player3.anims.play('left2',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player3.anims.play('left2',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player3.anims.play('up2',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player3.anims.play('down2', true);
        }
        else if(axisV == 0 && axisH == 0){
          player3.anims.play('turn2');
        }
        player3.x += 4 * axisH;
        player3.y += 4 * axisV;

        player3.flipX = (axisH > 0);
    }
  }
  else {
    control3.anims.play('manette3',true);
  }

//------------------------PLAYER 4---------------------------------------------------------
  if (pad4 != undefined){
    control4.anims.play('manette44');
    if (pad4.axes.length)
    {
        var axisH = pad4.axes[0].getValue();
        var axisV = pad4.axes[1].getValue();
        if((axisH > -1) && (axisH < 0) && (axisV > -0.5) && (axisV <= 0.5)){
          player4.anims.play('left3',true);
        }
        else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
          player4.anims.play('left3',true);
        }
        else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
          player4.anims.play('up3',true);
        }
        else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
          player4.anims.play('down3', true);
        }
        else if(axisV == 0 && axisH == 0){
          player4.anims.play('turn3');
        }
        player4.x += 4 * axisH;
        player4.y += 4 * axisV;

        player4.flipX = (axisH > 0);
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
