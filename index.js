// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list

// Challenge 2
// Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program

// @ts-ignore
console.log("users: ", window.users);

// @ts-ignore
console.log("todos: ", window.todos);

let message = "";

for (let user of users) {
  message += `${user.id} - ${user.name} - ${user.address.city}\n`;
}

alert(message);

let idInput = Number(prompt("Enter a user id: "));
while (idInput.toString.length <= 0 || isNaN(idInput)) {
  idInput = Number(prompt("Please enter a VALID user id: "));
}

let userTodos = "";

for (let user of users) {
  if (user.id === idInput) {
    userTodos += `${user.name}'s todos:\n`;
    for (let todo of todos) {
      if (todo.userId === idInput) {
        userTodos += ` - ${todo.title}
`;
      }
    }
  }
}

alert(userTodos);
