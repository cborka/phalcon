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

    /*
     * Прочесть каталог
     */
    public function readDirAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    /*
     * Создать каталог
     */
    public function createDirAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    /*
     * Удалить файл
     */
    public function deleteFileAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    /*
     * Удалить файлы
     */
    public function deleteFilesAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    /*
     * Загрузить файлы
     */
    public function uploadFilesAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }

    /*
     * Скачать файлы
     */
    public function loadFilesAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }


}