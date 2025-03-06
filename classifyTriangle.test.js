const classifyTriangle = require('./classifyTriangle');

test('Equilateral triangle', () => {
    expect(classifyTriangle(3, 3, 3)).toBe('Equilateral');
});

test('Isosceles triangle', () => {
    expect(classifyTriangle(5, 5, 8)).toBe('Isosceles');
});

test('Scalene triangle', () => {
    expect(classifyTriangle(4, 5, 6)).toBe('Scalene');
});

test('Not a triangle (fails triangle inequality)', () => {
    expect(classifyTriangle(1, 2, 10)).toBe('Not a triangle');
});

test('Not a triangle (zero side)', () => {
    expect(classifyTriangle(0, 4, 5)).toBe('Not a triangle');
});

test('Invalid input (negative side)', () => {
    expect(classifyTriangle(-3, 4, 5)).toBe('Not a triangle');
});

test('Invalid input (non-numeric)', () => {
    expect(classifyTriangle('a', 4, 5)).toBe('Invalid input');
});

