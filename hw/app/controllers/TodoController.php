<?php

use Phalcon\Mvc\Controller;

class TodoController extends Controller
{

    /**
     * todo list
     */
    public function indexAction()
    {
        $this->view->todos = MyTodo::find();

    }

    public function findAction()
    {
        $this->view->setContent(
            "<h1>hello</h1>"
        );
//        echo "Эта строка возвращается по запросу.";
    }
}