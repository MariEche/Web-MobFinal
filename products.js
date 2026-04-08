const apiKey = '2e4f8fe9daa23363279573e87559a603';
const lat = 40.7128;
const lon = -74.0060;
const exclude = 'minutely,hourly';

// Node.js v18+ has fetch built-in
async function getData() {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Weather Data:");
        console.log(JSON.stringify(data, null, 2)); // pretty print

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();