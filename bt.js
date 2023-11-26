class Apple{
    constructor(weight) {
        this.weight = weight;
    }
    decrease(){
        return (this.weight-=1);
    }
    isEmpty(){
        if (this.weight > 0) {
            return false;
        } else {
            return true;
        }
    }
    getWeight(){
        return this.weight;
    }

}




class Human{
    constructor(name, gender, weight) {
       this.name = name;
       this.gender = gender;
       this.weight = weight;
    }
    isMale(){
        return this.gender ==`male`;
    }
    setGender(gender){
        this.gender = gender;
    }
    checkApple(apple){
        return apple.isEmpty();
    }
    eatApple(apple){
        if (apple.weight>0){
            apple.decrease();
            this.weight+=1;
        } else {
            alert("tao da het");
        }
    }
    say(string){
        console.log(string)
    }
    getName(){
        return this.name;
    }
    setName(string){
        this.name = string;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }


}


let adam = new Human("adam", "male",70);
let eva = new Human("eva", "female",50);
let apple1 = new Apple(10);

adam.say("i am adam");



while (apple1.isEmpty() !== true){
    document.write("adam an tao" + "<br>");
    adam.eatApple(apple1);

    document.write("qua tao con " + "<br>");
    document.write(apple1.getWeight() + " don vi" + "<br>");
    document.write("Can nang cua adam la " +adam.getWeight()+ "<br>");

    document.write("Eva an tao" + "<br>");
    eva.eatApple(apple1);

    document.write("qua tao con" + "<br>");
    document.write(apple1.getWeight() + " don vi" + "<br>");
    document.write("Can nang cua eva la " +eva.getWeight()+ "<br>");


}
