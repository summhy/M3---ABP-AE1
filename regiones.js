function showData(regioniId) {
  const region = document.querySelector(".card-title");
  console.log(region);
  switch (regioniId) {
    case "r1":
      region.innerHTML = `Región: ${regiones[0].region}`;
      break;
    case "r2":
      region.innerHTML = `Región: ${regiones[1].region}`;
      break;
    case "r3":
      region.innerHTML = `Región: ${regiones[2].region}`;
      break;
  }
}

const regiones = [
  {
    region: "Arica y Parinacota",
    atractivos:
      "Valle de Azapa, Isla de Pascua, Parque Nacional Lauca, Playa del Amor",
  },
  {
    region: "Tarapacá",
    atractivos:
      "Geoglifos de la Pampa del Tamarugal, Reserva Nacional de Parinacota, San Lucas, Playa Los Choros",
  },
  {
    region: "Antofagasta",
    atractivos:
      "Valle de la Luna, Playa La Negra, Isla Pan de Azúcar, Reserva Nacional las Salinas y Lagunas Altiplánicas",
  },
  {
    region: "Atacama",
    atractivos:
      "El Tatio, Salar de Atacama, Valle de la Muerte, Playa de Arica",
  },
  {
    region: "Coquimbo",
    atractivos:
      "Isla de La Palma, Playa de La Serena, Observatorio Astronómico de La Silla, Isla Damas",
  },
  {
    region: "Valparaíso",
    atractivos: "Cerro Alegre, Cerro Concepción, Playa Reñaca, Viña del Mar",
  },
  {
    region: "Libertador General Bernardo O'Higgins",
    atractivos: "Lago Rapel, Termas del Flaco, Río Claro, Valle del Colchagua",
  },
  {
    region: "Maule",
    atractivos:
      "Parque Nacional Laguna del Laja, Río Claro, Termas de Cauquenes, Reserva Nacional Altos de Lircay",
  },
  {
    region: "Biobío",
    atractivos:
      "Playa Blanca, Parque Nacional Nahuelbuta, Isla Quiriquina, Playa Concon",
  },
  {
    region: "La Araucanía",
    atractivos:
      "Parque Nacional Conguillío, Parque Nacional Malalcahuello-Nalcas, Lago Villarrica, Villarrica",
  },
  {
    region: "Los Ríos",
    atractivos:
      "Isla Teja, Parque Nacional Puyehue, Isla de Chiloé, Parque Nacional Alerce Andino",
  },
  {
    region: "Los Lagos",
    atractivos: "Parque Nacional Nahuel Huapi, Lago Llanquihue",
  },
];
