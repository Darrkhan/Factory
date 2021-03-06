const {player, machine, commande} = require("./class.js");

var player1 = new player(1, "");
var player2 = new player(2, "");
var player3 = new player(3, "");
var player4 = new player(4, "");


/**********************init collision**********************************/
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, exit;//mur
var pipe;
var m1 = new machine(1, "");
var m2 = new machine(2, "");
var m3 = new machine(3, "");//machines
var t1, t2, t3, t4, t5;//tables
var water, malt, levure, houblon;//ressources
var machine3 = new machine(4, ""); //machine broyage
var timer, timer1, timer2 ,timer3;
var dispEau, dispHoublon, dispMalt, dispSucre, dispMaltCon, dispValid, dispValid1, dispValid2, dispValid3, dispValid4, dispValid5, dispValid6, dispArrow, dispArrow1;
var poubelle1, poubelle2;
var control1, control2, control3, control4;
var car;
var random;
var temps, temps1, temps2, temps3, temps4;
var tempo;
var text;
console.log(player1.type, player2.type, player3.type, player4.type);
var indicator1, indicator2;
var cursors;
var liste = [];
var commande1 = new commande("");
var commande2 = new commande("");
var commande3 = new commande("");
var commande4 = new commande("");
var probleme = 0;
var score;

class map2 extends Phaser.Scene{
  constructor(){
    super("map2");
  }

  preload(){
    //PRELOAD MAP TITLED

    this.load.tilemapTiledJSON('map2', 'assets/tilemaps/Map2.json');
    this.load.image('tiles2', 'assets/tilesets/asset2.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/1erMonde.json');
    this.load.spritesheet('dude', 'assets/images/perso.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('dude1', 'assets/images/persoB.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('dude2', 'assets/images/persoC.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('dude3', 'assets/images/persoD.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('control1', 'assets/images/controlPerso.png', { frameWidth: 35, frameHeight: 35 });
    this.load.spritesheet('control2', 'assets/images/controlPersoB.png', { frameWidth: 35, frameHeight: 35 });
    this.load.spritesheet('control3', 'assets/images/controlPersoC.png', { frameWidth: 35, frameHeight: 35 });
    this.load.spritesheet('control4', 'assets/images/controlPersoD.png', { frameWidth: 35, frameHeight: 35 });
    this.load.image('machine3', 'assets/images/machine3.png');
    this.load.image('poubelle1', 'assets/images/poubelle.png');
    this.load.spritesheet('timer', 'assets/images/chrono.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispEau', 'assets/images/dispEau.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispHoublon', 'assets/images/dispHoublon.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispMalt', 'assets/images/dispMalt.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispMaltCon', 'assets/images/dispMaltCon.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispSucre', 'assets/images/dispSucre.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispValid', 'assets/images/dispValid.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispArrow', 'assets/images/dispArrow.png', { frameWidth: 50, frameHeight: 25 });
    this.load.spritesheet('dispChoice', 'assets/images/dispChoice.png', { frameWidth: 151.3, frameHeight: 80 });
    /*'''''''''''''''''''ressources'''''''''''''''''*/
    this.load.image('houblon', 'assets/images/pot_houblon.png');
    this.load.image('levure', 'assets/images/pot_levure.png');
    this.load.image('malt', 'assets/images/pot_malt.png');
    this.load.image('water', 'assets/images/pot_eau.png');
  }

  create(){
    /***************************************WALL*********************************************/

    /*###########################top######################*/
    w1 = this.add.rectangle(0, 0, 4000, 120, 0.2);
    this.matter.add.gameObject(w1).setStatic(true);

    /*###########################left######################*/
    w2 = this.add.rectangle(0, 160, 50, 300, 0.2);
    this.matter.add.gameObject(w2).setStatic(true);
    w3 = this.add.rectangle(0, 490, 320, 50, 0.2);
    this.matter.add.gameObject(w3).setStatic(true);
    w4 = this.add.rectangle(0, 336, 320, 54, 0.2);
    this.matter.add.gameObject(w4).setStatic(true);
    w5 = this.add.rectangle(0, 700, 50, 460, 0.2);
    this.matter.add.gameObject(w5).setStatic(true);
    exit = this.add.rectangle(0, 420, 100, 115, 0.2);
    this.matter.add.gameObject(exit).setStatic(true);

    /*###########################bot######################*/

    w6 = this.add.rectangle(0, 973, 4000, 100, 0.2);
    this.matter.add.gameObject(w6).setStatic(true);

    /*###########################right######################*/

    w9 = this.add.rectangle(1908, 0, 20, 1950, 0.2);
    this.matter.add.gameObject(w9).setStatic(true);
    w11 = this.add.rectangle(1820, 300, 170, 300, 0.2);
    this.matter.add.gameObject(w11).setStatic(true);

    /*###########################middle######################*/
    w7 = this.add.rectangle(490, 700, 20, 130, 0.2);
    this.matter.add.gameObject(w7).setStatic(true);
    w10 = this.add.rectangle(1200, 644, 1440, 55, 0.2);
    this.matter.add.gameObject(w10).setStatic(true);

    /*###########################table######################*/
    t1 = this.add.rectangle(955, 535, 960, 75, 0.2);
    this.matter.add.gameObject(t1).setStatic(true);
    t2 = this.add.rectangle(955, 380, 960, 75, 0.2);
    this.matter.add.gameObject(t2).setStatic(true);
    t3 = this.add.rectangle(1516, 505, 60, 85, 0.2);
    this.matter.add.gameObject(t3).setStatic(true);
    t4 = this.add.rectangle(1516, 353, 60, 85, 0.2);
    this.matter.add.gameObject(t4).setStatic(true);

    /*###########################machines######################*/
    m1.img = this.add.rectangle(720, 80, 160, 90, 0.2);
    this.matter.add.gameObject(m1.img).setStatic(true);
    m2.img = this.add.rectangle(1036, 80, 160, 90, 0.2);
    this.matter.add.gameObject(m2.img).setStatic(true);
    m3.img = this.add.rectangle(1360, 80, 160, 90, 0.2);
    this.matter.add.gameObject(m3.img).setStatic(true);
    pipe = this.add.rectangle(1020, 80, 735, 20, 0.2);
    this.matter.add.gameObject(pipe).setStatic(true);

    /*-----------------pointer coord---------------------*/
    this.pointer = this.input.activePointer;

    /***************************************MAP**********************************************/
    const map2 = this.make.tilemap({ key : 'map2'});
    const tileset2 = map2.addTilesetImage('asset2', 'tiles2');
    const firstlayer2 = map2.createLayer('Sol', tileset2);
    const slayer2 = map2.createLayer('Mur', tileset2);
    const qlayer2 = map2.createLayer('Machine', tileset2);
    const clayer2 = map2.createLayer('Decor', tileset2);
    firstlayer2.scaleX = 1.065;
    firstlayer2.scaleY = 1.025;

    slayer2.scaleX = 1.065;
    slayer2.scaleY = 1.025;

    qlayer2.scaleX = 1.065;
    qlayer2.scaleY = 1.025;

    clayer2.scaleX = 1.065;
    clayer2.scaleY = 1.025;

    player1.img = this.matter.add.sprite(300, 420, 'dude');
    player2.img = this.matter.add.sprite(300, 570, 'dude1');
    player3.img = this.matter.add.sprite(300, 720, 'dude2');
    player4.img = this.matter.add.sprite(300, 870, 'dude3');
    timer = this.add.sprite(450, 40, 'timer');
    timer1 = this.add.sprite(762, 520, 'timer');
    timer2 = this.add.sprite(1255, 520, 'timer');
    timer3 = this.add.sprite(1735, 520, 'timer');
    dispMalt = this.add.sprite(350, 40, 'dispMalt');
    dispEau = this.add.sprite(673, 520, 'dispEau');
    dispMaltCon = this.add.sprite(673, 560, 'dispMaltCon');
    dispSucre = this.add.sprite(1618, 540, 'dispSucre');
    dispHoublon = this.add.sprite(1140, 540, 'dispHoublon');
    dispValid = this.add.sprite(450, 80, 'dispValid');
    dispValid1 = this.add.sprite(762, 560, 'dispValid');
    dispValid2 = this.add.sprite(1255, 560, 'dispValid');
    dispValid3 = this.add.sprite(1735, 560, 'dispValid');
    dispValid4 = this.add.sprite(1153, 82, 'dispValid');
    dispValid5 = this.add.sprite(1100, 540, 'dispValid');
    dispValid6 = this.add.sprite(1578, 540, 'dispValid');
    dispArrow = this.add.sprite(830, 540, 'dispArrow');
    dispArrow1 = this.add.sprite(1300, 540, 'dispArrow');
    commande1.img = this.add.sprite(1200, 1000, 'dispChoice');
    commande2.img = this.add.sprite(1400, 1000, 'dispChoice');
    commande3.img = this.add.sprite(1600, 1000, 'dispChoice');
    commande4.img = this.add.sprite(1800, 1000, 'dispChoice');
    player1.inv = 0;
    player2.inv = 0;
    player3.inv = 0;
    player4.inv = 0;
    m1.inv = 0;
    m2.inv = 0;
    m3.inv = 0;
    m1.timer = 0;
    m2.timer = 0;
    m3.timer = 0;
    machine3.inv = 0;
    control1 = this.add.sprite(25, 1025, 'control1');
    control2 = this.add.sprite(65, 1025, 'control2');
    control3 = this.add.sprite(105, 1025, 'control3');
    control4 = this.add.sprite(145, 1025, 'control4');
    player1.pad = this.input.gamepad.getPad(0);
    player2.pad = this.input.gamepad.getPad(1);
    player3.pad = this.input.gamepad.getPad(2);
    player4.pad = this.input.gamepad.getPad(3);
    score = 0;

    /***************************************test wall*******************************************************/
    water = this.matter.add.image(700, 690, 'water').setStatic(true);
    levure = this.matter.add.image(830, 690, 'levure').setStatic(true);
    houblon = this.matter.add.image(960, 690, 'houblon').setStatic(true);
    malt = this.matter.add.image(1090, 690, 'malt').setStatic(true);
    machine3.img = this.matter.add.image(400, 75, 'machine3').setStatic(true);
    poubelle1 = this.add.rectangle(555, 682, 40, 50, 0.2);
    this.matter.add.gameObject(poubelle1).setStatic(true);
    poubelle2 = this.add.rectangle(1832, 682, 42, 50, 0.2);
    this.matter.add.gameObject(poubelle2).setStatic(true);
    //timer = this.matter.add.image(675, 545, 'timer').setStatic(true);

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

  //------------------------PLAYER 1----------------------------------------------------------------------------------------------------------------------------------------
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 0 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnLevure',
        frames: [ { key: 'dude', frame: 16 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnHoublon',
        frames: [ { key: 'dude', frame: 32 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMalt',
        frames: [ { key: 'dude', frame: 48 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMaltCon',
        frames: [ { key: 'dude', frame: 64 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnEau',
        frames: [ { key: 'dude', frame: 80 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnCage',
        frames: [ { key: 'dude', frame: 96 } ],
        frameRate: 20
    });
  //Marche Normale
    this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
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
    //Marche Levure
    this.anims.create({
        key: 'downLevure',
        frames: this.anims.generateFrameNumbers('dude', { start: 16, end: 19 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftLevure',
        frames: this.anims.generateFrameNumbers('dude', { start: 20, end: 23 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightLevure',
        frames: this.anims.generateFrameNumbers('dude', { start: 24, end: 27 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upLevure',
        frames: this.anims.generateFrameNumbers('dude', { start: 28, end: 31 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Houblon
    this.anims.create({
        key: 'downHoublon',
        frames: this.anims.generateFrameNumbers('dude', { start: 32, end: 35 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftHoublon',
        frames: this.anims.generateFrameNumbers('dude', { start: 36, end: 39 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightHoublon',
        frames: this.anims.generateFrameNumbers('dude', { start: 40, end: 43 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upHoublon',
        frames: this.anims.generateFrameNumbers('dude', { start: 44, end: 47 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt
    this.anims.create({
        key: 'downMalt',
        frames: this.anims.generateFrameNumbers('dude', { start: 48, end: 51 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMalt',
        frames: this.anims.generateFrameNumbers('dude', { start: 52, end: 55 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMalt',
        frames: this.anims.generateFrameNumbers('dude', { start: 56, end: 59 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMalt',
        frames: this.anims.generateFrameNumbers('dude', { start: 60, end: 63 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt Concass??
    this.anims.create({
        key: 'downMaltCon',
        frames: this.anims.generateFrameNumbers('dude', { start: 64, end: 67 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMaltCon',
        frames: this.anims.generateFrameNumbers('dude', { start: 68, end: 71 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMaltCon',
        frames: this.anims.generateFrameNumbers('dude', { start: 72, end: 75 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMaltCon',
        frames: this.anims.generateFrameNumbers('dude', { start: 76, end: 79 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Eau
    this.anims.create({
        key: 'downEau',
        frames: this.anims.generateFrameNumbers('dude', { start: 80, end: 83 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftEau',
        frames: this.anims.generateFrameNumbers('dude', { start: 84, end: 87 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightEau',
        frames: this.anims.generateFrameNumbers('dude', { start: 88, end: 91 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upEau',
        frames: this.anims.generateFrameNumbers('dude', { start: 92, end: 95 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Cagette
    this.anims.create({
        key: 'downCage',
        frames: this.anims.generateFrameNumbers('dude', { start: 96, end: 99 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftCage',
        frames: this.anims.generateFrameNumbers('dude', { start: 100, end: 103 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightCage',
        frames: this.anims.generateFrameNumbers('dude', { start: 104, end: 107 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upCage',
        frames: this.anims.generateFrameNumbers('dude', { start: 108, end: 111 }),
        frameRate: 10,
        repeat: -1
    });
    cursors = this.input.keyboard.createCursorKeys();
  //------------------------PLAYER 2-----------------------------------------------------------------------------------------------------------------------------------------------
    this.anims.create({
        key: 'turn1',
        frames: [ { key: 'dude1', frame: 0 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnLevure1',
        frames: [ { key: 'dude1', frame: 16 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnHoublon1',
        frames: [ { key: 'dude1', frame: 32 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMalt1',
        frames: [ { key: 'dude1', frame: 48 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMaltCon1',
        frames: [ { key: 'dude1', frame: 64 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnEau1',
        frames: [ { key: 'dude1', frame: 80 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnCage1',
        frames: [ { key: 'dude1', frame: 96 } ],
        frameRate: 20
    });
  //Marche Normale
    this.anims.create({
        key: 'down1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'left1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
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
    //Marche Levure
    this.anims.create({
        key: 'downLevure1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 16, end: 19 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftLevure1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 20, end: 23 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightLevure1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 24, end: 27 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upLevure1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 28, end: 31 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Houblon
    this.anims.create({
        key: 'downHoublon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 32, end: 35 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftHoublon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 36, end: 39 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightHoublon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 40, end: 43 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upHoublon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 44, end: 47 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt
    this.anims.create({
        key: 'downMalt1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 48, end: 51 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMalt1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 52, end: 55 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMalt1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 56, end: 59 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMalt1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 60, end: 63 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt Concass??
    this.anims.create({
        key: 'downMaltCon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 64, end: 67 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMaltCon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 68, end: 71 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMaltCon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 72, end: 75 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMaltCon1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 76, end: 79 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Eau
    this.anims.create({
        key: 'downEau1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 80, end: 83 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftEau1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 84, end: 87 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightEau1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 88, end: 91 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upEau1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 92, end: 95 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Cagette
    this.anims.create({
        key: 'downCage1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 96, end: 99 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftCage1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 100, end: 103 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightCage1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 104, end: 107 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upCage1',
        frames: this.anims.generateFrameNumbers('dude1', { start: 108, end: 111 }),
        frameRate: 10,
        repeat: -1
    });
  //------------------------PLAYER 3-----------------------------------------------------------------------------------------------------------------------------------------------
    this.anims.create({
        key: 'turn2',
        frames: [ { key: 'dude2', frame: 0 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnLevure2',
        frames: [ { key: 'dude2', frame: 16 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnHoublon2',
        frames: [ { key: 'dude2', frame: 32 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMalt2',
        frames: [ { key: 'dude2', frame: 48 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMaltCon2',
        frames: [ { key: 'dude2', frame: 64 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnEau2',
        frames: [ { key: 'dude2', frame: 80 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnCage2',
        frames: [ { key: 'dude2', frame: 96 } ],
        frameRate: 20
    });
  //Marche Normale
    this.anims.create({
        key: 'down2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'left2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 8, end: 11 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 12, end: 15 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Levure
    this.anims.create({
        key: 'downLevure2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 16, end: 19 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftLevure2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 20, end: 23 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightLevure2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 24, end: 27 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upLevure2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 28, end: 31 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Houblon
    this.anims.create({
        key: 'downHoublon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 32, end: 35 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftHoublon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 36, end: 39 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightHoublon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 40, end: 43 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upHoublon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 44, end: 47 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt
    this.anims.create({
        key: 'downMalt2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 48, end: 51 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMalt2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 52, end: 55 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMalt2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 56, end: 59 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMalt2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 60, end: 63 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt Concass??
    this.anims.create({
        key: 'downMaltCon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 64, end: 67 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMaltCon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 68, end: 71 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMaltCon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 72, end: 75 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMaltCon2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 76, end: 79 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Eau
    this.anims.create({
        key: 'downEau2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 80, end: 83 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftEau2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 84, end: 87 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightEau2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 88, end: 91 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upEau2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 92, end: 95 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Cagette
    this.anims.create({
        key: 'downCage2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 96, end: 99 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftCage2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 100, end: 103 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightCage2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 104, end: 107 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upCage2',
        frames: this.anims.generateFrameNumbers('dude2', { start: 108, end: 111 }),
        frameRate: 10,
        repeat: -1
    });
  //------------------------PLAYER 4-----------------------------------------------------------------------------------------------------------------------------------------------
    this.anims.create({
        key: 'turn3',
        frames: [ { key: 'dude3', frame: 0 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnLevure3',
        frames: [ { key: 'dude3', frame: 16 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnHoublon3',
        frames: [ { key: 'dude3', frame: 32 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMalt3',
        frames: [ { key: 'dude3', frame: 48 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnMaltCon3',
        frames: [ { key: 'dude3', frame: 64 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnEau3',
        frames: [ { key: 'dude3', frame: 80 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'turnCage3',
        frames: [ { key: 'dude3', frame: 96 } ],
        frameRate: 20
    });
  //Marche Normale
    this.anims.create({
        key: 'down3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'left3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 8, end: 11 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'up3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 12, end: 15 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Levure
    this.anims.create({
        key: 'downLevure3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 16, end: 19 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftLevure3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 20, end: 23 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightLevure3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 24, end: 27 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upLevure3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 28, end: 31 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Houblon
    this.anims.create({
        key: 'downHoublon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 32, end: 35 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftHoublon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 36, end: 39 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightHoublon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 40, end: 43 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upHoublon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 44, end: 47 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt
    this.anims.create({
        key: 'downMalt3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 48, end: 51 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMalt3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 52, end: 55 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMalt3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 56, end: 59 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMalt3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 60, end: 63 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Malt Concass??
    this.anims.create({
        key: 'downMaltCon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 64, end: 67 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftMaltCon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 68, end: 71 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightMaltCon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 72, end: 75 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upMaltCon3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 76, end: 79 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Eau
    this.anims.create({
        key: 'downEau3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 80, end: 83 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftEau3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 84, end: 87 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightEau3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 88, end: 91 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upEau3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 92, end: 95 }),
        frameRate: 10,
        repeat: -1
    });
    //Marche Cagette
    this.anims.create({
        key: 'downCage3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 96, end: 99 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'leftCage3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 100, end: 103 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'rightCage3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 104, end: 107 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'upCage3',
        frames: this.anims.generateFrameNumbers('dude3', { start: 108, end: 111 }),
        frameRate: 10,
        repeat: -1
    });


  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ID COLLISIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  player1 = 20 | player2 = 21 | player3 = 22 | player4 = 23
  m1 = 16 | m2 = 17 | m3 = 18
  t1 = 12 | t2 = 13 | t3 = 14 | t4 = 15
  exit = 6
  water = 24 | levure = 25 | houblon = 26 | malt = 27
  machine3 = 28
  poubelle1 = 29 | poubelle2 = 30


  /!\ dans les if il faut mettre le plus petit id en premier (car phaser met le plus petit dans bodyA et le plus grand dans bodyB)
  */
    function formatTime(seconds){
      // Minutes
      var minutes = Math.floor(seconds/60);
      // Seconds
      var partInSeconds = seconds%60;
      // Adds left zeros to seconds
      partInSeconds = partInSeconds.toString().padStart(2,'0');
      // Returns formated time
      return `${minutes}:${partInSeconds}`;
    }
    function onEvent ()
    {
        this.initialTime -= 1; // One second
        text.setText(formatTime(this.initialTime));
        if (commande1.nom != undefined){
          commande1.temps -= 1; // One second
          commande1.text.setText(formatTime(commande1.temps));
        }
        if (commande2.nom != undefined){
          commande2.temps -= 1; // One second
          commande2.text.setText(formatTime(commande2.temps));
        }
        if (commande3.nom != undefined){
          commande3.temps -= 1; // One second
          commande3.text.setText(formatTime(commande3.temps));
        }
        if (commande4.nom != undefined){
          commande4.temps -= 1; // One second
          commande4.text.setText(formatTime(commande4.temps));
        }
    }

    commande1.temps = 50;
    commande2.temps = 0;
    commande3.temps = 0;
    commande4.temps = 0;

    this.initialTime = 180;
    var style = { font: "bold 150px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    text = this.add.text(800, 995, formatTime(this.initialTime));
    text.setFontSize(65);
    commande1.text = this.add.text(1200, 1040, formatTime(commande1.temps));
    commande1.text.setFontSize(30);
    commande2.text = this.add.text(1400, 1040, formatTime(commande2.temps));
    commande2.text.setFontSize(30);
    commande3.text = this.add.text(1600, 1040, formatTime(commande3.temps));
    commande3.text.setFontSize(30);
    commande4.text = this.add.text(1800, 1040, formatTime(commande4.temps));
    commande4.text.setFontSize(30);

    // Each 1000 ms call onEvent
    temps = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    function getRandomCommande(liste){
      random = getRandomInt(4);
      if(random == 0){
        liste.push("biereHoublonLevure");
      }
      else if(random == 1){
        liste.push("biereHoublonNoLevure");
      }
      else if(random == 2){
        liste.push("biereNoHoublonLevure");
      }
      else if(random == 3){
        liste.push("biereNoHoublonNoLevure");
      }
    }
    getRandomCommande(liste);
    console.log(commande1.nom);

    function getRootBody(body) {
        if (body.parent === body) {
            return body;
        }
        while (body.parent !== body) {
            body = body.parent;
        }
        return body;
    }
    console.log(liste);
  }

  update(){

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
            if(player1.inv == "levure"){
              player1.img.anims.play('leftLevure',true);
            }
            else if(player1.inv == "houblon"){
              player1.img.anims.play('leftHoublon',true);
            }
            else if(player1.inv == "malt"){
              player1.img.anims.play('leftMalt',true);
            }
            else if(player1.inv == "maltCon"){
              player1.img.anims.play('leftMaltCon',true);
            }
            else if(player1.inv == "eau"){
              player1.img.anims.play('leftEau',true);
            }
            else if((player1.inv == "biereHoublonLevure") || (player1.inv == "biereNoHoublonLevure") || (player1.inv == "biereHoublonNoLevure") || (player1.inv == "biereNoHoublonNoLevure") ){
              player1.img.anims.play('leftCage',true);
            }
            else if(player1.inv == 0){
              player1.img.anims.play('left',true);
            }
          }
          else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
            if(player1.inv == "levure"){
              player1.img.anims.play('leftLevure',true);
            }
            else if(player1.inv == "houblon"){
              player1.img.anims.play('leftHoublon',true);
            }
            else if(player1.inv == "malt"){
              player1.img.anims.play('leftMalt',true);
            }
            else if(player1.inv == "maltCon"){
              player1.img.anims.play('leftMaltCon',true);
            }
            else if(player1.inv == "eau"){
              player1.img.anims.play('leftEau',true);
            }
            else if((player1.inv == "biereHoublonLevure") || (player1.inv == "biereNoHoublonLevure") || (player1.inv == "biereHoublonNoLevure") || (player1.inv == "biereNoHoublonNoLevure")){
              player1.img.anims.play('leftCage',true);
            }
            else if(player1.inv == 0){
              player1.img.anims.play('left',true);
            }
          }
          else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player1.inv == "levure"){
              player1.img.anims.play('upLevure',true);
            }
            else if(player1.inv == "houblon"){
              player1.img.anims.play('upHoublon',true);
            }
            else if(player1.inv == "malt"){
              player1.img.anims.play('upMalt',true);
            }
            else if(player1.inv == "maltCon"){
              player1.img.anims.play('upMaltCon',true);
            }
            else if(player1.inv == "eau"){
              player1.img.anims.play('upEau',true);
            }
            else if((player1.inv == "biereHoublonLevure") || (player1.inv == "biereNoHoublonLevure") || (player1.inv == "biereHoublonNoLevure") || (player1.inv == "biereNoHoublonNoLevure")){
              player1.img.anims.play('upCage',true);
            }
            else if(player1.inv == 0){
              player1.img.anims.play('up',true);
            }
          }
          else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player1.inv == "levure"){
              player1.img.anims.play('downLevure',true);
            }
            else if(player1.inv == "houblon"){
              player1.img.anims.play('downHoublon',true);
            }
            else if(player1.inv == "malt"){
              player1.img.anims.play('downMalt',true);
            }
            else if(player1.inv == "maltCon"){
              player1.img.anims.play('downMaltCon',true);
            }
            else if(player1.inv == "eau"){
              player1.img.anims.play('downEau',true);
            }
            else if((player1.inv == "biereHoublonLevure") || (player1.inv == "biereNoHoublonLevure") || (player1.inv == "biereHoublonNoLevure") || (player1.inv == "biereNoHoublonNoLevure")){
              player1.img.anims.play('downCage',true);
            }
            else if(player1.inv == 0){
              player1.img.anims.play('down',true);
            }
          }
          else if(axisV == 0 && axisH == 0){
            if(player1.inv == "levure"){
              player1.img.anims.play('turnLevure',true);
            }
            else if(player1.inv == "houblon"){
              player1.img.anims.play('turnHoublon',true);
            }
            else if(player1.inv == "malt"){
              player1.img.anims.play('turnMalt',true);
            }
            else if(player1.inv == "maltCon"){
              player1.img.anims.play('turnMaltCon',true);
            }
            else if(player1.inv == "eau"){
              player1.img.anims.play('turnEau',true);
            }
            else if((player1.inv == "biereHoublonLevure") || (player1.inv == "biereNoHoublonLevure") || (player1.inv == "biereHoublonNoLevure") || (player1.inv == "biereNoHoublonNoLevure")){
              player1.img.anims.play('turnCage',true);
            }
            else if(player1.inv == 0){
              player1.img.anims.play('turn',true);
            }
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
            if(player2.inv == "levure"){
              player2.img.anims.play('leftLevure1',true);
            }
            else if(player2.inv == "houblon"){
              player2.img.anims.play('leftHoublon1',true);
            }
            else if(player2.inv == "malt"){
              player2.img.anims.play('leftMalt1',true);
            }
            else if(player2.inv == "maltCon"){
              player2.img.anims.play('leftMaltCon1',true);
            }
            else if(player2.inv == "eau"){
              player2.img.anims.play('leftEau1',true);
            }
            else if((player2.inv == "biereHoublonLevure") || (player2.inv == "biereNoHoublonLevure") || (player2.inv == "biereHoublonNoLevure") || (player2.inv == "biereNoHoublonNoLevure") ){
              player2.img.anims.play('leftCage1',true);
            }
            else if(player2.inv == 0){
              player2.img.anims.play('left1',true);
            }
          }
          else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
            if(player2.inv == "levure"){
              player2.img.anims.play('leftLevure1',true);
            }
            else if(player2.inv == "houblon"){
              player2.img.anims.play('leftHoublon1',true);
            }
            else if(player2.inv == "malt"){
              player2.img.anims.play('leftMalt1',true);
            }
            else if(player2.inv == "maltCon"){
              player2.img.anims.play('leftMaltCon1',true);
            }
            else if(player2.inv == "eau"){
              player2.img.anims.play('leftEau1',true);
            }
            else if((player2.inv == "biereHoublonLevure") || (player1.inv == "biereNoHoublonLevure") || (player1.inv == "biereHoublonNoLevure") || (player1.inv == "biereNoHoublonNoLevure")){
              player2.img.anims.play('leftCage1',true);
            }
            else if(player2.inv == 0){
              player2.img.anims.play('left1',true);
            }
          }
          else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player2.inv == "levure"){
              player2.img.anims.play('upLevure1',true);
            }
            else if(player2.inv == "houblon"){
              player2.img.anims.play('upHoublon1',true);
            }
            else if(player2.inv == "malt"){
              player2.img.anims.play('upMalt1',true);
            }
            else if(player2.inv == "maltCon"){
              player2.img.anims.play('upMaltCon1',true);
            }
            else if(player2.inv == "eau"){
              player2.img.anims.play('upEau1',true);
            }
            else if((player2.inv == "biereHoublonLevure") || (player2.inv == "biereNoHoublonLevure") || (player2.inv == "biereHoublonNoLevure") || (player2.inv == "biereNoHoublonNoLevure")){
              player2.img.anims.play('upCage1',true);
            }
            else if(player2.inv == 0){
              player2.img.anims.play('up1',true);
            }
          }
          else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player2.inv == "levure"){
              player2.img.anims.play('downLevure1',true);
            }
            else if(player2.inv == "houblon"){
              player2.img.anims.play('downHoublon1',true);
            }
            else if(player2.inv == "malt"){
              player2.img.anims.play('downMalt1',true);
            }
            else if(player2.inv == "maltCon"){
              player2.img.anims.play('downMaltCon1',true);
            }
            else if(player2.inv == "eau"){
              player2.img.anims.play('downEau1',true);
            }
            else if((player2.inv == "biereHoublonLevure") || (player2.inv == "biereNoHoublonLevure") || (player2.inv == "biereHoublonNoLevure") || (player2.inv == "biereNoHoublonNoLevure")){
              player2.img.anims.play('downCage1',true);
            }
            else if(player2.inv == 0){
              player2.img.anims.play('down1',true);
            }
          }
          else if(axisV == 0 && axisH == 0){
            if(player2.inv == "levure"){
              player2.img.anims.play('turnLevure1',true);
            }
            else if(player2.inv == "houblon"){
              player2.img.anims.play('turnHoublon1',true);
            }
            else if(player2.inv == "malt"){
              player2.img.anims.play('turnMalt1',true);
            }
            else if(player2.inv == "maltCon"){
              player2.img.anims.play('turnMaltCon1',true);
            }
            else if(player2.inv == "eau"){
              player2.img.anims.play('turnEau1',true);
            }
            else if((player2.inv == "biereHoublonLevure") || (player2.inv == "biereNoHoublonLevure") || (player2.inv == "biereHoublonNoLevure") || (player2.inv == "biereNoHoublonNoLevure")){
              player2.img.anims.play('turnCage1',true);
            }
            else if(player2.inv == 0){
              player2.img.anims.play('turn1',true);
            }
          }
          player2.img.x += 4 * axisH;
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
            if(player3.inv == "levure"){
              player3.img.anims.play('leftLevur2',true);
            }
            else if(player3.inv == "houblon"){
              player3.img.anims.play('leftHoublon2',true);
            }
            else if(player3.inv == "malt"){
              player3.img.anims.play('leftMalt2',true);
            }
            else if(player3.inv == "maltCon"){
              player3.img.anims.play('leftMaltCon2',true);
            }
            else if(player3.inv == "eau"){
              player3.img.anims.play('leftEau2',true);
            }
            else if((player3.inv == "biereHoublonLevure") || (player3.inv == "biereNoHoublonLevure") || (player3.inv == "biereHoublonNoLevure") || (player3.inv == "biereNoHoublonNoLevure") ){
              player3.img.anims.play('leftCage2',true);
            }
            else if(player3.inv == 0){
              player3.img.anims.play('left2',true);
            }
          }
          else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
            if(player3.inv == "levure"){
              player3.img.anims.play('leftLevure2',true);
            }
            else if(player3.inv == "houblon"){
              player3.img.anims.play('leftHoublon2',true);
            }
            else if(player3.inv == "malt"){
              player3.img.anims.play('leftMalt2',true);
            }
            else if(player3.inv == "maltCon"){
              player3.img.anims.play('leftMaltCon2',true);
            }
            else if(player3.inv == "eau"){
              player3.img.anims.play('leftEau2',true);
            }
            else if((player3.inv == "biereHoublonLevure") || (player3.inv == "biereNoHoublonLevure") || (player3.inv == "biereHoublonNoLevure") || (player3.inv == "biereNoHoublonNoLevure")){
              player3.img.anims.play('leftCage2',true);
            }
            else if(player3.inv == 0){
              player3.img.anims.play('left2',true);
            }
          }
          else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player3.inv == "levure"){
              player3.img.anims.play('upLevure2',true);
            }
            else if(player3.inv == "houblon"){
              player3.img.anims.play('upHoublon2',true);
            }
            else if(player3.inv == "malt"){
              player3.img.anims.play('upMalt2',true);
            }
            else if(player3.inv == "maltCon"){
              player3.img.anims.play('upMaltCon2',true);
            }
            else if(player3.inv == "eau"){
              player3.img.anims.play('upEau2',true);
            }
            else if((player3.inv == "biereHoublonLevure") || (player3.inv == "biereNoHoublonLevure") || (player3.inv == "biereHoublonNoLevure") || (player3.inv == "biereNoHoublonNoLevure")){
              player3.img.anims.play('upCage2',true);
            }
            else if(player3.inv == 0){
              player3.img.anims.play('up2',true);
            }
          }
          else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player3.inv == "levure"){
              player3.img.anims.play('downLevure2',true);
            }
            else if(player3.inv == "houblon"){
              player3.img.anims.play('downHoublon2',true);
            }
            else if(player3.inv == "malt"){
              player3.img.anims.play('downMalt2',true);
            }
            else if(player3.inv == "maltCon"){
              player3.img.anims.play('downMaltCon2',true);
            }
            else if(player3.inv == "eau"){
              player3.img.anims.play('downEau2',true);
            }
            else if((player3.inv == "biereHoublonLevure") || (player3.inv == "biereNoHoublonLevure") || (player3.inv == "biereHoublonNoLevure") || (player3.inv == "biereNoHoublonNoLevure")){
              player3.img.anims.play('downCage2',true);
            }
            else if(player3.inv == 0){
              player3.img.anims.play('down2',true);
            }
          }
          else if(axisV == 0 && axisH == 0){
            if(player3.inv == "levure"){
              player3.img.anims.play('turnLevure2',true);
            }
            else if(player3.inv == "houblon"){
              player3.img.anims.play('turnHoublon2',true);
            }
            else if(player3.inv == "malt"){
              player3.img.anims.play('turnMalt2',true);
            }
            else if(player3.inv == "maltCon"){
              player3.img.anims.play('turnMaltCon2',true);
            }
            else if(player3.inv == "eau"){
              player3.img.anims.play('turnEau2',true);
            }
            else if((player3.inv == "biereHoublonLevure") || (player3.inv == "biereNoHoublonLevure") || (player3.inv == "biereHoublonNoLevure") || (player3.inv == "biereNoHoublonNoLevure")){
              player3.img.anims.play('turnCage2',true);
            }
            else if(player3.inv == 0){
              player3.img.anims.play('turn2',true);
            }
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
            if(player4.inv == "levure"){
              player4.img.anims.play('leftLevure3',true);
            }
            else if(player4.inv == "houblon"){
              player4.img.anims.play('leftHoublon3',true);
            }
            else if(player4.inv == "malt"){
              player4.img.anims.play('leftMalt3',true);
            }
            else if(player4.inv == "maltCon"){
              player4.img.anims.play('leftMaltCon3',true);
            }
            else if(player4.inv == "eau"){
              player4.img.anims.play('leftEau3',true);
            }
            else if((player4.inv == "biereHoublonLevure") || (player4.inv == "biereNoHoublonLevure") || (player4.inv == "biereHoublonNoLevure") || (player4.inv == "biereNoHoublonNoLevure") ){
              player4.img.anims.play('leftCage3',true);
            }
            else if(player4.inv == 0){
              player4.img.anims.play('left3',true);
            }
          }
          else if((axisH > 0) && (axisH <= 1) && (axisV > -0.5) && (axisV <= 0.5)){
            if(player4.inv == "levure"){
              player4.img.anims.play('leftLevure3',true);
            }
            else if(player4.inv == "houblon"){
              player4.img.anims.play('leftHoublon3',true);
            }
            else if(player4.inv == "malt"){
              player4.img.anims.play('leftMalt3',true);
            }
            else if(player4.inv == "maltCon"){
              player4.img.anims.play('leftMaltCon3',true);
            }
            else if(player4.inv == "eau"){
              player4.img.anims.play('leftEau3',true);
            }
            else if((player4.inv == "biereHoublonLevure") || (player4.inv == "biereNoHoublonLevure") || (player4.inv == "biereHoublonNoLevure") || (player4.inv == "biereNoHoublonNoLevure")){
              player4.img.anims.play('leftCage3',true);
            }
            else if(player4.inv == 0){
              player4.img.anims.play('left3',true);
            }
          }
          else if((axisV > -1) && (axisV < 0) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player4.inv == "levure"){
              player4.img.anims.play('upLevure3',true);
            }
            else if(player4.inv == "houblon"){
              player4.img.anims.play('upHoublon3',true);
            }
            else if(player4.inv == "malt"){
              player4.img.anims.play('upMalt3',true);
            }
            else if(player4.inv == "maltCon"){
              player4.img.anims.play('upMaltCon3',true);
            }
            else if(player4.inv == "eau"){
              player4.img.anims.play('upEau3',true);
            }
            else if((player4.inv == "biereHoublonLevure") || (player4.inv == "biereNoHoublonLevure") || (player4.inv == "biereHoublonNoLevure") || (player4.inv == "biereNoHoublonNoLevure")){
              player4.img.anims.play('upCage3',true);
            }
            else if(player4.inv == 0){
              player4.img.anims.play('up3',true);
            }
          }
          else if((axisV > 0) && (axisV <= 1) && (axisH > -0.5) && (axisH <= 0.5)){
            if(player4.inv == "levure"){
              player4.img.anims.play('downLevure3',true);
            }
            else if(player4.inv == "houblon"){
              player4.img.anims.play('downHoublon3',true);
            }
            else if(player4.inv == "malt"){
              player4.img.anims.play('downMalt3',true);
            }
            else if(player4.inv == "maltCon"){
              player4.img.anims.play('downMaltCon3',true);
            }
            else if(player4.inv == "eau"){
              player4.img.anims.play('downEau3',true);
            }
            else if((player4.inv == "biereHoublonLevure") || (player4.inv == "biereNoHoublonLevure") || (player4.inv == "biereHoublonNoLevure") || (player4.inv == "biereNoHoublonNoLevure")){
              player4.img.anims.play('downCage3',true);
            }
            else if(player4.inv == 0){
              player4.img.anims.play('down3',true);
            }
          }
          else if(axisV == 0 && axisH == 0){
            if(player4.inv == "levure"){
              player4.img.anims.play('turnLevure3',true);
            }
            else if(player4.inv == "houblon"){
              player4.img.anims.play('turnHoublon3',true);
            }
            else if(player4.inv == "malt"){
              player4.img.anims.play('turnMalt3',true);
            }
            else if(player4.inv == "maltCon"){
              player4.img.anims.play('turnMaltCon3',true);
            }
            else if(player4.inv == "eau"){
              player4.img.anims.play('turnEau3',true);
            }
            else if((player4.inv == "biereHoublonLevure") || (player4.inv == "biereNoHoublonLevure") || (player4.inv == "biereHoublonNoLevure") || (player4.inv == "biereNoHoublonNoLevure")){
              player4.img.anims.play('turnCage3',true);
            }
            else if(player4.inv == 0){
              player4.img.anims.play('turn3',true);
            }
          }
          player4.img.x += 10 * axisH;
          player4.img.y += 10 * axisV;

          player4.img.flipX = (axisH > 0);
      }
    }
    else {
      control4.anims.play('manette4',true);
    }
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    function getRandomCommande(liste){
      random = getRandomInt(4);
      if(random == 0){
        liste.push("biereHoublonLevure");
      }
      else if(random == 1){
        liste.push("biereHoublonNoLevure");
      }
      else if(random == 2){
        liste.push("biereNoHoublonLevure");
      }
      else if(random == 3){
        liste.push("biereNoHoublonNoLevure");
      }
    }
    commande1.nom = liste[0];
    commande2.nom = liste[1];
    commande3.nom = liste[2];
    commande4.nom = liste[3];
    if(commande1.temps <= 0){
      liste.shift();
      score -= 5;
      commande1.temps = commande2.temps;
      commande2.temps = commande3.temps;
      commande3.temps = commande4.temps;
      commande4.temps = 0;
      commande4.img.setFrame(0);
    }
    if (liste.length == 0){
      getRandomCommande(liste);
      commande1.temps = 50;
    }
    if ((liste.length == 1) && (commande1.temps <= 35)){
      getRandomCommande(liste);
      commande2.temps = 50;
    }
    if ((liste.length == 2) && (commande2.temps <= 35)){
      getRandomCommande(liste);
      commande3.temps = 50;
    }
    if ((liste.length == 3) && (commande3.temps <= 35)){
      getRandomCommande(liste);
      commande4.temps = 50;
    }
    if (commande1.nom == undefined){
      commande1.img.setFrame(0);
    }
    else if (commande1.nom == "biereHoublonLevure"){
        commande1.img.setFrame(1);
    }
    else if (commande1.nom == "biereHoublonNoLevure"){
        commande1.img.setFrame(2);
    }
    else if (commande1.nom == "biereNoHoublonLevure"){
        commande1.img.setFrame(3);
    }
    else if (commande1.nom == "biereNoHoublonNoLevure"){
        commande1.img.setFrame(4);
    }
    if (commande2.nom == undefined){
      commande2.img.setFrame(0);
    }
    else if (commande2.nom == "biereHoublonLevure"){
        commande2.img.setFrame(1);
    }
    else if (commande2.nom == "biereHoublonNoLevure"){
        commande2.img.setFrame(2);
    }
    else if (commande2.nom == "biereNoHoublonLevure"){
        commande2.img.setFrame(3);
    }
    else if (commande2.nom == "biereNoHoublonNoLevure"){
        commande2.img.setFrame(4);
    }
    if (commande3.nom == undefined){
      commande3.img.setFrame(0);
    }
    else if (commande3.nom == "biereHoublonLevure"){
        commande3.img.setFrame(1);
    }
    else if (commande3.nom == "biereHoublonNoLevure"){
        commande3.img.setFrame(2);
    }
    else if (commande3.nom == "biereNoHoublonLevure"){
        commande3.img.setFrame(3);
    }
    else if (commande3.nom == "biereNoHoublonNoLevure"){
        commande3.img.setFrame(4);
    }
    if (commande4.nom == undefined){
      commande4.img.setFrame(0);
    }
    else if (commande4.nom == "biereHoublonLevure"){
        commande4.img.setFrame(1);
    }
    else if (commande4.nom == "biereHoublonNoLevure"){
        commande4.img.setFrame(2);
    }
    else if (commande4.nom == "biereNoHoublonLevure"){
        commande4.img.setFrame(3);
    }
    else if (commande4.nom == "biereNoHoublonNoLevure"){
        commande4.img.setFrame(4);
    }
  }
}

module.exports = {map2};
