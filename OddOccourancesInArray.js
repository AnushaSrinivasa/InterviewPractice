// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

let OddOccourancesInArray = (arry) => {
    let len = arry.length();
    if(len === 1) {
        return arry[0];
    }
    let store = {};
    for(let i=0; i < len; i++) {
        let el = arry[i];
        if(el in store) {
            delete store[el];
        } else {
            store[el] = 1;
        }
    }

    return +Object.keys(store);
}
