var sections = ["images", "bio", "contact", "publications", "awards", "presentations"];
function loadSection(section) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            alert("AJAX not supported in this browser.");
            return;
        }
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                var el = document.getElementById(section);
                if (el) el.innerHTML = xhr.responseText;
            } else {
                var el = document.getElementById(section);
                if (el) el.innerHTML = "Error loading " + section;
            }
        }
    };
    xhr.open("GET", "sections/" + section + ".html", true);
    xhr.send();
}
if (window.attachEvent) {
    window.attachEvent('onload', function() {
        for (var i = 0; i < sections.length; i++) {
            loadSection(sections[i]);
        }
    });
} else {
    window.onload = function() {
        for (var i = 0; i < sections.length; i++) {
            loadSection(sections[i]);
        }
    };
}
