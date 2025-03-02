export default class Character {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defense = undefined;
    }
  }