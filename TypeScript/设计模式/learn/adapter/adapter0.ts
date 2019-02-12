interface IPhone {
    useLightning();
}

interface Android {
    useMicroUSB();
}


class iPhone7 implements IPhone {
    useLightning () {
        console.log("using lightning port...");
    }
}

class GooglePixel implements Android {
    useMicroUSB () {
        console.log("using micro usb...");
    }
}

class Lightning2MicroUSBAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphone: IPhone) {
        this.iphoneDevice = iphone;
    }

    useMicroUSB() {
        console.log("want to use micro usb, converting to lighning...");
        this.iphoneDevice.useLightning();
    }

}


let iphone = new iPhone7();
let chargeAdapter = new Lightning2MicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();