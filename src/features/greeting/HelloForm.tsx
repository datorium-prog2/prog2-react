import { useState, useEffect } from "react";
import { getHello } from "./api";

export function HelloForm() {
  // izmantojam State, glabāt aplikācijas stāvokli (informāciju)
  // const [mainīgā nosaukums, funkcija lai mainītu vērtību] = useState(noklusējuma vērtība)
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  // izpildās vienu reizi, kad komponente ielādējas
  useEffect(() => {
    const fetchData = async () => {
      const response = await getHello();
      setMessage(response.data);
    };

    fetchData();
  }, []); // tukšs saraksts => izpildīt tikai vienu reizi

  const inputStyle =
    "border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500";
  const buttonStyle =
    "ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none";
  const textStyle = "text-2xl font-bold text-gray-800 mt-4";

  // TODO: nospiežot pogu Greet me! - tiek aizsūtīts POST request uz API
  // TODO: tiek atjaunots message uz to, ko saņemt no POST response
  return (
    <div className="p-1">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputStyle}
        type="text"
        placeholder="Type a name..."
      />
      <button className={buttonStyle}>Greet me!</button>
      <p className={textStyle}>{message}</p>
    </div>
  );
}
