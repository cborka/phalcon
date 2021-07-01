<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">

    <style>
        .fon1 {
            background-color: floralwhite;
        }

        .fon2 {
            background-color: ghostwhite;
        }
        .header {
            font-family: "Segoe Script", Helvetica, Arial, sans-serif;
            padding-bottom: 0px;
            margin-bottom: 2px;
        }
    </style>
</head>
<body>
<header class="header fon1">
    <section class="content  has-text-centered">
        <a href="/test_vue3.php">
            <h1 class="title">ШАПКА</h1>
        </a>
    </section>
</header>


<section class="section">
    <h1 class="title">Тест vue3</h1>
    <h2 class="subtitle">
        Секция номер один.
    </h2>

    <div class="block fon1">
        This text is within a <strong>block</strong>.
    </div>


<!--    <div id="counter" class="block fon1">-->
<!--        Счётчик: {{ counter }}-->
<!--        <button v-on:click="Increment">++</button>-->
<!--        <button v-on:click="Decrement">--</button>-->
<!--    </div>-->


</section>


<footer class="footer">
    <div class="content has-text-centered">
</footer>


<!--   Vue 3     -->
<!--<script src="https://unpkg.com/vue@next"></script>-->
<!--<script src="/js/vue3lib.js?--><?php //echo date ("U", filemtime(dirname(__FILE__) . "/js/vue3lib.js")); ?><!--"></script>-->

<!--<script src="/js/afmapp.vue?--><?php //echo date ("U", filemtime(dirname(__FILE__) . "/js/afmapp.vue")) ?><!--"></script>-->
<!--<script  type="module" src="/js/afm.js?--><?php //echo date ("U", filemtime(dirname(__FILE__) . "/js/afm.js")) ?><!--"></script>-->
<script src="js/afmapp.vue?<?php echo date ("U", filemtime("js/afmapp.vue")) ?>"></script>
<script  type="module" src="/js/afm.js?<?php echo date ("U", filemtime("js/afm.js")) ?>"></script>

  <script>



  </script>


</body>
</html>