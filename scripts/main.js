//La información de las regiones debe estar almacenada en un arreglo.(array de objetos en este caso)
const regionsData = [
  {
    id: "1",
    region: "Arica y Parinacota",
    touristAttractions:
      "Valle de Azapa, Isla de Pascua, Parque Nacional Lauca, Playa del Amor",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32894/2/Region_de_Arica_y_Parinacota_2022_fn_M.jpg",
  },
  {
    id: "2",
    region: "Tarapacá",
    touristAttractions:
      "Geoglifos de la Pampa del Tamarugal, Reserva Nacional de Parinacota, San Lucas, Playa Los Choros",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32895/2/Region_de_Tarapaca_2022_fn_M.jpg",
  },
  {
    id: "3",
    region: "Antofagasta",
    touristAttractions:
      "Valle de la Luna, Playa La Negra, Isla Pan de Azúcar, Reserva Nacional las Salinas y Lagunas Altiplánicas",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32896/2/Region_de_Antofagasta_2022_fn_M.jpg",
  },
  {
    id: "4",
    region: "Atacama",
    touristAttractions:
      "El Tatio, Salar de Atacama, Valle de la Muerte, Playa de Arica",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32897/2/Region_de_Atacama_2022_fn_M.jpg",
  },
  {
    id: "5",
    region: "Coquimbo",
    touristAttractions:
      "Isla de La Palma, Playa de La Serena, Observatorio Astronómico de La Silla, Isla Damas",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32898/2/Region_de_Coquimbo_2022_fn_M.jpg",
  },
  {
    id: "6",
    region: "Valparaíso",
    touristAttractions:
      "Cerro Alegre, Cerro Concepción, Playa Reñaca, Viña del Mar",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32899/2/Region_de_Valparaiso_2022_fn_M.jpg",
  },
  {
    id: "7",
    region: "Metropolitana de Santiago",
    touristAttractions:
      "Cerro San Cristóbal, Mercado Central, Palacio de La Moneda, Barrio Bellavista, Cerro Santa Lucía, Parque Metropolitano",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32900/2/Region_Metropolitana_2022_fn_M.jpg",
  },
  {
    id: "8",
    region: "Libertador General Bernardo O'Higgins",
    touristAttractions:
      "Lago Rapel, Termas del Flaco, Río Claro, Valle del Colchagua",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32901/2/Region_deOHiggins2022_M.jpg",
  },
  {
    id: "9",
    region: "Maule",
    touristAttractions:
      "Parque Nacional Laguna del Laja, Río Claro, Termas de Cauquenes, Reserva Nacional Altos de Lircay",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32902/2/Region_del_Maule2022_M.jpg",
  },
  {
    id: "10",
    region: "Ñuble",
    touristAttractions:
      "Parque Nacional Laguna del Laja, Río Claro, Termas de Cauquenes, Reserva Nacional Altos de Lircay",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32903/2/Region_de_Nuble_2022_fn_M.jpg",
  },

  {
    id: "11",
    region: "Biobío",
    touristAttractions:
      "Playa Blanca, Parque Nacional Nahuelbuta, Isla Quiriquina, Playa Concon",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32904/2/Region_del_Biobio_2022_fn_M.jpg",
  },
  {
    id: "12",
    region: "La Araucanía",
    touristAttractions:
      "Parque Nacional Conguillío, Parque Nacional Malalcahuello-Nalcas, Lago Villarrica, Villarrica",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32905/2/Region_de_la_Araucania_2022_fn_M.jpg",
  },
  {
    id: "13",
    region: "Los Ríos",
    touristAttractions:
      "Isla Teja, Parque Nacional Puyehue, Isla de Chiloé, Parque Nacional Alerce Andino",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32906/2/Region_de_los_Rios_2022_fn_M.jpg",
  },
  {
    id: "14",
    region: "Los Lagos",
    touristAttractions: "Parque Nacional Nahuel Huapi, Lago Llanquihue",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32907/2/Region_de_los_Lagos_2022_fn_M.jpg",
  },
  {
    id: "15",
    region: "Aysén",
    touristAttractions:
      "Laguna San Rafael,Parque Nacional Queulat,Reserva Nacional Jeinimeni,Parque Nacional Laguna San Rafael",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32908/2/Region_de_Aysen_2022_fn_M.jpg",
  },
  {
    id: "16",
    region: "Magallanes y la Antártica Chilena",
    touristAttractions:
      "Torres del Paine,Isla Navarino,Parque Nacional Alberto de Agostini,Playa de Punta Arenas",
    image:
      "https://www.bcn.cl/obtienearchivo?id=repositorio/10221/32909/2/Region_de_Magallanes_y_AntarticaChilena_2022_fn_M.jpg",
  },
];

//1. Obtener elementos html donde la data debe mostrarse

const htmlRegion = document.getElementById("region");
const htmlTouristAttractions = document.getElementById("attractions");
const htmlImageRegion = document.getElementById("region-img");
const htmlImageInput = document.getElementById("image-input");

function showData(regionId) {
  // Al pasar sobre una región, se debe visualizar el card
  document.querySelector(".card").style.display = "flex";

  const currentRegion = regionsData[parseInt(regionId) - 1]; //regionsData[1]

  document.getElementById(
    "button-update"
  ).innerHTML = `<button onclick="updateData(
    ${regionId})">Modificar</button>`;

  //el card se debe completar con los datos de la región seleccionada (reemplazados por input y textarea)

  htmlRegion.value = currentRegion.region;
  htmlTouristAttractions.value = currentRegion.touristAttractions;
  htmlImageRegion.src = currentRegion.image;
  htmlImageRegion.alt = currentRegion.region;
  htmlImageInput.value = currentRegion.image;
}

function updateData(regionId) {
  const currentRegion = regionsData[parseInt(regionId) - 1];

  //Se debe permitir la modificación de los valores almacenados para la región
  currentRegion.region = htmlRegion.value;
  currentRegion.touristAttractions = htmlTouristAttractions.value;
  //La imagen debe poder seleccionarse mediante un input file
  const imageInput = document.getElementById("image-input");
  //console.log(imageInput.value);
  currentRegion.image = imageInput.value;
}
