import { County } from "@/types";

export const COUNTIES_DATA: County[] = [
  // COAST REGION
  {
    id: 1,
    name: "Mombasa",
    region: "Coast",
    description: "Kenya's second-largest city and coastal hub, rich in Swahili history and white sandy beaches.",
    attractions: ["Fort Jesus", "Old Town Mombasa", "Haller Park", "Mombasa Marine National Park", "Nyali Beach", "Bamburi Beach", "Mama Ngina Waterfront", "Tusks Monument", "Bombolulu Workshops", "Pirates Beach"],
    image: "/images/counties/coast.png"
  },
  {
    id: 2,
    name: "Kwale",
    region: "Coast",
    description: "Home to the world-famous Diani Beach and enchanting marine parks.",
    attractions: ["Shimba Hills National Reserve", "Diani Beach", "Tiwi Beach", "Wasini Island", "Kisite-Mpunguti Marine Park", "Kaya Kinondo Sacred Forest", "Colobus Conservation", "Galu Beach", "Kinondo Kwale", "Shimoni Caves"],
    image: "/images/counties/coast.png"
  },
  {
    id: 3,
    name: "Kilifi",
    region: "Coast",
    description: "A blend of ancient ruins, serene creeks, and the vibrant Watamu marine life.",
    attractions: ["Watamu Beach", "Malindi Marine National Park", "Arabuko-Sokoke Forest", "Hell's Kitchen (Marafa)", "Gede Ruins", "Watamu Turtle Watch", "Bio-Ken Snake Farm", "Kilifi Creek", "Mnarani Ruins", "Vipingo Ridge"],
    image: "/images/counties/coast.png"
  },
  {
    id: 4,
    name: "Tana River",
    region: "Coast",
    description: "The lifeline of drylands, offering unique primate reserves and delta wetlands.",
    attractions: ["Tana River Primate Reserve", "Tana Delta Wetlands", "Baomo Lodge Area", "Hola Historical Site", "River Tana Canoeing", "Pokomo Cultural Villages", "Kipini Conservancy", "Tana River Mangroves", "Wenje Division Sites", "Mchelelo West Camp"],
    image: "/images/counties/coast.png"
  },
  {
    id: 5,
    name: "Lamu",
    region: "Coast",
    description: "A UNESCO World Heritage site where history lives; cars are replaced by donkeys and dhows.",
    attractions: ["Lamu Old Town", "Shela Beach", "Lamu Fort", "Takwa Ruins", "Matondoni Village", "Kiwayu Island", "Pate Island", "Faza Island", "Siyu Fort", "Manda Island"],
    image: "/images/counties/coast.png"
  },
  {
    id: 6,
    name: "Taita Taveta",
    region: "Coast",
    description: "The theater of the wild, hosting the massive Tsavo parks and World War battlefields.",
    attractions: ["Tsavo East National Park", "Tsavo West National Park", "Taita Hills Wildlife Sanctuary", "Lake Chala", "Mzima Springs", "Voi Snake Park", "Ngulia Rhino Sanctuary", "Lumo Community Sanctuary", "Shetani Lava Flow", "Aruba Dam"],
    image: "/images/counties/savannah.png"
  },

  // NORTH EASTERN
  {
    id: 7,
    name: "Garissa",
    region: "North Eastern",
    description: "Gateway to the North East, known for the rare Hirola antelope and riverine forests.",
    attractions: ["Bouralgy Giraffe Sanctuary", "Arawale National Reserve", "Tana River", "Garissa Community Giraffe Sanctuary", "Boni National Reserve", "Malka Mari National Park", "Garissa Market", "Dadaab Cultural Experience", "Rahole National Reserve", "River Tana Bridges"],
    image: "/images/counties/arid.png"
  },
  {
    id: 8,
    name: "Wajir",
    region: "North Eastern",
    description: "A vast arid landscape rooted in deep Somali culture and historic defense lines.",
    attractions: ["Wajir Museum", "Wajir Fort", "Lake Yahud", "Wagalla Massacre Site", "Orpahey Wells", "Shaletey Caves", "Wajir Livestock Market", "Camel Safaris", "Malka Mari", "Bute Hills"],
    image: "/images/counties/arid.png"
  },
  {
    id: 9,
    name: "Mandera",
    region: "North Eastern",
    description: "The frontier of Kenya, offering rugged hills and unique cross-border culture.",
    attractions: ["Malka Mari National Park", "River Daua", "Marehan Hills", "Mandera Triangle Point", "Rhamu Dimtu", "Takaba Hills", "Banisa Rocks", "Cultural Markets", "Chandu Hills", "Malkamri Fort"],
    image: "/images/counties/arid.png"
  },

  // EASTERN
  {
    id: 10,
    name: "Marsabit",
    region: "Eastern",
    description: "A land of contrasts, from the Chalbi Desert to the mist-covered Mount Marsabit.",
    attractions: ["Lake Turkana (Loyangalani)", "Marsabit National Park", "Chalbi Desert", "Lake Paradise", "Mount Marsabit", "Singing Wells of Ilaut", "Koobi Fora Museum", "Kalacha Oasis", "North Horr Sand Dunes", "El Molo Villages"],
    image: "/images/counties/arid.png"
  },
  {
    id: 11,
    name: "Isiolo",
    region: "Eastern",
    description: "The center of Kenya, home to the 'Special Five' wildlife species.",
    attractions: ["Buffalo Springs National Reserve", "Shaba National Reserve", "Lewa Wildlife Conservancy", "Isiolo Mosque", "Ngremara", "Tortoise Hill", "Mount Ololokwe", "Meru National Park (Border)", "Bisanadi National Reserve", "Ewaso Nyiro River"],
    image: "/images/counties/savannah.png"
  },
  {
    id: 12,
    name: "Meru",
    region: "Eastern",
    description: "Green hills, Miraa farms, and the wild beauty of Meru National Park.",
    attractions: ["Meru National Park", "Mount Kenya (Meru Route)", "Nyambene Hills", "Meru Museum", "Ngare Ndare Forest", "Lewa Downs", "Giitune Sacred Forest", "Maua Hills", "River Kathita Waterfalls", "Imenti Forest"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 13,
    name: "Tharaka-Nithi",
    region: "Eastern",
    description: "The stronghold of the Chuka people, offering the scenic Chogoria route up Mt. Kenya.",
    attractions: ["Mount Kenya (Chogoria Route)", "Mugumo-ini Sacred Sites", "Kinodonimo Waterfalls", "Ura Gate (Meru Park)", "Kivara Falls", "Mutejwa National Reserve", "Tharaka Landscape", "Kathwana", "Maara River", "Chuka Forest"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 14,
    name: "Embu",
    region: "Eastern",
    description: "Known for the Seven Forks Dams and rich agricultural heritage.",
    attractions: ["Mount Kenya (Embu Route)", "Mwea National Reserve", "Seven Forks Dams", "Kiang'ombe Hill", "Kindaruma Dam", "Karue Hill", "Nthenge Njeru Falls", "Campi ya Simba", "Embu Art Centre", "Izaak Walton Inn"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 15,
    name: "Kitui",
    region: "Eastern",
    description: "Famous for the massive Nzambani Rock and Kamba woodcarving skills.",
    attractions: ["Nzambani Rock", "Tsavo East (Northern Area)", "South Kitui National Reserve", "Kanyonyoo Wildlife Conservancy", "Mwingi National Reserve", "Ikoo Valley", "Mutomo Plant Sanctuary", "Kyamwilu Gravity Hill", "Kitui War Monument", "Thua River"],
    image: "/images/counties/arid.png"
  },
  {
    id: 16,
    name: "Machakos",
    region: "Eastern",
    description: "Scenic hills near Nairobi, home to the famous gravity-defying hill.",
    attractions: ["Machakos People's Park", "Fourteen Falls", "Lukenya Hills", "Ol Donyo Sabuk National Park", "Kyamwilu Gravity Hill", "Iveti Hills", "Masinga Dam", "African Heritage House", "Wamunyu Carving Centre", "Komarock Shrine"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 17,
    name: "Makueni",
    region: "Eastern",
    description: "Rolling hills and baobab trees, bordering the legendary Tsavo West.",
    attractions: ["Chyulu Hills National Park", "Tsavo West (Kilaguni)", "Makindu Sikh Temple", "Mbooni Hills", "Kibwezi Forest", "Nzaui Hill", "Emali Market", "Kwa Kyelu Ranch", "River Athi stretches", "Peter Mullei Supermarket (Local Landmark)"],
    image: "/images/counties/savannah.png"
  },

  // CENTRAL
  {
    id: 18,
    name: "Nyandarua",
    region: "Central",
    description: "High-altitude plateau with beautiful waterfalls and the Aberdare ranges.",
    attractions: ["Aberdare National Park", "Thompson's Falls (Nyahururu)", "Lake Ol Bolossat", "Kinangop Plateau", "Elephant Hill", "Shamata Viewpoint", "Dragon's Teeth", "Karuru Falls", "Mau Mau Caves", "Happy Valley Homes"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 19,
    name: "Nyeri",
    region: "Central",
    description: "The heart of Kikuyu land, rich in coffee, tea, and colonial history.",
    attractions: ["Mount Kenya National Park", "Aberdare National Park", "Treetops Hotel", "Lord Baden-Powell Grave", "Solio Ranch", "Chinga Dam", "Mau Mau Caves", "Italian War Memorial Church", "Dedan Kimathi Statue", "Zaina Falls"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 20,
    name: "Kirinyaga",
    region: "Central",
    description: "Small but mighty, sitting at the foot of Mount Kenya with epic rice fields.",
    attractions: ["Mount Kenya (Castle Forest)", "Mwea Rice Irrigation Scheme", "Thiba Dam", "Ndaraca ya Ngai (God's Bridge)", "Sagana Rapids (Border)", "Kiburu Forest", "Thingira Cultural Centre", "Kerugoya Town", "River Ragati", "Tea Plantations"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 21,
    name: "Murang'a",
    region: "Central",
    description: "The cradle of the Gikuyu community, featuring undulating green hills.",
    attractions: ["Mukurwe wa Nyagathanga", "Aberdare Forest", "Mathioya River Fishing", "Ndakaini Dam", "Rapid Camp Sagana", "Fort Hall Monument", "Tuthu Catholic Church", "Stanley's Haven", "Tea Farms", "Chania Falls"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 22,
    name: "Kiambu",
    region: "Central",
    description: "Nairobi's neighbor, filled with coffee estates and lush forests.",
    attractions: ["Fourteen Falls (Thika)", "Chania Falls", "Mugumo Gardens", "Kiambethu Tea Farm", "Kereita Forest (The Forest)", "Paradise Lost", "Limuru Tea Fields", "Gatamaiyu Forest", "Sigona Golf Club", "Two Rivers Mall"],
    image: "/images/counties/mountain.png"
  },

  // RIFT VALLEY
  {
    id: 23,
    name: "Turkana",
    region: "Rift Valley",
    description: "The cradle of mankind, featuring the jade-blue Lake Turkana.",
    attractions: ["Lake Turkana", "Central Island National Park", "Koobi Fora Museum", "Eliye Springs", "South Turkana National Reserve", "Turkwell Dam", "Lobolo Swamp", "Lokichar", "Nariokotome Boy Site", "Kalokol Pillar Site"],
    image: "/images/counties/arid.png"
  },
  {
    id: 24,
    name: "West Pokot",
    region: "Rift Valley",
    description: "Hidden gem with the spectacular Cherangani Hills and rich culture.",
    attractions: ["Kapenguria Museum", "Saiwa Swamp National Park", "Cherangani Hills", "Nasolot National Reserve", "Turkwell Dam", "Marich Pass", "Mtelo Peak", "Tartar Falls", "Pokot Cultural Villages", "Wei Wei Irrigation Scheme"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 25,
    name: "Samburu",
    region: "Rift Valley",
    description: "Rugged northern wilderness with unique wildlife and colorful culture.",
    attractions: ["Samburu National Reserve", "Buffalo Springs (Border)", "Matthews Range", "Mount Ololokwe", "Maralal Game Sanctuary", "Kenyatta House (Maralal)", "Reteti Elephant Sanctuary", "Namunyak Conservancy", "Loosuk Viewpoint", "Yooro Hill"],
    image: "/images/counties/savannah.png"
  },
  {
    id: 26,
    name: "Trans Nzoia",
    region: "Rift Valley",
    description: "Kenya's breadbasket, home to Mount Elgon's caves and elephants.",
    attractions: ["Mount Elgon National Park", "Saiwa Swamp National Park", "Kitale Museum", "Kitum Cave", "Endebess Bluff", "Kapenguria Museum (Border)", "Cherangani Hills", "River Nzoia", "Agro-tourism Farms", "Kwanza Nature Sites"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 27,
    name: "Uasin Gishu",
    region: "Rift Valley",
    description: "The city of champions, famous for world-class athletes and vast wheat farms.",
    attractions: ["Kesses Dam", "Two Rivers Dam", "Koromosho Falls", "Naiberi River Campsite", "Eldoret City of Champions", "Kipkeino High Altitude Camp", "Chepkiit Waterfalls", "River Sosiani", "Kipkaren River", "Poa Place Resort"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 28,
    name: "Elgeyo-Marakwet",
    region: "Rift Valley",
    description: "Home of champions featuring the breathtaking Kerio Valley escarpments.",
    attractions: ["Kerio Valley National Reserve", "Iten Viewpoint", "Rimoi National Reserve", "Torok Falls", "Chebloch Gorge", "Kessup Falls", "Cherangani Hills", "Kamariny Stadium", "Elgeyo Escarpment", "Kipkunurr Forest"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 29,
    name: "Nandi",
    region: "Rift Valley",
    description: "Lush green tea hills and the legendary Nandi Bears.",
    attractions: ["Nandi Hills", "Koitalel Samoei Museum", "Chepkiit Waterfalls", "Kingwal Swamp", "Bonjoge National Reserve", "Kapsabet Town", "Nandi Bears Club", "Kipkurere Forest", "Tindinyo Falls", "Sheu Morobi Cliff"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 30,
    name: "Baringo",
    region: "Rift Valley",
    description: "A birdwatcher's paradise with lakes Baringo and Bogoria.",
    attractions: ["Lake Baringo", "Lake Bogoria National Reserve", "Lake Kamnarok", "Tugen Hills", "Kabarnet Museum", "Equator Line (Mogotio)", "Perkerra Irrigation Scheme", "Ruko Conservancy", "Kaptuya Conservancy", "Sacho High Plateau"],
    image: "/images/counties/savannah.png"
  },
  {
    id: 31,
    name: "Laikipia",
    region: "Rift Valley",
    description: "High-end conservancies and the best place to see Rhinos.",
    attractions: ["Ol Pejeta Conservancy", "Lewa Wildlife Conservancy", "Ol Jogi Conservancy", "Sweetwaters Chimpanzee Sanctuary", "Ngare Ndare Forest", "Thomson's Falls", "Mukogodo Forest", "Laikipia Plateau", "Solio Ranch", "Mount Kenya Wildlife Estate"],
    image: "/images/counties/savannah.png"
  },
  {
    id: 32,
    name: "Nakuru",
    region: "Rift Valley",
    description: "Famous for flamingos, rhinos, and the Naivasha getaway.",
    attractions: ["Lake Nakuru National Park", "Hell's Gate National Park", "Lake Naivasha", "Menengai Crater", "Mount Longonot", "Hyrax Hill Museum", "Lake Elementaita", "Crescent Island", "Kariandusi Prehistoric Site", "Egerton Castle"],
    image: "/images/counties/lake.png"
  },
  {
    id: 33,
    name: "Narok",
    region: "Rift Valley",
    description: "The home of the Maasai Mara and the Great Migration.",
    attractions: ["Maasai Mara National Reserve", "Mara Triangle", "Loita Hills", "Mau Forest", "Suswa Volcano", "Mount Longonot (View)", "Narok Museum", "Talek River", "Mara River", "Olderkesi Conservancy"],
    image: "/images/counties/savannah.png"
  },
  {
    id: 34,
    name: "Kajiado",
    region: "Rift Valley",
    description: "Beautiful plains with Mt. Kilimanjaro views and Amboseli elephants.",
    attractions: ["Amboseli National Park", "Chyulu Hills", "Ngong Hills", "Lake Magadi", "Olorgesailie Prehistoric Site", "Kitengela Glass", "Nairobi National Park (South Side)", "Namanga Border", "Selengai Conservancy", "Kimana Sanctuary"],
    image: "/images/counties/savannah.png"
  },
  {
    id: 35,
    name: "Kericho",
    region: "Rift Valley",
    description: "Kenya's tea capital, covered in endless green carpets.",
    attractions: ["Kericho Tea Plantations", "Mau Forest Complex", "Chagaik Arboretum", "Chemosit Viewpoint", "Guru Nanak Nisham Sahib", "Kericho Golf Club", "Fort Tenan Museum", "Tingaa Falls", "Kipkelion Hills", "Tagabi Tea Farm"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 36,
    name: "Bomet",
    region: "Rift Valley",
    description: "Agricultural hub acting as a gateway to the Mara.",
    attractions: ["Mau Forest (South West)", "Tenwek Falls", "Trans Mara Forest", "Fair Hills Hotel Gardens", "Tea Farms", "Mara River Tributaries", "Iria Maina Falls", "Chepalungu Forest", "Siwot Hill", "Bomet Stadium"],
    image: "/images/counties/mountain.png"
  },

  // WESTERN
  {
    id: 37,
    name: "Kakamega",
    region: "Western",
    description: "Home to the only tropical rainforest in Kenya.",
    attractions: ["Kakamega Forest National Reserve", "Crying Stone of Ilesi", "Rondo Retreat Centre", "Isukuti Cultural Dances", "Muliro Gardens", "Bukhungu Stadium", "Malava Forest", "Nabongo Mumia Shrine", "Savona Isle Resort", "Kibiri Forest"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 38,
    name: "Vihiga",
    region: "Western",
    description: "Known for rocky hills and the Bunyore culture.",
    attractions: ["Maragoli Hills", "Bunyore Hills", "Mungoma Caves", "Kaimosi Forest", "Divine Church of Africa HQ", "Mbale Town", "Luanda Market", "Nganyi Rainmakers Shrine", "River Yala", "Vihiga Cultural Center"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 39,
    name: "Bungoma",
    region: "Western",
    description: "The land of Mulembe, bordering Mount Elgon.",
    attractions: ["Mount Elgon National Park", "Chetambe Fort", "Nabuyole Falls", "Elephant Maternity Ward (Mt Elgon)", "Buteyo Miti Park", "Sang'alo Hills", "Kabuchai Hills", "Musikoma Hills", "Chwele Market", "Kukhu's Nest"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 40,
    name: "Busia",
    region: "Western",
    description: "The gateway to Uganda with access to Lake Victoria.",
    attractions: ["Kakapel National Monument", "Samia Hills", "Lake Victoria Shores", "Sio Port", "Che's Bay", "Port Victoria", "Alupe Leprosy Center (Historical)", "Busia Border Point", "Yala Swamp", "Nambale"],
    image: "/images/counties/lake.png"
  },

  // NYANZA
  {
    id: 41,
    name: "Siaya",
    region: "Nyanza",
    description: "Rich in Luo heritage and the birthplace of Obama's father.",
    attractions: ["Lake Kanyaboli", "Yala Swamp", "Kogelo (Obama Roots)", "Got Ramogi Hill", "Jaramogi Oginga Odinga Mausoleum", "Dominion Farms", "Ramba/Ndeda Islands", "El Molo Crocodile Park", "Sega Hills", "Siaya Cultural Centre"],
    image: "/images/counties/lake.png"
  },
  {
    id: 42,
    name: "Kisumu",
    region: "Nyanza",
    description: "The lakeside city known for tilapia and incredible sunsets.",
    attractions: ["Kisumu Impala Sanctuary", "Kisumu Museum", "Dunga Beach", "Hippo Point", "Kit Mikayi", "Ndere Island National Park", "Kiboko Bay", "Lwang'ni Beach", "Songhor Prehistoric Site", "Kanam Prehistoric Site"],
    image: "/images/counties/lake.png"
  },
  {
    id: 43,
    name: "Homa Bay",
    region: "Nyanza",
    description: "Home to Ruma National Park and mythological islands.",
    attractions: ["Ruma National Park", "Rusinga Island", "Mfangano Island", "Simbi Nyaima", "Tom Mboya Mausoleum", "Homa Hills", "Kanjera Prehistoric Site", "Mbita Point", "Takawiri Island", "Gwassi Hills"],
    image: "/images/counties/lake.png"
  },
  {
    id: 44,
    name: "Migori",
    region: "Nyanza",
    description: "A mineral-rich county bordering the Serengeti.",
    attractions: ["Thimlich Ohinga (UNESCO)", "Gogo Falls", "Mugabo Beach", "Macalder Mines", "Chinato Hills", "Migori River", "Isebania Border", "Kadem Hills", "Nyatike Sites", "Sori Bay"],
    image: "/images/counties/lake.png"
  },
  {
    id: 45,
    name: "Kisii",
    region: "Nyanza",
    description: "The banana highlands famous for soapstone carvings.",
    attractions: ["Tabaka Soapstone Quarries", "Sameta Hills", "Manga Ridge", "Nyamarambe Waterfall", "Gucha River", "Tara Hill", "Nyanchwa Hills", "Kisii Golf Course", "Kiamwasi Hill", "Suneka Airstrip Area"],
    image: "/images/counties/mountain.png"
  },
  {
    id: 46,
    name: "Nyamira",
    region: "Nyanza",
    description: "Green highlands similar to Kisii, known for tea and agriculture.",
    attractions: ["Manga Hills", "Keera Waterfalls", "Nkoora Hills", "Kiabonyoru Hill", "River Gucha", "Kebirigo Tea Farms", "Ekerenyo", "Nyamira Hills", "Nyabite Market", "Siritanyi"],
    image: "/images/counties/mountain.png"
  },

  // NAIROBI
  {
    id: 47,
    name: "Nairobi",
    region: "Nairobi",
    description: "The only capital city in the world with a national park.",
    attractions: ["Nairobi National Park", "David Sheldrick Trust", "Giraffe Centre", "Karen Blixen Museum", "Nairobi National Museum", "Karura Forest", "Bomas of Kenya", "KICC Helipad View", "Uhuru Park", "Maasai Market"],
    image: "/images/counties/city.png"
  },
];
