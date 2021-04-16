import Phaser from 'phaser'

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
var player;
var game = new Phaser.Game(config);

var cursors;


function preload (){
  this.load.image('fond', 'assets/fond.png');
  this.load.image('star', 'assets/star.png');
  this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
}

function create (){
  this.add.image(960, 540,'fond');
  this.add.image(400, 300, 'star');
  player = this.add.sprite(500, 450, 'dude');
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
  this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });
  this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });
  cursors = this.input.keyboard.createCursorKeys();
}

function update (){
  if(cursors.left.isDown || cursors.right.isDown || cursors.up.isDown || cursors.down.isDown){
    if (cursors.left.isDown)
    {
        player.x -= 10;
        player.anims.play('left', true);
    }
    if (cursors.right.isDown)
    {
        player.x += 10;
        player.anims.play('right', true);
    }
    if (cursors.up.isDown)
    {
        player.y -= 10;
        player.anims.play('up', true);
    }
    if (cursors.down.isDown)
    {
        player.y += 10;
        player.anims.play('down', true);
    }
  }
  else
  {
      player.anims.play('turn');
  }
}
function render() {
    game.debug.spriteInfo(s, 20, 32);

}
