// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// first want to grab the form itself
const createToDo = document.querySelector('#create-task-form')

// then I want to be able to create a new list item with the to-do and append it to the Todos list
createToDo.addEventListener ("submit", (e) => {
  e.preventDefault()

  const myToDos = document.querySelector('#list')
  const newToDo = document.createElement('li')

  console.log(newToDo.textContent = e.target.newTaskDescription.value)
  myToDos.append(newToDo)

  e.target.reset()
})


// bonus is to create an x-out button
