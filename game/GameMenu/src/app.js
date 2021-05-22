import Phaser from 'phaser'
import { setOriginalNode, textSpanContainsTextSpan } from 'typescript';
import Menu_Principal from "./Menu.js";
import Selection_Niveaux from "./Selection_Niveaux.js";

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
        scene: [Menu_Principal,Selection_Niveaux]
    };
    game= new Phaser.Game(config);
    game.scene.start("Menu_Principal");
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



























