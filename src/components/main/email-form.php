<?php
if($_POST["message"]) {
    mail("campbellsoleson@gmail.com", 
    "Form to email message", $_POST["message"], 
    "From: mystery@email.address");
}
?>