<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/vendor/phpmailer/phpmailer/src/Exception.php';
require '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require '/vendor/phpmailer/phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                                 
    $mail->isSMTP();                                      
    $mail->Host = 'smtp.gmail.com';                       
    $mail->SMTPAuth = true;                               
    $mail->Username = 'kymanee21@gmail.com';             
    $mail->Password = 'Mzabibu21';                    
    $mail->SMTPSecure = 'tls';                            
    $mail->Port = 587;                                    

    //Recipients
    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('gavinkariuki@gmail.com');                

    //Content
    $mail->isHTML(true);                                  
    $mail->Subject = $_POST['subject'];
    $mail->Body    = "Name: " . $_POST['name'] . "<br>Email: " . $_POST['email'] . "<br>Mobile: " . $_POST['mobile'] . "<br>Message:<br>" . $_POST['message'];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
?>