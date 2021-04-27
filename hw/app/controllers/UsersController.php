<?php

use Phalcon\Mvc\Controller;

use Phalcon\Escaper;
use Phalcon\Flash\Direct;


class UsersController extends Controller
{
    /**
     * Welcome and user list
     */
    public function indexAction()
    {
        $this->view->users = Users::find();
    }


    /**
     * Test
     */
    public function testAction()
    {
        global  $flash;

        $flash->error('Something went wrong');
//        $flash->message('error', 'Error message');
    }

}