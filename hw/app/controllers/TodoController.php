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

    public function find2Action()
    {
        echo "Эта строка возвращается по запросу.";
    }
}