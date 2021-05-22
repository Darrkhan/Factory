var Etat1 = 0;
var Etat2 = 0;
var Etat3 = 0;
var Etat4 = 0;

export default class Selection_Niveaux extends Phaser.Scene {

    constructor() {

        super("Selection_Niveaux");
        
        
    }


    preload() {

        this.load.image('Etape1Not', 'Etape1Not.png');
        this.load.image('Etape1Yes', 'Etape1Yes.png');
        this.load.image('Etape2Not', 'Etape2Not.png');
        this.load.image('Etape2Yes', 'Etape2Yes.png');
        this.load.image('Etape3Not', 'Etape3Not.png');
        this.load.image('Etape3Yes', 'Etape3Yes.png');
        this.load.image('Etape4Not', 'Etape4Not.png');
        this.load.image('Etape4Yes', 'Etape4Yes.png');
        this.load.image('Home', 'Home.png');
    }

    create() {
        
        this.add.image(850,500,'sky');

        this.Home = this.add.sprite( 100, 100, 'Home')
	    .setInteractive()
	    .on('pointerdown', () => this.scene.start("Menu_Principal"));

        this.Etape1 = this.add.sprite( 200, 500, 'Etape1Not')
	    .setInteractive()
	    .on('pointerdown', () => Etat1 = 1);


        this.Etape2 = this.add.sprite( 400, 500, 'Etape2Not')
	    .setInteractive()
	    .on('pointerdown', () => Etat2 = 1);


        this.Etape3 = this.add.sprite( 600, 500, 'Etape3Not')
	    .setInteractive()
	    .on('pointerdown', () => Etat3 = 1);


        this.Etape4 = this.add.sprite( 800, 500, 'Etape4Not')
	    .setInteractive()
	    .on('pointerdown', () => Etat4 = 1);


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
            
            this.Etape1 = this.add.sprite( 200, 500, 'Etape1Yes')
            .setInteractive()
            .on('pointerdown', () => Etat1 = 1);
    
            Etat1 = 0;
    
            this.Etape1.on('pointerout',function(pointer){
                
                this.destroy();
                Etat1 = 3;
                
            })
    
        }
    
        if(Etat1 == 3) {
            
            this.Etape1 = this.add.sprite( 200, 500, 'Etape1Not')
            .setInteractive()
            .on('pointerdown', () => Etat1 = 1);
    
            Etat1 = 0
            
            this.Etape1.on('pointerover',function(pointer){
                
                this.destroy();
                Etat1 = 2;
            })
    
        }

        ////////////////////////////////////////////////////

        if(Etat2 == 2) {
            
            this.Etape2 = this.add.sprite( 400, 500, 'Etape2Yes')
            .setInteractive()
            .on('pointerdown', () => Etat2 = 1);
    
            Etat2 = 0;
    
            this.Etape2.on('pointerout',function(pointer){
                
                this.destroy();
                Etat2 = 3;
                
            })
    
        }
    
        if(Etat2 == 3) {
            
            this.Etape2 = this.add.sprite( 400, 500, 'Etape2Not')
            .setInteractive()
            .on('pointerdown', () => Etat2 = 1);
    
            Etat2 = 0
            
            this.Etape2.on('pointerover',function(pointer){
                
                this.destroy();
                Etat2 = 2;
            })
    
        }



        ///////////////////////////////////////////////////////////

        if(Etat3 == 2) {
            
            this.Etape3 = this.add.sprite( 600, 500, 'Etape3Yes')
            .setInteractive()
            .on('pointerdown', () => Etat3= 1);
    
            Etat3 = 0;
    
            this.Etape3.on('pointerout',function(pointer){
                
                this.destroy();
                Etat3 = 3;
                
            })
    
        }
    
        if(Etat3 == 3) {
            
            this.Etape3 = this.add.sprite( 600, 500, 'Etape3Not')
            .setInteractive()
            .on('pointerdown', () => Etat3 = 1);
    
            Etat3 = 0
            
            this.Etape3.on('pointerover',function(pointer){
                
                this.destroy();
                Etat3 = 2;
            })
    
        }


        /////////////////////////////////////////////////////////////
 
        if(Etat4 == 2) {
            
            this.Etape4 = this.add.sprite( 800, 500, 'Etape4Yes')
            .setInteractive()
            .on('pointerdown', () => Etat4 = 1);
    
            Etat4 = 0;
    
            this.Etape4.on('pointerout',function(pointer){
                
                this.destroy();
                Etat4 = 3;
                
            })
    
        }
    
        if(Etat4 == 3) {
            
            this.Etape4 = this.add.sprite( 800, 500, 'Etape4Not')
            .setInteractive()
            .on('pointerdown', () => Etat4 = 1);
    
            Etat4 = 0
            
            this.Etape4.on('pointerover',function(pointer){
                
                this.destroy();
                Etat4 = 2;
            })
    
        }           
    }
}
