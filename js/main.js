var picker = new Pikaday({
  field: document.getElementById("datepicker"),
  defaultDate: moment().toDate(), //14 Mar 2015
  setDefaultDate: true,
  format: "Do MMMM YYYY"
});
