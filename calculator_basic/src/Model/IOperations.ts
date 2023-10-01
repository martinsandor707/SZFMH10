interface IOperations {
    add(args: { a: number; b: number }): number;
    subtract(args: { a: number; b: number }): number;
    multiply(args: { a: number; b: number }): number;
    divide(args: { a: number; b: number }): number;
}

// class IOperationsImpl implements IOperations {
//     add(args: { a: number; b: number }): number {
//         return 0;
//     }
//
//     divide(args: { a: number; b: number }): number {
//         return 0;
//     }
//
//     multiply(args: { a: number; b: number }): number {
//         return 0;
//     }
//
//     subtract(args: { a: number; b: number }): number {
//         return 0;
//     }
// }
