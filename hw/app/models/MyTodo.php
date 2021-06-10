<?php

use Phalcon\Mvc\Model;

//
class MyTodo extends Model
{
    public $id;
    public $task;
    public $dt;
//    public $status;

    public function beforeSave()
    {
//        $this->status = join(',', $this->status);
    }

    public function afterFetch()
    {
        $this->task .= ' срочно!';
//        $this->status = explode(',', $this->status);
    }

    public function afterSave()
    {
//        $this->status = explode(',', $this->status);
    }
}