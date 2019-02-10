import { TeslaS, EnhancedPilot } from "./decorator04";

let car = new TeslaS();
let encar = new EnhancedPilot(car);
console.log(encar.getDes());
console.log(encar.cost());