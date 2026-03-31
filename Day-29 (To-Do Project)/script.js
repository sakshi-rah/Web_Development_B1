let todos = []; // Array to hold the todo items

// [
//   {
//     task: "Task 1"
//   },
//   {
//     task: "Task 2"
//   }
// ]


function Todo(task){ //Create an object --> {task: "Task1"}, {task: "Task 2"}
    this.task = task;
}

const form = document.getElementById('taskForm');
const input = document.getElementById('taskInput');
const list = document.getElementById('taskList');

// Add event listener to the form submission
form.addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission

    let taskvalue =  input.value;
    
    if(taskvalue === ""){ // don't add empty value
        alert("Task can not be empty!");
        return;
    }
    
    // console.log("user value", taskvalue);

    let newTodo = new Todo(taskvalue); // Create a new todo object with the input value

    // console.log("Todo List", newTodo);

    todos.push(newTodo); // Add the new todo to the array
    
    // console.log("Array ", todos);

    input.value = ""; // Clear the input field after adding the task

    displayTasks(); // Call the function to display the tasks
    
});

// Display the tasks in the list
function displayTasks(){
    list.innerHTML = ""; // Clear the existing list

    todos.forEach(function(todo, index){
        let li = document.createElement("li"); // Create a new list item <li></li>
        li.innerText = todo.task; // Set the text of the list item to the task <li>Task 1</li>
        
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete"; // Set the text of the button to "Delete" <button>Delete</button>

        deleteBtn.addEventListener("click", function(){
            deleteTask(index);
        });

        li.appendChild(deleteBtn);
        
        // <li>
            // Task 1 
            // <button>Delete Task</button>
        // </li>

        list.appendChild(li);
        // <ul>
            // <li>
                // Task 1 
                // <button>Delete Task</button>
            // </li>
        // </ul>

        // console.log("List", list);
        
    });
}

function deleteTask(index){
    todos.splice(index, 1);
    displayTasks();
    alert("Task Deleted Successfully");
}