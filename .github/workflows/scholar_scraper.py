import requests
from bs4 import BeautifulSoup
import json
import os

SCHOLAR_ID = "GQLCniAAAAAJ"
URL = f"https://scholar.google.com/citations?user={SCHOLAR_ID}"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
}

r = requests.get(URL)
soup = BeautifulSoup(r.text, "html.parser")

# The first "gsc_rsb_std" cell is total citations
cells = soup.find_all("td", class_="gsc_rsb_std")
if cells:
    citations = cells[0].text
else:
    citations = "N/A"

# Save into citations.json
filepath = os.path.join("scripts", "citations.json")
with open(filepath, "w") as f:
    json.dump({"citations": citations}, f)

print("Updated citations.json with:", citations)
