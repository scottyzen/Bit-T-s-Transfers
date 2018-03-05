<?php
       // from the form
      $name = trim(strip_tags($_POST['name']));
      $email = trim(strip_tags($_POST['email']));
      $pickupLocation = trim(strip_tags($_POST['pickup-location']));
      $dropOffLocation = trim(strip_tags($_POST['drop-off-location']));
      $date = trim(strip_tags($_POST['date']));
      $tripType = trim(strip_tags($_POST['trip-type']));


      // set here
      $subject = "Booking from ". $name;
      $to = 'scottyzen@gmail.com';

      $body = <<<HTML

      <h1>Name : $name</h1>
      <h2>Date : $date</h2>
      <hr>
      <h2>Pick up location is : $pickupLocation</h2>
      <h2>Drop off location is : $dropOffLocation</h2>
      <hr>
      <h2><strong>$tripType</strong></h2>

HTML;

      $headers = "From: $email\r\n";
      $headers .= "Content-type: text/html\r\n";

      // send the email
      mail($to, $subject, $body, $headers);

      // redirect afterwords, if needed
      // header('Location: ../index.html');
?>