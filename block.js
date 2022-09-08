const getCoinbase = (blockhash) => {
  return fetch("https://api.kaspa.org/blocks/" + blockhash)
    .then((response) => response.json())
    .then((data) => data["transactions"][0]["payload"])
}
