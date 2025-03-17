// Updated Event Data
const events = [
    {
        id: 1,
        name: "Kigali Jazz Festival 2025",
        date: "2025-04-10",
        location: "Kigali Convention Centre",
        category: "Music",
        description: "A three-day festival featuring renowned jazz artists from Africa and around the world.",
        image: "images/jazz festival.jpg"
    },
    {
        id: 2,
        name: "Sports Africa Investment Summit (SAIS) 2025",
        date: "2025-05-17",
        location: "Kigali Convention Centre",
        category: "Sports",
        description: "A summit bringing together investors, policymakers, sports executives, and athletes to discuss investment opportunities and growth in African sports infrastructure.",
        image: "images/Sports Africa Summit 2025.jpeg"
    },
    {
        id: 3,
        name: "Invictus Games Centre Launch",
        date: "2025-05-02",
        location: "Amahoro Stadium",
        category: "Sports",
        description: "The establishment of the Armed Forces Invictus Centre, dedicated to supporting wounded service members through adaptive sports.",
        image: "images/Invictus Game Centre.jpg"
    },
    {
        id: 4,
        name: "Africa Gaming Expo Kigali 2025",
        date: "2025-06-25",
        location: "FunkeyMonkey Arcade, Kigali",
        category: "Gaming",
        description: "A three-day event bringing together stakeholders from the gaming industry across Africa, featuring exhibitions, panel discussions, and networking opportunities.",
        image: "images/Funky-Monkey-Arcade.webp"
    },
    {
        id: 5,
        name: "Kigali Games Week 2025",
        date: "2025-04-2",
        location: "BK Arena",
        category: "Gaming",
        description: "An annual trade fair for video games, featuring conferences, workshops, indie game showcases, esports competitions, and networking events.",
        image: "images/bkarena.jpg"
    },
    {
        id: 6,
        name: "Solar & Storage Live Africa 2025",
        date: "2025-03-25",
        location: "Kigali Convention Centre",
        category: "Business",
        description: "An exhibition and conference focusing on solar energy and storage solutions in Africa.",
        image: "images/solar-and-storage-live.png"
    },
    {
        id: 7,
        name: "EV & Charge Live Africa 2025",
        date: "2025-03-31",
        location: "Kigali Convention Centre",
        category: "Business",
        description: "An event dedicated to electric vehicles and charging infrastructure in the African context.",
        image: "images/EV&CHARGE LIVE.webp"
    },
    {
        id: 8,
        name: "ChampionHer Global CyberSecurity Summit",
        date: "2025-03-21",
        location: "Norrsken House, Kigali, Rwanda",
        category: "Culture",
        description: "A summit aimed at promoting women's participation in cybersecurity across the globe.",
        image: "images/champoinher.webp"
    },
    {
        id: 9,
        name: "Advancing Medical Education in Africa Conference",
        date: "2025-03-24",
        location: "Kigali Convention Centre, Kigali, Rwanda",
        category: "Culture",
        description: "Hosted by the University of Global Health Equity, focusing on innovations and challenges in medical education across Africa.",
        image: "images/advancing meded.jpeg"
    },
    {
        id: 10,
        name: "Africa Health Agenda International Conference (AHAIC) 2025",
        date: "2025-03-30",
        location: "Kigali Convention Centre, Kigali, Rwanda",
        category: "Conferences",
        description: "A platform for health professionals and stakeholders to discuss pressing health issues and innovations in Africa.",
        image: "images/hero_HEALTHCON.png"
    },
    {
        id: 11,
        name: "Africa Seed Trade Association Congress 2025",
        date: "2025-04-10",
        location: "Kigali Marriott Hotel, Kigali, Rwanda",
        category: "Conferences",
        description: "Bringing together seed industry professionals to discuss trade, policies, and innovations in seed technology.",
        image: "images/A-Seed.png"
    },
    {
        id: 12,
        name: "THE Africa Universities Summit 2025",
        date: "2025-04-18",
        location: "Norrsken House, Kigali, Rwanda",
        category: "Conferences",
        description: "A gathering of higher education leaders to discuss sustainable growth, digital transformation, and research in African universities.",
        image: "images/Africa Ed Summit.webp"
    }
];

// Function to set form values based on URL parameters
function setFormValuesFromQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get("date");
    const selectedCategory = urlParams.get("category");

    const categorySelect = document.getElementById("eventCategory");
    if (selectedCategory && categorySelect) {
        categorySelect.value = selectedCategory;
    }

    const dateInput = document.getElementById("eventDate");
    if (selectedDate && dateInput) {
        dateInput.value = selectedDate;
    }
}

// Function to apply filters and redirect to events page with query parameters
function applyFilters(event) {
    event.preventDefault();

    const selectedDate = document.getElementById("eventDate").value;
    const selectedCategory = document.getElementById("eventCategory").value;

    const queryParams = new URLSearchParams();
    if (selectedDate) queryParams.append("date", selectedDate);
    if (selectedCategory) queryParams.append("category", selectedCategory);

    window.location.href = `events.html?${queryParams.toString()}`;
}

// Function to load and filter events based on URL parameters
function loadFilteredEvents() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get("date") || "";
    const selectedCategory = urlParams.get("category") || "";

    const filteredEvents = events.filter(event => {
        const matchesDate = selectedDate ? event.date === selectedDate : true;
        const matchesCategory = selectedCategory ? event.category === selectedCategory : true;
        return matchesDate && matchesCategory;
    });

    displayEvents(filteredEvents);
}

// Function to display events dynamically on events.html
function displayEvents(eventList) {
    const container = document.getElementById("eventsContainer");
    if (!container) return;

    container.innerHTML = "";

    if (eventList.length === 0) {
        container.innerHTML = "<p class='text-center text-muted'>No events found.</p>";
        return;
    }

    eventList.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("col-md-4", "mb-4");

        eventCard.innerHTML = `
            <div class="card shadow-sm">
                <img src="${event.image}" class="card-img-top" alt="${event.name}">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text"><strong>Date:</strong> ${event.date}</p>
                    <p class="card-text"><strong>Location:</strong> ${event.location}</p>
                    <p class="card-text">${event.description}</p>
                    <a href="event-details.html?id=${event.id}" class="btn btn-success">View Details</a>
                </div>
            </div>
        `;
        
        container.appendChild(eventCard);
    });
}

// Function to display event details on event-details.html
function displayEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get("id");

    if (!eventId) {
        document.getElementById("eventDetailsContainer").innerHTML = "<p class='text-center text-muted'>Event not found.</p>";
        return;
    }

    const event = events.find(e => e.id == eventId);

    if (!event) {
        document.getElementById("eventDetailsContainer").innerHTML = "<p class='text-center text-muted'>Event not found.</p>";
        return;
    }

    document.getElementById("eventDetailsContainer").innerHTML = `
        <div class="card">
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body">
                <h2 class="card-title">${event.name}</h2>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p><strong>Category:</strong> ${event.category}</p>
                <p>${event.description}</p>
                <a href="events.html" class="btn btn-success">Back to Events</a>
            </div>
        </div>
    `;
}

// Load events and set form values on page load
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("eventsContainer")) {
        setFormValuesFromQueryParams();
        loadFilteredEvents();
    }
    if (document.getElementById("eventDetailsContainer")) {
        displayEventDetails();
    }

    const searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            filterEventsOnPage();
        });
    }
});