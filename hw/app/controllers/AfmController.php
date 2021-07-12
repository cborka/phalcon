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


}