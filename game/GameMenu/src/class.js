class player{
  constructor(type, obj, img, pad){
    this.type = type;
    this.inv = obj;
    this.img = img;
    this.pad = pad;
  }
}

class machine{
  constructor(type, obj, img){
    this.type = type;
    this.inv = obj;
    this.img = img;
  }
}

class commande{
  constructor(nom, temps, img, text){
    this.nom = nom;
    this.temps = temps;
    this.img = img;
    this.text = text;
  }
}
module.exports = {player, machine, commande};
