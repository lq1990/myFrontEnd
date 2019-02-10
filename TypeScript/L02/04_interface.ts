interface Alarm {
    alert();
}

interface Light {
    lightOn();
    lightOff();
}

class Car implements Alarm, Light {
    alert() {
        console.log("car alerts");
    }
    lightOn() {
        console.log("car lights on");
    }
    lightOff() {
        console.log("car lights off");
    }
}

let c = new Car();
c.alert();
c.lightOn();
c.lightOff();