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
            <!--<div class="column is-two-thirds lefttcol">-->
            <div class="column is-two-thirds lefttcol">
      
               <!---------------------- Полное имя папки ----------------------->
               <div class="level" style="padding-left: 12px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                   <div class="level-left">
                   <!--<nav class="breadcrumb" aria-label="breadcrumbs">-->
                   <!--<ul>-->

                    <breadc class="" @opendir2="openDir2"
                        v-for="dir in dirs"
                         :dir="dir"
                         :key="dir.id"
                         style="margin: 0; padding: 0;"
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
                            <!--<button class="button is-primary is-light">Загрузить</button>-->
                            
                            <load-files :dirname="dirname" :inform="inform" :readDir="readDir"></load-files>
                            
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
                            <button class="button is-primary is-light" @click="loadChecked">Скачать</button>
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
                    
                    <!--<figure class="image " style="display: inline-block; margin: 8px; border: navy 0px solid; width: 43%">-->
                        <!--<img src="/img/logo-earth.jpg" >-->
                    <!--</figure>-->
                         <!---->
                    <!--<figure class="image " style="display: inline-block; margin: 8px; border: navy 0px solid;  width: 43%">-->
                        <!--<img src="/img/logo-earth.jpg">-->
                    <!--</figure>-->
                         <!---->
                    <!--<figure class="image " style="display: inline-block; margin: 8px; border: navy 0px solid; width: 43%">-->
                        <!--<img src="/img/logo-earth.jpg" >-->
                    <!--</figure>-->
                         <!---->
                    </div>
                </div>
                
                <div class="level-left " style=" padding: 12px 12px 12px 24px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                     <div class="level-item ">
                        IMG.JPG
                    </div>
                </div>

                <div class="level-left " style=" padding: 12px 12px 12px 24px; border-bottom: hsl(0, 0%, 86%) 1px solid; ">
                     <div class="level-item ">
                        <!--<textarea v-html="info" cols=35 >-->
                        <!--</textarea>-->
                        <p v-html="info"></p>
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
            dirs: [],       // [{id: 0, name: "dirname"},  ...]

            // Массив информации о файлах текущего каталога
            fileList: [],   // [{id: 0, name: "filename", size: 123, type: "txt", checked: true},  ...]
//            fileList2: [],   // [{id: 0, name: "filename", size: 123, type: "txt", checked: true},  ...]

            checkedAll: false,

            // Выводимые справ снизу сообщения
            info: 'Hi'
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

        inform(message) {
//            this.info = '<br>'+message+'<br>xxx';
            this.info = message;
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
//                        this.inform( JSON.stringify(res.data));
//                        alert(Object.keys(this.fileList).length);
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

        // Скачать выделенные файлы и каталоги
        loadChecked() {
            let files = [];
            let s = '';
            let count = this.fileList.length;

            // Собираю в массив имена файлов, которые надо скачать
            for (let i = 0; i < count; i++) {
                if (! this.fileList[i].checked) {
                    continue;
                }
                files.push(this.fileList[i].name);
            }

            location.href = '/afm/loadFiles';

//            this.loadFiles(files);
        },
        loadFiles(files) {
            axios({
                method: 'post',
                url: '/afm/loadFiles',
                data: {
//                    dirname: this.dirname,
//                    files:  JSON.stringify(files)
//                    type: this.fileList[id].type
                }
            })
                .then(res => {
                    if (res.status === 200) {

                        alert('> Файлы скачаны!' + res.data);


//                         if (res.data) {
//
//                             let count = this.fileList.length;
//                             for (let i = 0; i < count; i++) {
//                                 if (this.fileList[i].checked)
//                                     this.fileList[i].checked = false;
//                             }
//
//                             this.inform(res.data);
// //                            alert (file + ' ' + this.fileList[id].name + ' удалён!');
//                         }
//                         else {
//                         }
                    } else {
                        alert ('Не удалось скачать файлы, статус = ' + res.status);
                    }
                })
                .catch(err => {
                    alert(err);
                });
        },

        // Удалить выделенные файлы и каталоги
        deleteChecked() {
            if (!confirm('Удалить выделенные файлы и каталоги?')) {
                return;
            }

            let files = [];

            let s = '';
            let count = this.fileList.length;
            // Первый проход проверяю на возможность удаления
            for (let i = 0; i < count; i++) {
                if (! this.fileList[i].checked) {
                    continue;
                }
                //[{id: 0, name: "filename", size: 123, type: "txt", checked: true},
                if ((this.fileList[i].type === 'dir') && (this.fileList[i].size !== 0)) {
                    alert ('Каталог ' + this.fileList[i].name + ' не пуст!');
                    return;
                }
            }

//             // Второй проход, удаляю
//             for (let i = 0; i < count; i++) {
//                 if (! this.fileList[i].checked) {
//                     continue;
//                 }
// //                try {
//                     this.deleteFile(this.fileList[i].id);
// //                }
//             }

            // Второй проход, собираю в массив имена файлов, которые надо удалить
            for (let i = 0; i < count; i++) {
                if (! this.fileList[i].checked) {
                    continue;
                }
                files.push(this.fileList[i].name);
            }

            this.deleteFiles(files);

//            fileList: [],   // [{id: 0, name: "filename", size: 123, type: "txt", checked: true},  ...]

            // let newFileList = [];
            // for (let i = 0; i < count; i++) {
            //     if (!this.fileList[i].checked)
            //         newFileList.push(this.fileList[i]);
            // }
            // this.fileList = newFileList;

            // Чтобы лишний раз не лезть на сервер
            // здесь вместо перечитывания надо просто отфильтровать массив оставив только !this.fileList[i].checked
            // хотя лишний раз перечитать надежнее
            // но успевает перечитать до того как все файлы удалятся, такой вот асинхрон
            // А зачем удалять по одному, можно же весь список сразу отправить, да я гений, но не сегодня.
//            this.readDir(this.dirname);

        },

        deleteFiles(files) {
            axios({
                method: 'post',
                url: '/afm/deleteFiles',
                data: {
                    dirname: this.dirname,
                    files:  JSON.stringify(files)
//                    type: this.fileList[id].type
                }
            })
            .then(res => {
                if (res.status === 200) {
                    if (res.data) {
//                        alert('> ' + res.data);
//                        alert('> ' + this.dirname);

                        let newFileList = [];
                        let count = this.fileList.length;
                        for (let i = 0; i < count; i++) {
                            if (!this.fileList[i].checked)
                                newFileList.push(this.fileList[i]);
                        }
                        this.fileList = newFileList;

                        this.inform(res.data);
//                            alert (file + ' ' + this.fileList[id].name + ' удалён!');
//                            this.inform(res.data);

                        // удалить запись из массива
                        //  -- удаление сбивается при удалении нескольких файлов, индексты перестают совпадать
                        // this.fileList.splice(id, 1);
                    }
                    else {
                        alert ('ПРЕДУПРЕЖДЕНИЕ: Не все файлы удалось удалить!');
                        this.readDir(this.dirname);
                    }
                } else {
                    alert ('Не удалось удалить файлы, статус = ' + res.status);
                }
            })
            .catch(err => {
                alert(err);
            });
        },

        deleteFile(id) {
            axios({
                method: 'post',
                url: '/afm/deleteFile',
                data: {
                    filename: this.dirname + '/' + this.fileList[id].name,
                    type: this.fileList[id].type
                }
            })
            .then(res => {
                if (res.status === 200) {
                    let file = 'файл';
                    if (this.fileList[id].type === 'dir') {
                        file = 'каталог';
                    }

                    if (res.data) {
//                            alert (file + ' ' + this.fileList[id].name + ' удалён!');
//                            this.inform(res.data);

                        // удалить запись из массива
                        //  -- удаление сбивается при удалении нескольких файлов, индексты перестают совпадать
                        // this.fileList.splice(id, 1);
                    }
                    else {
                        alert ('Не удалось удалить ' + file + ' ' + this.fileList[id].name);
                    }
                } else {
                    alert ('Не удалось удалить ' + this.fileList[id].name + ', статус = ' + res.status);
                }
            })
            .catch(err => {
                alert(err);
            });
        },
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
        <span class="button is-white" @click.stop="$emit('opendir2', dir.id)" style="margin: 0; padding: 0;"> {{dir.name}}/ </span>
        <!--<li class="" @click.stop="$emit('opendir2', dir.id)"> {{dir.name}} </li>-->
    `
});


// Контент загрузки файлов
afs.component('load-files', {
    props: ['dirname', 'inform', 'readDir'],
    template: `
            <!--<input type="file" id="file" ref="file" v-on:change="handleFileUpload()" multiple >-->
            <!--<button v-on:click="submitFile()">Submit</button>-->

            <div class="button is-primary is-light ">
                <input class="file-input" type="file" id="files" ref="files" v-on:change="handleFileUpload()" multiple >
                <!--<input id="file-input" class="file-input" type="file" name="resume" multiple>-->
                    Загрузить
                    
            </div>
             <!--<button v-on:click="submitFiles()">Submit</button>-->
    `
    ,
    data() {
        return {
            files: [],
            ret: ''
        }
    },
    methods: {
        handleFileUpload(){
            this.files = this.$refs.files.files;
            this.submitFiles();
        },

        submitFiles(){
            let formData = new FormData();

            formData.append('dirname', this.dirname);

            for( var i = 0; i < this.files.length; i++ ){
                let file = this.files[i];
//                formData.append('files[' + i + ']', file);
                formData.append('files[' + i + ']', this.files[i]);
//                formData.append('files' + i, file);
            }

            axios.post( '/afm/uploadFiles',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(res => {
                // alert('OK ' + res.data);
                this.readDir(this.dirname);
//                this.inform(res.data);
//                this.ret = res.data;
//                console.log('SUCCESS!!');
            })
            .catch(err =>{
                alert('ERR ' + err);
            });

        },
    }
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