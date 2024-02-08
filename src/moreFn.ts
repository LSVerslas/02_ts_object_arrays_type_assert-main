interface MathFunction {
    (num1: number, num2: number): number;
}

const sum = function (x: number, y: number): number {
    const rez = x + y;
    console.log('rez ===', rez);
    return rez;
}

const minus = function (x: number, y: number): number {
    const rez = x - y;
    console.log('rez ===', rez);
    return rez;
}

const multiply = function (x: number, y: number): number {
    const rez = x * y;
    console.log('rez ===', rez);
    return rez;
}