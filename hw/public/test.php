<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tiny.cloud/1/by218y9v8w5scrhnsto0dyv7uk6htpw5unp6zo54rezrg8br/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
</head>
<body>
  <textarea>
    Welcome to TinyMCE!
  </textarea>
  <script>
      tinymce.init({
          selector: 'textarea',
//          plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tinycomments tinymcespellchecker',
          toolbar: 'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
          toolbar_mode: 'floating',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
      });
  </script>
</body>
</html>



<!--<div class="cyan" style="overflow: auto; width: 200px; border: cyan 1px solid ">-->
<!---->
<!--    <div class="red" style="float: left; border: red 1px solid">red</div>-->
<!--    <div class="magenta" style="float: left; border: magenta 1px solid">magenta</div>-->
<!--    <div class="green" style="float: right; border: green 1px solid">green</div>-->
<!---->
<!--</div>-->