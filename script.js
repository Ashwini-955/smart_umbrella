document.addEventListener("DOMContentLoaded", () => {
    refreshData();
    addButtonAnimations();
});

function refreshData() {
    const statusText = document.getElementById("status");
    statusText.textContent = "Fetching data...";
    statusText.classList.add("loading-animation");
    
    fetch('/get-updates')
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = `📍 Location: ${data.location}`;
            document.getElementById('humidity').textContent = `💧 Humidity: ${data.humidity}%`;
            document.getElementById('temperature').textContent = `🌡 Temperature: ${data.temperature}°C`;
            document.getElementById('status').textContent = `⛱ Status: ${data.status}`;
            statusText.classList.remove("loading-animation");
            addFadeInEffect();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            statusText.textContent = "Error fetching data";
            statusText.classList.remove("loading-animation");
        });
}

function locateUmbrella() {
    const umbrellaIcon = document.createElement("div");
    umbrellaIcon.className = "umbrella-animation";
    document.body.appendChild(umbrellaIcon);
    setTimeout(() => {
        umbrellaIcon.remove();
        alert('Opening map to locate umbrella...');
    }, 2000);
}

function addFadeInEffect() {
    document.querySelectorAll(".card").forEach(card => {
        card.classList.add("fade-in-effect");
        setTimeout(() => card.classList.remove("fade-in-effect"), 1000);
    });
}

function addButtonAnimations() {
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("mouseover", () => {
            button.classList.add("btn-hover");
        });
        button.addEventListener("mouseleave", () => {
            button.classList.remove("btn-hover");
        });
    });
}
