var romanToInt = function (s) {
    let result = 0;
    
    const romans = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (romans[s[i]] < romans[s[i + 1]]) {
            result -= romans[s[i + 1]];
        } else {
            result += romans[s[i]];
        }
    }

    return result + romans[s[s.length - 1]];

};

console.log(romanToInt("III"))