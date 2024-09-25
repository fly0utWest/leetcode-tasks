var isPalindrome = function(x) {
    let original = x;
    let reversedX = 0;

    while (x > 0) {
        let decimal = x % 10;
        reversedX = reversedX * 10 + decimal;
        x = Math.floor(x / 10);
    }

    return original === reversedX
};

console.log(isPalindrome(1232));