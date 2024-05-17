let person: {
    name: string;
    age: number;
    hobbies: string[];
    roles: [number, string];
} = {
    name: 'Akash Manoj',
    age: 29,
    hobbies: ['Sports', 'Video games'],
    roles: [1, 'admin']
}

enum PERMISSIONS {
    CLASS_LEADER,
    TEACHERS_PET,
    STUDENT
}

let student = {
    name: 'Kirti',
    age: 29,
    permission: PERMISSIONS.TEACHERS_PET
}

// typescript understands type infering in loops too
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person.name);
console.log(PERMISSIONS[1]); // This works because of the way TS is convereted to JS