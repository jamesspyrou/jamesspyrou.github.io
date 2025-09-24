 var sections = ["images", "bio", "publications", "awards", "presentations"];
  function loadSection(section) {
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {
        console.error("AJAX not supported in this browser.");
        return;
      }
    }
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          document.getElementById(section).innerHTML = xhr.responseText;
        } else {
          document.getElementById(section).innerHTML = "Error loading " + section;
        }
      }
    };
    xhr.open("GET", "sections/" + section + ".html", true);
    xhr.send();
  }
  for (var i = 0; i < sections.length; i++) {
    loadSection(sections[i]);
  }