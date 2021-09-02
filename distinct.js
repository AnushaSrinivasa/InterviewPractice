/**
 * Function returns distinct number of integer in an array
 * @param {array} arr 
 * @returns {integer} 
 */
let distinct = (arr) => {
    let len = arr.length;
    if(len === 1) {
        return 1;
    }

    let store = [];
    for(let i=0; i< len; i++) {
        let ele = arr[i];
        if(!store.includes(ele)) {
            store.push(ele);
        }
    }
    return store.length;
}
