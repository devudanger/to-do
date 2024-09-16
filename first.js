// let bton = document.getElementById("adding");
// let inpu = document.getElementById('inputtask');
// let msg = document.querySelector("#task_font");
//  let msg2 = document.querySelector("#delete_font");


//   bton.addEventListener('click', () => {
//     let element = appendTask(inpu.value);
    
//     element.addEventListener('click', () => {
//         console.log("hello");
//       });
//   });

// function appendTask(task1){
//     document.getElementById("task").innerHTML += '<font id="delete_font" >DELETE</font><Font id="task_font">'+task1+'</Font></br>'
// }
// let deletede = document.querySelector("#delete_font");
// deletede.addEventListener('click', () => {
//     taskList.remove();
//     msg2.remove();
    
//   });
// let bton = document.getElementById("adding");
// let inpu = document.getElementById('inputtask');
// let taskList = document.getElementById("task");

// bton.addEventListener('click', () => {
//   let task = inpu.value;
//   if (task) {
//     const taskItem = document.createElement('div');
//     taskItem.classList.add('task-item');
//     taskItem.innerHTML = `<span class="delete">DELETE</span> <span class="task">${task}</span>`;

//     taskList.appendChild(taskItem);

//     taskItem.addEventListener('click', () => {
//       console.log("Task clicked:", task);
//     });

//     taskItem.querySelector('.delete').addEventListener('click', (event) => {
//       event.stopPropagation();
//       taskItem.remove();
//     });
//   }
// });

const inputTask = document.getElementById('inputtask');
const addButton = document.getElementById('adding');
const taskList = document.getElementById('task_font');
// const recent1List = document.getElementById('recent_task_font');
// const recenttask = document.getElementById('history'); 
let tasks = [];
const key = 'tasks';
window.addEventListener('load',loadTasks);

addButton.addEventListener('click', addTask);

// }
// recenttask.addEventListener('click',showRecent);

// function showrecent(){
//     for(let i = arr.length()-1;i>arr.length()-5;i--){
//         const taskrecent = document.createElement('div');
//         let ab = localStorage.getItem(arr[i]);
//         taskrecent.innerHTML = `
//         <span class="recentText">${ab}</span>`
//     }
    

// }
// function showRecent() {
//      recent1List.innerHTML = ''; // Clear previous content
  
//     // Display the most recent 5 tasks (or less if there are fewer)
//     for (let i = tasks.length - 1; i >= 0 && i > tasks.length - 5; i--) {
//       const taskObj = tasks[i];
//       const taskDiv = document.createElement('div');
//       taskDiv.innerHTML = `<span class="recentText">${localStorage.getItem(taskObj)}</span>`;
//       recent1List.appendChild(taskDiv);
//     }
//     if(recent1List.innerText == ''){
//         recent1List.innerText='no recent tasks yet';
        
//     };
//   }

function addTask() {
    if (inputTask.value.trim() !== '') {

        const taskDiv = document.createElement('div');
        // const key = Date.now().toString();
        // tasks.push(key);
        

        taskDiv.className = 'task';
        taskDiv.innerHTML = `
            <span class="deleteButton">DELETE</span>
            <span class="taskText">${inputTask.value}</span>
        `;
        tasks.push(inputTask.value);
        
        taskDiv.querySelector('.deleteButton').addEventListener('click', function() {
            // let taskcomplete = taskDiv.querySelector('.taskText').value;
            // alert(`Hehe... you completed the task ${taskcomplete} `);
            removeTask(inputTask.value);
            taskDiv.remove();
            
        });
        // if(tasks.length > 0)
        localStorage.setItem(key,JSON.stringify(tasks));

        taskList.appendChild(taskDiv);
        inputTask.value = '';
    }
}
function loadTasks(){
    
    tasks = (JSON.parse(localStorage.getItem(key))) || [];

    
    for(let i of tasks){
         if(tasks[i]!=' '){
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `
                <span class="deleteButton">DELETE</span>
                <span class="taskText">${i}</span>
            `;

            taskDiv.querySelector('.deleteButton').addEventListener('click', function() {
                // let taskcomplete = taskDiv.querySelector('.taskText').value;
                // alert(`Hehe... you completed the task ${taskcomplete} `);
                removeTask(i);
                taskDiv.remove();
                
            });
            taskList.appendChild(taskDiv);
        }}
    }
    function removeTask(abval){


        tasks = JSON.parse(localStorage.getItem(key));
        for(let i=0;i<tasks.length;i++){
            if(tasks[i] == abval){
                tasks.splice(i,1);  
            }
        }
        localStorage.setItem(key,JSON.stringify(tasks));
        

    }

// Allow adding task with Enter key
inputTask.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

