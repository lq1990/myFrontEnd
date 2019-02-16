import { ACardPartner } from './ACardPartner';
export class PartnerB extends ACardPartner {
    changeMoney(money: number, other: ACardPartner) {
        this.setMoney(this.getMoney() + money);
        other.setMoney(other.getMoney() - money);
      }
}