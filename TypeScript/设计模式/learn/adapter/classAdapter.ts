namespace classAdapter {
    /**
     * 
     * Target是 5V，
     * 是一个 接口
     */
    interface Power5V {
        getPower5V():void;
    }
    
    class Power220V {
        getPower220V():void {
            console.log("现在输出220V电压！");
        }
    }
    
    class NoteBook {
        PowerOn(pow: Power5V) {
            pow.getPower5V();
            console.log("笔记本获取了5V电压！开始工作！");
        }
    }
    
    /**
     * 类适配器，要继承原有的接口（类），实现新的接口.
     * 
     * 实现：将220V电压变为5V，共给电脑用。
     */
    class PowerAdapter extends Power220V implements Power5V {
    
        getPower5V(): void {
            super.getPower220V();
            this.transform();
            console.log("输出了5V电压!");
        }
    
        transform() {
            console.log("做了变压处理！");
        }
    }
    
    let pc = new NoteBook();
    pc.PowerOn(new PowerAdapter());
}