import axios from "axios";

export async function getPublishedPosts() {
  try {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/posts/published");
    return data; // 👈 Axios place la réponse dans `data` directement
  } catch (error) {
    console.error("Erreur API :", error);
    return []; // Retourne un tableau vide en cas d'erreur pour éviter le crash
  }
}

export async function getRecentPosts() {
  try {
    const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/posts/published/recents");
    return data; // 👈 Axios place la réponse dans `data` directement
  } catch (error) {
    console.error("Erreur API :", error);
    return []; // Retourne un tableau vide en cas d'erreur pour éviter le crash
  }
}

export async function getPost(slug: string): Promise<PostType | null> {
    try {
      const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + `/posts/${slug}`);
      return data;
    } catch (error) {
      console.error("Erreur API :", error);
      return null; // ⛔ Retourne null si l'article n'existe pas
    }
  }