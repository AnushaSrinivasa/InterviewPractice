// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

let maxOfThreeNumber = (arry) => {
    let max1, max2, max3, min1, min2;
    max1 = max2 = max3 = -Infinity;
    min1 = min2 = Infinity;

    for (ele of arry) {
        if (ele > max1) {
            [max1, max2, max3] = [ele, max1, max2];
        } else if (ele > max2) {
            [max2, max3] = [ele, max2];
        } else if (ele > max3) {
            max3 = ele;
        }

        if (ele < min1) {
            [min1, min2] = [ele, min1];
        } else if (ele < min2) {
            min2 = ele;
        }
    }

    return Math.max(max1*max2*max3, max1*min1*min2)
} 
