/**
 * 抽象牌友类
 */
export abstract class ACardPartner {
    private money: number;

    setMoney(m: number) {
        this.money = m;
    }
    getMoney(){
        return this.money;
    }

    abstract changeMoney(money: number, other : ACardPartner);
}