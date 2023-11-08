if (localStorage) { //Check if the localStorage object exists
  function savewb() { // Store data
      var txt = document.getElementById('sName').value;
      localStorage.setItem("name", txt);
      alert("Your name is saved.");
  }

  function accesswb() { //Retrieve data
    alert("Love you " + localStorage.getItem("name"));
  }
} else {
  alert("Sorry, your browser does not support local storage.")
}
