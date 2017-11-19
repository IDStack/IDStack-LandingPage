<?php

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$_message = trim($_POST['message']);
if ($name == "") {
    $msg['err'] = "\n Name can not be empty";
    $msg['field'] = "full_name";
    $msg['code'] = FALSE;
} else if ($email == "") {
    $msg['err'] = "\n Email can not be empty";
    $msg['field'] = "Email";
    $msg['field'] = "email";
    $msg['code'] = FALSE;
} else if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    $msg['err'] = "\n Please put a valid email address";
    $msg['field'] = "email";
    $msg['code'] = FALSE;
} else if ($_message == "") {
    $msg['err'] = "\n Message can not be empty";
    $msg['field'] = "message";
    $msg['code'] = FALSE;
} else {
    $to = 'info@idstack.one';
    $subject = 'Contact Query';
    $message = '<html><head></head><body>';
    $message .= '<p>Name: ' . $name . '</p>';
    $message .= '<p>Email: ' . $email . '</p>';
    $message .= '<p>Message: ' . $_message . '</p>';
    $message .= '</body></html>';

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From:  IDStack.one <info@idstack.one>' . "\r\n";
    mail($to, $subject, $message, $headers);

    $msg['success'] = "\n Email has been sent successfully";
    $msg['code'] = TRUE;
}
echo json_encode($msg);
