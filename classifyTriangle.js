function classifyTriangle(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'Invalid input';
    }
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'Not a triangle';
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return 'Not a triangle';
    }
    if (a === b && b === c) {
        return 'Equilateral';
    }
    if (a === b || b === c || a === c) {
        return 'Isosceles';
    }
    return 'Scalene';
}

// Export the function so Jest can use it
module.exports = classifyTriangle;

