


const ToDoList = {
    data() {

        let list = getTodoList();

        return {
            todoList: list,
            newTodo: 'Новое дело'
        }
    },
    methods: {
        addTodo() {
//            alert(this.newTodo);
            let id = 7;

            this.todoList.push({id: id, text: this.newTodo})
        }

    }
};

const app = Vue.createApp(ToDoList);

app.component(
    'todo-item',
    {
        props: ['todo'],
        template: `<li>{{todo.text + ', ' + todo.id}} одно дело</li>`
    }
);


app.mount('#todo-list');


//=================================

function getTodoList() {
    return [
        {id: 1, text: 'Раз'},
        {id: 2, text: 'Два'}
    ];
}