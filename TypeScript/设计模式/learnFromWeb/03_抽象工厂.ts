// 在大的框架下面有很多小项目时，用抽象工厂配合 和动态对象生成之类的技术，
// 就可以很容易实现灵活的架构

interface Shootable {
    shoot();
}

abstract class Bullet {
    abstract name: string;
}

abstract class Gun implements Shootable {
     _bullet: Bullet;

    addBullet(bullet: Bullet) {
        this._bullet = bullet;
    }

    abstract shoot();
}

class AK47 extends Gun {
    shoot() {
        console.log(`ak47 shoots with ${this._bullet.name}. `);
    }
}
class M4A1 extends Gun {
    shoot() {
        console.log(`m4a1 shoots with ${this._bullet.name}. `);
    }
}

class AKBullet {
    name: string = "ak bullet";
}

class M4Bullet {
    name: string = "m4a1 bullet";
}

abstract class ArmFactory {
    abstract createGun(): Gun;
    abstract createBullet(): Bullet;
}

class AK47Factory extends ArmFactory{
    createGun(): Gun{
        let gun = new AK47();  // 生产Ak47
        console.log('produce ak47 gun.');
        this.clean(gun);       // 清理工作
        this.applyTungOil(gun);// Ak47是木头枪托，涂上桐油
        return gun;
    }

    private clean(gun: Gun){
        //清洗
        console.log('clean gun.');
    }

    private applyTungOil(gun: Gun){
        //涂上桐油
        console.log('apply tung oil.');
    }

    createBullet(): Bullet{
        return new AKBullet();
    }
}

class M4A1Factory extends ArmFactory{ //M4A1工厂
    createGun(): Gun{
        let gun = new M4A1();   // 生产M4A1
        console.log('produce m4a1 gun.');
        this.clean(gun);        // 清理工作
        this.sprayPaint(gun);   // M4是全金属，喷上漆
        return gun;
    }

    private clean(gun: Gun){
        //清洗
        console.log('clean gun.');
    }

    private sprayPaint(gun: Gun){
        //喷漆
        console.log('spray paint.');
    }

    createBullet(): Bullet{
        return new M4Bullet();
    }
}

// ========================== 使用 =================================
function shoot(gun:Gun, bullet: Bullet) {
    gun.addBullet(bullet);
    gun.shoot();
}

let akFactory = new AK47Factory();
shoot(akFactory.createGun(), akFactory.createBullet());

let m4a1Factory = new M4A1Factory();
shoot(m4a1Factory.createGun(), m4a1Factory.createBullet());