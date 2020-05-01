const last = <T>(arr: Array<T>): T => {
    return arr[arr.length - 1];
}

let l = last([1,2,3]);
let l2 = last<string>(['a','b','c']);
console.log(l, l2);
// ===============================================================================================================
const makeArr = <X, Y=number>(x: X, y: Y):[X, Y]=>{
    return [x, y];
}
let v1 = makeArr(5,6);
let v2 = makeArr('a','b');
let v3 = makeArr<string|null>('a',6);
console.log(v3);
// ===============================================================================================================
const makeFullName = <T extends {firstName: string, lastName:string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    };
};

let v4 = makeFullName({firstName: 'Ben', lastName:'Awad', age:19});
console.log(v4);

// =======================================Interface==============================================================

interface Tab<T>{
    id: string,
    position: number,
    data: T
}

type NumberTab = Tab<number>;
// Equivalent to:
// type NumberTab = {
//     id: string,
//     position: number,
//     data: number
// }