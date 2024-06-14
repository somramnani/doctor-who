async function fetchData() {
  try {
    const response = await fetch("./data/characters.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function displayRandomData() {
  const data = await fetchData();
  if (data && data.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    const container = document.getElementById("data-container");

    console.log(randomItem.image);
    container.innerHTML = `
      <img src = ${randomItem.image} id = "characterImage">
      <p>ID: ${randomItem.id}</p>
       <a href =${randomItem.image} >Image link </a>
      <p>Name: ${randomItem.name}</p>
      <p>Origin: ${randomItem.placeOfOrigin.name}</p>
      <p>Description: ${randomItem.description}</p>
    `;
  } else {
    console.error("No data available");
  }
}
