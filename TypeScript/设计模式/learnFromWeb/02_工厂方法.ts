// 把工厂抽象出来，让子工厂来决定怎么生产产品，每个产品都由自己的工厂来生产

// 优点：当增加其他枪时，再加一个产品和产品工厂就行。
// 缺点：增加一个产品，需要多加2个类，增加了代码的复杂性

namespace factoryMethod {
    interface Shootable {
        shoot();
    }
    
    abstract class Gun implements Shootable {
        abstract shoot();
    }
    
    class AK47 extends Gun {
        shoot() {
            console.log("ak47 shoots...");
        }
    }
    
    class M4A1 extends Gun {
        shoot() {
            console.log("m4a1 shoots...");
        }
    }
    
    abstract class GunFactory {
        abstract create(): Gun;
    }
    
    class AK47Factory extends GunFactory {
        create(): Gun {
            let gun = new AK47();
            console.log("produce ak47 gun.");
            this.clean(gun);
            this.applyTungOil(gun);
            return gun;
        }
        private clean(gun: Gun) {
            console.log("clean gun.");
        }
        private applyTungOil(gun: Gun) {
            console.log("apply tung oil.");
        }
    }
    
    class M4A1Factory extends GunFactory {
        create(): Gun {
            let gun = new M4A1();
            console.log("produce m4a1 gun.");
            this.clean(gun);
            this.sprayPaint(gun);
            return gun;
        }
        private clean(gun: Gun) {
            console.log("clean gun.");
        }
        private sprayPaint(gun: Gun) {
            console.log("spray paint.");
        }
    }
    
    let ak47 = new AK47Factory().create();
    ak47.shoot();
    let m4a1 = new M4A1Factory().create();
    m4a1.shoot();
}

