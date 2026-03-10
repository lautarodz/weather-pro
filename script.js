// Base de datos de ciudades con datos realistas
const citiesDB = {
    'madrid': {
        name: 'Madrid, España',
        temp: 22,
        condition: 'Soleado',
        humidity: 45,
        wind: 12,
        feelsLike: 24,
        visibility: 10,
        timezone: 1,
        coords: { lat: 40.4168, lon: -3.7038 }
    },
    'buenos aires': {
        name: 'Buenos Aires, Argentina',
        temp: 18,
        condition: 'Parcialmente nublado',
        humidity: 65,
        wind: 18,
        feelsLike: 17,
        visibility: 8,
        timezone: -3,
        coords: { lat: -34.6037, lon: -58.3816 }
    },
    'nueva york': {
        name: 'Nueva York, USA',
        temp: 15,
        condition: 'Lluvia ligera',
        humidity: 78,
        wind: 22,
        feelsLike: 13,
        visibility: 6,
        timezone: -4,
        coords: { lat: 40.7128, lon: -74.0060 }
    },
    'new york': {
        name: 'New York, USA',
        temp: 15,
        condition: 'Lluvia ligera',
        humidity: 78,
        wind: 22,
        feelsLike: 13,
        visibility: 6,
        timezone: -4,
        coords: { lat: 40.7128, lon: -74.0060 }
    },
    'londres': {
        name: 'Londres, UK',
        temp: 12,
        condition: 'Nublado',
        humidity: 82,
        wind: 15,
        feelsLike: 10,
        visibility: 7,
        timezone: 1,
        coords: { lat: 51.5074, lon: -0.1278 }
    },
    'london': {
        name: 'London, UK',
        temp: 12,
        condition: 'Nublado',
        humidity: 82,
        wind: 15,
        feelsLike: 10,
        visibility: 7,
        timezone: 1,
        coords: { lat: 51.5074, lon: -0.1278 }
    },
    'tokio': {
        name: 'Tokio, Japón',
        temp: 25,
        condition: 'Despejado',
        humidity: 55,
        wind: 8,
        feelsLike: 27,
        visibility: 10,
        timezone: 9,
        coords: { lat: 35.6762, lon: 139.6503 }
    },
    'tokyo': {
        name: 'Tokyo, Japan',
        temp: 25,
        condition: 'Despejado',
        humidity: 55,
        wind: 8,
        feelsLike: 27,
        visibility: 10,
        timezone: 9,
        coords: { lat: 35.6762, lon: 139.6503 }
    },
    'sydney': {
        name: 'Sydney, Australia',
        temp: 28,
        condition: 'Soleado',
        humidity: 60,
        wind: 20,
        feelsLike: 30,
        visibility: 10,
        timezone: 10,
        coords: { lat: -33.8688, lon: 151.2093 }
    },
    'paris': {
        name: 'París, Francia',
        temp: 16,
        condition: 'Parcialmente nublado',
        humidity: 70,
        wind: 10,
        feelsLike: 15,
        visibility: 9,
        timezone: 2,
        coords: { lat: 48.8566, lon: 2.3522 }
    },
    'berlin': {
        name: 'Berlín, Alemania',
        temp: 14,
        condition: 'Nublado',
        humidity: 75,
        wind: 14,
        feelsLike: 12,
        visibility: 8,
        timezone: 2,
        coords: { lat: 52.5200, lon: 13.4050 }
    },
    'roma': {
        name: 'Roma, Italia',
        temp: 24,
        condition: 'Soleado',
        humidity: 50,
        wind: 11,
        feelsLike: 25,
        visibility: 10,
        timezone: 2,
        coords: { lat: 41.9028, lon: 12.4964 }
    },
    'rome': {
        name: 'Rome, Italy',
        temp: 24,
        condition: 'Soleado',
        humidity: 50,
        wind: 11,
        feelsLike: 25,
        visibility: 10,
        timezone: 2,
        coords: { lat: 41.9028, lon: 12.4964 }
    },
    'moscu': {
        name: 'Moscú, Rusia',
        temp: 5,
        condition: 'Nieve',
        humidity: 85,
        wind: 25,
        feelsLike: 0,
        visibility: 4,
        timezone: 3,
        coords: { lat: 55.7558, lon: 37.6173 }
    },
    'moscow': {
        name: 'Moscow, Russia',
        temp: 5,
        condition: 'Nieve',
        humidity: 85,
        wind: 25,
        feelsLike: 0,
        visibility: 4,
        timezone: 3,
        coords: { lat: 55.7558, lon: 37.6173 }
    },
    'ciudad de mexico': {
        name: 'Ciudad de México, México',
        temp: 26,
        condition: 'Despejado',
        humidity: 40,
        wind: 9,
        feelsLike: 28,
        visibility: 10,
        timezone: -6,
        coords: { lat: 19.4326, lon: -99.1332 }
    },
    'mexico city': {
        name: 'Mexico City, Mexico',
        temp: 26,
        condition: 'Despejado',
        humidity: 40,
        wind: 9,
        feelsLike: 28,
        visibility: 10,
        timezone: -6,
        coords: { lat: 19.4326, lon: -99.1332 }
    },
    'sao paulo': {
        name: 'São Paulo, Brasil',
        temp: 23,
        condition: 'Parcialmente nublado',
        humidity: 68,
        wind: 13,
        feelsLike: 25,
        visibility: 9,
        timezone: -3,
        coords: { lat: -23.5505, lon: -46.6333 }
    },
    'rio de janeiro': {
        name: 'Río de Janeiro, Brasil',
        temp: 29,
        condition: 'Soleado',
        humidity: 72,
        wind: 16,
        feelsLike: 33,
        visibility: 10,
        timezone: -3,
        coords: { lat: -22.9068, lon: -43.1729 }
    },
    'barcelona': {
        name: 'Barcelona, España',
        temp: 23,
        condition: 'Soleado',
        humidity: 58,
        wind: 14,
        feelsLike: 24,
        visibility: 10,
        timezone: 2,
        coords: { lat: 41.3851, lon: 2.1734 }
    },
    'amsterdam': {
        name: 'Ámsterdam, Países Bajos',
        temp: 13,
        condition: 'Lluvia',
        humidity: 88,
        wind: 19,
        feelsLike: 10,
        visibility: 5,
        timezone: 2,
        coords: { lat: 52.3676, lon: 4.9041 }
    },
    'dubai': {
        name: 'Dubái, UAE',
        temp: 38,
        condition: 'Soleado',
        humidity: 45,
        wind: 12,
        feelsLike: 42,
        visibility: 10,
        timezone: 4,
        coords: { lat: 25.2048, lon: 55.2708 }
    },
    'singapur': {
        name: 'Singapur',
        temp: 31,
        condition: 'Tormenta eléctrica',
        humidity: 90,
        wind: 10,
        feelsLike: 38,
        visibility: 6,
        timezone: 8,
        coords: { lat: 1.3521, lon: 103.8198 }
    },
    'singapore': {
        name: 'Singapore',
        temp: 31,
        condition: 'Tormenta eléctrica',
        humidity: 90,
        wind: 10,
        feelsLike: 38,
        visibility: 6,
        timezone: 8,
        coords: { lat: 1.3521, lon: 103.8198 }
    },
    'toronto': {
        name: 'Toronto, Canadá',
        temp: 8,
        condition: 'Nublado',
        humidity: 70,
        wind: 17,
        feelsLike: 5,
        visibility: 8,
        timezone: -4,
        coords: { lat: 43.6532, lon: -79.3832 }
    },
    'los angeles': {
        name: 'Los Ángeles, USA',
        temp: 24,
        condition: 'Soleado',
        humidity: 50,
        wind: 11,
        feelsLike: 25,
        visibility: 10,
        timezone: -7,
        coords: { lat: 34.0522, lon: -118.2437 }
    },
    'san francisco': {
        name: 'San Francisco, USA',
        temp: 17,
        condition: 'Neblina',
        humidity: 80,
        wind: 15,
        feelsLike: 15,
        visibility: 4,
        timezone: -7,
        coords: { lat: 37.7749, lon: -122.4194 }
    },
    'miami': {
        name: 'Miami, USA',
        temp: 30,
        condition: 'Parcialmente nublado',
        humidity: 75,
        wind: 14,
        feelsLike: 35,
        visibility: 9,
        timezone: -4,
        coords: { lat: 25.7617, lon: -80.1918 }
    },
    'chicago': {
        name: 'Chicago, USA',
        temp: 11,
        condition: 'Viento fuerte',
        humidity: 65,
        wind: 30,
        feelsLike: 7,
        visibility: 10,
        timezone: -5,
        coords: { lat: 41.8781, lon: -87.6298 }
    },
    'seattle': {
        name: 'Seattle, USA',
        temp: 13,
        condition: 'Llovizna',
        humidity: 85,
        wind: 12,
        feelsLike: 11,
        visibility: 6,
        timezone: -7,
        coords: { lat: 47.6062, lon: -122.3321 }
    },
    'bogota': {
        name: 'Bogotá, Colombia',
        temp: 16,
        condition: 'Lluvia',
        humidity: 80,
        wind: 9,
        feelsLike: 15,
        visibility: 7,
        timezone: -5,
        coords: { lat: 4.7110, lon: -74.0721 }
    },
    'lima': {
        name: 'Lima, Perú',
        temp: 20,
        condition: 'Nublado',
        humidity: 78,
        wind: 13,
        feelsLike: 19,
        visibility: 8,
        timezone: -5,
        coords: { lat: -12.0464, lon: -77.0428 }
    },
    'santiago': {
        name: 'Santiago, Chile',
        temp: 19,
        condition: 'Despejado',
        humidity: 45,
        wind: 10,
        feelsLike: 19,
        visibility: 10,
        timezone: -4,
        coords: { lat: -33.4489, lon: -70.6693 }
    },
    'caracas': {
        name: 'Caracas, Venezuela',
        temp: 27,
        condition: 'Parcialmente nublado',
        humidity: 70,
        wind: 8,
        feelsLike: 30,
        visibility: 9,
        timezone: -4,
        coords: { lat: 10.4806, lon: -66.9036 }
    },
    'quito': {
        name: 'Quito, Ecuador',
        temp: 15,
        condition: 'Nublado',
        humidity: 75,
        wind: 11,
        feelsLike: 14,
        visibility: 8,
        timezone: -5,
        coords: { lat: -0.1807, lon: -78.4678 }
    },
    'la paz': {
        name: 'La Paz, Bolivia',
        temp: 12,
        condition: 'Despejado',
        humidity: 40,
        wind: 15,
        feelsLike: 10,
        visibility: 10,
        timezone: -4,
        coords: { lat: -16.5000, lon: -68.1500 }
    },
    'asuncion': {
        name: 'Asunción, Paraguay',
        temp: 28,
        condition: 'Soleado',
        humidity: 60,
        wind: 12,
        feelsLike: 31,
        visibility: 10,
        timezone: -4,
        coords: { lat: -25.2637, lon: -57.5759 }
    },
    'montevideo': {
        name: 'Montevideo, Uruguay',
        temp: 17,
        condition: 'Viento fuerte',
        humidity: 72,
        wind: 28,
        feelsLike: 14,
        visibility: 9,
        timezone: -3,
        coords: { lat: -34.9011, lon: -56.1645 }
    }
};

// Iconos según condición
const weatherIcons = {
    'Soleado': '☀️',
    'Despejado': '✨',
    'Parcialmente nublado': '⛅',
    'Nublado': '☁️',
    'Lluvia': '🌧️',
    'Lluvia ligera': '🌦️',
    'Llovizna': '🌦️',
    'Tormenta eléctrica': '⛈️',
    'Nieve': '❄️',
    'Neblina': '🌫️',
    'Viento fuerte': '💨'
};

// Colores de fondo según clima
const weatherBackgrounds = {
    'Soleado': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    'Despejado': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'Parcialmente nublado': 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
    'Nublado': 'linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)',
    'Lluvia': 'linear-gradient(135deg, #373b44 0%, #4286f4 100%)',
    'Lluvia ligera': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'Llovizna': 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
    'Tormenta eléctrica': 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
    'Nieve': 'linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%)',
    'Neblina': 'linear-gradient(135deg, #3e5151 0%, #decba4 100%)',
    'Viento fuerte': 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
};

// Estado
let currentUnit = 'C';
let currentCity = '';
let searchHistory = JSON.parse(localStorage.getItem('weatherHistory')) || [];
let favorites = JSON.parse(localStorage.getItem('weatherFavorites')) || ['Madrid', 'Buenos Aires'];

// Elementos DOM
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const autocompleteList = document.getElementById('autocompleteList');
const errorMessage = document.getElementById('errorMessage');
const themeToggle = document.getElementById('themeToggle');
const unitToggle = document.getElementById('unitToggle');

// Crear partículas
function createParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}
createParticles();

// Autocomplete
cityInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    autocompleteList.innerHTML = '';
    
    if (value.length < 2) {
        autocompleteList.classList.remove('show');
        return;
    }

    const matches = Object.keys(citiesDB).filter(city => 
        city.includes(value) || 
        citiesDB[city].name.toLowerCase().includes(value)
    ).slice(0, 5);

    if (matches.length > 0) {
        matches.forEach(city => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = citiesDB[city].name;
            item.onclick = () => {
                cityInput.value = citiesDB[city].name.split(',')[0];
                autocompleteList.classList.remove('show');
                searchWeather(city);
            };
            autocompleteList.appendChild(item);
        });
        autocompleteList.classList.add('show');
    } else {
        autocompleteList.classList.remove('show');
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box')) {
        autocompleteList.classList.remove('show');
    }
});

// Buscar clima
function searchWeather(city) {
    const cityKey = city.toLowerCase().trim();
    const cityData = citiesDB[cityKey] || Object.values(citiesDB).find(c => 
        c.name.toLowerCase().includes(cityKey)
    );

    searchBtn.classList.add('loading');
    errorMessage.classList.remove('show');

    setTimeout(() => {
        if (!cityData) {
            errorMessage.classList.add('show');
            searchBtn.classList.remove('loading');
            return;
        }

        currentCity = cityData.name.split(',')[0];
        displayWeather(cityData);
        addToHistory(cityData);
        updateFavorites();
        
        document.getElementById('welcomeState').style.display = 'none';
        document.getElementById('weatherMain').classList.add('show');
        
        searchBtn.classList.remove('loading');
        cityInput.value = '';
    }, 600);

document.getElementById('weatherMain').scrollIntoView({ 
    behavior: 'smooth', 
    block: 'start' 
});
}

// Mostrar clima
function displayWeather(data) {
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const icon = weatherIcons[data.condition] || '🌡️';
    document.getElementById('weatherIcon').textContent = icon;
    document.getElementById('weatherDesc').textContent = data.condition;

    let temp = data.temp;
    let feelsLike = data.feelsLike;
    let wind = data.wind;
    
    if (currentUnit === 'F') {
        temp = Math.round(temp * 9/5 + 32);
        feelsLike = Math.round(feelsLike * 9/5 + 32);
        wind = Math.round(wind * 0.621371);
    }

    document.getElementById('temperature').innerHTML = `${temp}<sup>°${currentUnit}</sup>`;
    document.getElementById('humidity').textContent = `${data.humidity}%`;
    document.getElementById('windSpeed').textContent = `${wind} ${currentUnit === 'C' ? 'km/h' : 'mph'}`;
    document.getElementById('feelsLike').textContent = `${feelsLike}°`;
    document.getElementById('visibility').textContent = `${data.visibility} km`;

    const bg = weatherBackgrounds[data.condition] || weatherBackgrounds['Despejado'];
    if (document.body.getAttribute('data-theme') !== 'light') {
        document.body.style.background = bg;
    }

    generateHourlyForecast(data);
    generateDailyForecast(data);
}

// Generar pronóstico por horas (simulado)
function generateHourlyForecast(data) {
    const container = document.getElementById('hourlyScroll');
    container.innerHTML = '';
    
    const currentHour = new Date().getHours();
    const conditions = ['Soleado', 'Parcialmente nublado', 'Nublado', 'Lluvia ligera', 'Despejado'];
    
    for (let i = 0; i < 24; i++) {
        const hour = (currentHour + i) % 24;
        const hourStr = hour.toString().padStart(2, '0') + ':00';
        
        let tempVariation = Math.sin((hour - 6) * Math.PI / 12) * 5;
        let hourTemp = data.temp + tempVariation + (Math.random() * 2 - 1);
        
        if (currentUnit === 'F') {
            hourTemp = hourTemp * 9/5 + 32;
        }
        
        const condition = conditions[Math.floor(Math.random() * conditions.length)];
        const icon = weatherIcons[condition] || '☀️';
        
        const item = document.createElement('div');
        item.className = 'hourly-item';
        item.innerHTML = `
            <div class="hour-time">${hourStr}</div>
            <div class="hour-icon">${icon}</div>
            <div class="hour-temp">${Math.round(hourTemp)}°</div>
        `;
        container.appendChild(item);
    }
}

// Generar pronóstico de días (simulado)
function generateDailyForecast(data) {
    const container = document.getElementById('forecastGrid');
    container.innerHTML = '';
    
    const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const conditions = Object.keys(weatherIcons);
    const today = new Date().getDay();
    
    for (let i = 1; i <= 5; i++) {
        const dayIndex = (today + i) % 7;
        const dayName = days[dayIndex];
        
        const maxTemp = data.temp + Math.random() * 6 - 2;
        const minTemp = maxTemp - 8 - Math.random() * 4;
        
        let displayMax = Math.round(maxTemp);
        let displayMin = Math.round(minTemp);
        
        if (currentUnit === 'F') {
            displayMax = Math.round(displayMax * 9/5 + 32);
            displayMin = Math.round(displayMin * 9/5 + 32);
        }
        
        const condition = conditions[Math.floor(Math.random() * conditions.length)];
        const icon = weatherIcons[condition] || '☀️';
        
        const item = document.createElement('div');
        item.className = 'forecast-item';
        item.innerHTML = `
            <div class="forecast-day">${dayName}</div>
            <div class="forecast-icon">${icon}</div>
            <div class="forecast-temps">
                <span class="forecast-high">${displayMax}°</span> / 
                <span class="forecast-low">${displayMin}°</span>
            </div>
        `;
        container.appendChild(item);
    }
}

// Historial
function addToHistory(data) {
    const cityName = data.name.split(',')[0];
    searchHistory = searchHistory.filter(c => c !== cityName);
    searchHistory.unshift(cityName);
    if (searchHistory.length > 10) searchHistory.pop();
    
    localStorage.setItem('weatherHistory', JSON.stringify(searchHistory));
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById('historyList');
    container.innerHTML = '';
    
    searchHistory.forEach((city, index) => {
        const cityData = Object.values(citiesDB).find(c => c.name.includes(city));
        if (!cityData) return;
        
        const item = document.createElement('div');
        item.className = 'history-item slide-in';
        item.style.animationDelay = `${index * 0.1}s`;
        item.innerHTML = `
            <div class="history-city">
                <span>${weatherIcons[cityData.condition] || '🌡️'}</span>
                <span>${city}</span>
            </div>
            <span class="history-temp">${cityData.temp}°</span>
        `;
        item.onclick = () => searchWeather(city.toLowerCase());
        container.appendChild(item);
    });
}

function clearHistory() {
    searchHistory = [];
    localStorage.removeItem('weatherHistory');
    renderHistory();
}

// Favoritos
function updateFavorites() {
    const container = document.getElementById('favoritesList');
    container.innerHTML = '';
    
    favorites.forEach(city => {
        const cityData = Object.values(citiesDB).find(c => c.name.includes(city));
        if (!cityData) return;
        
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.onclick = (e) => {
            if (!e.target.classList.contains('fav-btn')) {
                searchWeather(city.toLowerCase());
            }
        };
        item.innerHTML = `
            <span>${city}</span>
            <button class="fav-btn active" onclick="toggleFavorite('${city}')">⭐</button>
        `;
        container.appendChild(item);
    });
}

function toggleFavorite(city) {
    const index = favorites.indexOf(city);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(city);
    }
    localStorage.setItem('weatherFavorites', JSON.stringify(favorites));
    updateFavorites();
}

// Event listeners
searchBtn.addEventListener('click', () => {
    searchWeather(cityInput.value);
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchWeather(cityInput.value);
        autocompleteList.classList.remove('show');
    }
});

// Quick cities
document.querySelectorAll('.quick-city').forEach(btn => {
    btn.addEventListener('click', () => {
        searchWeather(btn.dataset.city.toLowerCase());
    });
});

// Toggle tema
let isDark = true;
themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.body.setAttribute('data-theme', isDark ? '' : 'light');
    themeToggle.textContent = isDark ? '🌙' : '☀️';
    
    if (!isDark) {
        document.body.style.background = 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)';
    } else {
        document.body.style.background = '';
    }
});

// Toggle unidades
unitToggle.addEventListener('click', () => {
    currentUnit = currentUnit === 'C' ? 'F' : 'C';
    unitToggle.textContent = `°${currentUnit}`;
    if (currentCity) {
        const cityData = Object.values(citiesDB).find(c => c.name.includes(currentCity));
        if (cityData) displayWeather(cityData);
    }
});

// Inicializar
renderHistory();
updateFavorites();

// Buscar primera ciudad si hay historial
if (searchHistory.length > 0) {
    searchWeather(searchHistory[0].toLowerCase());
}

document.querySelector('.main-card').addEventListener('scroll', function() {
    const btn = document.getElementById('scrollTopBtn');
    if (this.scrollTop > 300) {
        btn.style.opacity = '1';
    } else {
        btn.style.opacity = '0';
    }
});