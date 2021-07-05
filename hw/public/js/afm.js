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
    
        <div class="columns" style="margin: 0; height: 600px; ">
            <div class="column is-two-thirds lefttcol">
      
                <div class="level " style="margin-bottom: 0; padding-left: 12px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                   <div class="level-left" >... ./</div>
      
                </div>

                <div class="level " style="padding: 12px; ">
                   <div class="level-left" >
                        <button class="button" disabled>Фильтр по файлам</button>
                   </div>

                   <div class="level-right" >
                        <div class="buttons">
                            <button class="button is-primary is-light">Создать папку</button>
                            <button class="button is-primary is-light">Загрузить</button>
                        </div>
                   </div>
                </div>
                
                <div class="panel">
                    <folder></folder>
                    <folder></folder>
                    <folder></folder>
                </div>
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

// Каталог
afs.component('folder', {

    template: `
        <div class="panel-block" style="width: 100%; margin-bottom: 0px; margin-top: 0px; padding-bottom: 2px; padding-top: 2px">
            <div class="level" align="left" @dblclick="" id="td" style="width: 100%; margin-bottom: 0px; margin-top: 0px; padding-bottom: 0px; padding-top: 0px">

                <div class="level-left" >
                    <input type="checkbox" @change="" />
                    <label for="checkbox" class="checkbox">{{}}</label>

                    <p class="level-item">
                        {{ txt }} 
                    </p>
                </div>
                
                <div class="level-right">
                    right
               </div>

            </div>

         </div>
    `,
    data() {
        return {
//            styleObject: stylecss,
            txt: " hi yo"
        }
    }
});

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