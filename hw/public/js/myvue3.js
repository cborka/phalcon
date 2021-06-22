
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
        axios.get('/todo/find').then(res => {
            this.todoList = res.data;
        });
    },
    methods: {
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
            `<div class="panel-block " >
            <div class="" align="left" @dblclick="startEditTodo" id="td" @mouseenter="mouseenter" @mouseleave="mouseleave" style="overflow: auto; width: 100%;">

                <div class="" style="float: left; margin-top: 8px">
                
                <input type="checkbox" v-model="todo.flag" />
                <!--<label for="checkbox" class="checkbox">{{ this.todo.flag }}</label>-->
                
                    <!--<label class="checkbox">-->
                        <!--<input type="checkbox" >-->
                    <!--</label>-->
                </div>

                <p class="" style="float: left; margin: 8px">
                    {{todo.task}}
                </p>

                <div class="" style="float: right; margin-top: 8px">
                    <button @click="deleteTodo" hidden class="delete is-medium "></button>
               </div>
            </div>

            <div hidden style="width: 100%">
                <input v-model="todo.task" class="input is-primary" type="text" @keyup="saveTodo">
            </div>
             </div>`,
            // `<div class="panel-block" >
            // <div class="level" align="left" @dblclick="startEditTodo" id="td" @mouseenter="mouseenter" @mouseleave="mouseleave" style="width: 100%;">
            //
            //     <div class="level-left" >
            //         <label class="checkbox">
            //             <input type="checkbox" >
            //         </label>
            //     </div>
            //
            //     <p class="level-left">
            //         {{todo.task}}
            //     </p>
            //
            //     <div class="level-right">
            //         <button @click="deleteTodo" hidden class="delete is-medium "></button>
            //    </div>
            // </div>
            //
            // <div class="" hidden style="width: 100%">
            //     <input v-model="todo.task" class="input is-primary" type="text" @keyup="saveTodo">
            // </div>
            //  </div>`,
        methods: {
            mouseenter() {
                let el = event.target;
                el.lastElementChild.lastElementChild.hidden = false;
            },
            mouseleave() {
                let el = event.target;
                el.lastElementChild.lastElementChild.hidden = true;
            },
            saveTodo(f) {
                if (f.code === 'Escape') {
                    this.todo.task = this.tmp;
                } else {
                    if (f.code !== 'Enter')
                        return;
                }

                if (this.todo.task.length < 1) {
                    alert ('Нельзя вставить пустую строку.');
                    return;
                }

                let el = event.target;         // Элемент из которого вызываем
                el = el.parentElement;
                el.hidden = true;
                el.previousElementSibling.hidden = false;

                if (f.code === 'Escape') {
                    return;
                }

//                alert('zxcvdswwdw');
//                alert(this.todo.task);

                axios({
                    method: 'post',
                    url: '/todo/edit',
                    data: {
                        id: this.todo.id,
                        task: this.todo.task,
                        flag: this.todo.flag
                    }
                })
                .then(res => {
                    if (res.status !== 200) {
                        alert (res.data);
                    }
                })
                .catch(err => {
                    alert(err);
                });

            },
            startEditTodo()
            {
                let el = event.target;         // Элемент из которого вызываем

                if (el.tagName === 'P') {
                    el = el.parentElement;
                }

                if (el.tagName !== 'DIV') {
                    return;
                }

                el.hidden = true;
                el.nextElementSibling.hidden = false;
                el.nextElementSibling.firstElementChild.focus();

                this.tmp = this.todo.task; // Сохраняем на случай отмены
            },
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
//                            this.todoCount = this.arr.length;
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
