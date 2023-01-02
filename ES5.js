// base class containing value
function BaseES5(value){
    this.value = value || '';
}

// StringBuilder class containing methods
function StringBuilder(value){
    BaseES5.call(this, value);

    // takes infinite number of strings and concat with stored string;
    this.plus = function(...str) {
        this.value += str.join('');
        return this;
    }

    // cut last n chars from stored string;
    this.minus = function(n){
        if (!this.value) {
            throw Error; //empty string
        } else {
            this.value = this.value.slice(0, -n);
            return this;
        }
    }

    // repeat stored strings n times; Prohibited to use String.prototype.repeat();
    this.multiply = function(int){
        if (!this.value) {
            throw Error; //empty string
        } else {
            let subStr = '';
            for (let i = 0; i < int; i++) {
                subStr += this.value;
            }
            this.value = subStr;
            return this;
        }
    }

    // leaves first k chars of stored string, where k = Math.floor(str.length / n);
    this.divide = function(n){
        if (!this.value) {
            throw Error; //empty string
        } else {
            const k = Math.floor(this.value.length / n);
            this.value = this.value.slice(0, k);
            return this;
        }
    }

    // remove taken string str from stored; Prohibited to use String.prototype.replace();
    this.remove = function(str){
        if (!this.value) {
            throw Error; //empty string
        } else {
            this.value = this.value.split(str).join('');
            return this;
        }
    }

    // leaves substring starting from and with length n;
    this.sub = function(from, n){
        if (!this.value) {
            throw Error; //empty string
        } else {
            this.value = this.value.slice(from, n+1);
            return this;
        }
    }

    // returns stored value;
    this.get = function(){
        return this.value;
    }
}

// test methods if they work

// let strBuilder = new StringBuilder('Hello');
// console.log(strBuilder.value);
// strBuilder.plus(' all', '!');
// console.log(strBuilder.value);
// strBuilder.minus(4);
// console.log(strBuilder.value);
// strBuilder.multiply(3);
// console.log(strBuilder.value);
// strBuilder.divide(4);
// console.log(strBuilder.value);
// strBuilder.remove('l');
// console.log(strBuilder.value);
// strBuilder.sub(1, 1);
// console.log(strBuilder.value);
// console.log(strBuilder.get());