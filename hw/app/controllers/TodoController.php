<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\View;

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
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );

//        $this->view->setContent(
//            "<h1>hello</h1>"
//        );

        $this->view->todos = MyTodo::find();
        echo "findAction: Эта строка возвращается по запросу.";
    }
}