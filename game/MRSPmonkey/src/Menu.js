let PG_Hover = 0;
let Option_Hover = 0;

class Menu_Principal extends Phaser.Scene {

    constructor() {

        super("Menu_Principal");

    }

    preload() {


        this.load.audio('But_sound', '../sound/sound_button.wav');
        this.load.audio('Menu_sound', '../sound/mainMenu.wav');
        this.load.image('background', '../Pictures/background.png');
        this.load.image('button1', '../Pictures/PlayGameNot.png');
        this.load.image('button2', '../Pictures/PlayGameYES.png');
        this.load.image('tonneau', '../Pictures/tonneau.png');
        this.load.image('cagette', '../Pictures/cagette.png');


    }

    create() {

        this.But_sound = this.sound.add('But_sound');

        this.Menu_sound = this.sound.add('Menu_sound');


        this.Menu_sound.play( {
            loop : true
        });

        this.back = this.add.image(0,0,'background');
        this.back.setOrigin(0,0);

        this.add.text(800, 500, "NOM DU JEU", { fontFamily: 'Zounderkite 3d', fontSize: '64px', fill: '#000' }).setOrigin(0.20,11);

        this.add.image(200,300,'tonneau').setScale(2.3).setRotation(1);
        this.add.image(670,740,'tonneau').setScale(2.3).setRotation(-1);
        this.add.image(1200,760, 'tonneau').setScale(2.3).setRotation(-1);
        this.add.image(1550,340,'tonneau').setScale(2.3).setRotation(1);

        this.add.image(600,325, 'cagette').setScale(2.3);
        this.add.image(200,725, 'cagette').setScale(2.3);
        this.add.image(1200,400,'cagette').setScale(2.3)
        this.add.image(1608,710, 'cagette').setScale(2.3);

        this.PlayGame = this.add.sprite( 800, 500, 'button1')
        .setOrigin(0,0).setInteractive().setScale(1.5)


        this.PlayGame.on('pointerdown', () => {

            this.But_sound.play()
            this.scene.start("Selection_Niveaux");
        })

        this.PlayGame.on('pointerover',function(pointer){

            this.destroy();
            PG_Hover = 2;
        })




    }


    update(){

       if(PG_Hover == 2) {


        this.PlayGame = this.add.sprite( 800, 500, 'button2')
	    .setOrigin(0,0).setInteractive().setScale(1.5)

        this.PlayGame.on('pointerdown', () => {

            this.But_sound.play()
            this.scene.start("Selection_Niveaux");
        })

        PG_Hover = 0;

        this.PlayGame.on('pointerout',function(pointer){

            this.destroy();
            PG_Hover = 3;

        })

       }

       if(PG_Hover == 3) {

        this.PlayGame = this.add.sprite( 800, 500, 'button1')
	    .setOrigin(0,0).setInteractive().setScale(1.5)


        this.PlayGame.on('pointerdown', () => {

            this.But_sound.play()
            this.scene.start("Selection_Niveaux");
        })

        PG_Hover = 0

       this.PlayGame.on('pointerover',function(pointer){

            this.destroy();
            PG_Hover = 2;
        })

      }
      ///////////////////////////////////////////////////////////////////////
    }
}

module.exports = {Menu_Principal};
