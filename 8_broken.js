        // DATA: Hadchi bhal li gha i-ji men Database
        const voyages = [
            {
                id: 1,
                title: "Trésors de Turquie",
                price: "7,500",
                location: "Istanbul, Turquie",
                img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
                duration: "8 Jours",
                itinerary: "Jour 1: Arrivée à Istanbul. Jour 2: Palais Topkapi. Jour 3: Croisière Bosphore..."
            },
            {
                id: 2,
                title: "Désert & Oasis",
                price: "1,500",
                location: "Merzouga, Maroc",
                img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=500&q=80",
                duration: "3 Jours",
                itinerary: "Jour 1: Départ de Marrakech, Ait Ben Haddou. Jour 2: Merzouga et dromadaires. Jour 3: Retour."
            },
            {
                id: 3,
                title: "Évasion Bali",
                price: "15,900",
                location: "Ubud, Indonésie",
                img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=500&q=80",
                duration: "12 Jours",
                itinerary: "Jour 1-3: Détente à Ubud. Jour 4: Forêt des singes. Jour 5-8: Plages de Nusa Dua."
            },
            {
                id: 4,
                title: "Splendeurs du Nord",
                price: "2,200",
                location: "Chefchaouen, Maroc",
                img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80",
                duration: "4 Jours",
                itinerary: "Jour 1: Tanger. Jour 2: Chefchaouen la bleue. Jour 3: Akchour. Jour 4: Retour."
            },
            {
                id: 5,
                title: "Le musée vivant.",
                price: "4,200",
                location: "Paris, France",
                img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
                duration: "4 Jours",
                itinerary: "Jour 1: Tanger. Jour 2: Chefchaouen la bleue. Jour 3: Akchour. Jour 4: Retour."
            },
            {
                id: 6,
                title: "Le néon traditionnel.",
                price: "",
                location: "Tokyo, Japon",
                img: "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
                duration: "4 Jours",
                itinerary: "Jour 1: Tanger. Jour 2: Chefchaouen la bleue. Jour 3: Akchour. Jour 4: Retour."
            },
            {
                id: 7,
                title: "La sentinelle de liberte.",
                price: "",
                location: "New York, USA",
                img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
                duration: "4 Jours",
                itinerary: "Jour 1: Tanger. Jour 2: Chefchaouen la bleue. Jour 3: Akchour. Jour 4: Retour."
            },
            {
                id: 8,
                title: "La ville rouge",
                price: "",
                location: "Marrakech, Maroc",
                img: "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=500&q=80",
                duration: "4 Jours",
                itinerary: "Jour 1: Tanger. Jour 2: Chefchaouen la bleue. Jour 3: Akchour. Jour 4: Retour."
            },
            {
                id: 9,
                title: "",
                price: "",
                location: "Caire, Egypt",
                img: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=500&q=80",
                duration: "4 Jours",
                itinerary: "Jour 1: Tanger. Jour 2: Chefchaouen la bleue. Jour 3: Akchour. Jour 4: Retour."
            },
            {
                id: 10,
                title: "",

// City image mapping for better visuals
const cityImageMap = {
    "Paris": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
    "Tokyo": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
    "Barcelona": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=500&q=80",
    "Roma": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
    "London": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
    "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
    "Dubai": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
    "Sydney": "https://images.unsplash.com/photo-1506973404872-a4a50e48c4d5?auto=format&fit=crop&w=500&q=80",
    "Bali": "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=500&q=80",
    "Bangkok": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
    "Rio de Janeiro": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
    "Istanbul": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
    "Marrakech": "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=500&q=80",
    "Chefchaouen": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80",
    "Le Caire": "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=500&q=80",
    "Barcelona": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=500&q=80",
    "Madrid": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
    "Amsterdam": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
    "Berlin": "https://images.unsplash.com/photo-1524894684919-ab3a1b4e4b5e?auto=format&fit=crop&w=500&q=80",
    "Kyoto": "https://images.unsplash.com/photo-1522383507331-ef15150bafff?auto=format&fit=crop&w=500&q=80",
    "Bangkok": "https://images.unsplash.com/photo-1508668265-b13f8e7ffb3b2b0a4f85b7?auto=format&fit=crop&w=500&q=80",
    "Singapour": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80",
    "Hanoï": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80",
    "Katmandou": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
    "Buenos Aires": "https://images.unsplash.com/photo-1565517676707-611f3447d3e2?auto=format&fit=crop&w=500&q=80",
    "Mexico-city": "https://images.unsplash.com/photo-1585519923979-76cc05a01a83?auto=format&fit=crop&w=500&q=80",
    "Toronto": "https://images.unsplash.com/photo-1535016120754-fd45c1d54a39?auto=format&fit=crop&w=500&q=80",
    "Vancouver": "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=500&q=80",
    "Cape Town": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=80",
    "Nairobi": "https://images.unsplash.com/photo-1627819617914-94e7bdd0d710?auto=format&fit=crop&w=500&q=80"
};
        const cityImageMap = {
            "Paris": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
            "Tokyo": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
            "Barcelona": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=500&q=80",
            "Roma": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
            "London": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
            "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
            "Dubai": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
            "Sydney": "https://images.unsplash.com/photo-1506973404872-a4a50e48c4d5?auto=format&fit=crop&w=500&q=80",
            "Bali": "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=500&q=80",
            "Bangkok": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
            "Rio de Janeiro": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
            "Istanbul": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
            "Marrakech": "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=500&q=80",
            "Chefchaouen": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80",
            "Le Caire": "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=500&q=80",
            "Barcelona": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=500&q=80",
            "Madrid": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
            "Amsterdam": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
            "Berlin": "https://images.unsplash.com/photo-1524894684919-ab3a1b4e4b5e?auto=format&fit=crop&w=500&q=80",
            "Kyoto": "https://images.unsplash.com/photo-1522383507331-ef15150bafff?auto=format&fit=crop&w=500&q=80",
            "Bangkok": "https://images.unsplash.com/photo-1508668265b13f8e7ffb3b2b0a4f85b7?auto=format&fit=crop&w=500&q=80",
            "Singapour": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80",
            "Hanoï": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=500&q=80",
            "Katmandou": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
            "Buenos Aires": "https://images.unsplash.com/photo-1565517676707-611f3447d3e2?auto=format&fit=crop&w=500&q=80",
            "Mexico-city": "https://images.unsplash.com/photo-1585519923979-76cc05a01a83?auto=format&fit=crop&w=500&q=80",
            "Toronto": "https://images.unsplash.com/photo-1535016120754-fd45c1d54a39?auto=format&fit=crop&w=500&q=80",
            "Vancouver": "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=500&q=80",
            "Cape Town": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=80",
            "Nairobi": "https://images.unsplash.com/photo-1627819617914-94e7bdd0d710?auto=format&fit=crop&w=500&q=80"
        };

        // Generate voyages from destinationsData with pricing
        function generateVoyages() {
            const pricingByRegion = {
                "Afrique": { min: 1200, max: 2800 },
                "Europe": { min: 3500, max: 7500 },
                "Asie": { min: 7000, max: 18000 },
                "Amérique": { min: 5000, max: 14000 },
                "Océanie": { min: 16000, max: 28000 }
            };

            let generatedVoyages = [];
            let id = voyages.length + 1;

            Object.entries(destinationsData).forEach(([continent, countries]) => {
                const pricing = pricingByRegion[continent];
                
                Object.entries(countries).forEach(([country, cities]) => {
                    cities.forEach((city) => {
                        const randomPrice = Math.floor(Math.random() * (pricing.max - pricing.min + 1)) + pricing.min;
                        const imageUrl = cityImageMap[city] || `https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80`;
                        
                        generatedVoyages.push({
                            id: id++,
                            title: `Découvrez ${city}`,
                            price: randomPrice.toString(),
                            location: `${city}, ${country}`,
                            img: imageUrl,
                            duration: "3-7 Jours",
                            itinerary: `Jour 1: Arrivée à ${city}. Jour 2-6: Exploration des sites touristiques. Jour 7: Retour.`
                        });
                    });
                });
            });

            return generatedVoyages;
        }

        // Combine original voyages with generated ones
        const generatedVoyages = generateVoyages();
        voyages.push(...generatedVoyages);

        // FUNCTION BACH N-RENDER L-CARDS
        function renderVoyages(list) {
            const grid = document.getElementById('grid');
            grid.innerHTML = list.map(v => `
                <div class="card">
                    <img src="${v.img}" alt="${v.title}">
                    <div class="card-content">
                        <span class="card-tag">${v.location}</span>
                        <h3 class="card-title">${v.title}</h3>
                        <p class="card-price">${v.price} DH</p>
                        <div class="card-details">
                            <span><i class="far fa-clock"></i> ${v.duration}</span>
                            <span><i class="fas fa-star" style="color:#ffcc00"></i> 4.8</span>
                        </div>
                        <a href="javascript:void(0)" class="btn-view" onclick="showDetails(${v.id})">VOIR DÉTAILS</a>
                    </div>
                </div>
            `).join('');
        }

        // SEARCH FILTER - Updated for dropdowns
        function filterVoyages() {
            const continent = document.getElementById('continentSelect').value;
            const country = document.getElementById('countrySelect').value;
            const city = document.getElementById('citySelect').value;
            
            let filtered = voyages;
            
            if (city) {
                filtered = filtered.filter(v => v.location.includes(city));
            } else if (country) {
                filtered = filtered.filter(v => v.location.includes(country));
            } else if (continent) {
                // Filter by continent (based on country names)
                const continentCountries = Object.keys(destinationsData[continent] || {});
                filtered = filtered.filter(v => continentCountries.some(c => v.location.includes(c)));
            }
            
            renderVoyages(filtered.length > 0 ? filtered : voyages);
        }

        // Destination data structure
        const destinationsData = {
            "Afrique": {
                "Maroc": ["Marrakech", "Casablanca", "Chefchaouen", "Merzouga", "Fès", "Tanger", "Agadir", "Essaouira"],
                "Égypte": ["Le Caire", "Hurghada", "Giza", "Louxor", "Assouan", "Alexandrie"],
                "Kenya": ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
                "Afrique du Sud": ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
                "Tanzanie": ["Dar es Salaam", "Zanzibar", "Arusha"],
                "Botswana": ["Gaborone", "Kasane"],
                "Ouganda": ["Kampala", "Entebbe"],
                "Sénégal": ["Dakar", "Saint-Louis"],
                "Nigeria": ["Lagos", "Abuja"],
                "Zambie": ["Lusaka", "Livingstone"],
                "Zimbabwe": ["Harare", "Victoria Falls"],
                "Madagascar": ["Antananarivo", "Nosy Be"]
            },
            "Europe": {
                "France": ["Paris", "Lyon", "Marseille", "Nice", "Toulouse", "Bordeaux", "Strasbourg", "Cannes"],
                "Espagne": ["Barcelona", "Madrid", "Séville", "Valence", "Malaga", "Bilbao"],
                "Italie": ["Roma", "Venise", "Milan", "Florence", "Naples", "Amalfi"],
                "Royaume-Uni": ["London", "Manchester", "Liverpool", "Edinburgh", "Oxford"],
                "Allemagne": ["Berlin", "Munich", "Hambourg", "Cologne", "Francfort"],
                "Suisse": ["Zurich", "Genève", "Berne", "Interlaken"],
                "Autriche": ["Vienne", "Salzbourg", "Innsbruck"],
                "Pays-Bas": ["Amsterdam", "Rotterdam", "Utrecht"],
                "Belgique": ["Bruxelles", "Anvers", "Bruges"],
                "Portugal": ["Lisbonne", "Porto", "Algarve"],
                "Grèce": ["Athènes", "Santorin", "Mykonos", "Crete"],
                "Suède": ["Stockholm", "Gothenburg"],
                "Norvège": ["Oslo", "Bergen", "Tromsø"],
                "Danemark": ["Copenhague", "Aarhus"],
                "Pologne": ["Varsovie", "Cracovie"],
                "République Tchèque": ["Prague", "Brno"],
                "Hongrie": ["Budapest", "Debrecen"],
                "Roumanie": ["Bucarest", "Brasov"],
                "Croatie": ["Zagreb", "Dubrovnik", "Split"]
            },
            "Asie": {
                "Thaïlande": ["Bangkok", "Phuket", "Chiang Mai", "Pattaya", "Krabi"],
                "Japon": ["Tokyo", "Kyoto", "Osaka", "Hiroshima", "Nara"],
                "Indonésie": ["Bali", "Jakarta", "Ubud", "Lombok", "Java"],
                "Émirats Arabes": ["Dubai", "Abu Dhabi", "Sharjah"],
                "Singapour": ["Singapour"],
                "Malaisie": ["Kuala Lumpur", "Penang", "Kuching"],
                "Vietnam": ["Hanoï", "Hô Chi Minh-Ville", "Da Nang", "Hoi An"],
                "Cambodge": ["Phnom Penh", "Siem Reap", "Battambang"],
                "Laos": ["Vientiane", "Luang Prabang"],
                "Myanmar": ["Rangoun", "Mandalay", "Bagan"],
                "Philippines": ["Manille", "Cebu", "Boracay"],
                "Corée du Sud": ["Séoul", "Busan", "Jeju"],
                "Chine": ["Pékin", "Shanghai", "Xi'an", "Guilin"],
                "Inde": ["Delhi", "Mumbai", "Agra", "Jaipur"],
                "Népal": ["Katmandou", "Pokhara"],
                "Sri Lanka": ["Colombo", "Kandy", "Galle"],
                "Pakistan": ["Karachi", "Islamabad", "Lahore"],
                "Bangladesh": ["Dhaka", "Chittagong"],
                "Turquie": ["Istanbul", "Ankara", "Izmir", "Antalya", "Cappadoce"],
                "Israël": ["Jérusalem", "Tel Aviv", "Eilat"],
                "Jordanie": ["Amman", "Petra", "Mer Morte"],
                "Liban": ["Beyrouth", "Tripoli"],
                "Arabie Saoudite": ["Riyad", "Jeddah"],
                "Qatar": ["Doha"],
                "Oman": ["Muscat"],
                "Thaïlande": ["Bangkok", "Phuket"]
            },
            "Amérique": {
                "États-Unis": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Las Vegas", "Miami", "San Francisco", "Boston"],
                "Canada": ["Toronto", "Vancouver", "Montréal", "Calgary", "Quebec"],
                "Mexique": ["Mexico-city", "Cancun", "Playa del Carmen", "Riviera Maya", "Monterrey"],
                "Brésil": ["Rio de Janeiro", "São Paulo", "Salvador", "Manaus", "Brasilia"],
                "Argentine": ["Buenos Aires", "Mendoza", "Bariloche"],
                "Chili": ["Santiago", "Valparaiso", "Atacama"],
                "Pérou": ["Lima", "Cusco", "Machu Picchu"],
                "Colombie": ["Bogota", "Cartagena", "Medellín"],
                "Équateur": ["Quito", "Galápagos"],
                "Bolivie": ["La Paz", "Santa Cruz"],
                "Uruguay": ["Montevideo", "Punta del Este"],
                "Venezuela": ["Caracas", "Isla de Margarita"],
                "Guatemala": ["Guatemala City", "Antigua"],
                "Costa Rica": ["San José", "Liberia", "Puerto Limon"],
                "Panama": ["Panama City", "Bocas del Toro"],
                "Cuba": ["La Havane", "Varadero"],
                "République Dominicaine": ["Saint-Domingue", "Punta Cana"],
                "Jamaïque": ["Kingston", "Montego Bay"],
                "Bahamas": ["Nassau"]
            },
            "Océanie": {
                "Australie": ["Sydney", "Melbourne", "Brisbane", "Perth", "Cairns"],
                "Nouvelle-Zélande": ["Auckland", "Wellington", "Christchurch", "Queenstown"],
                "Fidji": ["Nadi", "Suva"],
                "Samoa": ["Apia"],
                "Polynésie Française": ["Tahiti", "Bora Bora"],
                "Vanuatu": ["Port Vila"],
                "Tonga": ["Nuku'alofa"],
                "Palau": ["Koror"]
            }
        };

        // Update countries based on selected continent
        function updateCountries() {
            const continent = document.getElementById('continentSelect').value;
            const countrySelect = document.getElementById('countrySelect');
            const citySelect = document.getElementById('citySelect');
            
            countrySelect.innerHTML = '<option value="">Pays</option>';
            citySelect.innerHTML = '<option value="">Ville</option>';
            
            if (continent === "") {
                // If no continent selected, show all countries
                populateAllCountries();
            } else {
                // Show only countries from selected continent
                if (continent && destinationsData[continent]) {
                    const countries = destinationsData[continent];
                    Object.keys(countries).sort().forEach(country => {
                        const opt = document.createElement('option');
                        opt.value = country;
                        opt.innerHTML = country;
                        countrySelect.appendChild(opt);
                    });
                }
            }
        }

        // Populate all countries from all continents
        function populateAllCountries() {
            const countrySelect = document.getElementById('countrySelect');
            countrySelect.innerHTML = '<option value="">Pays</option>';
            
            const allCountries = new Set();
            Object.values(destinationsData).forEach(continent => {
                Object.keys(continent).forEach(country => {
                    allCountries.add(country);
                });
            });
            
            Array.from(allCountries).sort().forEach(country => {
                const opt = document.createElement('option');
                opt.value = country;
                opt.innerHTML = country;
                countrySelect.appendChild(opt);
            });
        }

        // Populate all cities from all countries
        function populateAllCities() {
            const citySelect = document.getElementById('citySelect');
            citySelect.innerHTML = '<option value="">Ville</option>';
            
            const allCities = new Set();
            Object.values(destinationsData).forEach(continent => {
                Object.values(continent).forEach(cities => {
                    cities.forEach(city => {
                        allCities.add(city);
                    });
                });
            });
            
            Array.from(allCities).sort().forEach(city => {
                const opt = document.createElement('option');
                opt.value = city;
                opt.innerHTML = city;
                citySelect.appendChild(opt);
            });
        }

        // Update cities - show only cities from selected country
        function updateCities() {
            const country = document.getElementById('countrySelect').value;
            const citySelect = document.getElementById('citySelect');
            
            citySelect.innerHTML = '<option value="">Ville</option>';
            
            if (country === "") {
                // If no country selected, show all cities
                populateAllCities();
            } else {
                // Find and show cities for the selected country
                let foundCities = [];
                Object.values(destinationsData).forEach(continent => {
                    if (continent[country]) {
                        foundCities = continent[country];
                    }
                });
                
                foundCities.forEach(city => {
                    const opt = document.createElement('option');
                    opt.value = city;
                    opt.innerHTML = city;
                    citySelect.appendChild(opt);
                });
            }
        }

        // MODAL LOGIC
        function showDetails(id) {
            const v = voyages.find(item => item.id === id);
            const body = document.getElementById('modalBody');
            body.innerHTML = `
                <h2 style="color:var(--primary)">${v.title}</h2>
                <p style="margin: 10px 0; color: #666;"><strong>Durée:</strong> ${v.duration}</p>
                <hr>
                <h3 style="margin-top:20px">Programme:</h3>
                <p style="white-space: pre-line; margin-top:10px">${v.itinerary}</p>
                <button onclick="alert('Demande envoyée ! Nous vous contacterons soon.')" class="btn-view">RÉSERVER MAINTENANT</button>
            `;
            document.getElementById('itineraryModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('itineraryModal').style.display = "none";
        }

        // Init
        renderVoyages(voyages);
        
        // Initialize all countries and cities in dropdowns
        populateAllCountries();
        populateAllCities();