
const ToDoList = {
    data()
    {
        return {
            todoList: [],
            newTodo: 'Новое дело'
        }
    },
    mounted()
    {
        axios.get('/todo/find').then(res => {
            this.todoList = res.data;
//            $("#abzac2").text('>>>' + this.todoList[1].task);
        });
    },
    methods: {
        addTodo()
        {
            axios({
                method: 'post',
                url: '/todo/add',
//                headers: { 'content-type': 'multipart/form-data' },
//                headers: { 'content-type': 'application/x-www-form-urlencoded; charset=utf-8' },
                data: {
                    todo: this.newTodo,
                    todo2: 'ssss'
                }
            })
            .then(res => {
                $("#abzac").text(JSON.stringify(res.data, null, 4)).show(); // Результат ответа от сервера
                $("#abzac2").text('=> ' + res.status); // Результат ответа от сервера

                if (res.status === 200) {
                    let rec = res.data;
                    this.todoList.push({id: rec.id, task: rec.task})
                } else {
                    alert (res.data);
                }
            })
            .catch(err => {
                alert(err);
            });
        }
    }
};

const app = Vue.createApp(ToDoList);

// Компонент для вывод одного пункта списка {id: 1, task: 'Раз'}
app.component(
    'todo-item',
    {
        props: ['todo', 'arr'],
        template:
            `<div class="panel-block "> 
            <div class="" align="left" @dblclick="updateTodo" id="td">
                {{todo.task}}
            </div>

            <div align="right"> 
               <button @click="deleteTodo" class="delete is-medium" align="right"></button>
            </div>
            
            <div hidden>
                <input v-model="todo.task" class="input is-primary" type="text" @keyup="saveTodo">
            </div>
             </div>`,
        methods: {
            saveTodo(f) {
//                alert(f.code);
                if (f.code === 'Escape') {
                    this.todo.task = this.tmp;
                } else {
                    if (f.code !== 'Enter')
                        return;
                }

                let el = event.target;         // Элемент из которого вызываем
                el = el.parentNode;
                el.hidden = true;
                el.previousElementSibling.previousElementSibling.hidden = false;

                axios({
                    method: 'post',
                    url: '/todo/edit',
                    data: {
                        id: this.todo.id,
                        task: this.todo.task
                    }
                })
                .then(res => {
                    // $("#abzac").text(JSON.stringify(res.data, null, 4)).show(); // Результат ответа от сервера
                    // $("#abzac2").text('=> ' + res.status); // Результат ответа от сервера
                    if (res.status !== 200) {
                        alert (res.data);
                    }
                })
                .catch(err => {
                    alert(err);
                });

            },
            updateTodo()
            {
                let el = event.target;         // Элемент из которого вызываем

                el.hidden = true;
                el.nextElementSibling.nextElementSibling.hidden = false;

                this.tmp = this.todo.task;

            },
            deleteTodo()
            {
                axios({
                    method: 'post',
                    url: '/todo/delete',
                    data: {
                        id: this.todo.id
                    }
                })
                    .then(res => {
                        // $("#abzac").text(JSON.stringify(res.data, null, 4)).show(); // Результат ответа от сервера
                        // $("#abzac2").text('=> ' + res.status); // Результат ответа от сервера

                        if (res.status === 200) {
                            let idx = this.arr.findIndex(item => item.id == this.todo.id);
                            this.arr.splice(idx, 1);
                        } else {
                            alert (res.data);
                        }
                    })
                    .catch(err => {
                        alert(err);
                    });
            },
            editTodo() //  Это уже не нужно
            {
//                let task2 = prompt('Редактирование доброго дела', this.todo.task);

                axios({
                    method: 'post',
                    url: '/todo/edit',
                    data: {
                        id: this.todo.id,
                        task: task2
                    }
                })
                    .then(res => {
                        // $("#abzac").text(JSON.stringify(res.data, null, 4)).show(); // Результат ответа от сервера
                        // $("#abzac2").text('=> ' + res.status); // Результат ответа от сервера

                        if (res.status === 200) {
                            this.todo.task = task2;
                        } else {
                            alert (res.data);
                        }
                    })
                    .catch(err => {
                        alert(err);
                    });
            }
        }
    }
);

app.mount('#todo-list');
