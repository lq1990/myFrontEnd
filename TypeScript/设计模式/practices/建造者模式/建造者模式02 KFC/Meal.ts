export class Meal {
    private food: string;
    private drink: string;

    setFood(f: string) {
        this.food = f;
    }
    getFood(){
        return this.food;
    }

    setDrink(d: string){
        this.drink = d;
    }
    getDrink(){
        return this.drink;
    }
}