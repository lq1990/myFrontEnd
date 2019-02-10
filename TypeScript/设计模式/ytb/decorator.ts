namespace decorator {
    
    abstract class Car {
        public description: string;
    
        public getDes():string {
            return this.description;
        }
    
        public abstract cost(): number;
    }
    
    
    class ModelS extends Car{
        public description = "Model S";
    
        public cost() :number {
            return 73000;
        }
    }
    
    class ModelX extends Car {
        public description = "Model X";
        public cost(): number{
            return 77000
        }
    }
    
    abstract class CarOptions extends Car {
        decoratedCar: Car;
        public abstract getDes(): string;
        public abstract cost(): number;
    }
    
    class EnhancedAutoPilot extends CarOptions {
        decoratedCar: Car;
    
        constructor(car:Car){
            super();
            this.decoratedCar = car;
        }
        
        public getDes():string {
            return this.decoratedCar.getDes() + ", enhanced autopilot.";
        }
        public cost():number {
            return this.decoratedCar.cost()+5000;
        }
    }
    class RearFacingSeats extends CarOptions {
        decoratedCar: Car;
    
        constructor(car:Car){
            super();
            this.decoratedCar = car;
        }
        
        public getDes():string {
            return this.decoratedCar.getDes() + ", rear facing seats";
        }
        public cost():number {
            return this.decoratedCar.cost()+4000;
        }
    }
    
    let myTesla = new ModelS();
    myTesla = new RearFacingSeats(myTesla);
    myTesla = new EnhancedAutoPilot(myTesla);
    
    console.log(myTesla.cost());
    console.log(myTesla.getDes());

}