let PG_Hover = 0;
let Option_Hover = 0;

export default class Menu_Principal extends Phaser.Scene {

    constructor() {

        super("Menu_Principal");
           
    }

    preload() {

        this.load.image('sky', 'AMOGUSTRUE.jpg');
        this.load.image('button1', 'PlayGameNot.png');
        this.load.image('dab', 'bg.jpg');
        this.load.image('button2', 'PlayGameYES.png');
        this.load.image('Option', 'OptionNOT.png');
        this.load.image('Option2', 'OptionYESYes.png');
        
        
    }

    create() {
        
        this.add.image(850,500,'sky');
        
        this.PlayGame = this.add.sprite( 800, 500, 'button1')
	    .setInteractive()
	    .on('pointerdown', () => this.scene.start("Selection_Niveaux"));


        this.Option = this.add.sprite( 800, 800, 'Option')
	    .setInteractive()
	    .on('pointerdown', () => this.scene.start("Selection_Niveaux"));

    
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
	    .setInteractive()
	    .on('pointerdown', () => this.scene.start("Selection_Niveaux"));

        PG_Hover = 0;

        this.PlayGame.on('pointerout',function(pointer){
            
            this.destroy();
            PG_Hover = 3;
            
        })

       }

       if(PG_Hover == 3) {

        this.PlayGame = this.add.sprite( 800, 500, 'button1')
	    .setInteractive()
	    .on('pointerdown', () => this.scene.start("Selection_Niveaux"));

        PG_Hover = 0
        
       this.PlayGame.on('pointerover',function(pointer){
            
            this.destroy();
            PG_Hover = 2;
        })

       }


       ///////////////////////////////////////////////////////////////////////
       
       if(Option_Hover == 2) {

        
        this.Option = this.add.sprite( 800, 800, 'Option2')
	    .setInteractive()
	    .on('pointerdown', () => this.scene.start("Selection_Niveaux"));

        Option_Hover = 0;

        this.Option.on('pointerout',function(pointer){
            
            this.destroy();
            Option_Hover = 3;
            
        })

       }

       if(Option_Hover == 3) {

        this.Option = this.add.sprite( 800, 800, 'Option')
	    .setInteractive()
	    .on('pointerdown', () => this.scene.start("Selection_Niveaux"));

        Option_Hover = 0
        
       this.Option.on('pointerover',function(pointer){
            
            this.destroy();
            Option_Hover = 2;
        })

       }
    }
}