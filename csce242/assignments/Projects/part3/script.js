function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    let y = document.getElementById("learnMoreButton");
    let z = document.getElementById("alert");
    y.onclick = () => {
      z.style.display="block";
    }
    
  }