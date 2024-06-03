const fs = require("fs").promises;
const path = require("path");

(async () => {
  try {
    const response = await fetch(
      "https://doctor-who-api.onrender.com/api/character"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    const dataFolderPath = path.join(__dirname, "..", "data");

    await fs.mkdir(dataFolderPath, { recursive: true });

    const filePath = path.join(dataFolderPath, "characters.json");

    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    console.log("Data has been saved to", filePath);
  } catch (error) {
    console.error("Error fetching or saving data:", error);
  }
})();
