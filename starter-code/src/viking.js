// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health,strength);
    this.name = name;
  }


  receiveDamage(damage){
    super.receiveDamage(damage);
    return this.health <= 0 ?
       `${this.name} has died in act of combat`:
       `${this.name} has received ${damage} points of damage`;
  }

  battleCry(){
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super (health, strength);
  }


  receiveDamage(damage){
    super.receiveDamage(damage);
    return this.health <= 0 ?
       `A Saxon has died in combat`:
       `A Saxon has received ${damage} points of damage`;
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack(){
    this.saxonArmy.forEach()
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
