function loadSection(section, btn) {
      var container = document.getElementById("main-container");
      var xhr = new XMLHttpRequest();

      xhr.open("GET", "./sections/" + section + ".html", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          container.classList.remove("show"); 
          container.innerHTML = xhr.responseText;

          var buttons = document.querySelectorAll('.nav-btn');
          for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
          }

          if (btn) btn.classList.add('active');

          if (location.hash !== "#" + section) {
            history.replaceState(null, "", "#" + section);
          }

          setTimeout(function() {
            container.classList.add("show");
          }, 10);
        }
      };
      xhr.send();
    }

    function initDefaultSection(defaultSection) {
      if (!defaultSection) defaultSection = "bio";
      var sectionFromHash = window.location.hash.replace("#", "") || defaultSection;

      var targetBtn = document.querySelector('.nav-btn[onclick*="' + sectionFromHash + '"]');
      loadSection(sectionFromHash, targetBtn);
    }

    window.addEventListener("hashchange", function() {
      var section = window.location.hash.replace("#", "");
      if (section) {
        var targetBtn = document.querySelector('.nav-btn[onclick*="' + section + '"]');
        loadSection(section, targetBtn);
      }
    });

    window.onload = function() {
      initDefaultSection("bio");
    };