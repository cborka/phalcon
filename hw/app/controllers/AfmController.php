<?php

use Phalcon\Mvc\Controller;
use Phalcon\Mvc\View;

class AfmController extends Controller
{

    /*
     * todo
     * Ещё надо сделать
     * - располагать показываемые картинки по центру места
     * - показ содержимого выбранных файлов в зависимости от типа
     * - пагинацию либо полосу прокрутки у списка файлов
     * - изменение размера левой и правой части окна с помощью мышки
     * - выбор текущего файла кликом мышки
     * - показ содержимого текущего файла в зависимости от его типа
     * - перемещение по файлам стрелками вверх, вниз
     * - фильтр по файлам
     * - работа с изображением, здесь я вообще не представляю пока как и что делать
     * - перемещение файлов в другую папку, выбор папки, в которую надо перемещать
     *
     * - загрузка больших файлов (нужна или нет?)
     *
     * - вызывать всё это дело из редактора для выбора изображения (в отдельном или модальном окне)
     * -
     */

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

    /*
     * Картинка
     */
    public function imageAction()
    {
        $this->view->setRenderLevel(
            View::LEVEL_ACTION_VIEW
        );
    }


}