//------------------ Generics --------------------------


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

//------------------ Union and Intersection Type --------------------------

interface BaseProduct {
    name: string;
    price: number;
    description: string;
}

interface SizeVariation extends BaseProduct {
    variationType: 'size';
    size: string;
}

interface ColorVariation extends BaseProduct {
    variationType: 'color';
    color: string;
}

interface MaterialVariation extends BaseProduct {
    variationType: 'material';
    material: string;
}

type Product = BaseProduct | SizeVariation | ColorVariation | MaterialVariation;

// Example usage
const product: Product = {
    name: 'T-Shirt',
    price: 29.99,
    description: 'A comfortable and stylish T-shirt.',
};

const sizeVariation: Product = {
    name: 'T-Shirt',
    price: 34.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'size',
    size: 'L',
};

const colorVariation: Product = {
    name: 'T-Shirt',
    price: 39.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'color',
    color: 'blue',
};

const materialVariation: Product = {
    name: 'T-Shirt',
    price: 44.99,
    description: 'A comfortable and stylish T-shirt.',
    variationType: 'material',
    material: 'cotton',
};

function isVariation(p: Product) {
  switch (p.variationType) {
    case "material":
      return "Variation based on material";
    case "color":
      return `Variation based on color`;
    case "size":
      return "Variation based on size";
  }
}

console.log(isVariation(materialVariation));
console.log(isVariation(colorVariation));
console.log(isVariation(sizeVariation));


//---------------- Type Guards ----------------

interface Category {
  name: string;
}

interface Product {
  category: Category;
}

function isString(input){
    if (typeof input === 'string') {
        return true;
    } else return false;
}
function isCategory(input){
   if (typeof input === 'object') {
       return true;
    }else return false;
}

function processData(input: Category | string | null): string | null {
  if (isCategory(input)) {
    return input.name;
  } else if (isString(input)) {
    return input;
  }
  return null;
}