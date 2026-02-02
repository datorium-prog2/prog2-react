import axios from "axios"; // importējam pakotni "axios" un nosaucam viņu axios

// const - veidot konstantes (mainīgie, kurus nevar mainīt)
const BASE_URL = "https://prog2-webapi-teaching-demo.onrender.com/api";

// šādi definējam funkciju
// export - varēs lietot citos failos
// funkcija ar 0 argumentiem, kuru sauc getHello, kura agriež axios.get<string>(`${BASE_URL}/hello`); kā rezultātu
export const getHello = () => axios.get<string>(`${BASE_URL}/hello`);
