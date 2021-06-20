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

        $this->view->todos = MyTodo::find();
        $this->view->todo1 = MyTodo::findFirst();

        echo "findAction: Эта строка могла бы возвратиться по запросу.";
    }

    public function addAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    public function deleteAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    public function editAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

}