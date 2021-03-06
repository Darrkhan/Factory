const {player, machine, commande} = require("./class.js");

var player1 = new player(1, "");
var player2 = new player(2, "");
var player3 = new player(3, "");
var player4 = new player(4, "");


/**********************init collision**********************************/
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w12, exit;//mur
var robot1, robot2, robot3, robot4;
var pipe1, pipe2;
var col1, col2, col3;
var poubelle1, poubelle2, poubelle3;
var m1 = new machine(1, "");
var m2 = new machine(2, "");
var m3 = new machine(3, "");//machines
var t1, t2, t3, t4, t5;//tables
var water, water2, malt, malt2, levure, levure2, houblon, houblon2;//ressources
var machine3 = new machine(4, ""); //machine broyage
var machine4 = new machine(5, "");
var m5 = new machine(6, "");
var m6 = new machine(7, "");
var m7 = new machine(8, "");
var timer, timer1, timer2 ,timer3, timer4, timer5, timer6;
var dispEau, dispHoublon, dispMalt, dispSucre, dispMaltCon, dispValid, dispValid1, dispValid2, dispValid3, dispValid4, dispValid5, dispValid6, dispArrow, dispArrow1;
var dispEau2, dispHoublon2, dispMalt2, dispSucre2, dispArrow2, dispArrow3;
var poubelle;
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
var commande1 = new commande("", 30);
var commande2 = new commande("", 30);
var commande3 = new commande("", 30);
var commande4 = new commande("", 30);
var probleme = 0;

class map4 extends Phaser.Scene{
  constructor(){
    super("map4");
  }
  preload(){
    //PRELOAD MAP TITLED
    this.load.image('tiles', 'assets/tilesets/asset4.png');

    this.load.image('reservoir', 'assets/images/Reservoir.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/Map4.json');
    this.load.spritesheet('dude', 'assets/images/perso.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('dude1', 'assets/images/persoB.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('dude2', 'assets/images/persoC.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('dude3', 'assets/images/persoD.png', { frameWidth: 51.25, frameHeight: 54.67 });
    this.load.spritesheet('control1', 'assets/images/controlPerso.png', { frameWidth: 35, frameHeight: 35 });
    this.load.spritesheet('control2', 'assets/images/controlPersoB.png', { frameWidth: 35, frameHeight: 35 });
    this.load.spritesheet('control3', 'assets/images/controlPersoC.png', { frameWidth: 35, frameHeight: 35 });
    this.load.spritesheet('control4', 'assets/images/controlPersoD.png', { frameWidth: 35, frameHeight: 35 });
    this.load.image('machine3', 'assets/images/machine3.png');
    this.load.image('machine4', 'assets/images/machine4.png');
    this.load.image('poubelle', 'assets/images/poubelle.png');
    this.load.spritesheet('timer', 'assets/images/chrono.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispEau', 'assets/images/dispEau.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispHoublon', 'assets/images/dispHoublon.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispMalt', 'assets/images/dispMalt.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispMaltCon', 'assets/images/dispMaltCon.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispSucre', 'assets/images/dispSucre.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispValid', 'assets/images/dispValid.png', { frameWidth: 44, frameHeight: 50 });
    this.load.spritesheet('dispArrow', 'assets/images/dispArrow.png', { frameWidth: 50, frameHeight: 25 });
    this.load.spritesheet('dispChoice', 'assets/images/dispChoice.png', { frameWidth: 151.3, frameHeight: 80 });
    this.load.image('robot1', 'assets/images/bras_2.png');
    this.load.image('robot2', 'assets/images/bras_3.png');
    this.load.image('robot3', 'assets/images/bras_4.png');
    /*'''''''''''''''''''ressources'''''''''''''''''*/
    this.load.image('houblon', 'assets/images/caisse-houblon.png');
    this.load.image('levure', 'assets/images/caisse-levure.png');
    this.load.image('malt', 'assets/images/caisse_malt.png');
    this.load.image('water', 'assets/images/caisse_eau.png');
  }
  create(){
    /***************************************WALL*********************************************/

    /*###########################top######################*/
    /***************************************test wall*******************************************************/
    w1 = this.add.rectangle(0, 0, 4000, 150, 0.2);
    this.matter.add.gameObject(w1).setStatic(true);

    /*###########################left######################*/
    w2 = this.add.rectangle(0, 470, 55, 1950, 0.2);
    this.matter.add.gameObject(w2).setStatic(true);

    w3 = this.add.rectangle(0, 490, 320, 86, 0.2);
    this.matter.add.gameObject(w3).setStatic(true);
    w4 = this.add.rectangle(0, 336, 320, 86, 0.2);
    this.matter.add.gameObject(w4).setStatic(true);


    /*###########################right######################*/
    w9 = this.add.rectangle(1908, 0, 35, 1950, 0.2);
    this.matter.add.gameObject(w9).setStatic(true);
    w11 = this.add.rectangle(1830, 425, 140, 550, 0.2);
    this.matter.add.gameObject(w11).setStatic(true);

    /*###########################bot######################*/
    w6 = this.add.rectangle(0, 960, 4000, 74, 0.2);
    this.matter.add.gameObject(w6).setStatic(true);


    /*###########################machines######################*/
    t1 = this.add.rectangle(1050, 535, 1100, 140, 0.2);
    this.matter.add.gameObject(t1).setStatic(true);
    t2 = this.add.rectangle(1050, 380, 1100, 140, 0.2);
    this.matter.add.gameObject(t2).setStatic(true);
    t3 = this.add.rectangle(460, 535, 90, 95, 0.2);//controle qualit?? 1
    this.matter.add.gameObject(t3).setStatic(true);//controle qualit?? 2
    t4 = this.add.rectangle(460, 380, 90, 95, 0.2);
    this.matter.add.gameObject(t4).setStatic(true);
    t5 = this.add.rectangle(56, 775, 60, 320, 0.2);
    this.matter.add.gameObject(t5).setStatic(true);

    m1.img = this.add.rectangle(715, 80, 150, 100, 0.2);
    this.matter.add.gameObject(m1.img).setStatic(true);
    m2.img = this.add.rectangle(1357, 80, 150, 100, 0.2);
    this.matter.add.gameObject(m2.img).setStatic(true);
    m3.img = this.add.rectangle(1040, 80, 150, 100, 0.2);
    this.matter.add.gameObject(m3.img).setStatic(true);
    m5.img = this.add.rectangle(715, 880, 150, 100, 0.2);
    this.matter.add.gameObject(m5.img).setStatic(true);
    m6.img = this.add.rectangle(1357, 880, 150, 100, 0.2);
    this.matter.add.gameObject(m6.img).setStatic(true);
    m7.img = this.add.rectangle(1040, 880, 150, 100, 0.2);
    this.matter.add.gameObject(m7.img).setStatic(true);

    pipe1 = this.add.rectangle(1249, 80, 1335, 20, 0.2);
    this.matter.add.gameObject(pipe1).setStatic(true);
    pipe2 = this.add.rectangle(1249, 880, 1335, 20, 0.2);
    this.matter.add.gameObject(pipe2).setStatic(true);

    /***************************************MAP**********************************************/
    const map = this.make.tilemap({ key : 'map'});
    const tileset = map.addTilesetImage('asset4', 'tiles');
    const firstlayer = map.createLayer('Sol', tileset);
    const slayer = map.createLayer('Mur', tileset);
    const qlayer = map.createLayer('Machine', tileset);
    const clayer = map.createLayer('Decor', tileset);
    firstlayer.scaleX = 1.065;
    firstlayer.scaleY = 1.025;

    slayer.scaleX = 1.065;
    slayer.scaleY = 1.025;

    qlayer.scaleX = 1.065;
    qlayer.scaleY = 1.025;

    clayer.scaleX = 1.065;
    clayer.scaleY = 1.025;

    player1.img = this.matter.add.sprite(340, 270, 'dude');
    player2.img = this.matter.add.sprite(390, 270, 'dude1');
    player3.img = this.matter.add.sprite(440, 270, 'dude2');
    player4.img = this.matter.add.sprite(490, 270, 'dude3');

    //#################top########################
    //machineconcassage
    dispMalt = this.add.sprite(550, 40, 'dispMalt');
    //machine1
    timer = this.add.sprite(800, 55, 'timer');
    dispValid = this.add.sprite(800, 95, 'dispValid');
    //machine2
    timer1 = this.add.sprite(1120, 55, 'timer');
    dispValid2 = this.add.sprite(1120, 95, 'dispValid');
    dispHoublon = this.add.sprite(950, 75, 'dispHoublon');
    //machine3
    dispValid3 = this.add.sprite(1440, 95, 'dispValid');
    timer3 = this.add.sprite(1440, 55, 'timer');
    dispSucre = this.add.sprite(1270, 75, 'dispSucre');

    dispArrow = this.add.sprite(30, 40, 'dispArrow');
    dispArrow1 = this.add.sprite(1300, 540, 'dispArrow');

    //##################bot########################
    //machine1
    timer4 = this.add.sprite(800, 855, 'timer');
    dispValid4 = this.add.sprite(800, 895, 'dispValid');
    //machine2
    timer5 = this.add.sprite(1120, 855, 'timer');
    dispValid5 = this.add.sprite(1120, 895, 'dispValid');
    dispHoublon = this.add.sprite(950, 885, 'dispHoublon');
    //machine3
    dispValid6 = this.add.sprite(1440, 895, 'dispValid');
    timer6 = this.add.sprite(1440, 855, 'timer');
    dispSucre2 = this.add.sprite(1270, 885, 'dispSucre');
    //machineconcassage
    dispMalt2 = this.add.sprite(550, 840, 'dispMalt');
    dispArrow2 = this.add.sprite(830, 540, 'dispArrow');
    dispArrow3 = this.add.sprite(1300, 540, 'dispArrow');


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
    machine3.inv = 0;
    control1 = this.add.sprite(25, 1025, 'control1');
    control2 = this.add.sprite(65, 1025, 'control2');
    control3 = this.add.sprite(105, 1025, 'control3');
    control4 = this.add.sprite(145, 1025, 'control4');
    player1.pad = this.input.gamepad.getPad(0);
    player2.pad = this.input.gamepad.getPad(1);
    player3.pad = this.input.gamepad.getPad(2);
    player4.pad = this.input.gamepad.getPad(3);









    /*###########################table######################*/





    robot1 = this.matter.add.image(1050, 130, 'robot1').setStatic(true);
    robot2 = this.matter.add.image(1370, 130, 'robot1').setStatic(true);
    robot3 = this.matter.add.image(1050, 780, 'robot1').setStatic(true);
    robot4 = this.matter.add.image(1370, 780, 'robot1').setStatic(true);

    water = this.matter.add.image(650, 150, 'water').setStatic(true);
    water2 = this.matter.add.image(650, 800, 'water').setStatic(true);
    levure = this.matter.add.image(1320, 150, 'levure').setStatic(true);
    levure2 = this.matter.add.image(1320, 800, 'levure').setStatic(true);
    houblon = this.matter.add.image(1000, 150, 'houblon').setStatic(true);
    houblon2 = this.matter.add.image(1000, 800, 'houblon').setStatic(true);
    malt = this.matter.add.image(540, 95, 'malt').setStatic(true);
    malt2 = this.matter.add.image(540, 895, 'malt').setStatic(true);
    machine3.img = this.matter.add.image(600, 75, 'machine3').setStatic(true);
    machine4.img = this.matter.add.image(600, 875, 'machine4').setStatic(true);

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
  player1 = 21 | player2 = 22 | player3 = 23 | player4 = 24

  //top
  m1 = 13 | m2 = 25 | m3 = 26
  concassage = 37
  //bot
  m5 = 16 | m6 = 27 | m7 = 28
  concassage = 37


  t1 = 8 | t2 = 9 | t3= 10 | t4 = 11


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
    }
    function onEvent1 ()
    {
        commande1.temps -= 1; // One second
        commande1.text.setText(formatTime(commande1.temps));
    }
    function onEvent2 ()
    {
        commande2.temps -= 1; // One second
        commande2.text.setText(formatTime(commande2.temps));
    }
    function onEvent3 ()
    {
        commande3.temps -= 1; // One second
        commande3.text.setText(formatTime(commande3.temps));
    }
    function onEvent4 ()
    {
        commande4.temps -= 1; // One second
        commande4.text.setText(formatTime(commande4.temps));
    }

    this.initialTime = 180;
    var style = { font: "bold 150px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    text = this.add.text(800, 995, formatTime(this.initialTime));
    text.setFontSize(65);
    commande1.text = this.add.text(1200, 1040, formatTime(commande1.temps));
    commande1.text.setFontSize(30);
    commande2.text = this.add.text(1800, 1040, formatTime(commande2.temps));
    commande2.text.setFontSize(30);
    commande3.text = this.add.text(1400, 1040, formatTime(commande3.temps));
    commande3.text.setFontSize(30);
    commande4.text = this.add.text(1600, 1040, formatTime(commande4.temps));
    commande4.text.setFontSize(30);
    //text.setTextBounds(800, 1030, 800, 100);

    // Each 1000 ms call onEvent
    temps = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
    temps1 = this.time.addEvent({ delay: 1000, callback: onEvent1, callbackScope: this, loop: true });
    temps2 = this.time.addEvent({ delay: 1000, callback: onEvent2, callbackScope: this, loop: true });
    temps3 = this.time.addEvent({ delay: 1000, callback: onEvent3, callbackScope: this, loop: true });
    temps4 = this.time.addEvent({ delay: 1000, callback: onEvent4, callbackScope: this, loop: true });


    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    for (let i = 0; i <= 20; i++){
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
    if (liste[0] == "biereHoublonLevure"){
        commande1.img.setFrame(1);
    }
    if (liste[0] == "biereHoublonNoLevure"){
        commande1.img.setFrame(2);
    }
    if (liste[0] == "biereNoHoublonLevure"){
        commande1.img.setFrame(3);
    }
    if (liste[0] == "biereNoHoublonNoLevure"){
        commande1.img.setFrame(4);
    }

    console.log(liste);
    console.log(liste[1]);
    console.log('inventaire joueur 1 : ', player1.inv);
    console.log('inventaire joueur 2 : ', player2.inv);
    console.log('inventaire joueur 3 : ', player3.inv);
    console.log('inventaire joueur 4 : ', player4.inv);
    console.log('inventaire broyeur : ', machine3.inv);
    console.log('inventaire machine 1 : ', m1.inv);
    console.log('inventaire machine 2 : ', m2.inv);
    console.log('inventaire machine 3 : ', m3.inv);

    this.matter.world.on('collisionstart', function (event) {
      for (var i = 0; i < event.pairs.length; i++) {
        var bodyA = getRootBody(event.pairs[i].bodyA);
        var bodyB = getRootBody(event.pairs[i].bodyB);
        console.log("body A: ", bodyA.id);
        console.log("Body B: ", bodyB.id);

  //-----------------------------------JOUEUR 1-----------------------------------------------------------------------------------------------------------------------------
        if(player1.pad != undefined){
          if(player1.pad.buttons[3].pressed){
            console.log('ok');
            this.scene.start("map2");
            this.scene.destroy("map1");
          }
  //---------------------Poubelle----------------------------
          if ((bodyA.id == '21' && bodyB.id == '30') && (player1.pad.buttons[2].pressed)) {
              if (player1.inv != 0) {
                player1.inv = 0;
                console.log('inventaire joueur 1 : ', player1.inv);
              }
          }
  //------------------mati??res premi??res----------------------
          else if ((bodyA.id == '21' && bodyB.id == '28') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == 0) {
              player1.inv = "malt";
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log(temps);
            }
          }
          else if ((bodyA.id == '21' && bodyB.id == '25') && (player1.pad.buttons[2].pressed)) {
              if (player1.inv == 0) {
                player1.inv = "eau";
                console.log('inventaire joueur 1 : ', player1.inv);
              }
          }
          else if ((bodyA.id == '21' && bodyB.id == '26') && (player1.pad.buttons[2].pressed)) {
              if (player1.inv == 0) {
                player1.inv = "levure";
                console.log('inventaire joueur 1 : ', player1.inv);
              }
          }
          else if ((bodyA.id == '21' && bodyB.id == '27') && (player1.pad.buttons[2].pressed)) {
              if (player1.inv == 0) {
                player1.inv = "houblon";
                console.log('inventaire joueur 1 : ', player1.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          else if ((bodyA.id == '21' && bodyB.id == '29') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == "malt") {
              console.log("En pr??paration !!");
              player1.inv = 0;
              dispMalt.setFrame(1);
              setTimeout(
                () => {
                  timer.setFrame(1);
                  setTimeout(
                    () => {
                      timer.setFrame(2);
                      setTimeout(
                        () => {
                          timer.setFrame(3);
                          setTimeout(
                            () => {
                              timer.setFrame(4);
                              setTimeout(
                                () => {
                                  timer.setFrame(5);
                                  dispValid.setFrame(1);
                                  console.log("Pr??t !!");
                                  machine3.inv = "maltCon";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire broyeur : ', machine3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (machine3.inv == "maltCon" && player1.inv == 0) {
              timer.setFrame(0);
              dispValid.setFrame(0);
              dispMalt.setFrame(0);
              player1.inv = "maltCon";
              machine3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire broyeur : ', machine3.inv);
            }
          }
  //-------------------Empatage----------------------------------
          else if ((bodyA.id == '17' && bodyB.id == '21') && (player1.pad.buttons[2].pressed)) {
            if ((player1.inv == "eau" && m1.inv == "maltCon")||(player1.inv == "maltCon" && m1.inv == "eau")){
              console.log("En pr??paration !!");
              player1.inv = 0;
              dispEau.setFrame(1);
              dispMaltCon.setFrame(1);
              setTimeout(
                () => {
                  timer1.setFrame(1);
                  setTimeout(
                    () => {
                      timer1.setFrame(2);
                      setTimeout(
                        () => {
                          timer1.setFrame(3);
                          setTimeout(
                            () => {
                              timer1.setFrame(4);
                              setTimeout(
                                () => {
                                  timer1.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid1.setFrame(1);
                                  m1.inv = "biereMachine2";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 1 : ', m1.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m1.inv == "biereMachine2"){
              dispArrow.setFrame(1);
              dispValid1.setFrame(0);
              dispEau.setFrame(0);
              dispMaltCon.setFrame(0);
              timer1.setFrame(0);
              m1.inv = 0;
              m2.inv = "biereMachine2";
              dispValid5.setFrame(1);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
              setTimeout(
                () => {
                  dispArrow.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player1.inv == "eau" && m1.inv == 0){
              player1.inv = 0;
              m1.inv = "eau";
              dispEau.setFrame(1);
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            else if (player1.inv == "maltCon" && m1.inv == 0) {
              player1.inv = 0;
              dispMaltCon.setFrame(1);
              m1.inv = "maltCon";
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
          }
  //-----------------------R??frig??rant---------------------------
          else if ((bodyA.id == '18' && bodyB.id == '21') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == 0 && m2.inv == "biereMachine2"){
              player1.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereNoHoublon";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereNoHoublon"){
              m2.inv = 0;
              m3.inv = "biereNoHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player1.inv == "houblon" && m2.inv == "biereMachine2"){
              player1.inv = 0;
              console.log("En pr??paration !!");
              dispHoublon.setFrame(1);
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereHoublon";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereHoublon"){
              m2.inv = 0;
              m3.inv = "biereHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
          }
  //-----------------------Filtrage--------------------------------
          else if ((bodyA.id == '19' && bodyB.id == '21') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == 0 && m3.inv == "biereNoHoublon"){
              player1.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonNoLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonNoLevure" && player1.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player1.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }

            else if (player1.inv == 0 && m3.inv == "biereHoublon"){
              player1.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonNoLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonNoLevure" && player1.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player1.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            else if (player1.inv == "levure" && m3.inv == "biereNoHoublon"){
              player1.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonLevure" && player1.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player1.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire broyeur : ', m3.inv);
            }

            else if (player1.inv == "levure" && m3.inv == "biereHoublon"){
              player1.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  dispValid3.setFrame(1);
                                  timer3.setFrame(5);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonLevure" && player1.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player1.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          else if ((bodyA.id == '12' && bodyB.id == '21')) {
            if(player1.inv == "biereHoublonLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player1.inv == "biereNoHoublonNoLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player1.inv == "biereNoHoublonLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player1.inv == "biereHoublonNoLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
          }
        }
  //-----------------------------------JOUEUR 2-----------------------------------------------------------------------------------------------------------------------------------
        if(player2.pad != undefined){
  //---------------------Poubelle----------------------------
          if ((bodyA.id == '22' && bodyB.id == '30') && (player2.pad.buttons[2].pressed)) {
              if (player2.inv != 0) {
                player2.inv = 0;
                console.log('inventaire joueur 2 : ', player2.inv);
              }
          }
  //------------------mati??res premi??res----------------------
          else if ((bodyA.id == '22' && bodyB.id == '28') && (player2.pad.buttons[2].pressed)) {
            if (player2.inv == 0) {
              player2.inv = "malt";
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log(temps);
            }
          }
          else if ((bodyA.id == '22' && bodyB.id == '25') && (player2.pad.buttons[2].pressed)) {
              if (player2.inv == 0) {
                player2.inv = "eau";
                console.log('inventaire joueur 1 : ', player2.inv);
              }
          }
          else if ((bodyA.id == '22' && bodyB.id == '26') && (player2.pad.buttons[2].pressed)) {
              if (player2.inv == 0) {
                player2.inv = "levure";
                console.log('inventaire joueur 2 : ', player2.inv);
              }
          }
          else if ((bodyA.id == '22' && bodyB.id == '27') && (player2.pad.buttons[2].pressed)) {
              if (player2.inv == 0) {
                player2.inv = "houblon";
                console.log('inventaire joueur 2 : ', player2.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          else if ((bodyA.id == '22' && bodyB.id == '29') && (player2.pad.buttons[2].pressed)) {
            if (player2.inv == "malt") {
              console.log("En pr??paration !!");
              player2.inv = 0;
              dispMalt.setFrame(1);
              setTimeout(
                () => {
                  timer.setFrame(1);
                  setTimeout(
                    () => {
                      timer.setFrame(2);
                      setTimeout(
                        () => {
                          timer.setFrame(3);
                          setTimeout(
                            () => {
                              timer.setFrame(4);
                              setTimeout(
                                () => {
                                  timer.setFrame(5);
                                  dispValid.setFrame(1);
                                  console.log("Pr??t !!");
                                  machine3.inv = "maltCon";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire broyeur : ', machine3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (machine3.inv == "maltCon" && player2.inv == 0) {
              timer.setFrame(0);
              dispValid.setFrame(0);
              dispMalt.setFrame(0);
              player2.inv = "maltCon";
              machine3.inv = 0;
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log('inventaire broyeur : ', machine3.inv);
            }
          }
  //-------------------Empatage----------------------------------
          else if ((bodyA.id == '17' && bodyB.id == '22') && (player2.pad.buttons[2].pressed)) {
            if ((player2.inv == "eau" && m1.inv == "maltCon")||(player2.inv == "maltCon" && m1.inv == "eau")){
              console.log("En pr??paration !!");
              player2.inv = 0;
              dispEau.setFrame(1);
              dispMaltCon.setFrame(1);
              setTimeout(
                () => {
                  timer1.setFrame(1);
                  setTimeout(
                    () => {
                      timer1.setFrame(2);
                      setTimeout(
                        () => {
                          timer1.setFrame(3);
                          setTimeout(
                            () => {
                              timer1.setFrame(4);
                              setTimeout(
                                () => {
                                  timer1.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid1.setFrame(1);
                                  m1.inv = "biereMachine2";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire machine 1 : ', m1.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m1.inv == "biereMachine2"){
              dispArrow.setFrame(1);
              dispValid1.setFrame(0);
              dispEau.setFrame(0);
              dispMaltCon.setFrame(0);
              timer1.setFrame(0);
              m1.inv = 0;
              m2.inv = "biereMachine2";
              dispValid5.setFrame(1);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
              setTimeout(
                () => {
                  dispArrow.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player2.inv == "eau" && m1.inv == 0){
              player2.inv = 0;
              m1.inv = "eau";
              dispEau.setFrame(1);
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            else if (player2.inv == "maltCon" && m1.inv == 0) {
              player2.inv = 0;
              dispMaltCon.setFrame(1);
              m1.inv = "maltCon";
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }

          }
  //-----------------------R??frig??rant---------------------------
          else if ((bodyA.id == '18' && bodyB.id == '22') && (player2.pad.buttons[2].pressed)) {
            if (player2.inv == 0 && m2.inv == "biereMachine2"){
              player2.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereNoHoublon";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereNoHoublon"){
              m2.inv = 0;
              m3.inv = "biereNoHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player2.inv == "houblon" && m2.inv == "biereMachine2"){
              player2.inv = 0;
              console.log("En pr??paration !!");
              dispHoublon.setFrame(1);
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereHoublon";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereHoublon"){
              m2.inv = 0;
              m3.inv = "biereHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
          }
  //-----------------------Filtrage--------------------------------
          else if ((bodyA.id == '19' && bodyB.id == '22') && (player2.pad.buttons[2].pressed)) {
            if (player2.inv == 0 && m3.inv == "biereNoHoublon"){
              player2.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonNoLevure";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonNoLevure" && player2.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player2.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }

            else if (player2.inv == 0 && m3.inv == "biereHoublon"){
              player2.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonNoLevure";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonNoLevure" && player2.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player2.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            else if (player2.inv == "levure" && m3.inv == "biereNoHoublon"){
              player2.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonLevure";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonLevure" && player2.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player2.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log('inventaire broyeur : ', m3.inv);
            }

            else if (player2.inv == "levure" && m3.inv == "biereHoublon"){
              player2.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  dispValid3.setFrame(1);
                                  timer3.setFrame(5);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonLevure";
                                  console.log('inventaire joueur 2 : ', player2.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonLevure" && player2.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player2.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 2 : ', player2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          else if ((bodyA.id == '12' && bodyB.id == '22')) {
            if(player2.inv == "biereHoublonLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2 : ', player2.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player2.inv == "biereNoHoublonNoLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2 : ', player2.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player2.inv == "biereNoHoublonLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2 : ', player2.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player2.inv == "biereHoublonNoLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2 : ', player2.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
          }
        }
  //-----------------------------------JOUEUR 3------------------------------------------------------------------------------------------------------------------------------------------
  //---------------------Poubelle----------------------------
        if(player3.pad != undefined){
          if ((bodyA.id == '23' && bodyB.id == '30') && (player3.pad.buttons[2].pressed)) {
              if (player3.inv != 0) {
                player3.inv = 0;
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
  //------------------mati??res premi??res----------------------
          else if ((bodyA.id == '23' && bodyB.id == '28') && (player3.pad.buttons[2].pressed)) {
            if (player3.inv == 0) {
              player3.inv = "malt";
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log(temps);
            }
          }
          else if ((bodyA.id == '23' && bodyB.id == '25') && (player3.pad.buttons[2].pressed)) {
              if (player3.inv == 0) {
                player3.inv = "eau";
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
          else if ((bodyA.id == '23' && bodyB.id == '26') && (player3.pad.buttons[2].pressed)) {
              if (player3.inv == 0) {
                player3.inv = "levure";
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
          else if ((bodyA.id == '23' && bodyB.id == '27') && (player3.pad.buttons[2].pressed)) {
              if (player3.inv == 0) {
                player3.inv = "houblon";
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          else if ((bodyA.id == '23' && bodyB.id == '29') && (player3.pad.buttons[2].pressed)) {
            if (player3.inv == "malt") {
              console.log("En pr??paration !!");
              player3.inv = 0;
              dispMalt.setFrame(1);
              setTimeout(
                () => {
                  timer.setFrame(1);
                  setTimeout(
                    () => {
                      timer.setFrame(2);
                      setTimeout(
                        () => {
                          timer.setFrame(3);
                          setTimeout(
                            () => {
                              timer.setFrame(4);
                              setTimeout(
                                () => {
                                  timer.setFrame(5);
                                  dispValid.setFrame(1);
                                  console.log("Pr??t !!");
                                  machine3.inv = "maltCon";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire broyeur : ', machine3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (machine3.inv == "maltCon" && player3.inv == 0) {
              timer.setFrame(0);
              dispValid.setFrame(0);
              dispMalt.setFrame(0);
              player3.inv = "maltCon";
              machine3.inv = 0;
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire broyeur : ', machine3.inv);
            }
          }
  //-------------------Empatage----------------------------------
          else if ((bodyA.id == '17' && bodyB.id == '23') && (player3.pad.buttons[2].pressed)) {
            if ((player3.inv == "eau" && m1.inv == "maltCon")||(player3.inv == "maltCon" && m1.inv == "eau")){
              console.log("En pr??paration !!");
              player3.inv = 0;
              dispEau.setFrame(1);
              dispMaltCon.setFrame(1);
              setTimeout(
                () => {
                  timer1.setFrame(1);
                  setTimeout(
                    () => {
                      timer1.setFrame(2);
                      setTimeout(
                        () => {
                          timer1.setFrame(3);
                          setTimeout(
                            () => {
                              timer1.setFrame(4);
                              setTimeout(
                                () => {
                                  timer1.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid1.setFrame(1);
                                  m1.inv = "biereMachine2";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire machine 1 : ', m1.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m1.inv == "biereMachine2"){
              dispArrow.setFrame(1);
              dispValid1.setFrame(0);
              dispEau.setFrame(0);
              dispMaltCon.setFrame(0);
              timer1.setFrame(0);
              m1.inv = 0;
              m2.inv = "biereMachine2";
              dispValid5.setFrame(1);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
              setTimeout(
                () => {
                  dispArrow.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player3.inv == "eau" && m1.inv == 0){
              player3.inv = 0;
              m1.inv = "eau";
              dispEau.setFrame(1);
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            else if (player3.inv == "maltCon" && m1.inv == 0) {
              player3.inv = 0;
              dispMaltCon.setFrame(1);
              m1.inv = "maltCon";
              console.log('inventaire joueur 1 : ', player3.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }

          }
  //-----------------------R??frig??rant---------------------------
          else if ((bodyA.id == '18' && bodyB.id == '23') && (player3.pad.buttons[2].pressed)) {
            if (player3.inv == 0 && m2.inv == "biereMachine2"){
              player3.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereNoHoublon";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereNoHoublon"){
              m2.inv = 0;
              m3.inv = "biereNoHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player3.inv == "houblon" && m2.inv == "biereMachine2"){
              player3.inv = 0;
              console.log("En pr??paration !!");
              dispHoublon.setFrame(1);
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereHoublon";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereHoublon"){
              m2.inv = 0;
              m3.inv = "biereHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
          }
  //-----------------------Filtrage--------------------------------
          else if ((bodyA.id == '19' && bodyB.id == '23') && (player3.pad.buttons[2].pressed)) {
            if (player3.inv == 0 && m3.inv == "biereNoHoublon"){
              player3.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonNoLevure";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonNoLevure" && player3.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player3.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }

            else if (player3.inv == 0 && m3.inv == "biereHoublon"){
              player3.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonNoLevure";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonNoLevure" && player3.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player3.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 1 : ', player3.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            else if (player3.inv == "levure" && m3.inv == "biereNoHoublon"){
              player3.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonLevure";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonLevure" && player3.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player3.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 1 : ', player3.inv);
              console.log('inventaire broyeur : ', m3.inv);
            }

            else if (player3.inv == "levure" && m3.inv == "biereHoublon"){
              player3.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  dispValid3.setFrame(1);
                                  timer3.setFrame(5);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonLevure";
                                  console.log('inventaire joueur 3 : ', player3.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonLevure" && player3.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player3.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          else if ((bodyA.id == '12' && bodyB.id == '23')) {
            if(player3.inv == "biereHoublonLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 3 : ', player3.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player3.inv == "biereNoHoublonNoLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 3 : ', player3.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player3.inv == "biereNoHoublonLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 1 : ', player3.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player3.inv == "biereHoublonNoLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 1 : ', player3.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
          }
        }
  //-----------------------------------JOUEUR 4---------------------------------------------------------------------------------------------------------------------------------------
        if(player4.pad != undefined){
  //---------------------Poubelle----------------------------
          if ((bodyA.id == '24' && bodyB.id == '30') && (player4.pad.buttons[2].pressed)) {
              if (player4.inv != 0) {
                player4.inv = 0;
                console.log('inventaire joueur 4 : ', player4.inv);
              }
          }
  //------------------mati??res premi??res----------------------
          else if ((bodyA.id == '24' && bodyB.id == '28') && (player4.pad.buttons[2].pressed)) {
            if (player4.inv == 0) {
              player4.inv = "malt";
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log(temps);
            }
          }
          else if ((bodyA.id == '24' && bodyB.id == '25') && (player4.pad.buttons[2].pressed)) {
              if (player1.inv == 0) {
                player1.inv = "eau";
                console.log('inventaire joueur 4 : ', player4.inv);
              }
          }
          else if ((bodyA.id == '24' && bodyB.id == '26') && (player4.pad.buttons[2].pressed)) {
              if (player4.inv == 0) {
                player4.inv = "levure";
                console.log('inventaire joueur 1 : ', player4.inv);
              }
          }
          else if ((bodyA.id == '24' && bodyB.id == '27') && (player4.pad.buttons[2].pressed)) {
              if (player4.inv == 0) {
                player4.inv = "houblon";
                console.log('inventaire joueur 4 : ', player4.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          else if ((bodyA.id == '24' && bodyB.id == '29') && (player4.pad.buttons[2].pressed)) {
            if (player4.inv == "malt") {
              console.log("En pr??paration !!");
              player4.inv = 0;
              dispMalt.setFrame(1);
              setTimeout(
                () => {
                  timer.setFrame(1);
                  setTimeout(
                    () => {
                      timer.setFrame(2);
                      setTimeout(
                        () => {
                          timer.setFrame(3);
                          setTimeout(
                            () => {
                              timer.setFrame(4);
                              setTimeout(
                                () => {
                                  timer.setFrame(5);
                                  dispValid.setFrame(1);
                                  console.log("Pr??t !!");
                                  machine3.inv = "maltCon";
                                  console.log('inventaire joueur 4 : ', player4.inv);
                                  console.log('inventaire broyeur : ', machine3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (machine3.inv == "maltCon" && player4.inv == 0) {
              timer.setFrame(0);
              dispValid.setFrame(0);
              dispMalt.setFrame(0);
              player4.inv = "maltCon";
              machine3.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire broyeur : ', machine3.inv);
            }
          }
  //-------------------Empatage----------------------------------
          else if ((bodyA.id == '17' && bodyB.id == '24') && (player4.pad.buttons[2].pressed)) {
            if ((player4.inv == "eau" && m1.inv == "maltCon")||(player4.inv == "maltCon" && m1.inv == "eau")){
              console.log("En pr??paration !!");
              player4.inv = 0;
              dispEau.setFrame(1);
              dispMaltCon.setFrame(1);
              setTimeout(
                () => {
                  timer1.setFrame(1);
                  setTimeout(
                    () => {
                      timer1.setFrame(2);
                      setTimeout(
                        () => {
                          timer1.setFrame(3);
                          setTimeout(
                            () => {
                              timer1.setFrame(4);
                              setTimeout(
                                () => {
                                  timer1.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid1.setFrame(1);
                                  m1.inv = "biereMachine2";
                                  console.log('inventaire joueur 4 : ', player4.inv);
                                  console.log('inventaire machine 1 : ', m1.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m1.inv == "biereMachine2"){
              dispArrow.setFrame(1);
              dispValid1.setFrame(0);
              dispEau.setFrame(0);
              dispMaltCon.setFrame(0);
              timer1.setFrame(0);
              m1.inv = 0;
              m2.inv = "biereMachine2";
              dispValid5.setFrame(1);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
              setTimeout(
                () => {
                  dispArrow.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player4.inv == "eau" && m1.inv == 0){
              player4.inv = 0;
              m1.inv = "eau";
              dispEau.setFrame(1);
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            else if (player4.inv == "maltCon" && m1.inv == 0) {
              player4.inv = 0;
              dispMaltCon.setFrame(1);
              m1.inv = "maltCon";
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }

          }
  //-----------------------R??frig??rant---------------------------
          else if ((bodyA.id == '18' && bodyB.id == '24') && (player4.pad.buttons[2].pressed)) {
            if (player4.inv == 0 && m2.inv == "biereMachine2"){
              player4.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereNoHoublon";
                                  console.log('inventaire joueur 4 : ', player4.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereNoHoublon"){
              m2.inv = 0;
              m3.inv = "biereNoHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
            else if (player4.inv == "houblon" && m2.inv == "biereMachine2"){
              player4.inv = 0;
              console.log("En pr??paration !!");
              dispHoublon.setFrame(1);
              setTimeout(
                () => {
                  timer2.setFrame(1);
                  setTimeout(
                    () => {
                      timer2.setFrame(2);
                      setTimeout(
                        () => {
                          timer2.setFrame(3);
                          setTimeout(
                            () => {
                              timer2.setFrame(4);
                              setTimeout(
                                () => {
                                  timer2.setFrame(5);
                                  console.log("Pr??t !!");
                                  dispValid2.setFrame(1);
                                  m2.inv = "biereHoublon";
                                  console.log('inventaire joueur 4 : ', player4.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m2.inv == "biereHoublon"){
              m2.inv = 0;
              m3.inv = "biereHoublon";
              dispValid5.setFrame(0);
              dispValid6.setFrame(1);
              dispArrow1.setFrame(1);
              dispValid2.setFrame(0);
              timer2.setFrame(0);
              dispHoublon.setFrame(0);
              console.log('inventaire machine 2 : ', m2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
              setTimeout(
                () => {
                  dispArrow1.setFrame(0);
                },
                1 * 1000
              );
            }
          }
  //-----------------------Filtrage--------------------------------
          else if ((bodyA.id == '19' && bodyB.id == '24') && (player4.pad.buttons[2].pressed)) {
            if (player4.inv == 0 && m3.inv == "biereNoHoublon"){
              player4.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonNoLevure";
                                  console.log('inventaire joueur 4 : ', player4.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonNoLevure" && player4.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player4.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 1 : ', player4.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }

            else if (player4.inv == 0 && m3.inv == "biereHoublon"){
              player4.inv = 0;
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonNoLevure";
                                  console.log('inventaire joueur 1 : ', player4.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonNoLevure" && player4.inv == 0) {
              dispValid3.setFrame(0);
              timer3.setFrame(0);
              player4.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              dispValid6.setFrame(0);
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            else if (player4.inv == "levure" && m3.inv == "biereNoHoublon"){
              player4.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  timer3.setFrame(5);
                                  dispValid3.setFrame(1);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereNoHoublonLevure";
                                  console.log('inventaire joueur 4 : ', player4.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereNoHoublonLevure" && player4.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player4.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire broyeur : ', m3.inv);
            }

            else if (player4.inv == "levure" && m3.inv == "biereHoublon"){
              player4.inv = 0;
              dispSucre.setFrame(1);
              console.log("En pr??paration !!");
              setTimeout(
                () => {
                  timer3.setFrame(1);
                  setTimeout(
                    () => {
                      timer3.setFrame(2);
                      setTimeout(
                        () => {
                          timer3.setFrame(3);
                          setTimeout(
                            () => {
                              timer3.setFrame(4);
                              setTimeout(
                                () => {
                                  dispValid3.setFrame(1);
                                  timer3.setFrame(5);
                                  console.log("Pr??t !!");
                                  m3.inv = "biereHoublonLevure";
                                  console.log('inventaire joueur 4 : ', player4.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                },
                                1 * 1000
                              );
                            },
                            1 * 1000
                          );
                        },
                        1 * 1000
                      );
                    },
                    1 * 1000
                  );
                },
                1 * 1000
              );
            }
            else if (m3.inv == "biereHoublonLevure" && player4.inv == 0) {
              timer3.setFrame(0);
              dispValid3.setFrame(0);
              dispSucre.setFrame(0);
              dispValid6.setFrame(0);
              player4.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          else if ((bodyA.id == '12' && bodyB.id == '24')) {
            if(player4.inv == "biereHoublonLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player4.inv == "biereNoHoublonNoLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player4.inv == "biereNoHoublonLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
            else if(player4.inv == "biereHoublonNoLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
              dispValid4.setFrame(1);
              setTimeout(
                () => {
                  dispValid4.setFrame(0);
                },
                1 * 1000
              );
            }
          }
        }

      }
    }, this);

    //Fonction pour r??cup qui touche
    function getRootBody(body) {
        if (body.parent === body) {
            return body;
        }
        while (body.parent !== body) {
            body = body.parent;
        }
        return body;
    }
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
          player4.img.x += 4 * axisH;
          player4.img.y += 4 * axisV;

          player4.img.flipX = (axisH > 0);
      }
    }
    else {
      control4.anims.play('manette4',true);
    }
  }
}

module.exports = {map4};
