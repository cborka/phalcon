<?php

use Phalcon\Mvc\Controller;

class UsersController extends Controller
{
    /**
     * Welcome and user list
     */
    public function indexAction()
    {
        $this->view->users = Users::find();
    }
}