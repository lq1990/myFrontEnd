import { TeslaX } from "./TeslaX";
import { EnhancedPilot } from './EnhancedPilot';

let teslax = new TeslaX();
let en_x = new EnhancedPilot(teslax);

console.log(en_x.getDes());
console.log(en_x.cost());
