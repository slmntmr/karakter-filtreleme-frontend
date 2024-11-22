const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (status: string = "", gender: string = "") => {
  try {
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (gender) params.append("gender", gender);

    const response = await fetch(`${BASE_URL}/character?${params.toString()}`, {
      cache: "no-store", // SSR için önbellekleme kapalı
    });

    if (!response.ok) {
      throw new Error("API'den veri alınırken bir hata oluştu.");
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
