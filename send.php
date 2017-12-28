
<?php
$para      = 'info@ctelectrotecnia.com';
$from      = $_REQUEST['email'];
$name      = $_REQUEST['name'];
$titulo    = 'Contacto desde el sitio';
$mensaje   = 'Nombre: ' . $_REQUEST['name'] . '<br>' .
             'Email: ' . $_REQUEST['email'] . '<br>' .
             'Mensaje :' . $_REQUEST['msg'] . '<br>';

$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

$cabeceras .= 'From:' . $from . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);
