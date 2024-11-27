function classificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      return 'none';
    }
    if (a === b && b === c) {
      return 'equilateral';
    } else if (a === b || b === c || a === c) {
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }