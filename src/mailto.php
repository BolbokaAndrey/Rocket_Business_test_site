<?php

$to = 'rbru-metrika@yandex.ru';
$tema = "Фидбэк от пользователя ".$_POST['name'];
$message = $_POST['message'];
$headers = 'From: '.$_POST['email']."\r\n";

if (mail($to, $tema, $message, $headers)) {
    $refer = $_SERVER["HTTP_REFERER"];
    header('Location: '.$refer);
}
else {
    echo "Функция mail() не работает на бесплатном хостинге";
}
