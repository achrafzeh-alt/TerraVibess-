// DATA: Hadchi bhal li gha i-ji men Database
const voyages = [
    {
        id: 1,
        title: "Trésors Turquie",
        price: "7,500",
        location: "Istanbul, Turquie",
        img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        duration: "8 Jours",
        itinerary: "Jour 1: Arrivée à Istanbul. Jour 2: Palais Topkapi. Jour 3: Croisière Bosphore..."
    },
    {
        id: 2,
        title: "Désert Marocain",
        price: "1,500",
        location: "Merzouga, Maroc",
        img: "city/merzoga.jpg",
        duration: "3 Jours",
        itinerary: "Jour 1: Départ de Marrakech, Ait Ben Haddou. Jour 2: Merzouga et dromadaires. Jour 3: Retour."
    },
    {
        id: 3,
        title: "Paradis Balinais",
        price: "15,900",
        location: "Ubud, Indonésie",
        img: "city/ubud.avif",
        duration: "12 Jours",
        itinerary: "Jour 1-3: Détente à Ubud. Jour 4: Forêt des singes. Jour 5-8: Plages de Nusa Dua."
    },
    {
        id: 4,
        title: "Cités Bleues",
        price: "2,200",
        location: "Chefchaouen, Maroc",
        img: "city/chefchawen.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Tanger. Jour 2: Chefchaouen la bleue. Jour 3: Akchour. Jour 4: Retour."
    },
    {
        id: 5,
        title: "Lumières Paris",
        price: "4,200",
        location: "Paris, France",
        img: "city/paris.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Paris. Jour 2: Louvre et Tour Eiffel. Jour 3: Montmartre. Jour 4: Retour."
    },
    {
        id: 6,
        title: "Néon Tokyo",
        price: "8,500",
        location: "Tokyo, Japon",
        img: "city/tokyo.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Tokyo. Jour 2: Shibuya et Shinjuku. Jour 3: Temple Senso-ji. Jour 4: Retour."
    },
    {
        id: 7,
        title: "Grosse Pomme",
        price: "7,800",
        location: "New York, USA",
        img: "city/nyy.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à New York. Jour 2: Times Square et Central Park. Jour 3: Statue de la Liberté. Jour 4: Retour."
    },
    {
        id: 8,
        title: "Ville Rouge",
        price: "2,800",
        location: "Marrakech, Maroc",
        img: "city/kech.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Marrakech. Jour 2: Jemaa el-Fna. Jour 3: Jardins Majorelle. Jour 4: Retour."
    },
    {
        id: 9,
        title: "Pharaons Égypte",
        price: "3,500",
        location: "Le Caire, Égypte",
        img: "city/miser.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée au Caire. Jour 2: Pyramides de Gizeh. Jour 3: Musée égyptien. Jour 4: Retour."
    },
    {
        id: 10,
        title: "Cap Espoir",
        price: "4,200",
        location: "Cape Town, Afrique du Sud",
        img: "city/janob_ifr9ia.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Cape Town. Jour 2: Table Mountain. Jour 3: Route des vins. Jour 4: Retour."
    },
    {
        id: 11,
        title: "Safari Kenya",
        price: "3,800",
        location: "Nairobi, Kenya",
        img: "city/kenya.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Nairobi. Jour 2: Réserve national. Jour 3: Safari Masai Mara. Jour 4: Retour."
    },
    {
        id: 12,
        title: "Rome Éternelle",
        price: "5,200",
        location: "Roma, Italie",
        img: "city/roma.jpg",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Rome. Jour 2: Colisée et Forum. Jour 3: Vatican. Jour 4: Retour."
    },
    {
        id: 13,
        title: "Londres Royale",
        price: "4,800",
        location: "London, UK",
        img: "city/london.jpg",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Londres. Jour 2: Big Ben et Tower Bridge. Jour 3: British Museum. Jour 4: Retour."
    },
    {
        id: 14,
        title: "Dubaï Luxe",
        price: "6,500",
        location: "Dubai, UAE",
        img: "city/dubai.jpg",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Dubaï. Jour 2: Burj Khalifa. Jour 3: Safari désert. Jour 4: Retour."
    },
    {
        id: 15,
        title: "Rio Carnaval",
        price: "5,900",
        location: "Rio de Janeiro, Brésil",
        img: "city/rio.jpg",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Rio. Jour 2: Corcovado. Jour 3: Plages de Copacabana. Jour 4: Retour."
    },
    {
        id: 16,
        title: "Sydney Harbour",
        price: "7,200",
        location: "Sydney, Australie",
        img: "city/sydney.avif",
        duration: "4 Jours",
        itinerary: "Jour 1: Arrivée à Sydney. Jour 2: Opéra et Harbour Bridge. Jour 3: Bondi Beach. Jour 4: Retour."
    }
];

// City image mapping for better visuals
const cityImageMap = {
    "Paris": "city/paris.avif",
    "Tokyo": "city/tokyo.avif",
    "Barcelona": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=500&q=80",
    "Roma": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
    "London": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
    "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
    "Dubai": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
    "Sydney": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
    "Bali": "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=500&q=80",
    "Bangkok": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
    "Rio de Janeiro": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
    "Istanbul": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
    "Marrakech": "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=500&q=80",
    "Chefchaouen": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80",
    "Le Caire": "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=500&q=80",
    "Madrid": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
    "Amsterdam": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
    "Berlin": "https://images.unsplash.com/photo-1524894684919-ab3a1b4e4b5e?auto=format&fit=crop&w=500&q=80",
    "Kyoto": "https://images.unsplash.com/photo-1522383507331-ef15150bafff?auto=format&fit=crop&w=500&q=80",
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
        "Oman": ["Muscat"]
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

// Function to generate descriptive titles (2-3 words)
function getDescriptiveTitle(city) {
    const titleMap = {
        "Paris": "Lumières Paris",
        "Tokyo": "Néon Tokyo",
        "London": "Londres Royale",
        "New York": "Grosse Pomme",
        "Dubai": "Dubaï Luxe",
        "Sydney": "Sydney Harbour",
        "Bali": "Paradis Balinais",
        "Bangkok": "Cité Angkor",
        "Rio de Janeiro": "Rio Carnaval",
        "Istanbul": "Trésors Turquie",
        "Marrakech": "Ville Rouge",
        "Chefchaouen": "Cités Bleues",
        "Le Caire": "Pharaons Égypte",
        "Madrid": "Cœur Espagnol",
        "Amsterdam": "Canaux Hollandais",
        "Berlin": "Mur Histoire",
        "Kyoto": "Temples Japon",
        "Singapour": "Cité Lion",
        "Hanoï": "Perle Asie",
        "Katmandou": "Himalaya Vue",
        "Buenos Aires": "Tango Argentin",
        "Mexico-city": "Aztecs Trésors",
        "Toronto": "Ville Multiculture",
        "Vancouver": "Nature Canada",
        "Cape Town": "Cap Espoir",
        "Nairobi": "Safari Kenya",
        "Barcelona": "Gaudi Ville",
        "Roma": "Rome Éternelle",
        "Venise": "Ville Amour",
        "Milan": "Mode Italienne",
        "Florence": "Renaissance Art",
        "Naples": "Pizza Vésuve",
        "Manchester": "Industriel Charme",
        "Liverpool": "Beatles Ville",
        "Edinburgh": "Château Écosse",
        "Munich": "Bière Bavaroise",
        "Hambourg": "Port Allemagne",
        "Cologne": "Cathédrale Ville",
        "Francfort": "Finance Europe",
        "Zurich": "Lac Suisse",
        "Genève": "Diplomatie Ville",
        "Vienne": "Musique Classique",
        "Salzbourg": "Mozart Naissance",
        "Lisbonne": "Découverte Portugal",
        "Porto": "Vin Doux",
        "Athènes": "Dieux Olympiens",
        "Santorin": "Île Blanche",
        "Mykonos": "Fête Nuit",
        "Stockholm": "Viking Héritage",
        "Oslo": "Fjords Norvège",
        "Copenhague": "Conte Fée",
        "Varsovie": "Résilience Pologne",
        "Prague": "Pont Or",
        "Budapest": "Thermes Hongrie",
        "Bucarest": "Paris Balkans",
        "Zagreb": "Cœur Croatie",
        "Seoul": "K-Pop Capitale",
        "Busan": "Port Corée",
        "Pékin": "Cité Interdite",
        "Shanghai": "Futur Ville",
        "Delhi": "Taj Mahal",
        "Mumbai": "Bollywood Capitale",
        "Agra": "Amour Éternel",
        "Los Angeles": "Rêve Américain",
        "Chicago": "Ville Vent",
        "Houston": "Espace Capitale",
        "Phoenix": "Soleil Désert",
        "Las Vegas": "Jeu Luxe",
        "Miami": "Plage Soleil",
        "San Francisco": "Pont Golden",
        "Boston": "Histoire Américaine",
        "Montréal": "French Canada",
        "Calgary": "Rodeau Rockies",
        "Quebec": "Vieux Québec",
        "Cancun": "Paradis Mexicain",
        "São Paulo": "Mégapole Brésil",
        "Salvador": "Culture Afro",
        "Manaus": "Forêt Amazonie",
        "Brasilia": "Capitale Moderne",
        "Mendoza": "Vin Argentin",
        "Bariloche": "Montagnes Patagonie",
        "Santiago": "Andes Vue",
        "Lima": "Incas Trésors",
        "Cusco": "Cité Inca",
        "Bogota": "Colombie Café",
        "Cartagena": "Pirate Ville",
        "Medellín": "Transformation Ville",
        "Quito": "Équateur Cœur",
        "La Paz": "Altitude Ville",
        "Montevideo": "Platte Uruguay",
        "Caracas": "Pétrole Venezuela",
        "Guatemala City": "Mayas Mystères",
        "San José": "Nature Costa",
        "Panama City": "Canal Miracle",
        "La Havane": "Cuba Révolution",
        "Saint-Domingue": "Caraïbes Histoire",
        "Kingston": "Reggae Capitale",
        "Nassau": "Paradis Bahamas",
        "Auckland": "Sail City",
        "Wellington": "Wind Wellington",
        "Christchurch": "Jardin Ville",
        "Queenstown": "Aventure Extrême",
        "Nadi": "Fidji Paradis",
        "Suva": "Pacific Hub",
        "Apia": "Samoa Culture",
        "Tahiti": "Polynésie Rêve",
        "Bora Bora": "Lagon Bleu",
        "Port Vila": "Vanuatu Nature",
        "Nuku'alofa": "Tonga Royauté",
        "Koror": "Palau Plongée",
        "Casablanca": "Ville Blanche",
        "Fès": "Médina Ancienne",
        "Tanger": "Port International",
        "Agadir": "Plage Maroc",
        "Essaouira": "Vent Ville",
        "Hurghada": "Mer Rouge",
        "Giza": "Pyramides Vue",
        "Louxor": "Temple Ancien",
        "Assouan": "Nil Voyage",
        "Alexandrie": "Bibliothèque Ancienne",
        "Mombasa": "Plage Kenya",
        "Kisumu": "Lac Victoria",
        "Nakuru": "Flamants Roses",
        "Johannesburg": "Or Ville",
        "Durban": "Surf Paradis",
        "Pretoria": "Capitale Admin",
        "Dar es Salaam": "Port Tanzanie",
        "Zanzibar": "Épice Île",
        "Arusha": "Safari Base",
        "Gaborone": "Botswana Moderne",
        "Kasane": "Safari Botswana",
        "Kampala": "Lac Victoria",
        "Entebbe": "Aéroport Ville",
        "Dakar": "Sénégal Capitale",
        "Saint-Louis": "Colonial Charme",
        "Lagos": "Nigeria Géant",
        "Abuja": "Capitale Moderne",
        "Lusaka": "Zambie Cœur",
        "Livingstone": "Chutes Victoria",
        "Harare": "Zimbabwe Capitale",
        "Victoria Falls": "Merveille Nature",
        "Antananarivo": "Madagascar Capitale",
        "Nosy Be": "Île Parfum",
        "Lyon": "Gastronomie Ville",
        "Marseille": "Port Méditerranée",
        "Nice": "Côte Azur",
        "Toulouse": "Aérospatiale Ville",
        "Bordeaux": "Vin Région",
        "Strasbourg": "Europe Capitale",
        "Cannes": "Festival Ville",
        "Séville": "Flamenco Cœur",
        "Valence": "Orange Arbres",
        "Malaga": "Andalousie Soleil",
        "Bilbao": "Guggenheim Art",
        "Venise": "Canaux Romance",
        "Amalfi": "Côte Amalfitaine",
        "Liverpool": "Beatles Histoire",
        "Oxford": "Université Ville",
        "Innsbruck": "Alpes Autriche",
        "Rotterdam": "Port Moderne",
        "Utrecht": "Canaux Hollandais",
        "Bruxelles": "Europe Capitale",
        "Anvers": "Diamants Ville",
        "Bruges": "Moyen Âge",
        "Algarve": "Plage Portugal",
        "Crete": "Mythes Légendes",
        "Gothenburg": "Suède Port",
        "Bergen": "Norvège Port",
        "Tromsø": "Aurore Boréale",
        "Aarhus": "Danemark Culture",
        "Cracovie": "Pologne Histoire",
        "Brno": "République Tchèque",
        "Debrecen": "Hongrie Est",
        "Brasov": "Roumanie Médiévale",
        "Dubrovnik": "Croatie Perle",
        "Split": "Croatie Côtière",
        "Phuket": "Thaïlande Paradis",
        "Chiang Mai": "Temples Nord",
        "Pattaya": "Plage Vie Nuit",
        "Krabi": "Calanques Thaïlande",
        "Osaka": "Cuisine Japon",
        "Hiroshima": "Paix Mémoire",
        "Nara": "Cerfs Ville",
        "Jakarta": "Indonésie Capitale",
        "Lombok": "Île Sereine",
        "Java": "Temples Anciens",
        "Abu Dhabi": "Pétrole Luxe",
        "Sharjah": "Culture Émirats",
        "Kuala Lumpur": "Malaisie Moderne",
        "Penang": "Cuisine Fusion",
        "Kuching": "Borneo Culture",
        "Hô Chi Minh-Ville": "Vietnam Histoire",
        "Da Nang": "Plage Vietnam",
        "Hoi An": "Ancienne Ville",
        "Phnom Penh": "Cambodge Capitale",
        "Siem Reap": "Angkor Wat",
        "Battambang": "Campagne Cambodge",
        "Vientiane": "Laos Douce",
        "Luang Prabang": "UNESCO Laos",
        "Rangoun": "Myanmar Ancien",
        "Mandalay": "Myanmar Culture",
        "Bagan": "Temples Myriades",
        "Manille": "Philippines Capitale",
        "Cebu": "Plage Philippines",
        "Boracay": "Plage Blanche",
        "Jeju": "Île Corée",
        "Xi'an": "Armée Terre",
        "Guilin": "Paysage Chine",
        "Jaipur": "Inde Rose",
        "Pokhara": "Népal Lac",
        "Colombo": "Sri Lanka Capitale",
        "Kandy": "Ceylan Thé",
        "Galle": "Fort Colonial",
        "Karachi": "Pakistan Port",
        "Islamabad": "Pakistan Capitale",
        "Lahore": "Culture Pakistan",
        "Dhaka": "Bangladesh Capitale",
        "Chittagong": "Port Bangladesh",
        "Ankara": "Turquie Capitale",
        "Izmir": "Port Égée",
        "Antalya": "Riviera Turque",
        "Cappadoce": "Ballons Volcan",
        "Jérusalem": "Sainte Ville",
        "Tel Aviv": "Israël Moderne",
        "Eilat": "Mer Rouge Israël",
        "Amman": "Jordanie Capitale",
        "Petra": "Merveuille Rose",
        "Beyrouth": "Liban Paris",
        "Tripoli": "Liban Port",
        "Riyad": "Arabie Capitale",
        "Jeddah": "Port Mecque",
        "Doha": "Qatar Moderne",
        "Muscat": "Oman Tradition"
    };
    
    return titleMap[city] || `Découverte ${city}`;
}

// Function to get authentic city-specific images
function getCityImage(city) {
    const imageMap = {
        // MAROC - Real Moroccan cities
        "Marrakech": "city/kech.avif",
        "Casablanca": "city/casa.avif",
        "Chefchaouen": "city/chefchawen.avif",
        "Merzouga": "city/merzoga.jpg",
        "Fès": "city/fes.avif",
        "Tanger": "city/tangier.avif",
        "Agadir": "city/agadir.avif",
        "Essaouira": "city/swera.avif",
        
        // EGYPT - Real Egyptian landmarks
        "Le Caire": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
        "Hurghada": "https://images.unsplash.com/photo-1575469236003-8e1e6d6b24b1?auto=format&fit=crop&w=500&q=80",
        "Giza": "https://images.unsplash.com/photo-1565958011703-44f2529febf?auto=format&fit=crop&w=500&q=80",
        "Louxor": "https://images.unsplash.com/photo-1571017264390-0b6e3b8d8f3c?auto=format&fit=crop&w=500&q=80",
        "Assouan": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
        "Alexandrie": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
        
        // KENYA - Real Kenyan locations
        "Nairobi": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Mombasa": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
        "Kisumu": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Nakuru": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // SOUTH AFRICA - Real South African cities
        "Cape Town": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=80",
        "Johannesburg": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
        "Durban": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
        "Pretoria": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=500&q=80",
        
        // FRANCE - Real French cities
        "Paris": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        "Lyon": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        "Marseille": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        "Nice": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        "Toulouse": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        "Bordeaux": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        "Strasbourg": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        "Cannes": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80",
        
        // SPAIN - Real Spanish cities
        "Barcelona": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=500&q=80",
        "Madrid": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        "Séville": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        "Valence": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        "Malaga": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        "Bilbao": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        
        // ITALY - Real Italian cities
        "Roma": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
        "Venise": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
        "Milan": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
        "Florence": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
        "Naples": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
        "Amalfi": "https://images.unsplash.com/photo-1552832230-636394def6e7?auto=format&fit=crop&w=500&q=80",
        
        // UK - Real British cities
        "London": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        "Manchester": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        "Liverpool": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        "Edinburgh": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        "Oxford": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        
        // GERMANY - Real German cities
        "Berlin": "https://images.unsplash.com/photo-1524894684919-ab3a1b4e4b5e?auto=format&fit=crop&w=500&q=80",
        "Munich": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        "Hambourg": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        "Cologne": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        "Francfort": "https://images.unsplash.com/photo-1594947812003-bdffc5ee1cee?auto=format&fit=crop&w=500&q=80",
        
        // NETHERLANDS - Real Dutch cities
        "Amsterdam": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Rotterdam": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Utrecht": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // BELGIUM - Real Belgian cities
        "Bruxelles": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Anvers": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Bruges": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // SWITZERLAND - Real Swiss cities
        "Zurich": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Genève": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Berne": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Interlaken": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // AUSTRIA - Real Austrian cities
        "Vienne": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Salzbourg": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Innsbruck": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // PORTUGAL - Real Portuguese cities
        "Lisbonne": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Porto": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Algarve": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // GREECE - Real Greek locations
        "Athènes": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Santorin": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Mykonos": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Crete": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // SWEDEN - Real Swedish cities
        "Stockholm": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Gothenburg": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // NORWAY - Real Norwegian cities
        "Oslo": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Bergen": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Tromsø": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // DENMARK - Real Danish cities
        "Copenhague": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Aarhus": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // POLAND - Real Polish cities
        "Varsovie": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Cracovie": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // CZECH REPUBLIC - Real Czech cities
        "Prague": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Brno": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // HUNGARY - Real Hungarian cities
        "Budapest": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Debrecen": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // ROMANIA - Real Romanian cities
        "Bucarest": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Brasov": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // CROATIA - Real Croatian cities
        "Zagreb": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Dubrovnik": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        "Split": "https://images.unsplash.com/photo-1509521224c5-455b6a0296e6?auto=format&fit=crop&w=500&q=80",
        
        // THAILAND - Real Thai locations
        "Bangkok": "https://images.unsplash.com/photo-1509281363299-74dd36731eb7?auto=format&fit=crop&w=500&q=80",
        "Phuket": "https://images.unsplash.com/photo-1509281363299-74dd36731eb7?auto=format&fit=crop&w=500&q=80",
        "Chiang Mai": "https://images.unsplash.com/photo-1509281363299-74dd36731eb7?auto=format&fit=crop&w=500&q=80",
        "Pattaya": "https://images.unsplash.com/photo-1509281363299-74dd36731eb7?auto=format&fit=crop&w=500&q=80",
        "Krabi": "https://images.unsplash.com/photo-1509281363299-74dd36731eb7?auto=format&fit=crop&w=500&q=80",
        
        // JAPAN - Real Japanese cities
        "Tokyo": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
        "Kyoto": "https://images.unsplash.com/photo-1522383507331-ef15150bafff?auto=format&fit=crop&w=500&q=80",
        "Osaka": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
        "Hiroshima": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
        "Nara": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
        
        // INDONESIA - Real Indonesian locations
        "Bali": "https://images.unsplash.com/photo-1537953775284-5e977c9b7dab?auto=format&fit=crop&w=500&q=80",
        "Jakarta": "https://images.unsplash.com/photo-1537953775284-5e977c9b7dab?auto=format&fit=crop&w=500&q=80",
        "Ubud": "https://images.unsplash.com/photo-1537953775284-5e977c9b7dab?auto=format&fit=crop&w=500&q=80",
        "Lombok": "https://images.unsplash.com/photo-1537953775284-5e977c9b7dab?auto=format&fit=crop&w=500&q=80",
        "Java": "https://images.unsplash.com/photo-1537953775284-5e977c9b7dab?auto=format&fit=crop&w=500&q=80",
        
        // UAE - Real Emirati cities
        "Dubai": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Abu Dhabi": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Sharjah": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // SINGAPORE - Real Singapore
        "Singapour": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // MALAYSIA - Real Malaysian cities
        "Kuala Lumpur": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Penang": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Kuching": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // VIETNAM - Real Vietnamese cities
        "Hanoï": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Hô Chi Minh-Ville": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Da Nang": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Hoi An": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // CAMBODIA - Real Cambodian locations
        "Phnom Penh": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Siem Reap": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Battambang": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // LAOS - Real Laotian cities
        "Vientiane": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Luang Prabang": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // MYANMAR - Real Myanmar cities
        "Rangoun": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Mandalay": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Bagan": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // PHILIPPINES - Real Philippine locations
        "Manille": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Cebu": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Boracay": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // SOUTH KOREA - Real Korean cities
        "Séoul": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
        "Busan": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
        "Jeju": "https://images.unsplash.com/photo-1540959375944-7049f642e9f1?auto=format&fit=crop&w=500&q=80",
        
        // CHINA - Real Chinese cities
        "Pékin": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Shanghai": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Xi'an": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Guilin": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // INDIA - Real Indian cities
        "Delhi": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Mumbai": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Agra": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        "Jaipur": "https://images.unsplash.com/photo-1512453509338-9e75b8f26324?auto=format&fit=crop&w=500&q=80",
        
        // NEPAL - Real Nepalese cities
        "Katmandou": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        "Pokhara": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        
        // SRI LANKA - Real Sri Lankan cities
        "Colombo": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        "Kandy": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        "Galle": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        
        // PAKISTAN - Real Pakistani cities
        "Karachi": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        "Islamabad": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        "Lahore": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        
        // BANGLADESH - Real Bangladeshi cities
        "Dhaka": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        "Chittagong": "https://images.unsplash.com/photo-1585471409516-e44459b4b37d?auto=format&fit=crop&w=500&q=80",
        
        // TURKEY - Real Turkish cities
        "Istanbul": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Ankara": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Izmir": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Antalya": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Cappadoce": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        
        // ISRAEL - Real Israeli cities
        "Jérusalem": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Tel Aviv": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Eilat": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        
        // JORDAN - Real Jordanian cities
        "Amman": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Petra": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        
        // LEBANON - Real Lebanese cities
        "Beyrouth": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Tripoli": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        
        // SAUDI ARABIA - Real Saudi cities
        "Riyad": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        "Jeddah": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        
        // QATAR - Real Qatari cities
        "Doha": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        
        // OMAN - Real Omani cities
        "Muscat": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=500&q=80",
        
        // USA - Real American cities
        "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "Los Angeles": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "Chicago": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "Houston": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "Phoenix": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "Las Vegas": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "Miami": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "San Francisco": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        "Boston": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=500&q=80",
        
        // CANADA - Real Canadian cities
        "Toronto": "https://images.unsplash.com/photo-1535016120754-fd45c1d54a39?auto=format&fit=crop&w=500&q=80",
        "Vancouver": "https://images.unsplash.com/photo-1489749798305-4fea3ba63d60?auto=format&fit=crop&w=500&q=80",
        "Montréal": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        "Calgary": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        "Quebec": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=500&q=80",
        
        // MEXICO - Real Mexican cities
        "Mexico-city": "https://images.unsplash.com/photo-1585519923979-76cc05a01a83?auto=format&fit=crop&w=500&q=80",
        "Cancun": "https://images.unsplash.com/photo-1585519923979-76cc05a01a83?auto=format&fit=crop&w=500&q=80",
        "Playa del Carmen": "https://images.unsplash.com/photo-1585519923979-76cc05a01a83?auto=format&fit=crop&w=500&q=80",
        "Riviera Maya": "https://images.unsplash.com/photo-1585519923979-76cc05a01a83?auto=format&fit=crop&w=500&q=80",
        "Monterrey": "https://images.unsplash.com/photo-1585519923979-76cc05a01a83?auto=format&fit=crop&w=500&q=80",
        
        // BRAZIL - Real Brazilian cities
        "Rio de Janeiro": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "São Paulo": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Salvador": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Manaus": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Brasilia": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // ARGENTINA - Real Argentine cities
        "Buenos Aires": "https://images.unsplash.com/photo-1565517676707-611f3447d3e2?auto=format&fit=crop&w=500&q=80",
        "Mendoza": "https://images.unsplash.com/photo-1565517676707-611f3447d3e2?auto=format&fit=crop&w=500&q=80",
        "Bariloche": "https://images.unsplash.com/photo-1565517676707-611f3447d3e2?auto=format&fit=crop&w=500&q=80",
        
        // CHILE - Real Chilean cities
        "Santiago": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Valparaiso": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Atacama": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // PERU - Real Peruvian cities
        "Lima": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Cusco": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Machu Picchu": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // COLOMBIA - Real Colombian cities
        "Bogota": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Cartagena": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Medellín": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // ECUADOR - Real Ecuadorian cities
        "Quito": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Galápagos": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // BOLIVIA - Real Bolivian cities
        "La Paz": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Santa Cruz": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // URUGUAY - Real Uruguayan cities
        "Montevideo": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Punta del Este": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // VENEZUELA - Real Venezuelan cities
        "Caracas": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Isla de Margarita": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // GUATEMALA - Real Guatemalan cities
        "Guatemala City": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Antigua": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // COSTA RICA - Real Costa Rican cities
        "San José": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Liberia": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Puerto Limon": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // PANAMA - Real Panamanian cities
        "Panama City": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Bocas del Toro": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // CUBA - Real Cuban cities
        "La Havane": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Varadero": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // DOMINICAN REPUBLIC - Real Dominican cities
        "Saint-Domingue": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Punta Cana": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // JAMAICA - Real Jamaican cities
        "Kingston": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        "Montego Bay": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // BAHAMAS - Real Bahamian cities
        "Nassau": "https://images.unsplash.com/photo-1483729558449-99daa71cb63f?auto=format&fit=crop&w=500&q=80",
        
        // AUSTRALIA - Real Australian cities
        "Sydney": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Melbourne": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Brisbane": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Perth": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Cairns": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // NEW ZEALAND - Real New Zealand cities
        "Auckland": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Wellington": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Christchurch": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Queenstown": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // FIJI - Real Fijian cities
        "Nadi": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Suva": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // SAMOA - Real Samoan cities
        "Apia": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // FRENCH POLYNESIA - Real French Polynesian locations
        "Tahiti": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        "Bora Bora": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // VANUATU - Real Vanuatuan cities
        "Port Vila": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // TONGA - Real Tongan cities
        "Nuku'alofa": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // PALAU - Real Palauan cities
        "Koror": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=80",
        
        // TANZANIA - Real Tanzanian cities
        "Dar es Salaam": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Zanzibar": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Arusha": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // BOTSWANA - Real Botswanan cities
        "Gaborone": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Kasane": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // UGANDA - Real Ugandan cities
        "Kampala": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Entebbe": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // SENEGAL - Real Senegalese cities
        "Dakar": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Saint-Louis": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // NIGERIA - Real Nigerian cities
        "Lagos": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Abuja": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // ZAMBIA - Real Zambian cities
        "Lusaka": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Livingstone": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // ZIMBABWE - Real Zimbabwean cities
        "Harare": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Victoria Falls": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        
        // MADAGASCAR - Real Malagasy cities
        "Antananarivo": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80",
        "Nosy Be": "https://images.unsplash.com/photo-1613376923052-5b7b0fc679c2?auto=format&fit=crop&w=500&q=80"
    };
    
    return imageMap[city] || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80";
}

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
                    title: getDescriptiveTitle(city),
                    price: randomPrice.toString(),
                    location: `${city}, ${country}`,
                    img: getCityImage(city),
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
    
    // Auto-filter when continent is selected
    filterVoyages();
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
    
    // Auto-filter when country is selected
    filterVoyages();
}

// Auto-filter when city is selected
function updateCityFilter() {
    filterVoyages();
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
        <button onclick="alert('Demande envoyée ! Nous vous contacterons bientôt.')" class="btn-view">RÉSERVER MAINTENANT</button>
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
