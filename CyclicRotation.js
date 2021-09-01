// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

let CyclicRotation = (IntArry, rotationVal) => {
    if(rotationVal > 0) {
        for(let i = 0; i < rotationVal; i++) {
            IntArry.unshift(IntArry.pop());
        }
        return IntArry;
    } else {
        return IntArry;
    }
}
