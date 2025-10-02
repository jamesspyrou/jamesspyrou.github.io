fetch("citations.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("citations").textContent =
      "Google Scholar citations: " + data.citations;
  })
  .catch(() => {
    document.getElementById("citations").textContent = "Unavailable";
  });