/**
 * 外观模式 Facade
 * 外观类 为子系统提供一个 共同的对外接口。
 */

class BlurayPlayer {
  on() {
    console.log('Bluray player turning on...');
  }

  turnOff() {
    console.log('Bluray turning off...');
  }

  play() {
    console.log('Playing bluray disc...');
  }
}
class Amplifier {
  on() {
    console.log('Amp player turning on...');
  }

  turnOff() {
    console.log('Amp turning off...');
  }

  setSource(source: string) {
    console.log('setting source to ' + source);
  }
  setVolumn(volumeLevel: number) {
    console.log('setting volume to ' + volumeLevel);
  }
}

class Lights {
  dim() {
    console.log('lights are dimming...');
  }
}

class TV {
  turnOn() {
    console.log('TV turning on...');
  }

  turnOff() {
    console.log('TV turning off...');
  }
}

class PopcornMaker {
  turnOn() {
    console.log('Popcorn on...');
  }
  turnOff() {
    console.log('Popcorn off...');
  }
  pop() {
    console.log('popping corn!');
  }
}

class HomeTheaterFacade {
  private bluray: BlurayPlayer;
  private amp: Amplifier;
  private lights: Lights;
  private tv: TV;
  private popcornMaker: PopcornMaker;

  constructor(
    amp: Amplifier,
    bluray: BlurayPlayer,
    lights: Lights,
    tv: TV,
    popcornMaker: PopcornMaker
  ) {
    this.bluray = bluray;
    this.amp = amp;
    this.lights = lights;
    this.tv = tv;
    this.popcornMaker = popcornMaker;
  }

  public watchMovie () {
      this.popcornMaker.turnOn();
      this.popcornMaker.pop();

      this.lights.dim();

      this.tv.turnOn();

      this.amp.on();
      this.amp.setSource("bluray");
      this.amp.setVolumn(11);

      this.bluray.on();
      this.bluray.play();
  }

  public endMovie() {
    this.popcornMaker.turnOff();

    this.tv.turnOff();

    this.amp.turnOff();

    this.bluray.turnOff();
  }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let hometheater = new HomeTheaterFacade(amp,bluray,lights,tv,popcornMaker);
hometheater.watchMovie();

