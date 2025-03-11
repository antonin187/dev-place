export const generateSlug = (title: string) => {
    return title
      .trim() // Supprime les espaces en début et fin
      .toLowerCase()
      .normalize("NFD") // Décompose les accents (é → e, ñ → n)
      .replace(/[\u0300-\u036f]/g, "") // Supprime les accents restants
      .replace(/[^a-z0-9\s-]/g, "") // Supprime tout sauf lettres, chiffres, espaces et tirets
      .replace(/\s+/g, "-"); // Remplace les espaces par un seul tiret
  };