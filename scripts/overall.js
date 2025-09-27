var sections = ["navigation", "images", "bio", "contact", "publications", "awards", "presentations"];
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

const toc = document.querySelector('.toc');
const titlebar = toc.querySelector('.titlebar');
console.log(toc, titlebar);

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

titlebar.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDragging = true;
  offsetX = e.clientX - toc.offsetLeft;
  offsetY = e.clientY - toc.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    toc.style.left = (e.clientX - offsetX) + "px";
    toc.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

window.addEventListener('load', function() {
    const nav = document.querySelector('.toc');
    const form = document.querySelector('#form_container');
    
    const navRect = nav.getBoundingClientRect();
    const formRect = form.getBoundingClientRect();

	const buffer = 4; 

    if (navRect.right > formRect.left + buffer) {
        nav.style.visibility = 'hidden';
    } else {
        nav.style.visibility = 'visible';
    }
});
