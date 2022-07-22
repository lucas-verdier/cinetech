<?php

namespace App\Models;
use PDO;
use PDOException;

class DB
{
    protected static $instance;

    public function __construct()
    {
        try {
            $this->db = new PDO('mysql:host=localhost;dbname=cinetech;charset=utf8', 'admin', 'admin');
            $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Erreur : ' . $e->getMessage();
        }
    }

    // AUTO INSTANCIE LA CLASSE
    public static function instance() {
        if (self::$instance === null)
        {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public function run($sql, $args = [])
    {
        if (!$args)
        {
            $stmt = $this->db->query($sql);
        }else{
            $stmt = $this->db->prepare($sql);
            $stmt->execute($args);
        }
        return $stmt;
    }

    public function isItemExist($table, $field, $bindValue, $value)
    {
        $exist = false;
        $sql = "SELECT * FROM $table WHERE $field = $bindValue";
        $item = $this->db->prepare($sql);
        $item->execute($value);
        $res = $item->fetch();

        if ($res) {
            $exist = true;
        }

        return $exist;
    }

    public function create($table, $fields, $bindValues, $values, $field, $blindArg, $arg)
    {
        $sql = "INSERT INTO `$table` ($fields) VALUES ($bindValues)";
        $res = $this->isItemExist($table, $field, $blindArg, $arg);

        if (!$res) {
            $req = $this->db->prepare($sql);
            $req->execute($values);
        }
    }

    // FIND AN ITEM BY CHECKING IF A VALUE EXIST
    public function findOneBy($table, $field, $hiddenArg, $arg)
    {
        $sql = "SELECT * FROM $table WHERE $field = $hiddenArg";
        $req = $this->db->run($sql, $arg);
        $res = $req->fetch();

        return $res;
    }
}

//?>