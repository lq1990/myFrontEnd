import { TeslaX } from './TeslaX';
import { EnhancedPilot } from './EnhancedPilot';
let teslax = new TeslaX();
let en_teslax = new EnhancedPilot(teslax);

console.log(en_teslax.getDes());
console.log(en_teslax.cost());