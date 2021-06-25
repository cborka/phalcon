
const ToDoList = {
    data()
    {
        return {
            todoList: [],
//            todoCount: 0,
            newTodo: ''
        }
    },
    mounted()
    {
        this.findTodos(0);
        // axios.get('/todo/find').then(res => {
        //     this.todoList = res.data;
        // });
    },
    methods: {
        findTodos(flag) {
            axios({
                method: 'post',
                url: '/todo/find',
                data: {
                    flag: flag
                }
            })
                .then(res => {
                    // $("#abzac").text(JSON.stringify(res.data, null, 4)).show(); // Результат ответа от сервера
                    // $("#abzac2").text('=> ' + res.status);      // Результат ответа от сервера
                    if (res.status === 200) {
                        this.todoList = res.data;
                    } else {
                        alert (res.data);
                    }
                })
                .catch(err => {
                    alert(err);
                });
        },
        keyupTodo(f) {
           if (f.code === 'Enter') {
               this.addTodo();
           }
        },
        addTodo()
        {
            if (this.newTodo.length < 1) {
                alert ('Нельзя вставить пустую строку.');
                return;
            }

            axios({
                method: 'post',
                url: '/todo/add',
                data: {
                    todo: this.newTodo
                }
            })
            .then(res => {
                if (res.status === 200) {
                    let rec = res.data;
                    this.todoList.push({id: rec.id, task: rec.task});
                    this.newTodo = '';
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
           `<div class="panel-block">
            <div class="level" align="left" @dblclick="startEditTodo" id="td" @mouseenter="mouseenter" @mouseleave="mouseleave" style="width: 100%; margin-bottom: 8px; margin-top: 8px">

                <div class="level-left" >
                    <input type="checkbox" v-model="todo.flag" @change="saveFlag" />
                    <label for="checkbox" class="checkbox">{{ }}</label>
                    <!--<label for="checkbox" class="checkbox">{{ this.todo.flag ? 1 : 0 }}</label>-->

                    <p class="level-item">
                        {{todo.task}}
                    </p>
                </div>

                <div class="level-right">
                    <button @click="deleteTodo" hidden class="delete is-medium "></button>
               </div>
            </div>

            <div class="" hidden style="width: 100%">
                <input v-model="todo.task" class="input is-primary" type="text" @keyup="keyupTodo1">
            </div>
             </div>`,
        methods: {
            //
            // Показать / спорятать кнопку удаления
            //
            mouseenter() {
                let el = event.target;
                el.lastElementChild.lastElementChild.hidden = false;
            },
            mouseleave() {
                let el = event.target;
                el.lastElementChild.lastElementChild.hidden = true;
            },
            //
            // Сохранить флаг при переключении
            //
            saveFlag() {
                this.saveTodo();

                // Поменять форматирование записи

                // class += ... надо вспоминать jQuery

            },
            //
            // При нажатии клавиши отрабатываем Escape и Enter (отменить и сохранить)
            // убираем поле редактироваия и показываем запись
            //
            keyupTodo1(f) {
                if (f.code === 'Escape') {
                    this.todo.task = this.tmp;
                } else {
                    if (f.code !== 'Enter')
                        return;
                }

                if (this.todo.task.length < 1) {
                    alert('Нельзя вставить пустую строку.');
                    return;
                }

                // убираем поле редактироваия и показываем запись
                // можно вынести в отдельную функцию и тем самым упросить логику
                let el = event.target;          // элемент - поле редактирования
                el = el.parentElement;          // div в котором оно расположено
                el.hidden = true;
                el.previousElementSibling.hidden = false; // div в котором сама запись

                if (f.code !== 'Escape') {
                    this.saveTodo();
                }
            },
            //
            // Сохранить запись в базе данных
            //
            saveTodo() {
                axios({
                    method: 'post',
                    url: '/todo/edit',
                    data: {
                        id: this.todo.id,
                        task: this.todo.task,
                        flag: this.todo.flag ? 1 : 0
                    }
                })
                .then(res => {
//                    $("#abzac").text(JSON.stringify(res.data, null, 4)).show(); // Результат ответа от сервера
//                    $("#abzac2").text('=> ' + res.status); // Результат ответа от сервера
                    if (res.status !== 200) {
                        alert (res.data);
                    }
                })
                .catch(err => {
                    alert(err);
                });

            },
            //
            // Спрятать запись, показать поле редактирования записи
            //
            startEditTodo()
            {
                let el = event.target;         // Элемент из которого вызываем

                if (el.tagName === 'P') {       // можем тыкнуть на саму запись
                    el = el.parentElement.parentElement;
                } else {
                    if (el.tagName !== 'DIV') {     // или можем тыкнуть на div в котором запись
                        el = el.parentElement;
                    } else {
                        return;
                    }
                }

                el.hidden = true;
                el.nextElementSibling.hidden = false;
                el.nextElementSibling.firstElementChild.focus();

                this.tmp = this.todo.task; // Сохраняем на случай отмены
            },
            //
            // Удалить запись
            //
            deleteTodo()
            {
                if (!confirm('Желаете удалить ?')) {
                    return;
                }

                axios({
                    method: 'post',
                    url: '/todo/delete',
                    data: {
                        id: this.todo.id
                    }
                })
                    .then(res => {
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
            }
        }
    }
);

app.mount('#todo-list');
