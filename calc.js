function calculadora(a, b, operador) {
    switch (operador) {
      case '+':
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return b !== 0 ? a / b : 'Erro: divisão por zero';
      default:
        return 'Operador inválido';
    }
  }

 