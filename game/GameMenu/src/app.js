import Phaser from 'phaser'
import { setOriginalNode, textSpanContainsTextSpan } from 'typescript';

window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: [scene1,scene2]
    };
    game= new Phaser.Game(config);
    game.scene.start("scene1");
}

var dab

class scene1 extends Phaser.Scene {

    constructor() {

        super({ key : 'scene1'});
       
        
    }


    preload() {

        this.load.image('sky', 'AMOGUSTRUE.jpg');
        this.load.image('button', 'PlayGameNot.png');
        this.load.image('dab', 'bg.jpg');
        this.load.image('button2', 'PlayGameYES.png');
    }

    create() {
        
        this.add.image(850,500,'sky');
 
        this.face = this.add.image(450,500, 'button');
        this.face.setInteractive();

        this.input.on('gameobjectdown', this.onObjectClicked);

        this.face.on('pointerover',function(pointer){
            
            this.destroy();
            dab = 2
        })
        
        
       

        

    }

    onObjectClicked(pointer, gameObject) {

        console.log("Fortnite");
        dab = 1;
    }

    update() {

       if(dab == 1) {

        console.log("dab");

        dab = 0

        this.scene.start("scene2");
        
       }

       if(dab == 2 ) {

        
        this.face = this.add.image(450,500,'button2')
        this.face.setInteractive();

        dab = 0

        this.face.on('pointerout',function(pointer){
            
            this.destroy();
            console.log("dab125")
            dab = 3;
            
        })

       }

       if(dab == 3) {

        this.face = this.add.image(450,500,'button');
        this.face.setInteractive();

        dab = 0
        
        this.face.on('pointerover',function(pointer){
            
            this.destroy();
            dab = 2
        })

       }
    }
}

class scene2 extends Phaser.Scene {

    constructor() {

        super({ key : 'scene2'});
        var button;
        var dab = 0;
    }


    preload() {

        //this.load.image('sky', 'AMOGUSTRUE.jpg');
        //this.load.image('button', 'PlayGameNot.png');
        //this.load.image('dab', 'bg.jpg');
    }

    create() {
        
        this.add.image(850,500,'sky');
        /*this.add.image(850,500,'sky');
 
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

        });*/

    }

    update() {

        
    }

    onObjectClicked(pointer, gameObject) {

        console.log("fortnite");
    }
}



/*var config = {
    type: Phaser.AUTO,
    width: 1900,
    height: 1100,
    scene: {
        preload : preload,
        create : create,
        update : update,
    }
};*/



























