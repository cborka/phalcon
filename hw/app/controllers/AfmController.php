<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\View;

class AfmController extends Controller
{

    /**
     *
     */
    public function indexAction()
    {
//        $this->view->users = Users::find();
    }

    public function readDirAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    public function createDirAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    public function deleteFileAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    public function loadFilesAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }


}