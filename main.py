import requests
from bs4 import BeautifulSoup
import json
import ftplib

URL = "https://adatbank.mlsz.hu/club/65/8/31658/3/310516.html"

def fetch_schedule(url):
  output = []
  response = requests.get(url)
  response.raise_for_status()
  soup = BeautifulSoup(response.text, "html.parser")
  schedule_table = soup.find_all("div", class_="schedule")
  if not schedule_table:
    print("No schedule table found.")
    return []

  for table in schedule_table:
    home_team = table.find("div", class_="home_team").get_text(strip=True)
    away_team = table.find("div", class_="away_team").get_text(strip=True)
    result = table.find("span", class_="schedule-points")
    result_text = result.get_text(strip=True) if result else None
    result_url = table.find("div", class_="result-cont").find("a")["href"] if table.find("div", class_="result-cont").find("a") else None
    date_div = table.find("div", class_="team_sorsolas_date")
    date = date_div.get_text(strip=True) if date_div else None
    arena_div = table.find("div", class_="team_sorsolas_arena")
    arena = arena_div.get_text(strip=True) if arena_div else None

    # Convert to proper UTF-8 if needed
    def fix_encoding(text):
      if text is None:
        return None
      try:
        return text.encode('latin1').decode('utf-8')
      except Exception:
        return text

    home_team = fix_encoding(home_team)
    away_team = fix_encoding(away_team)
    result_text = fix_encoding(result_text)
    date = fix_encoding(date)
    arena = fix_encoding(arena)

    output.append({
      "home_team": home_team,
      "away_team": away_team,
      "result": result_text,
      "date": date,
      "arena": arena,
      "result_url": result_url
    })

  return output

if __name__ == "__main__":
  schedule = fetch_schedule(URL)
  print(schedule)

  with open("./public/data.json", "w", encoding="utf-8") as f:
    json.dump(schedule, f, ensure_ascii=False, indent=2)
