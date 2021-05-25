
const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 60000) // минута
    }
};

Vue.createApp(Counter).mount('#counter');


const Str = {
    data() {
        return {
            str2: 'qwertyx'
        }
    }
};

Vue.createApp(Str).mount('#string');