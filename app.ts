function transformArray<T>(arr: T[], callback: (element: T) => T): T[] {
    return arr.map(callback);
}

// Example usage
const numberArray:number[] = [1, 2, 3, 4, 5];
const doubledArray = transformArray(numberArray, (num:number) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

const stringArray:string[] = ['apple', 'banana', 'cherry'];
const uppercasedArray = transformArray(stringArray, (str:string) => str.toUpperCase());
console.log(uppercasedArray); // Output: ['APPLE', 'BANANA', 'CHERRY']

//other types tests
const booleanArray:boolean[] = [true,false,true];
const invertedArray = transformArray(booleanArray, (bool:boolean) => bool ? bool = false : bool = true);
console.log(invertedArray); // Output: [false, true, false]

type User = {
    username: String;
    password: String;
}

let user1: User = {
    username:"admin",
    password:"password"
}
let user2: User = {
    username:"guest",
    password:"password"
}

const usersArray:User[] = [user1, user2];
const changePassword = transformArray(usersArray, (user: User) => {
    user.password = "changedPassword"
    return user;
});
console.log(changePassword); 

