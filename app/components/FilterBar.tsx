"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // URL'den parametreleri okur

export default function FilterBar() {
  const searchParams = useSearchParams(); // URL parametrelerini alır
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  // URL'deki mevcut parametreleri state'e yükle
  useEffect(() => {
    const currentStatus = searchParams.get("status") || "";
    const currentGender = searchParams.get("gender") || "";
    setStatus(currentStatus);
    setGender(currentGender);
  }, [searchParams]);

  const handleFilterChange = () => {
    const queryParams = new URLSearchParams({
      status: status || "",
      gender: gender || "",
    });
    window.location.href = `/?${queryParams.toString()}`; // SSR tetiklenir
  };

  return (
    <div className="flex justify-center gap-4 mb-8">
      <select
        className="border p-2"
        value={status} // Seçilen değer state'den gelir
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Durum (Status)</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <select
        className="border p-2"
        value={gender} // Seçilen değer state'den gelir
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">Cinsiyet (Gender)</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      <button
        onClick={handleFilterChange}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Filtrele
      </button>
    </div>
  );
}
