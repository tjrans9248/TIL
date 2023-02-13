type Age<T> = T extends string ? string : unknown;
declare let a: Age<string>;
declare let b: Age<number>;
type FirstItem<T> = T extends any[] ? T[0] : any;
declare let arr: FirstItem<string[]>;
declare let arr2: FirstItem<number>;
type Person<T> = T extends (infer R)[] ? string : unknown;
type a = Person<string[]>;
