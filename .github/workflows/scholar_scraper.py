import requests
from bs4 import BeautifulSoup
import json

SCHOLAR_ID = "GQLCniAAAAAJ"  # replace with your ID
URL = f"https://scholar.google.com/citations?user={SCHOLAR_ID}"

r = requests.get(URL)
soup = BeautifulSoup(r.text, "html.parser")

# The first "gsc_rsb_std" cell is total citations
citations = soup.find_all("td", class_="gsc_rsb_std")[0].text

# Save into citations.json
with open("citations.json", "w") as f:
    json.dump({"citations": citations}, f)

print("Updated citations.json with:", citations)
