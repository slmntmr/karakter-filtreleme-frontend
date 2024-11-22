import { fetchCharacters } from "./services/characterService";
import CharacterList from "./components/CharacterList";
import FilterBar from "./components/FilterBar";

export default async function HomePage({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) {
  const { status = "", gender = "" } = searchParams; // URL'den gelen parametreler
  const characters = await fetchCharacters(status, gender); // Filtrelenmiş karakterleri getir

  return (
    <div className="p-8 min-h-screen bg-background text-foreground">
      <h1 className="text-3xl font-bold text-center mb-6">Rick and Morty Karakterleri</h1>
      <FilterBar />
      <CharacterList characters={characters} />
    </div>
  );
}
