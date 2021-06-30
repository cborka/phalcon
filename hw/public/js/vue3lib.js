//import {ToDoList, app} from 'myvue3.js';

//

const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
    },
    methods: {
        Increment() {
            this.counter ++;
        },
        Decrement() {
            this.counter --;
        }

    }
};

Vue.createApp(Counter).mount('#counter');
