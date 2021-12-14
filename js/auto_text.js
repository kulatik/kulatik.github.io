document.addEventListener("DOMContentLoaded", function() {
    writeAnimations();
  });
  
  function writeAnimations() {
    var a = document.createElement("h1"),
        hello = "Dzień dobry!",
        count = 0;
    s("#auto_write").appendChild(a);
  
    var w = setInterval(function() {
      if (count == hello.length) {
        clearInterval(w);
        return;
      }
      a.innerHTML = a.innerHTML + hello.charAt(count);
        count++;
      }, 90);
  }
  
  function s(e) {
    return document.querySelector(e);
  }