import { useState } from 'react';
import Animal from "./components/Animal";
import useAnimalSearch from "./hooks/useAnimalSearch";
import debounce from 'lodash.debounce';
import MoonLoader from "react-spinners/MoonLoader";
import "./App.css";


function App() {
  const { search, animals } = useAnimalSearch();
  const [loading, setLoading] = useState(false)  
  
  const override = {
    display: "block",
    margin: "1rem auto",
  };

  // NOTE : not sure if the hook (useCallback) is needed here
  // const debouncedChangeHandler = useCallback(
  //   debounce(changeHandler, 1000)
  // , []);

  const handleSearch = (event, delay) => {
    setLoading(true);
    const debounceSearch = debounce(() => {
      search(event.target.value);
      setLoading(false)
    }, delay)
    debounceSearch();
  }

  return (
    <main>
      <h1 className="page-title">🐷 Animal Farm</h1>
      <div className="input-box">
        <input
        type="text"
        placeholder="Search"
        onChange={(e) => handleSearch(e, 1000)}
      />
      </div>
      <div className="list-box">
      {animals.length === 0 ? <h3>No animals found</h3> : 
        loading ? 
        <MoonLoader color={"white"} cssOverride={override} size={40} /> : 
        <ul>
          {animals.map((animal) => (
            <Animal key={animal.id} {...animal} />
          ))}
        </ul>
      }
     </div>
    </main>
  );
}

export default App;