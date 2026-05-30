// class Calculator {
//     add(a, b) {
//         return a + b;
//     }
//     mul(a, b) {
//         return a * b;
//     }
//     divide(a, b) {
//         return a / b;
//     }
// }

// module.exports = Calculator;

// immediatly assigned exports

module.exports = class {
    add(a, b) {
        return a + b;
    }
    mul(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
};
