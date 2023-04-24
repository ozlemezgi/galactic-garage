import React,{useState,useContext,useEffect,useCallback} from "react";

const URL = "https://swapi.dev/api/starships/";
const AppContext = React.createContext();

// Define the AppProvider component to manage state and provide it to child components
const AppProvider = ({children}) =>{
  const [searchTerm, setSearchTerm] = useState("a");
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");

  // Define a callback function to fetch vehicle data from the API using the searchTerm state
  const fetchVehicles = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${URL}?search=${searchTerm}`);
      const data = await response.json();
      console.log(data);
      const { results } = data;
      setVehicles(results);

      if(results){
        const newVehicles = results.slice(0,20).map((vehicleSingle)=>{
            const {key,name,model,hyperdrive_rating,passengers
,max_atmosphering_speed,manufacturer,crew,cargo_capacity} = vehicleSingle;

                return{
                    id:key,
                    name:name,
                    model:model,
                    rating:hyperdrive_rating,
                    passengers:passengers,
                    speed:max_atmosphering_speed,
                    manufacturer:manufacturer,
                    crew:crew,
                    cargo:cargo_capacity,
                }
        })

        setVehicles(newVehicles);

        if(newVehicles.length >1){
            setResultTitle("Your Search Result")
        }else{
            setResultTitle("No Search Result Found")
        }
      }else{
        setVehicles([]);
        setResultTitle("No Search Result Found");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  // Call the fetchVehicles callback function when the searchTerm or fetchVehicles dependencies change
  useEffect(() => {
    fetchVehicles();
  }, [searchTerm, fetchVehicles]);

  // Provide the state and functions to child components through the AppContext
  return (
    <AppContext.Provider
      value={{
        loading,
        vehicles,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Define a custom hook to use the AppContext in child components
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider}