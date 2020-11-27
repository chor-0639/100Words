function openmenu() {
    document.getElementById("hamburger").style.width = "50%";
    document.getElementById("main").style.marginLeft = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closemenu() {
    document.getElementById("hamburger").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }