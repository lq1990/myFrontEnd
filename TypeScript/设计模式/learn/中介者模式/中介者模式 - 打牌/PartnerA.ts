import { ACardPartner } from './ACardPartner';

export class PartnerA extends ACardPartner {
  changeMoney(money: number, other: ACardPartner) {
    this.setMoney(this.getMoney() + money);
    other.setMoney(other.getMoney() - money);
  }
}
