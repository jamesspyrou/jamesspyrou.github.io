const authorId = "113826046";  

fetch(`https://api.semanticscholar.org/graph/v1/author/${authorId}?fields=citationCount`)
	.then(response => response.json())
	.then(data => {
		document.getElementById("citations").textContent = data.citationCount.toLocaleString();
    })
	.catch(error => {
		console.error("Error fetching citation count:", error);
	document.getElementById("citations").textContent = "N/A";
	});
	