<?php
       // from the form
      $name = trim(strip_tags($_POST['name']));
      $email = trim(strip_tags($_POST['email']));
      $pickupLocation = trim(strip_tags($_POST['pickup']));
      $dropOffLocation = trim(strip_tags($_POST['dropoff']));
      $date = trim(strip_tags($_POST['date']));
      $tripType = trim(strip_tags($_POST['trip']));


      // set here
      $subject = "Booking from ". $name;
      $to = 'scottyzen@gmail.com';

      // Styled with: https://inlinestyler.torchbox.com/styler/convert/
      $body = <<<HTML

  <div class="container" style="max-width: 600px;margin: 2% 1%;font-family: &quot;Source Sans Pro&quot;, &quot;Helvetica Neue&quot;, Arial, sans-serif;background: #F2F7FC;border-radius: 5px;color: #2e475f;padding: 10px 20px;font-weight: 200;font-size: 16px">
    <h1>
      <strong>$name</strong>
    </h1>
    <p>Date:
      <strong>$date</strong>
    </p>
    <hr style="border: 0;height: 1px;background: #b8c7d6; margin: 2% 0"/>
    <p>Pick up location is:
      <strong>$pickupLocation</strong>
    </p>
    <p>Drop off location is:
      <strong>$dropOffLocation</strong>
    </p>
    <hr style="border: 0;height: 1px;background: #b8c7d6; margin: 2% 0"/>
    <p>
      <strong>$tripType</strong>
    </p>
  </div>

HTML;

      $headers = "From: $email\r\n";
      $headers .= "Content-type: text/html\r\n";

      // send the email
      mail($to, $subject, $body, $headers);

?>