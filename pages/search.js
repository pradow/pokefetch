import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  return <h1>search {JSON.stringify(router.query)}</h1>;
}

export default Search;
