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
      
               <!---------------------- Полное имя папки ----------------------->
               <div class="level "style="margin-bottom: 0; padding-left: 12px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                   <div class="level-left" >... ./</div>
      
                </div>

                <!---------------------- Верхние кнопки ----------------------->
                <div class="level " 
                    style="
                        padding: 12px; 
                        padding-bottom: 0;  
                        margin-bottom: 12px;
                        "
                >
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
                
                <!---------------------- Список файлов в папке ----------------------->
                <div class="box"  style="padding: 0 12px 0 12px; margin: 0 12px 0 12px; background-color: hsl(0, 0%, 96%)" >
                    <folder></folder>
                    <folder></folder>
                    <folder></folder>
                    <folder></folder>
                    <folder></folder>
                </div>
                
                <!---------------------- Нижние кнопки ----------------------->
                <div class="level " style="padding: 0 12px 0 12px; ">
                    <div class="level-left" >
                        <input type="checkbox" checked @change="" />
                        <label for="checkbox" class="checkbox">{{}}</label>
                        
                        <div class="buttons" style="padding: 12px; ">
                            <button class="button is-primary is-light">Переместить</button>
                            <button class="button is-primary is-light">Скачать</button>
                            <button class="button is-danger">Удалить</button>
                        </div>    
                    </div>

                    <div class="level-right" >
                        <div class="buttons">
                            <button class="button is-primary has-background-primary-dark ">Вставить</button>
                        </div>
                    </div>
                </div>
                 
                
            </div>
            
            <!---------------------- Правая колонка где показано содержимое выделенных файлов ----------------------->
            <div class="column rightcol">


                <div class="level" style=" margin-top: 52px; padding-bottom: 12px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                     <div class="level-item has-text-centered">
                        IMG.JPG
                    </div>
                </div>

                <div class="level" style="padding-bottom: 16px;  margin: 0px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">

                     <div class="block " style="margin-top: 0px; margin-left: 12px; border: red 0px solid; ">
                    <!--<div class="box" style=" border: red 1px solid; ">-->
                    
                    <figure class="image " style="display: inline-block; margin: 8px; border: navy 0px solid; width: 43%">
                        <img src="/img/logo-earth.jpg" >
                    </figure>
                         
                    <figure class="image " style="display: inline-block; margin: 8px; border: navy 0px solid;  width: 43%">
                        <img src="/img/logo-earth.jpg">
                    </figure>
                         
                    <figure class="image " style="display: inline-block; margin: 8px; border: navy 0px solid; width: 43%">
                        <img src="/img/logo-earth.jpg" >
                    </figure>
                         
                    </div>
                </div>
                
                <div class="level-left " style=" padding: 12px 12px 12px 24px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                     <div class="level-item ">
                        IMG.JPG
                    </div>
                </div>

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