
const ToDoList = {
    data() {
        return {
            todos: [
                {text: 'One'},
                {text: 'Two'}
            ]
        }
    }
};

const app = Vue.createApp(ToDoList);
app.mount('#todo-list');

