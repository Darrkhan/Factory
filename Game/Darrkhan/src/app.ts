import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import "@babylonjs/loaders/glTF";
//import * as BABYLON from '@babylonjs/core/Legacy/legacy';
import { Scene } from "@babylonjs/core/scene";
import { Engine } from '@babylonjs/core/Engines/engine';
enum State { START = 0, GAME = 1, LOSE = 2, CUTSCENE = 3 }

// App class is our entire game application
class App {
    // General Entire Application
    private _scene: Scene;
    private _canvas: HTMLCanvasElement;
    private _engine: Engine;

    /*Game State Related
    public assets;
    private _input: PlayerInput;
    private _player: Player;
    private _ui: Hud;
    private _environment;*/

    //Sounds
    // public sfx: Sound;
    /*public game: Sound;
    public end: Sound;*/

    //Scene - related
    private _state: number = 0;
    private _gamescene: Scene;
    private _cutScene: Scene;

    //post process
    private _transition: boolean = false;

    constructor() {
        this._canvas = this._createCanvas();

        // initialize babylon scene and engine
        //this._init();
    }
    //set up the canvas
    private _createCanvas(): HTMLCanvasElement {

       //Commented out for development
       document.documentElement.style["overflow"] = "hidden";
       document.documentElement.style.overflow = "hidden";
       document.documentElement.style.width = "100%";
       document.documentElement.style.height = "100%";
       document.documentElement.style.margin = "0";
       document.documentElement.style.padding = "0";
       document.body.style.overflow = "hidden";
       document.body.style.width = "100%";
       document.body.style.height = "100%";
       document.body.style.margin = "0";
       document.body.style.padding = "0";

       //create the canvas html element and attach it to the webpage
       this._canvas = document.createElement("canvas");
       this._canvas.style.width = "100%";
       this._canvas.style.height = "100%";
       this._canvas.id = "gameCanvas";
       document.body.appendChild(this._canvas);

       return this._canvas;
   }
}
