// 注意：对象需要继承自同一个接口。

namespace simpleFactory {
    enum GunType {
        AK,
        M4A1
    }
    
    interface Shootable {
        shoot();
    }
    
    abstract class Gun implements Shootable { // 抽象产品 - 枪
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
    
    class GunFactory {
        static createGun(type: GunType) : Gun {
            switch(type) {
                case GunType.AK: 
                    return new AK47();
                case GunType.M4A1:
                    return new M4A1();
                default:
                    throw Error("not support this gun yet");
            }
        }
    }
    
    GunFactory.createGun(GunType.AK).shoot();
    GunFactory.createGun(GunType.M4A1).shoot();
}