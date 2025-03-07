
const classifyTriangle = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    // Equilateral triangle
      test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');
    });

    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(77, 77, 77)).toBe('Equilateral');
    });

    // Isosceles triangle
     test('should classify an Isosceles triangle', () => {
    expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');
  });

    // Scalene triangle
     test('should classify a Scalene triangle', () => {
    expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
  });

  // Invalid inputs
    test('should return error for invalid inputs', () => {
    expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  test('should return error for invalid inputs', () => {
    expect(classifyTriangle(0, 0, 95)).toBe('Error: Input conditions C1, C2, or C3 failed.');
  });

  // Not a triangle
  test('should return "Not a Triangle" for invalid triangle sides', () => {
    expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
  });

  // Additional test cases
  test('should classify an Isosceles triangle with sides 5, 5, 3', () => {
    expect(classifyTriangle(5, 5, 3)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 7, 9, 11', () => {
    expect(classifyTriangle(7, 9, 11)).toBe('Scalene');
  });

  test('should classify an Equilateral triangle with sides 15, 15, 15', () => {
    expect(classifyTriangle(15, 15, 15)).toBe('Equilateral');
  });

  test('should classify a Scalene triangle with sides 3, 4, 5', () => {
    expect(classifyTriangle(3, 4, 5)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 8, 8, 6', () => {
    expect(classifyTriangle(8, 8, 6)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 13, 14, 15', () => {
    expect(classifyTriangle(13, 14, 15)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 10, 10, 7', () => {
    expect(classifyTriangle(10, 10, 7)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 5, 12, 13', () => {
    expect(classifyTriangle(5, 12, 13)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 9, 9, 4', () => {
    expect(classifyTriangle(9, 9, 4)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 8, 15, 17', () => {
    expect(classifyTriangle(8, 15, 17)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 12, 12, 9', () => {
    expect(classifyTriangle(12, 12, 9)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 20, 21, 29', () => {
    expect(classifyTriangle(20, 21, 29)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 14, 14, 11', () => {
    expect(classifyTriangle(14, 14, 11)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 24, 25, 31', () => {
    expect(classifyTriangle(24, 25, 31)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 16, 16, 13', () => {
    expect(classifyTriangle(16, 16, 13)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 28, 45, 53', () => {
    expect(classifyTriangle(28, 45, 53)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 18, 18, 15', () => {
    expect(classifyTriangle(18, 18, 15)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 36, 39, 45', () => {
    expect(classifyTriangle(36, 39, 45)).toBe('Scalene');
  });

  test('should classify an Isosceles triangle with sides 22, 22, 19', () => {
    expect(classifyTriangle(22, 22, 19)).toBe('Isosceles');
  });

  test('should classify a Scalene triangle with sides 40, 48, 56', () => {
    expect(classifyTriangle(40, 48, 56)).toBe('Scalene');
  });
});
  
    
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');
        // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
