import { IMacSeller } from './IMacSeller';
import { USAMacSeller } from './USAMacSeller';

export class HKMacSeller implements IMacSeller {
    private seller: IMacSeller = new USAMacSeller();

    buy() {
        this.seller.buy();
        console.log("buy a mac from HK");
    }
}
