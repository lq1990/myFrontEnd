class Power220V {
    getPower220 () {
        console.log("我们现在输出220V电压！");
    }
}

interface Power12V {
    getPower12 () ;
}

/**
 * 对象适配器：不继承 源对象，而是直接包含它，
 * 再调用它的方法。
 * 
 * 最终，对外暴露 我们需要的目标接口。
 */
class PowerAdapter implements Power12V {
    private pow220: Power220V;

    constructor(pow: Power220V ) {
        this.pow220 = pow;
    }
    
    getPower12() {
        this.pow220.getPower220();
        this.transform();
        console.log("now 12V...");
    }
    transform(): any {
        console.log("220V -> 12V");
    }
}

class NoteBook {
    turnOn(pow: Power12V) {
        pow.getPower12();
        console.log("notebook turns on now...");

    }
}

// 
let nb = new NoteBook();
nb.turnOn(new PowerAdapter(new Power220V()));
