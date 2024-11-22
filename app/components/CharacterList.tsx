interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
}

export default function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <div key={character.id} className="border p-4 rounded shadow-lg">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold">{character.name}</h2>
          <p>Durum: {character.status}</p>
          <p>Cinsiyet: {character.gender}</p>
        </div>
      ))}
    </div>
  );
}
