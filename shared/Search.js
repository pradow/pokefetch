import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Search() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchText.replace(/ /g, "")) {
      setSearchText("");
      console.log(searchText);

      return;
    }

    router.push(`/search?pokemon=${searchText}`);
  }
  return (
    <form onSubmit={handleSubmit} className="hero-form">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        required
      />
      <button type="submit">search</button>
    </form>
  );
}

export default Search;
