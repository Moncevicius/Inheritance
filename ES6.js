// base class containing value
class BaseES6 {
    constructor(value) {
        this.value = value || 0;
    }
}

//
class IntBuilder extends BaseES6{
    constructor(value) {
        super(value);
    }

    // take infinite number of integers and sum all with stored value;
    plus(...n){
        this.value = n.reduce((sum, num) => sum + num, this.value);
        return this;
    }

    // take infinite number of integers and subtract from stored value;
    minus(...n){
        this.value = n.reduce((sum, num) => sum - num, this.value);
        return this;
    }

    // multiply param n on stored value;
    multiply(n){
        this.value *= n;
        return this;
    }

    // leaves integer part of division stored value on n;
    divide(n){
        if(n === 0){
            throw Error;
        }else{
            this.value = Math.floor(this.value / n);
        }
        return this;
    }

    // leaves remainder of the division stored value with on n;
    mod(n){
        if(n === 0){
            throw Error;
        }else{
            this.value = this.value % n;
        }
        return this;
    }

    // returns stored value;
    get(){
        return this.value;
    }

    // static method; from, to: integer; values limits the range of random values;
    static random(from, to) {
        if(from > to){
            throw Error;
        }
        return Math.round((Math.random() * (to - from) + from));
    }
}

// testing given example if results are the same

// let intBuilder = new IntBuilder(10);
// console.log(intBuilder);
// intBuilder.plus(2, 3, 2);
// console.log(intBuilder);
// intBuilder.minus(1, 2);
// console.log(intBuilder);
// intBuilder.multiply(2);
// console.log(intBuilder);
// intBuilder.divide(4);
// console.log(intBuilder);
// intBuilder.mod(3);
// console.log(intBuilder);
// console.log(intBuilder.get());
// console.log(IntBuilder.random(10, 100));