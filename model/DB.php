<?php

namespace model;

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

    public static function instance() {
        if (self::$instance === null)
        {
            self::$instance = new self;
        }
        return self::$instance;
    }
}

?>