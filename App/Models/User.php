<?php

namespace App\Models;

use Exception;

class User extends DB
{
    protected $db;

    public function __construct()
    {
        $this->table = 'users';
        $this->db = DB::instance();
    }

    public function newUser($firstname, $name, $email, $password)
    {
        $fields = 'firstname, name, email, password';
        $blindValues = ':firstname, :name, :email, :password';
        $values = array(
            ':firstname' => $firstname,
            ':name' =>  $name,
            ':email' => $email,
            ':password' => $password
        );

        $field = 'email';
        $blindArg = ':email';
        $arg = array(
            ':email' => $email
        );

        $req = $this->db->create($this->table, $fields, $blindValues, $values, $field, $blindArg, $arg);

        if (!$req) {
            return true;

        } else {
            return false;
        }
    }

    public function findOneUserBy($email) {
        $field = 'email';
        $hiddenArg = ':email';
        $arg = array(
            ':email' => $email
        );

        $req = $this->db = DB::findOneBy($this->table, $field, $hiddenArg, $arg);

        return $req;
    }
}

//?>