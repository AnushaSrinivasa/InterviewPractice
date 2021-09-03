//https://app.codility.com/programmers/lessons/6-sorting/triangle/

let triangle = (A) => {
    let sortedA = A.filter(ele => ele > 0).sort((a,b) => a-b);

    const len = sortedA.length;
    if (len <= 2) {
        return 0;
    }
    
    /**
     * Since the array is sorted A[i + 2] is always greater or equal to previous values
     * So A[i + 2] + A[i] > A[i + 1] ALWAYS
     * As well ass A[i + 2] + A[i + 1] > A[i] ALWAYS
     * Therefore no need to check those. We only need to check if A[i] + A[i + 1] > A[i + 2]?
     * Since in case of A[i] + A[i + 1] > MAXINT the code would strike an overflow (ie the result will be greater than allowed integer limit)
     * We'll modify the formula to an equivalent A[i] > A[i + 2] - A[i + 1]
     * And inspect it there
    */

    for(let i =0; i< len-2; i++) {
        if (sortedA[i] + sortedA[i+1] > sortedA[i+2]) {
            return 1;
        }
    }

    return 0;

}
