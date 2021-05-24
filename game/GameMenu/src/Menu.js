let PG_Hover = 0;
let Option_Hover = 0;

export default class Menu_Principal extends Phaser.Scene {

    constructor() {

        super("Menu_Principal");
           
    }

    preload() {

        
        this.load.audio('But_sound', 'sound_button.wav');
        this.load.audio('Menu_sound', 'mainMenu.wav');
        this.load.image('background', 'background.png');
        this.load.image('button1', 'PlayGameNot.png');
        this.load.image('dab', 'bg.jpg');
        this.load.image('button2', 'PlayGameYES.png');
        this.load.image('Option', 'OptionNOT.png');
        this.load.image('Option2', 'OptionYESYes.png');
        this.load.image('tonneau', 'tonneau.png');
        this.load.image('cagette', 'cagette.png');
        
        
    }

    create() {
        
        this.But_sound = this.sound.add('But_sound');

        this.Menu_sound = this.sound.add('Menu_sound');

        
        this.Menu_sound.play( {
            loop : true
        });
        
        this.back = this.add.image(0,0,'background');
        this.back.setOrigin(0,0);

        this.add.text(800, 500, "NOM DU JEU", { fontSize: '64px', fill: '#000' }).setOrigin(0.20,5);

        this.add.image(200,300,'tonneau').setScale(2.3).setRotation(1);
        this.add.image(670,740,'tonneau').setScale(2.3).setRotation(-1);
        this.add.image(1200,760, 'tonneau').setScale(2.3).setRotation(-1);
        this.add.image(1550,340,'tonneau').setScale(2.3).setRotation(1);
        
        this.add.image(600,325, 'cagette').setScale(2.3);
        this.add.image(200,725, 'cagette').setScale(2.3);
        this.add.image(1200,400,'cagette').setScale(2.3)
        this.add.image(1608,710, 'cagette').setScale(2.3);

        this.PlayGame = this.add.sprite( 800, 500, 'button1')
        .setOrigin(0,1).setInteractive().setScale(1.5)
	    
         
        this.PlayGame.on('pointerdown', () => {

            this.But_sound.play()
            this.scene.start("Selection_Niveaux");
        })


        this.Option = this.add.sprite( 800, 500, 'Option')
	    .setOrigin(0,-1).setInteractive().setScale(1.5)
	    
         
        this.Option.on('pointerdown', () => {

            this.But_sound.play()
            this.scene.start("Selection_Niveaux");
        })

    
        this.PlayGame.on('pointerover',function(pointer){
            
            this.destroy();
            PG_Hover = 2;
        })


        this.Option.on('pointerover',function(pointer){
            
            this.destroy();
            Option_Hover = 2;
        })

        
       
        
    }


    update() {
         
       if(PG_Hover == 2) {

        
        this.PlayGame = this.add.sprite( 800, 500, 'button2')
	    .setOrigin(0,1).setInteractive().setScale(1.5)
	    
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
	    .setOrigin(0,1).setInteractive().setScale(1.5)
	    
         
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
       
       if(Option_Hover == 2) {

        
        this.Option = this.add.sprite( 800, 500, 'Option2')
	    .setOrigin(0,-1).setInteractive().setScale(1.5)
	    
        this.Option.on('pointerdown', () => {

            this.But_sound.play()
            this.scene.start("Selection_Niveaux");
        })

        Option_Hover = 0;

        this.Option.on('pointerout',function(pointer){
            
            this.destroy();
            Option_Hover = 3;
            
        })

       }

       if(Option_Hover == 3) {

        this.Option = this.add.sprite( 800, 500, 'Option')
	    .setOrigin(0,-1).setInteractive().setScale(1.5)
	    
        this.Option.on('pointerdown', () => {

            this.But_sound.play()
            this.scene.start("Selection_Niveaux");
        })

        Option_Hover = 0
        
       this.Option.on('pointerover',function(pointer){
            
            this.destroy();
            Option_Hover = 2;
        })

       }
    }
}