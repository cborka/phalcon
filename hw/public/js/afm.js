//import {str} from  './afmapp.js';
// //
//
//  alert('afm.js');
//  alert(str);

const stylecss = {
    color: 'cyan',
    fontSize: '24px'
};


const Afs = {
    template: `
    <div class="box afm">
        <div class="has-background-primary-dark afm-header">
    
            <div class="level">
               <div class="level-left" >Файловый менеджер</div>
  
               <div class="level-right">
                   <button @click="" class="delete is-medium "></button>
               </div>
            </div>
  
        </div>
    
        <div class="columns" style="margin: 0; height: 600px ">
            <div class="column is-three-fifths lefttcol">is-three-fifths
      
    
    
            </div>
            
            <div class="column rightcol">Auto
      
      
            </div>
        </div>

    
    </div>



 
 
  `,


    data() {
        return {
            message: 'Hellow!'
        }
    },
    mounted() {
        this.message += ' world'
    },
    methods: {
        changeeMessage() {
            this.message += '!'
        }
    }
};

const afs = Vue.createApp(Afs);

// Определяем новый компонент
afs.component('comp', {

    template: `
       <span :style="styleObject">Это компонентa {{txt}}</span>
    `,
    data() {
        return {
            styleObject: stylecss,
            txt: " hi yo"
        }
    }
});



afs.mount('#afm-app');

//import {user} from './afmapp.js';
//alert(user); // John