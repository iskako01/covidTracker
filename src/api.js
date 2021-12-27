export async function fetchCovidData() {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  return data;
}
