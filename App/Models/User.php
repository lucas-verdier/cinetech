<?php

namespace App\Models;

class User extends DB
{
    protected PDO $db;
    protected string $table;

    public function __construct()
    {
        $this->table = 'users';
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
}

//?>