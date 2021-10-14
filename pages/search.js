import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let url = "https://pokeapi.co/api/v2/pokemon/";

  async function fetchData(searchTerm) {
    try {
      const response = await fetch(url + searchTerm);
      const data = await response.json();
      console.log(data);
      setFetchedData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (router.query.pokemon) {
      fetchData(router.query.pokemon);
    }
  }, [router.query]);

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  if (fetchedData.length < 1) {
    return <h1>no results</h1>;
  }

  return <h1>{JSON.stringify(fetchedData)}</h1>;
}

export default Search;
