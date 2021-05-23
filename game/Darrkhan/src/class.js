class player{
  constructor(type, obj, img, pad){
    this.type = type;
    this.inv = obj;
    this.img = img;
    this.pad = pad;
  }
}

class machine{
  constructor(type, obj, img, pad){
    this.type = type;
    this.inv = obj;
    this.img = img;
  }
}
module.exports = {player, machine};
