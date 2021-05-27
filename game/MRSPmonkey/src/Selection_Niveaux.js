var Etat1 = 0;
var Etat2 = 0;
var Etat3 = 0;
var Etat4 = 0;

class Selection_Niveaux extends Phaser.Scene {

    constructor() {
        super("Selection_Niveaux");
    }


    preload() {

        this.load.image('Etape1Not', '../Pictures/Etape1Not.png');
        this.load.image('Etape1Yes', '../Pictures/Etape1Yes.png');
        this.load.image('Etape2Not', '../Pictures/Etape2Not.png');
        this.load.image('Etape2Yes', '../Pictures/Etape2Yes.png');
        this.load.image('Etape3Not', '../Pictures/Etape3Not.png');
        this.load.image('Etape3Yes', '../Pictures/Etape3Yes.png');
        this.load.image('Etape4Not', '../Pictures/Etape4Not.png');
        this.load.image('Etape4Yes', '../Pictures/Etape4Yes.png');
        this.load.image('tonneau', '../Pictures/tonneau.png');
        this.load.image('cagette', '../Pictures/cagette.png');
        //this.load.image('Home', 'Home.png');
    }

    create() {

        this.But_sound = this.sound.add('But_sound');

        this.back = this.add.image(0,0,'background');
        this.back.setOrigin(0,0);

        this.add.text(690, 500, "Selectionner un niveau : ", { fontSize: '64px', fill: '#000' }).setOrigin(0.20,5);

        /*this.Home = this.add.sprite( 100, 100, 'Home')
	    .setInteractive()
	    .on('pointerdown', () => {
            this.But_sound.play();
            this.scene.start("Menu_Principal");
            }
        );*/

        this.add.image(200,300,'tonneau').setScale(2.3).setRotation(1);
        this.add.image(670,740,'tonneau').setScale(2.3).setRotation(-1);
        this.add.image(1200,760, 'tonneau').setScale(2.3).setRotation(-1);
        this.add.image(1550,340,'tonneau').setScale(2.3).setRotation(1);

        this.add.image(600,325, 'cagette').setScale(2.3);
        this.add.image(200,725, 'cagette').setScale(2.3);
        this.add.image(1200,400,'cagette').setScale(2.3)
        this.add.image(1608,710, 'cagette').setScale(2.3);

        this.Etape1 = this.add.sprite(800, 500,'Etape1Not')
	    .setInteractive()
        .setScale(1.7)
        .setOrigin(0,2)
	    .on('pointerdown', () =>  {

            this.But_sound.play();
            this.scene.start("map1");
            Etat1 = 1
        });


        this.Etape2 = this.add.sprite(800,500,'Etape2Not')
	    .setInteractive()
        .setScale(1.7)
        .setOrigin(0,0.5)
	    .on('pointerdown', () => {

            this.But_sound.play();
            this.scene.start("map2");
            Etat2 = 1

        });


        this.Etape3 = this.add.sprite(800,500,'Etape3Not')
	    .setInteractive()
        .setScale(1.7)
        .setOrigin(0,-1)
	    .on('pointerdown', () => {

            this.But_sound.play();
            this.scene.start("map3");
            Etat3 = 1

        });


        this.Etape4 = this.add.sprite(800,500,'Etape4Not')
	    .setInteractive()
        .setScale(1.7)
        .setOrigin(0,-2.5)
	    .on('pointerdown', () => {
            this.But_sound.play();
            this.scene.start("map4");
            Etat4 = 1
        });


        /////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////

        this.Etape1.on('pointerover',function(pointer){

            this.destroy();
            Etat1 = 2;

        })
        this.Etape2.on('pointerover',function(pointer){

            this.destroy();
            Etat2 = 2;

        })
        this.Etape3.on('pointerover',function(pointer){

            this.destroy();
            Etat3 = 2;

        })
        this.Etape4.on('pointerover',function(pointer){

            this.destroy();
            Etat4 = 2;

        })


    }
    update() {


        if(Etat1 == 2) {

            this.Etape1 = this.add.sprite(800, 500,'Etape1Yes')
            .setInteractive()
            .setScale(1.7)
            .setOrigin(0,2)
            .on('pointerdown', () =>  {

                this.But_sound.play();
                this.scene.start("map1");
                Etat1 = 1
            });

            Etat1 = 0;

            this.Etape1.on('pointerout',function(pointer){

                this.destroy();
                Etat1 = 3;

            })

        }

        if(Etat1 == 3) {

            this.Etape1 = this.add.sprite(800, 500,'Etape1Not')
            .setInteractive()
            .setScale(1.7)
            .setOrigin(0,2)
            .on('pointerdown', () =>  {

                this.But_sound.play();
                this.scene.start("map1");
                Etat1 = 1
            });

            Etat1 = 0

            this.Etape1.on('pointerover',function(pointer){

                this.destroy();
                Etat1 = 2;
            })

        }

        ////////////////////////////////////////////////////

        if(Etat2 == 2) {

            this.Etape2 = this.add.sprite(800,500,'Etape2Yes')
            .setInteractive()
            .setScale(1.7)
            .setOrigin(0,0.5)
            .on('pointerdown', () =>  {
                this.But_sound.play();
                this.scene.start("map2");
                Etat2 = 1
            });

            Etat2 = 0;

            this.Etape2.on('pointerout',function(pointer){

                this.destroy();
                Etat2 = 3;

            })

        }

        if(Etat2 == 3) {

            this.Etape2 = this.add.sprite(800,500,'Etape2Not')
            .setInteractive()
            .setScale(1.7)
            .setOrigin(0,0.5)
            .on('pointerdown', () =>  {
                this.But_sound.play();
                this.scene.start("map2");
                Etat2 = 1
            });

            Etat2 = 0

            this.Etape2.on('pointerover',function(pointer){

                this.destroy();
                Etat2 = 2;
            })

        }



        ///////////////////////////////////////////////////////////

        if(Etat3 == 2) {

            this.Etape3 = this.add.sprite(800,500,'Etape3Yes')
            .setInteractive()
            .setScale(1.7)
            .setOrigin(0,-1)
            .on('pointerdown', () =>  {
                this.But_sound.play();
                this.scene.start("map3");
                Etat3 = 1
            });

            Etat3 = 0;

            this.Etape3.on('pointerout',function(pointer){

                this.destroy();
                Etat3 = 3;

            })

        }

        if(Etat3 == 3) {

            this.Etape3 = this.add.sprite(800,500,'Etape3Not')
	        .setInteractive()
            .setScale(1.7)
            .setOrigin(0,-1)
	        .on('pointerdown', () =>  {
                this.But_sound.play();
                this.scene.start("map3");
                Etat3 = 1
            });

            Etat3 = 0

            this.Etape3.on('pointerover',function(pointer){

                this.destroy();
                Etat3 = 2;
            })

        }


        /////////////////////////////////////////////////////////////

        if(Etat4 == 2) {

            this.Etape4 = this.add.sprite(800,500,'Etape4Yes')
            .setInteractive()
            .setScale(1.7)
            .setOrigin(0,-2.5)
            .on('pointerdown', () =>  {
                this.But_sound.play();
                this.scene.start("map4");
                Etat4 = 1
            });

            Etat4 = 0;

            this.Etape4.on('pointerout',function(pointer){

                this.destroy();
                Etat4 = 3;

            })

        }

        if(Etat4 == 3) {

            this.Etape4 = this.add.sprite(800,500,'Etape4Not')
            .setInteractive()
            .setScale(1.7)
            .setOrigin(0,-2.5)
            .on('pointerdown', () =>  {
                this.But_sound.play();
                this.scene.start("map4");
                Etat4 = 1
            });

            Etat4 = 0

            this.Etape4.on('pointerover',function(pointer){

                this.destroy();
                Etat4 = 2;
            })

        }
    }
}
module.exports = {Selection_Niveaux};
