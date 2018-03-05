var picker = new Pikaday({
  field: document.getElementById("datepicker"),
  defaultDate: moment().toDate(), //14 Mar 2015
  setDefaultDate: true,
  format: "Do MMMM YYYY"
});

// Input fields
let name = $("#name");
let email = $("#email");
let pickup = $("#pickup");
let dropoff = $("#dropoff");
let date = $("#datepicker");
let trip = $("input[name=trip-type]:checked");

function checkIfValid() {
  // Validate inputs as user types
  $(".book-online-form").keyup(function (e) {
    var input = e.target;
    if (input.value == "") {
      input.classList = "danger";
    } else {
      input.classList = "";
    }
  })

  // Final check that everything is valid
  if ($('input').val() == "" || $('input').hasClass("danger") || !validateEmail(email.val())) {
    console.log('form is not valid');
    return false;
  } else {
    // if inputs are valid return tre and send form
    return true
  }
}

// Check if Email is Valid
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


$("#submit").click(function () {
  // Check if form fields are valid
  if (!checkIfValid()) {
    // If empty on click add the class of danger
    $('input').each(function () {
      if (this.value == "") {
        this.classList = "danger"
      }
    });

    // if email is not valid add class of danger
    if (validateEmail(email.val())) {
      email.removeClass('danger')
    } else {
      console.log('Not a valid email address');
      email.addClass('danger');
    }


    // Return false and stop form from being sent
    return false;
  }

  // make ajax call to send.php
  $.ajax({
    url: "./php/send.php",
    type: "POST",
    data: {
      name: name.val(),
      email: email.val(),
      pickup: pickup.val(),
      dropoff: dropoff.val(),
      date: date.val(),
      trip: trip.val()
    },
    success: function () {
      console.log("Form sending success...");
      $(".book-online-form").html(`
        <div class="form-group">
          <p>Your message has been sent. We will get back to you shortly.</p>
          <h2>Thanks</h2>
          <br>
        </div>
        < img src = "images/sent.png">
        `);
    }
  });
  return false;
});

checkIfValid();
