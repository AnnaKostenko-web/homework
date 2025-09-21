const myObject = {
    Items: {
        name: 'Anna',
        age: 29,
        birthday: '20/05/1996',
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(myObject.Items)
myObject.Items.sayHello('Anna')








const users = [
    {
        birthday: '15/06/1995',
        name: 'Alexey',
        age: 28,
        email: 'alexey@example.com',
        isAdmin: false
    },
    {
        birthday: '02/11/1989',
        name: 'Maria',
        age: 34,
        email: 'maria@example.com',
        isAdmin: false
    },
    {
        birthday: '10/03/2001',
        name: 'Ivan',
        age: 22,
        email: 'ivan@example.com',
        isAdmin: false
    },
    {
        birthday: '25/08/1993',
        name: 'Olga',
        age: 30,
        email: 'olga@example.com',
        isAdmin: true
    }
];

let regularUserCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        regularUserCount++;
    }
}

console.log('Количество простых пользователей:', regularUserCount);


