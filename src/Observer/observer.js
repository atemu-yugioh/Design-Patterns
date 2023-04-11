class Observer {
  constructor(name) {
    this.namePick = name;
  }

  update(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.namePick} ping ::${location}`);
  }

  showMessage(message) {
    console.log(`${this.namePick} seen :: ${message}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach((observer) =>
      observer.update(JSON.stringify(location))
    );
  }

  chat(message) {
    this.observerList.forEach((observer) => observer.showMessage(message));
  }
}

//? Blue Team
const blueTeam = new Subject();

//? team blue pick
const jayce = new Observer("jayce");
const leesin = new Observer("leesin");
const zed = new Observer("zed");
const blit = new Observer("blit");
const vayne = new Observer("vayne");

//? add jayce, leesin, zed, blit, vayne to team blue
blueTeam.addObserver(jayce);
blueTeam.addObserver(leesin);
blueTeam.addObserver(zed);
blueTeam.addObserver(blit);
blueTeam.addObserver(vayne);

//! Red Team
const redTeam = new Subject();

//! team blue pick
const darius = new Observer("darius");
const graves = new Observer("graves");
const yasuo = new Observer("yasuo");
const thresh = new Observer("thresh");
const kalista = new Observer("kalista");

//! add darius, graves, yasuo, thresh, kalista to team blue
redTeam.addObserver(darius);
redTeam.addObserver(graves);
redTeam.addObserver(yasuo);
redTeam.addObserver(thresh);
redTeam.addObserver(kalista);

// TODO: Zed ping rừng gank
blueTeam.notify({ lang: 112, lat: 120 });

// TODO: yasuo chat: zed rời khỏi vị trí
redTeam.chat("zed rời khỏi vị trí rồi nha");
