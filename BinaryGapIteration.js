let largestBinaryGap = (num) => {
    if (num === parseInt(num, 10) && num > 0 && num <= 2147483647) {
        const binaryNum = (num >>> 0).toString(2);
        let largestCount = 0, count = 0;
        for (let i=0; i<binaryNum.length; i++) {
            if(binaryNum[i] === '0') {
                count++;
            } else {
                if(count > largestCount) {
                    largestCount = count;
                    count = 0;
                }
            }
        }
        return largestCount;
    } else {
        return 0;
    }
}
