// HW

function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

console.table(users);

// 1 Отримати масив користувачів, які не підписані (not subscribed).

console.log("\nEx1\n\n");

const notSubscribed = user => {
  return !user.isSubscribed;
};

const notSubscribedUsers = users.filter(notSubscribed);

console.table(notSubscribedUsers);

// 2 Вивести список повних імен користувачів

console.log("\nEx2\n\n");

users.forEach(user => {
  console.log(user.getFullName());
});

// 3 Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

console.log("\nEx3\n\n");

const schoolgirls = g => {
  return !g.isMale && g.age <= 18 && g.age >= 6;
};

const arrSchoolgirls = users
  .filter(schoolgirls)
  .map(user => user.getFullName());

console.log(arrSchoolgirls);

// 4 Видалити з масиву користувача з email

console.log("\nEx4\n\n");

const delEmail = user => {
  return user.email !== "useremail5@gmail.com";
};

const delUserEmail = users.filter(delEmail);

console.table(delUserEmail);

// 5 Змінити email користувачу з id 2

console.log("\nEx5\n\n");

const findUserId = u => {
  return u.id === 2;
};

const updateUserEmail = users.find(findUserId);
if (updateUserEmail) {
  updateUserEmail.email = "updateEmail@gmail.com";
}

console.table(updateUserEmail);

// 6 Визначити, який відсоток користувачів підписані (subscribed).

console.log("\nEx6\n\n");

const subscribedCount = users.filter(user => user.isSubscribed).length;
const percentSubscribed = (subscribedCount / users.length) * 100;

console.log(
  `Відсоток користувачів, які підписані дорівнює: ${percentSubscribed}%`
);

// 7 Знайти середній вік користувачів

console.log("\nEx7\n\n");

let sumAge = 0;

for (let i = 0; i < users.length; i++) {
  sumAge += users[i].age;
}
const averageAge = sumAge / users.length;

console.log(`Average Age: ${averageAge}`);

// 8 Впорядкувати користувачів за віком (sort).

console.log("\nEx8\n\n");

const sortedUsers = users.sort((a, b) => a.age - b.age);
console.table(sortedUsers);

// 9 Перевірити, чи є серед користувачів користувач з email`ом

console.log("\nEx9\n\n");

const thatEmail = "useremail7@gmail.com";
const findEmail = u => {
  return u.email === thatEmail;
};

const isThisEmailHere = users.some(findEmail);
console.log(
  `Чи є серед користувачів користувач з email'ом ${thatEmail}? ${
    isThisEmailHere ? "Так, є" : "Ні, немає"
  }`
);

// 10 Перевірити, чи всі користувачі підписані

console.log("\nEx10\n\n");

const subscription = u => {
  return u.isSubscribed;
};

const isAllSubscribed = users.every(subscription);
console.log(
  `Чи всі користувачі підписані? ${isAllSubscribed ? "Так, всі" : "Ні, не всі"}`
);
