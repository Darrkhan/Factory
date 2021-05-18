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

var player1;
var player2;

var indicator1;
var indicator2;
var game = new Phaser.Game(config);
var cursors;

function preload (){
  this.load.image('fond', 'assets/fond.png');
  this.load.image('star', 'assets/star.png');
  //this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  this.load.spritesheet('dude', 'assets/perso.png', { frameWidth: 64, frameHeight: 64 });
  //this.load.spritesheet('controller-indicator', 'assets/dude1.png', 16,16);
}

function create (){
  this.add.image(960, 540,'fond');
  this.add.image(400, 300, 'star');
  player1 = this.add.sprite(500, 450, 'dude');
  //indicator1 = this.add.sprite(10,10, 'controller-indicator');
  //indicator1.scale.x = indicator1.scale.y = 2;
  //indicator1.animations.frame = 1;

  //indicator2 = this.add.sprite(10,50, 'controller-indicator');
  //indicator2.scale.x = indicator2.scale.y = 2;
  //indicator2.animations.frame = 1;
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
      key: 'down',
      frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });
  cursors = this.input.keyboard.createCursorKeys();
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

  if (this.input.gamepad.total === 0)
    {
        return;
    }

    var pad1 = this.input.gamepad.getPad(0);

    if (pad1.axes.length)
    {
        var axisH = pad1.axes[0].getValue();
        var axisV = pad1.axes[1].getValue();
        if(-1 < axisH <= 0 && -0.5 < axisV <= 0.5){
          player1.anims.play('up',true);
        }
        else if(-1 < axisV <= 0 && -0.5 < axisH <= 0.5){
          player1.anims.play('right',true);
        }
        else if(0 < axisH <= 1 && -0.5 < axisV <= 0.5){
          player1.anims.play('down',true);
        }
        else if(0 < axisV <= 1 && -0.5 < axisH <= 0.5){
          player1.anims.play('left', true);
        }
        else {
          player1.anims.play('turn');
        }
        player1.x += 4 * axisH;
        player1.y += 4 * axisV;

        player1.flipX = (axisH > 0);
    }
  }


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
  }
  else{
      player1.anims.play('turn');
  }
function render() {
    game.debug.spriteInfo(s, 20, 32);

}
