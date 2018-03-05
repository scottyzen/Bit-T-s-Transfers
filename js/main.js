var picker = new Pikaday({
  field: document.getElementById("datepicker"),
  defaultDate: moment().toDate(), //14 Mar 2015
  setDefaultDate: true,
  format: "Do MMMM YYYY"
});

$("#submit").click(function() {
  $.ajax({
    url: "../php/send.php",
    type: "POST",
    data: {
      name: $("#name").val(),
      email: $("#email").val(),
      "pickup-location": $("#pickup").val(),
      "drop-off-location": $("#dropoff").val(),
      date: $("#datepicker").val(),
      "trip-type": $("input[name=trip-type]:checked").val()
    },
    success: function() {
      $(".book-online-form").html(`
        <br>
        <div class="form-group">
          <p>Your message has been sent. We will get back to you shortly.</p>
          <h2>Thanks</h2>
        </div>
        <br>
        `);
    }
  });
  return false;
});
