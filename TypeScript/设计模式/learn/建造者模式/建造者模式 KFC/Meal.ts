export class Meal {
    private food: string;
    private drink: string;

    getFood() {
        return this.food;
    }
    setFood(f: string) {
        this.food = f;
    }

    getDrink() {
        return this.drink;
    }
    setDrink(d:  string){
        this.drink = d;
    }
}