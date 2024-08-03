/**
 * Task Manager Application
 *
 * In this assignment, you will create a task manager application that allows users to add and remove tasks.
 * You will also implement features to filter tasks by their status and perform batch operations using functional programming concepts.
 *
 * Tasks are stored in an array and the application updates the display by rendering the contents
 * of this array. Your job is to complete the parts of the code base as indicated with the TODOs
 * in order to provide project functionality.
 *
 * Concepts covered in this project:
 * - Higher-order functions
 * - Callbacks
 * - Array methods (map, filter, reduce)
 * - Function composition and currying
 */

const TaskManager = (function() {
    let tasks = [];
    let nextId = 1;

    // Function to create a new task
    const createTask = (title) => ({
        id: nextId++,
        title,
        status: 'pending'
    });

    // Function to add a task
    // TODO: Implement this function using the provided createTask function
    const addTask = (title) => {
        // Add the new task to the tasks array
        // Call renderTasks to update the display
    };

    // Function to remove a task by id
    // TODO: Implement this function to filter out the task with the specified id
    const removeTask = (id) => {
        // Filter tasks array
        // Call renderTasks to update the display
    };

    // Function to filter tasks by status
    // TODO: Implement this function to return tasks based on their status
    const filterTasks = (status) => {
        // Return filtered tasks array
    };

    // Function composition and currying examples
    // TODO: Implement function composition and currying for updating tasks
    const updateTasks = (tasks, ...operations) => {
        // Reduce through operations to apply them on tasks
    };

    // TODO: Implement currying for changing task status
    const changeTaskStatus = (status) => (id) => {
        // Map through tasks array to update task status
        // Call renderTasks to update the display
    };

    // Render tasks to the DOM
    const renderTasks = () => {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'list-group-item';
            taskItem.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5>${task.title}</h5>
                    </div>
                    <div>
                        <button class="btn btn-danger btn-sm" onclick="TaskManager.removeTask(${task.id})">Remove</button>
                    </div>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    };

    // Public API
    return {
        addTask,
        removeTask,
        filterTasks,
        updateTasks,
        changeTaskStatus
    };
})();

// Event listeners for the buttons
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    if (title) {
        TaskManager.addTask(title);
        document.getElementById('taskTitle').value = '';
    }
});
