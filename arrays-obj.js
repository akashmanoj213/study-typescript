"use strict";
let person = {
    name: 'Akash Manoj',
    age: 29,
    hobbies: ['Sports', 'Video games'],
    roles: [1, 'admin']
};
var PERMISSIONS;
(function (PERMISSIONS) {
    PERMISSIONS[PERMISSIONS["CLASS_LEADER"] = 0] = "CLASS_LEADER";
    PERMISSIONS[PERMISSIONS["TEACHERS_PET"] = 1] = "TEACHERS_PET";
    PERMISSIONS[PERMISSIONS["STUDENT"] = 2] = "STUDENT";
})(PERMISSIONS || (PERMISSIONS = {}));
let student = {
    name: 'Kirti',
    age: 29,
    permission: PERMISSIONS.TEACHERS_PET
};
// typescript understands type infering in loops too
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
console.log(person.name);
console.log(PERMISSIONS[1]); // This works because of the way TS is convereted to JS
