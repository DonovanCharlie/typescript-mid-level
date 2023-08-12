function transformArray(arr, callback) {
    return arr.map(callback);
}
// Example usage
var numberArray = [1, 2, 3, 4, 5];
var doubledArray = transformArray(numberArray, function (num) { return num * 2; });
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]
var stringArray = ['apple', 'banana', 'cherry'];
var uppercasedArray = transformArray(stringArray, function (str) { return str.toUpperCase(); });
console.log(uppercasedArray); // Output: ['APPLE', 'BANANA', 'CHERRY']
//other types tests
var booleanArray = [true, false, true];
var invertedArray = transformArray(booleanArray, function (bool) { return bool ? bool = false : bool = true; });
console.log(invertedArray); // Output: [false, true, false]
var user1 = {
    username: "admin",
    password: "password"
};
var user2 = {
    username: "guest",
    password: "password"
};
var usersArray = [user1, user2];
var changePassword = transformArray(usersArray, function (user) {
    user.password = "changedPassword";
    return user;
});
console.log(changePassword);
