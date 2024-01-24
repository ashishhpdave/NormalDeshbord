function showCheckboxes() {
    var dropdown = document.getElementById("dropdown");
    var checkboxGroup = document.querySelector(".checkbox-group");

    // Toggle the visibility of the checkbox group
    checkboxGroup.style.display = dropdown.value ? "block" : "none";
  }
