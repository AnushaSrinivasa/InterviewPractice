class stack {

    constructor() {
        this.data = [];
        this.top = 0;
    }

    isEmpty(){
        return this.top === 0;
    }

    /**
     * This functions returns the length of the stack
     * @returns number
     */
    length() {
        return this.top;
    }

    /**
     * Adds element to the stack
     * @param {number} element 
     */
    addEle( element ) {
        this.data.push(element);
        this.top++;
    }

    /**
     * @param NA
     * @returns {Number} removed element
     */
    removeEle() {
        if(!this.isEmpty) {
            this.top--; //Bec top points to the index where ele need to be inserted
            return this.data.pop();
        }
    }

    print() {
        let top = this.top - 1;
        while(top >= 0){
            console.log(this.data[top]);
            top--;
        }
    }

    /**
     * 
     * @returns top element in the stack
     */
    peek() {
        return this.data(this.top--)
    }


} 
