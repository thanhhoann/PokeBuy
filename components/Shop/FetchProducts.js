import { useQuery } from "react-query";

export default function FetchProducts(props) {

  return useQuery(
    "cards",
    async () => await pokemon.card.all({ q: "subtypes:mega" })
  );
}
