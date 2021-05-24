const {player, machine} = require("./class.js");

var player1 = new player(1, "");
var player2 = new player(2, "");
var player3 = new player(3, "");
var player4 = new player(4, "");


/**********************init collision**********************************/
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, exit;//mur
var pipe;
var m1 = new machine(1, "");
var m2 = new machine(2, "");
var m3 = new machine(3, "");//machines
var t1, t2, t3, t4, t5;//tables
var water, malt, levure, houblon;//ressources
var machine3 = new machine(4, ""); //machine broyage

var carre1;
var carre2;

var timer;
var timer1;
var timer2;
var timer3;
var poubelle;

var control1;
var control2;
var control3;
var control4;
var car;
console.log(player1.type, player2.type, player3.type, player4.type);
var indicator1;
var indicator2;

var cursors;
class map1 extends Phaser.Scene{
  constructor(){
    super({key : 'map1'});
  }

  preload(){
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
    this.load.image('carre', 'assets/carre.jpg');
    this.load.image('machine3', 'assets/images/machine3.png');
    this.load.image('poubelle', 'assets/images/poubelle.png');
    this.load.spritesheet('timer', 'assets/images/chrono.png', { frameWidth: 44, frameHeight: 50 });

    /*'''''''''''''''''''ressources'''''''''''''''''*/
    this.load.image('houblon', 'assets/images/pot_houblon.png');
    this.load.image('levure', 'assets/images/pot_levure.png');
    this.load.image('malt', 'assets/images/pot_malt.png');
    this.load.image('water', 'assets/images/pot_eau.png');
  }
  create(){
    /***************************************WALL*********************************************/

    /*###########################top######################*/
    w1 = this.add.rectangle(0, 0, 1700, 100, 0.2);
    this.matter.add.gameObject(w1).setStatic(true);
    w2 = this.add.rectangle(825, 0, 55, 300, 0.2);
    this.matter.add.gameObject(w2).setStatic(true);
    w3 = this.add.rectangle(983, 0, 55, 300, 0.2);
    this.matter.add.gameObject(w3).setStatic(true);
    w4 = this.add.rectangle(1800, 0, 1650, 100, 0.2);
    this.matter.add.gameObject(w4).setStatic(true);
    exit = this.add.rectangle(910, 0, 108, 100, 0.2);
    this.matter.add.gameObject(exit).setStatic(true);



    /*###########################left######################*/
    w5 = this.add.rectangle(0, 0, 100, 1920, 0.2);
    this.matter.add.gameObject(w5).setStatic(true);


    /*###########################bot######################*/
    w6 = this.add.rectangle(0, 973, 3620, 100, 0);
    this.matter.add.gameObject(w6).setStatic(true);

    w8 = this.add.rectangle(505, 842, 52, 155, 0.2);
    this.matter.add.gameObject(w8).setStatic(true);


    /*###########################right######################*/
    w9 = this.add.rectangle(1795, 0, 70, 1950, 0.2);
    this.matter.add.gameObject(w9).setStatic(true);


    /*###########################middle######################*/
    w7 = this.add.rectangle(505, 535, 52, 155, 0.2);
    this.matter.add.gameObject(w7).setStatic(true);
    w10 = this.add.rectangle(1149, 483, 1335, 55, 0.2);
    this.matter.add.gameObject(w10).setStatic(true);


    /*###########################table######################*/
    t1 = this.add.rectangle(1155, 83, 70, 60, 0.2);
    this.matter.add.gameObject(t1).setStatic(true);
    t2 = this.add.rectangle(1708, 371, 100, 100, 0.2);
    this.matter.add.gameObject(t2).setStatic(true);
    t3 = this.add.rectangle(716, 823, 136, 80, 0.2);
    this.matter.add.gameObject(t3).setStatic(true);
    t4 = this.add.rectangle(1196, 823, 136, 80, 0.2);
    this.matter.add.gameObject(t4).setStatic(true);
    t5 = this.add.rectangle(1675, 823, 136, 80, 0.2);
    this.matter.add.gameObject(t5).setStatic(true);


    /*###########################machines######################*/
    m1.img = this.add.rectangle(720, 540, 160, 70, 0.2);
    this.matter.add.gameObject(m1.img).setStatic(true);
    m2.img = this.add.rectangle(1200, 540, 160, 70, 0.2);
    this.matter.add.gameObject(m2.img).setStatic(true);
    m3.img = this.add.rectangle(1680, 540, 160, 70, 0.2);
    this.matter.add.gameObject(m3.img).setStatic(true);
    pipe = this.add.rectangle(1149, 540, 1335, 20, 0.2);
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

    player1.img = this.matter.add.sprite(300, 420, 'dude');
    player2.img = this.matter.add.sprite(300, 570, 'dude1');
    player3.img = this.matter.add.sprite(300, 720, 'dude2');
    player4.img = this.matter.add.sprite(300, 870, 'dude3');
    timer = this.add.sprite(450, 70, 'timer');
    timer1 = this.add.sprite(762, 541, 'timer');
    timer2 = this.add.sprite(1255, 540, 'timer');
    timer3 = this.add.sprite(1735, 540, 'timer');
    player1.inv = 0;
    player2.inv = 0;
    player3.inv = 0;
    player4.inv = 0;
    m1.inv = 0;
    m2.inv = 0;
    m3.inv = 0;
    machine3.inv = 0;
    control1 = this.add.sprite(35, 30, 'control1');
    control2 = this.add.sprite(75, 30, 'control2');
    control3 = this.add.sprite(115, 30, 'control3');
    control4 = this.add.sprite(155, 30, 'control4');
    player1.pad = this.input.gamepad.getPad(0);
    player2.pad = this.input.gamepad.getPad(1);
    player3.pad = this.input.gamepad.getPad(2);
    player4.pad = this.input.gamepad.getPad(3);

    /***************************************test wall*******************************************************/
    //carre1 = this.matter.add.image(100, 100, 'carre').setStatic(true);
    //carre2 = this.matter.add.image(100, 700, 'carre').setStatic(true);
    water = this.matter.add.image(100, 300, 'water').setStatic(true);
    levure = this.matter.add.image(100, 450, 'levure').setStatic(true);
    houblon = this.matter.add.image(100, 600, 'houblon').setStatic(true);
    malt = this.matter.add.image(100, 750, 'malt').setStatic(true);
    machine3.img = this.matter.add.image(400, 75, 'machine3').setStatic(true);
    poubelle = this.matter.add.image(560, 70, 'poubelle').setStatic(true);

    this.anims.create({
        key: 'tete',
        frames: this.anims.generateFrameNumbers('timer', { start: 0, end: 5 }),
        frameRate: 1,
        repeat: -1
    });
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

  /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ID COLLISIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  player1 = 21 | player2 = 22 | player3 = 23 | player4 = 24
  m1 = 17 | m2 = 18 | m3 = 19
  t1 = 12 | t2 = 13 | t3 = 14 | t4 = 15 | t5 = 16
  exit = 5
  water = 25 | levure = 26 | houblon = 27 | malt = 28
  machine3 = 29


  /!\ dans les if il faut mettre le plus petit id en premier (car phaser met le plus petit dans bodyA et le plus grand dans bodyB)
  */
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

  //-----------------------------------JOUEUR 1-----------------------------------------------------------------------
  //---------------------Poubelle----------------------------
        if ((bodyA.id == '21' && bodyB.id == '30') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv != 0) {
              player1.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
            }
        }
  //------------------matières premières----------------------
        if(player1.pad != undefined){
          if ((bodyA.id == '21' && bodyB.id == '28') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == 0) {
              player1.inv = "malt";
              console.log('inventaire joueur 1 : ', player1.inv);
            }
          }
          if ((bodyA.id == '21' && bodyB.id == '25') && (player1.pad.buttons[2].pressed)) {
              if (player1.inv == 0) {
                player1.inv = "eau";
                console.log('inventaire joueur 1 : ', player1.inv);
              }
          }
          if ((bodyA.id == '21' && bodyB.id == '26') && (player1.pad.buttons[2].pressed)) {
              if (player1.inv == 0) {
                player1.inv = "levure";
                console.log('inventaire joueur 1 : ', player1.inv);
              }
          }
          if ((bodyA.id == '21' && bodyB.id == '27') && (player1.pad.buttons[2].pressed)) {
              if (player1.inv == 0) {
                player1.inv = "houblon";
                console.log('inventaire joueur 1 : ', player1.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          if ((bodyA.id == '21' && bodyB.id == '29') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == "malt") {
              console.log("En préparation !!");
              player1.inv = 0;
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
                                  console.log("Prêt !!");
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
            if (machine3.inv == "maltCon" && player1.inv == 0) {
              timer.setFrame(0);
              player1.inv = "maltCon";
              machine3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire broyeur : ', machine3.inv);
            }
          }
  //-------------------Empatage----------------------------------
          if ((bodyA.id == '17' && bodyB.id == '21') && (player1.pad.buttons[2].pressed)) {
            if ((player1.inv == "eau" && m1.inv == "maltCon")||(player1.inv == "maltCon" && m1.inv == "eau")){
              console.log("En préparation !!");
              player1.inv = 0;
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
                                  console.log("Prêt !!");
                                  m1.inv = 0;
                                  m2.inv = "biereMachine2"
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 1 : ', m1.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                  setTimeout(
                                    () => {
                                      timer1.setFrame(0);
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
                },
                1 * 1000
              );
            }
            if (player1.inv == "eau" && m1.inv == 0){
              player1.inv = 0;
              m1.inv = "eau";
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            if (player1.inv == "maltCon" && m1.inv == 0) {
              player1.inv = 0;
              m1.inv = "maltCon";
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }

          }
  //-----------------------Réfrigérant---------------------------
          if ((bodyA.id == '18' && bodyB.id == '21') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == "houblon" && m2.inv == "biereMachine2"){
              player1.inv = 0;
              console.log("En préparation !!");
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
                                  console.log("Prêt !!");
                                  m2.inv = 0;
                                  m3.inv = "biereHoublon";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                  setTimeout(
                                    () => {
                                      timer2.setFrame(0);
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
                },
                1 * 1000
              );
            }
            else if (player1.inv == 0 && m2.inv == "biereMachine2"){
              player1.inv = 0;
              console.log("En préparation !!");
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
                                  console.log("Prêt !!");
                                  m2.inv = 0;
                                  m3.inv = "biereNoHoublon"
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 2 : ', m2.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                  setTimeout(
                                    () => {
                                      timer2.setFrame(0);
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
                },
                1 * 1000
              );
            }
          }
  //-----------------------Filtrage--------------------------------
          if ((bodyA.id == '19' && bodyB.id == '21') && (player1.pad.buttons[2].pressed)) {
            if (player1.inv == 0 && m3.inv == "biereNoHoublon"){
              player1.inv = 0;
              console.log("En préparation !!");
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
                                  console.log("Prêt !!");
                                  m3.inv = "biereNoHoublonNoLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                  setTimeout(
                                    () => {
                                      timer3.setFrame(0);
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
                },
                1 * 1000
              );
            }
            if (m3.inv == "biereNoHoublonNoLevure" && player1.inv == 0) {
              timer3.setFrame(0);
              player1.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }

            if (player1.inv == 0 && m3.inv == "biereHoublon"){
              player1.inv = 0;
              console.log("En préparation !!");
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
                                  console.log("Prêt !!");
                                  m3.inv = "biereHoublonNoLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                  setTimeout(
                                    () => {
                                      timer3.setFrame(0);
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
                },
                1 * 1000
              );
            }
            if (m3.inv == "biereHoublonNoLevure" && player1.inv == 0) {
              timer3.setFrame(0);
              player1.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player1.inv == "levure" && m3.inv == "biereNoHoublon"){
              player1.inv = 0;
              console.log("En préparation !!");
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
                                  console.log("Prêt !!");
                                  m3.inv = "biereNoHoublonLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                  setTimeout(
                                    () => {
                                      timer3.setFrame(0);
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
                },
                1 * 1000
              );
            }
            if (m3.inv == "biereNoHoublonLevure" && player1.inv == 0) {
              timer3.setFrame(0);
              player1.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire broyeur : ', m3.inv);
            }

            if (player1.inv == "levure" && m3.inv == "biereHoublon"){
              player1.inv = 0;
              console.log("En préparation !!");
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
                                  console.log("Prêt !!");
                                  m3.inv = "biereHoublonLevure";
                                  console.log('inventaire joueur 1 : ', player1.inv);
                                  console.log('inventaire machine 3 : ', m3.inv);
                                  setTimeout(
                                    () => {
                                      timer3.setFrame(0);
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
                },
                1 * 1000
              );
            }
            if (m3.inv == "biereHoublonLevure" && player1.inv == 0) {
              timer3.setFrame(0);
              player1.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 1 : ', player1.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          if ((bodyA.id == '12' && bodyB.id == '21')) {
            if(player1.inv == "biereHoublonLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
            }
            if(player1.inv == "biereNoHoublonNoLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
            }
            if(player1.inv == "biereNoHoublonLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
            }
            if(player1.inv == "biereHoublonLevure"){
              player1.inv = "0";
              console.log('inventaire joueur 1 : ', player1.inv);
            }
          }
        }

  //--------------------------------------JOUEUR 2----------------------------------------------------------------------------
  //---------------------Poubelle----------------------------
        if ((bodyA.id == '22' && bodyB.id == '30')) {
            if (player2.inv != 0) {
              player2.inv = 0;
              console.log('inventaire joueur 2: ', player2.inv);
            }
        }
  //------------------matières premières----------------------
        if(player2.pad != undefined){
          if ((bodyA.id == '22' && bodyB.id == '28')) {
              if (player2.inv == 0) {
                player2.inv = "malt";
                console.log('inventaire joueur 2: ', player2.inv);
              }
          }
          if ((bodyA.id == '22' && bodyB.id == '25')) {
              if (player2.inv == 0) {
                player2.inv = "eau";
                console.log('inventaire joueur 2: ', player2.inv);
              }
          }
          if ((bodyA.id == '22' && bodyB.id == '26')) {
              if (player2.inv == 0) {
                player2.inv = "levure";
                console.log('inventaire joueur 2: ', player2.inv);
              }
          }
          if ((bodyA.id == '22' && bodyB.id == '27')) {
              if (player2.inv == 0) {
                player2.inv = "houblon";
                console.log('inventaire joueur 2: ', player2.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          if ((bodyA.id == '22' && bodyB.id == '29')) {
            if (player2.inv == "malt") {
              player2.inv = "maltCon";
              console.log('inventaire joueur 2: ', player2.inv);
            }
          }
  //-------------------Empatage----------------------------------
          if ((bodyA.id == '17' && bodyB.id == '22')) {
            if (player2.inv == "eau" && m1.inv == "maltCon"){
              player2.inv = 0;
              m1.inv = 0;
              m2.inv = "biereMachine2"
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
            }
            if (player2.inv == "maltCon" && m1.inv == "eau"){
              player2.inv = 0;
              m1.inv = 0;
              m2.inv = "biereMachine2"
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
            }
            if (player2.inv == "eau" && m1.inv == 0){
              player2.inv = 0;
              m1.inv = "eau";
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            if (player2.inv == "maltCon" && m1.inv == 0) {
              player2.inv = 0;
              m1.inv = "maltCon";
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
          }
  //-----------------------Filtrage--------------------------------
          if ((bodyA.id == '19' && bodyB.id == '22')) {
            if (player2.inv == "levure" && m3.inv == "biereNoHoublon"){
              player2.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player2.inv == "levure" && m3.inv == "biereHoublon"){
              player2.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player2.inv == 0 && m3.inv == "biereNoHoublon"){
              player2.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player2.inv == 0 && m3.inv == "biereHoublon"){
              player2.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 2: ', player2.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          if ((bodyA.id == '12' && bodyB.id == '22')) {
            if(player2.inv == "biereHoublonLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2: ', player2.inv);
            }
            if(player2.inv == "biereNoHoublonNoLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2: ', player2.inv);
            }
            if(player2.inv == "biereNoHoublonLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2: ', player2.inv);
            }
            if(player2.inv == "biereHoublonLevure"){
              player2.inv = "0";
              console.log('inventaire joueur 2: ', player2.inv);
            }
          }
        }
  //------------------------------------------JOUEUR 3-----------------------------------------------------------------------------
  //---------------------Poubelle----------------------------
        if ((bodyA.id == '23' && bodyB.id == '30')) {
            if (player3.inv != 0) {
              player3.inv = 0;
              console.log('inventaire joueur 3 : ', player3.inv);
            }
        }
  //------------------matières premières----------------------
        if(player3.pad != undefined){
          if ((bodyA.id == '23' && bodyB.id == '28')) {
              if (player3.inv == 0) {
                player3.inv = "malt";
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
          if ((bodyA.id == '23' && bodyB.id == '25')) {
              if (player3.inv == 0) {
                player3.inv = "eau";
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
          if ((bodyA.id == '23' && bodyB.id == '26')) {
              if (player3.inv == 0) {
                player3.inv = "levure";
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
          if ((bodyA.id == '23' && bodyB.id == '27')) {
              if (player3.inv == 0) {
                player3.inv = "houblon";
                console.log('inventaire joueur 3 : ', player3.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          if ((bodyA.id == '23' && bodyB.id == '29')) {
            if (player3.inv == "malt") {
              player3.inv = "maltCon";
              console.log('inventaire joueur 3 : ', player3.inv);
            }
          }
  //-------------------Empatage----------------------------------
          if ((bodyA.id == '17' && bodyB.id == '23')) {
            if (player3.inv == "eau" && m1.inv == "maltCon"){
              player3.inv = 0;
              m1.inv = 0;
              m2.inv = "biereMachine2"
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
            }
            if (player3.inv == "maltCon" && m1.inv == "eau"){
              player3.inv = 0;
              m1.inv = 0;
              m2.inv = "biereMachine2"
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
            }
            if (player3.inv == "eau" && m1.inv == 0){
              player3.inv = 0;
              m1.inv = "eau";
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            if (player3.inv == "maltCon" && m1.inv == 0) {
              player3.inv = 0;
              m1.inv = "maltCon";
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
          }
  //-----------------------Filtrage--------------------------------
          if ((bodyA.id == '19' && bodyB.id == '23')) {
            if (player3.inv == "levure" && m3.inv == "biereNoHoublon"){
              player3.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player3.inv == "levure" && m3.inv == "biereHoublon"){
              player3.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player3.inv == 0 && m3.inv == "biereNoHoublon"){
              player3.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player3.inv == 0 && m3.inv == "biereHoublon"){
              player3.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 3 : ', player3.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          if ((bodyA.id == '12' && bodyB.id == '23')) {
            if(player3.inv == "biereHoublonLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 3 : ', player3.inv);
            }
            if(player3.inv == "biereNoHoublonNoLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 3 : ', player3.inv);
            }
            if(player3.inv == "biereNoHoublonLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 3 : ', player3.inv);
            }
            if(player3.inv == "biereHoublonLevure"){
              player3.inv = "0";
              console.log('inventaire joueur 3 : ', player3.inv);
            }
          }
        }
  //--------------------------------------------JOUEUR 4-----------------------------------------------------------------------------
  //---------------------Poubelle----------------------------
        if ((bodyA.id == '24' && bodyB.id == '30')) {
            if (player4.inv != 0) {
              player4.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
            }
        }
  //------------------matières premières----------------------
        if(player4.pad != undefined){
          if ((bodyA.id == '24' && bodyB.id == '28')) {
              if (player4.inv == 0) {
                player4.inv = "malt";
                console.log('inventaire joueur 4 : ', player4.inv);
              }
          }
          if ((bodyA.id == '24' && bodyB.id == '25')) {
              if (player4.inv == 0) {
                player4.inv = "eau";
                console.log('inventaire joueur 4 : ', player4.inv);
              }
          }
          if ((bodyA.id == '24' && bodyB.id == '26')) {
              if (player4.inv == 0) {
                player4.inv = "levure";
                console.log('inventaire joueur 4 : ', player4.inv);
              }
          }
          if ((bodyA.id == '24' && bodyB.id == '27')) {
              if (player4.inv == 0) {
                player4.inv = "houblon";
                console.log('inventaire joueur 4 : ', player4.inv);
              }
          }
  //-------------------Concassage machine1-----------------------
          if ((bodyA.id == '24' && bodyB.id == '29')) {
            if (player4.inv == "malt") {
              player4.inv = "maltCon";
              console.log('inventaire joueur 4 : ', player4.inv);
            }
          }
  //-------------------Empatage----------------------------------
          if ((bodyA.id == '17' && bodyB.id == '24')) {
            if (player4.inv == "eau" && m1.inv == "maltCon"){
              player4.inv = 0;
              m1.inv = 0;
              m2.inv = "biereMachine2"
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
            }
            if (player4.inv == "maltCon" && m1.inv == "eau"){
              player4.inv = 0;
              m1.inv = 0;
              m2.inv = "biereMachine2"
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 1 : ', m1.inv);
              console.log('inventaire machine 2 : ', m2.inv);
            }
            if (player4.inv == "eau" && m1.inv == 0){
              player4.inv = 0;
              m1.inv = "eau";
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }
            if (player4.inv == "maltCon" && m1.inv == 0) {
              player4.inv = 0;
              m1.inv = "maltCon";
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 1 : ', m1.inv);
            }

          }
  //-----------------------Filtrage--------------------------------
          if ((bodyA.id == '19' && bodyB.id == '24')) {
            if (player4.inv == "levure" && m3.inv == "biereNoHoublon"){
              player4.inv = "biereNoHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player4.inv == "levure" && m3.inv == "biereHoublon"){
              player4.inv = "biereHoublonLevure";
              m3.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player4.inv == 0 && m3.inv == "biereNoHoublon"){
              player4.inv = "biereNoHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
            if (player4.inv == 0 && m3.inv == "biereHoublon"){
              player4.inv = "biereHoublonNoLevure";
              m3.inv = 0;
              console.log('inventaire joueur 4 : ', player4.inv);
              console.log('inventaire machine 3 : ', m3.inv);
            }
          }
  //----------------------Livraison---------------------------------
          if ((bodyA.id == '12' && bodyB.id == '24')) {
            if(player4.inv == "biereHoublonLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
            }
            if(player4.inv == "biereNoHoublonNoLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
            }
            if(player4.inv == "biereNoHoublonLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
            }
            if(player4.inv == "biereHoublonLevure"){
              player4.inv = "0";
              console.log('inventaire joueur 4 : ', player4.inv);
            }
          }
        }
      }
    }, this);

    //Fonction pour récup qui touche
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
  }
}

module.exports = {map1};