


const ToDoList = {
    data()
    {
        let list = getTodoListFromDb();

        return {
            todoList: list,
            newTodo: 'Новое дело'
        }
    },
    methods: {
        addTodo()
        {
            let id = this.todoList.length + 1;
//            let id = addTodoToDb(this.newTodo);

            this.todoList.push({id: id, text: this.newTodo})
        }
    }
};

const app = Vue.createApp(ToDoList);

// Компонент для вывод одного пункта списка {id: 1, text: 'Раз'}
app.component(
    'todo-item',
    {
        props: ['todo', 'arr'],
        template:
            `<li>{{todo.id + ': ' + todo.text}}
            <button @click="editTodo" class="button is-small is-primary is-light">
                <span>Изменить</span>
            </button> 
            <button @click="deleteTodo" class="button is-small is-danger is-light">
                <span>Удалить</span>
            </button> 
            </li>`,
        methods: {
            deleteTodo()
            {
//                alert(this.todo.id + ': ' + this.todo.text);

                if (deleteTodoFromDb(this.todo.id)) {
                    let idx = this.arr.findIndex(item => item.id == this.todo.id);
                    this.arr.splice(idx, 1);
                }
            },
            editTodo()
            {
                let result = prompt('Редактирование доброго дела', this.todo.text);

                if (updateTodoInDb(this.todo.id, result)) {
                    this.todo.text = result;
                }

//                alert(this.todo.id + ': ' + this.todo.text);
            }
        }
    }
);


app.mount('#todo-list');


//=================================

//
// Получает данные из БД
//
function getTodoListFromDb()
{

    axios.headers = {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
    };

    let dt = new Date();
    let t = dt.toISOString();

    $("#ab1").text(t);

     axios.get('/todo/find').then(res => {
// //        $("#abzac").html(res.data).show(); // Результат ответа от сервера
// //        $("#abzac").html('<pre>' + JSON.stringify(res, null, 4)+'</pre>').show(); // Результат ответа от сервера
         $("#abzac").text(JSON.stringify(res.data, null, 4)).show(); // Результат ответа от сервера
//         $("#abzac").text(res.data, null, 4); // Результат ответа от сервера
     });



    return [
        {id: 1, text: 'Раз'},
        {id: 2, text: 'Два'}
    ];
}

//
// Добавление новой записи в БД
//  здесь todo: string
//
function addTodoToDb(todo)
{
//    alert(todo);

    // Возвращает id добавленной записи
    return 11;
}

//
// Изменить запись
//
function updateTodoInDb(id, text)
{
    return true;
}

//
// Удалить запись из БД
//
function deleteTodoFromDb(id)
{
    return true;
}
