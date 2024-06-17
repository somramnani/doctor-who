async function fetchData() {
  try {
    const response = await fetch("./data/characters.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function handleError() {
  console.log("image cannot be loaded");
  const image = document.getElementById("characterImage");

  console.log(image);
  image.src =
    "https://yt3.googleusercontent.com/vjYIgjn-2RABqfy8tWY6RG36dCCIKu9BdynPUXo7H6B1-WR9qEp8sb_zrgGnNfuIkMFRIe4IG-w=s900-c-k-c0x00ffffff-no-rj";
}

async function displayRandomData() {
  const data = await fetchData();
  if (data && data.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    const container = document.getElementById("data-container");

    console.log(randomItem.image);
    container.innerHTML = `
      <img src = ${
        randomItem.image
      } id = "characterImage" onerror = ${handleError()}>
      <p>Name: ${randomItem.name}</p>
      <p>Origin: ${randomItem.placeOfOrigin.name}</p>
      <p>Status: ${randomItem.status}</p>
      <p>Description: ${randomItem.description}</p>
    `;
  } else {
    console.error("No data available");
  }
}
document
  .getElementById("submit-button")
  .addEventListener("click", displayRandomData);
