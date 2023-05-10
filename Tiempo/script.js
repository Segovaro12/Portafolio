const apiKey = 'YOUR_API_KEY';

// Get user's location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
}

// Show weather for user's location
function showWeather(position) {
    const lat = position.coords.latitude;
    const
