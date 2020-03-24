<?php
if (isset ($_POST['tel'])) {
  $to = "First <biloholovskyi@gmail.com>";
  $from = "support@vividoil.ru";
  $subject = "Заполнена контактная форма на сайте " . $_SERVER['HTTP_REFERER'];
  $message = "Имя пользователя: " . $_POST['name'] . "\nEmail пользователя " . $_POST['email'] . "\nТелефон пользователя " . $_POST['tel'];

  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message = "
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
  if (is_uploaded_file($_FILES['attachment']['tmp_name'])) {
    $attachment = chunk_split(base64_encode(file_get_contents($_FILES['attachment']['tmp_name'])));
    $filename = $_FILES['attachment']['name'];
    $filetype = $_FILES['attachment']['type'];
    $filesize = $_FILES['attachment']['size'];
    $message .= "
 
--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"
 
$attachment";
  }
  $message .= "
--$boundary--";

  if ($filesize < 150000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    mail('albertgaifullin@gmail.com', $subject, $message, $headers);
    mail('sales@vividoil.ru', $subject, $message, $headers);
    mail('pkorchagin@vividoil.ru', $subject, $message, $headers);
    echo $_POST['name'] . ', Ваше сообщение отправлено, спасибо!';
  } else {
    echo 'Извините, письмо не отправлено. Размер всех файлов превышает 150 МБ.';
  }
} else {
  echo 'hhh';
}
