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
                   <div class="level-left">
                   <!--<nav class="breadcrumb" aria-label="breadcrumbs">-->
                   <!--<ul>-->

                    <breadc @opendir2="openDir2"
                        v-for="dir in dirs"
                         :dir="dir"
                         :key="dir.id"
                    ></breadc>

                   <!--</ul>-->
                   <!--</nav>-->
                    </div>
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
                            <button class="button is-primary is-light" @click="newDir">Создать папку</button>
                            <button class="button is-primary is-light">Загрузить</button>
                        </div>
                   </div>
                </div>
                
                <!---------------------- Список файлов в папке ----------------------->
                <div class="box"  style="padding: 0 12px 0 0px; margin: 0 12px 0 12px; background-color: hsl(0, 0%, 96%)" >
                    <folder  @opendir="openDir"
                        v-for="file in fileList"
                        v-bind:file="file"
                    >
                    </folder>
                </div>
                
                <!---------------------- Нижние кнопки ----------------------->
                <div class="level " style="padding: 0 12px 0 24px; ">
                    <div class="level-left" >
                        <input type="checkbox" v-model="checkedAll" @change="checkAll" />
                        <label for="checkbox" class="checkbox">{{}}</label>
                        
                        <div class="buttons" style="padding: 12px; ">
                            <button class="button is-primary is-light" @click="test2" >Переместить</button>
                            <button class="button is-primary is-light">Скачать</button>
                            <button class="button is-danger" @click="deleteChecked">Удалить</button>
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


                <div class="" style=" margin: 52px 12px 0 12px; xmargin-top: 52px; padding-bottom: 12px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                     
                        <content
                            v-for="file in fileList"
                                :file="file"
                                :key="file.id"
                        >
                        </content>

                   
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
            // Полное имя текущего каталога
            dirname: '',

            // Массив имён каталогов входящих в полное имя текущего каталога
            // нужен для формирования полного имени в формате "хлебных крошек"
            // то есть кликабельных ссылок для открытия каталога
            // Сделан для того, чтобы ссылаться по индексу, а не по имени, так как имена могут быть одинаковые
            // [{id: 0, name: "dirname"},  ...]
            dirs: [],

            // Массив информации о файлах текущего каталога
            // [{id: 0, name: "filename", size: 123, type: "txt", checked: true},  ...]
            fileList: [],

            checkedAll: false
        }
    },
    mounted() {
        this.readDir('');
    },
    computed: {
//        dirsss() {
//            d = this.dirname.split('/');
//            return d;
//        }
    },
    methods: {
        test2() {
            alert ('qqqq');
//            alert (this.fileList[3]['checked']);
//            this.message += '!'
        },

        // Переключить выделение всех файлов
        checkAll() {
            let count = this.fileList.length;
            for (let i = 0; i < count; i++) {
                this.checkFile(this.fileList[i], this.checkedAll);
            }
        },

        // Переключить выделение файла
        checkFile(file, checked) {
            file['checked'] = checked;
        },

        // Прочитать информацию о файлах каталога dir
        readDir(dir) {
            axios({
                method: 'post',
                url: '/afm/readDir',
                data: {
                    dirname: dir
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        this.fileList = res.data;
                    } else {
                        alert (res.data);
                    }
                })
                .catch(err => {
                    alert(err);
                });
            this.dirname = dir;
            this.dirs = this.makeDirsArray(this.dirname);
        },

        // Создать массив имен каталогов входящих в полное имя открытого каталога
        makeDirsArray(dirname) {
            let names = dirname.split('/');

            let arr = [{id: 0, name: '...'}];

            for (let i = 1; i < names.length; i++) {
                arr[i] = {id: i, name: names[i]};
            }
//            alert(JSON.stringify(arr));
            return arr;
        },

        // Создать новый каталог
        newDir() {
            let dir = prompt('Введите имя новой папки', '');
            if ((dir !== null) && (dir.trim() !== '')) {
                this.createDir(this.dirname + '/' + dir);
            }
        },

        // Создать новый каталог с именем dir
        createDir(dir) {
            axios({
                method: 'post',
                url: '/afm/createDir',
                data: {
                    dirname: dir,
                    id: this.fileList.length
                }
            })
                .then(res => {
                    if (res.status === 200) {
//                        alert (res.data.substr(0,5));

                        if (typeof(res.data) === "object") {
                            this.fileList[this.fileList.length] = res.data;
                        }
                        else {
                            alert ('Не удалось создать папку ' + dir);
                        }
                    } else {
                        alert (res.data);
                    }
                })
                .catch(err => {
                    alert(err);
                });
        },

        // Открыть каталог при клике на "хлебную крошку"
        openDir2(id) {
            let ndir = '';
            for (let i = 1; i <= id; i++) {
                ndir = ndir + '/' + this.dirs[i].name;
            }
            this.readDir(ndir);
        },

        // Открыть каталог по двойному клику
        openDir(dir, type) {

            if (type !== 'dir') {
                return;
            }

            let newdir = this.dirname;

            if (dir === '..') {
                let n = newdir.lastIndexOf("/");
                if (n !== -1) {
                    newdir = newdir.slice(0, n);
                }
            } else if (dir !== '.') {
                newdir = newdir + '/' + dir;
            }

            this.readDir(newdir);
        },

        deleteChecked() {
            let s = '';

            let count = this.fileList.length;

            for (let i = 0; i < count; i++) {
                if (! this.fileList[i].checked) {
                    continue;
                }
                deleteFile(this.fileList[i].id);
//                s += (this.fileList[i].name + ', ');
            }


        },

        deleteFile(id) {
            alert(id);
        }


    }
};

const afs = Vue.createApp(Afs);

// Компонент (строка) каталога файлов
// Если это каталог, то он открывается по двойному клику
// Содержит чекбокс для выделения
afs.component('folder', {
    props: ['file'],
    template: `
        <div class="panel-block" style="width: 100%; margin-bottom: 0px; margin-top: 0px; padding-bottom: 2px; padding-top: 2px">
            <div class="level" align="left" id="td" style="width: 100%; margin-bottom: 0px; margin-top: 0px; padding-bottom: 0px; padding-top: 0px">

                <div class="level-left" >
                    <input type="checkbox" v-model="file.checked" @change="" />
                    <label for="checkbox" class="checkbox">{{}}</label>

                    <p  class="level-item" @dblclick.stop="$emit('opendir', file.name, file.type)">
                         {{file.name}}  
                    </p>
                </div>
                
                <div class="level-right">
                    <span class="tag is-light">
                         <!--{{  (file.size / 1024).toFixed(2) + 'k, ' + file.type}} -->
                         {{  ((file.type == 'dir') ? file.size : 
                                (
                                    (file.size < 1000) ?
                                        ( (file.size).toFixed(0)+'b' ) :
                                        ( (file.size / 1024).toFixed(1)+'k' )
                                )
                            ) +
                            ', ' + file.type
                         }} 
                     </span>
               </div>
               
            </div>
         </div>
    `
//   ,
//     data() {
//         return {
//         }
//     }
});

// Кликабельный компонент полного имени каталога (хлебная крошка)
afs.component('breadc', {
    props: ['dir'],
    template: `
        <span class="" @click.stop="$emit('opendir2', dir.id)"> {{dir.name}}/ </span>
        <!--<li class="" @click.stop="$emit('opendir2', dir.id)"> {{dir.name}} </li>-->
    `
});

// Контент выделенных файлов
afs.component('content', {
    props: ['file'],
    template: `
    
            <div v-if="file.checked" class="">

                         {{file.name }}   

            </div>

    `
//    ,
//     data() {
//         return {
//         }
//     }
});


afs.mount('#afm-app');

//import {user} from './afmapp.js';
//alert(user); // John