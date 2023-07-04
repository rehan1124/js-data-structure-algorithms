class Player {
  constructor(name, type) {
    console.log("Player: ", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}, I am a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Wizard: ", this);
  }

  play() {
    console.log(`I am a ${this.type}`);
  }
}

const player1 = new Player("Yada", "Darklord");
player1.introduce();

const wizard1 = new Wizard("Yoshu", "Knight");
// const wizard2 = new Wizard("Yondu", "Healer");
wizard1.play();
// wizard2.play();
wizard1.introduce();
