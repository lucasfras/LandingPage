function myFunction() {
    var x = document.querySelector("ul");
    console.log(x)

    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";

    }
  }