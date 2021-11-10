function validate() {
    let x = document.forms["nform"]["fname"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }
    let y = document.forms["nform"]["lname"].value;
    if (y == "") {
      alert("Last Name must be filled out");
      return false;
    }
  }