<?php 
    class Entity_student
    {
        public $ID;
        public $Name;
        public $Age;
        public $University;
        public function __construct($id, $name, $age, $university)
        {
            $this->ID = $id;
            $this->Name = $name;
            $this->Age = $age;
            $this->University = $university;
        }
    }
?>