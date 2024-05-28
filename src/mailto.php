<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/Exception.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);
try {

    $mail->setFrom($_POST['email']);
    $mail->addAddress('rbru-metrika@yandex.ru');

    $mail->Subject = "Фидбэк от пользователя ".$_POST['name'];
    $mail->Body    = $_POST['message'];

    $mail->send();
    $refer = $_SERVER["HTTP_REFERER"];
    header('Location: '.$refer);
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}