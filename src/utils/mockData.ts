import { PostType } from "@/types/post";

export const mockPosts: PostType[] = [
  {
    publishedAt: { start: "2025-01-26", end: null, time_zone: null },
    id: "679cdeb3a27e62e8d72fd1c0",
    notionId: "186d0bb9-7e61-805e-be61-c3adcf3944b5",
    blocks: [
      {
        type: "heading_1",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content:
                  "Les Nouveautés de JavaScript : Ce qu'il faut savoir en 2025",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "Les Nouveautés de JavaScript : Ce qu'il faut savoir en 2025",
              href: null,
            },
          ],
        },
      },
      { type: "paragraph", content: { color: "default", text: [] } },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content:
                  "JavaScript continue d'évoluer avec des mises à jour régulières qui apportent des améliorations de syntaxe, de performance et de nouvelles fonctionnalités. Voici un tour d'horizon des dernières nouveautés en 2025.",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "JavaScript continue d'évoluer avec des mises à jour régulières qui apportent des améliorations de syntaxe, de performance et de nouvelles fonctionnalités. Voici un tour d'horizon des dernières nouveautés en 2025.",
              href: null,
            },
          ],
        },
      },
      {
        type: "heading_2",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content: "1. Les nouvelles fonctions JavaScript",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "1. Les nouvelles fonctions JavaScript",
              href: null,
            },
          ],
        },
      },
      {
        type: "heading_3",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Array.prototype.toSorted", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Array.prototype.toSorted",
              href: null,
            },
            {
              type: "text",
              text: { content: ", ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: ", ",
              href: null,
            },
            {
              type: "text",
              text: { content: "toSpliced", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "purple",
              },
              plain_text: "toSpliced",
              href: null,
            },
            {
              type: "text",
              text: { content: " et ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " et ",
              href: null,
            },
            {
              type: "text",
              text: { content: "toReversed", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "toReversed",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content:
                  "Ces méthodes permettent de manipuler les tableaux de manière immuable, sans modifier l'original.",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "Ces méthodes permettent de manipuler les tableaux de manière immuable, sans modifier l'original.",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Exemple :", link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Exemple :",
              href: null,
            },
          ],
        },
      },
      {
        type: "code",
        content: {
          caption: [],
          language: "javascript",
          text: [
            {
              type: "text",
              text: {
                content:
                  "const numbers = [3, 1, 4, 1, 5, 9];\n\nconst sortedNumbers = numbers.toSorted();\nconsole.log(sortedNumbers); // [1, 1, 3, 4, 5, 9]\nconsole.log(numbers); // [3, 1, 4, 1, 5, 9] (non modifié)\n\nconst reversedNumbers = numbers.toReversed();\nconsole.log(reversedNumbers); // [9, 5, 1, 4, 1, 3]",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "const numbers = [3, 1, 4, 1, 5, 9];\n\nconst sortedNumbers = numbers.toSorted();\nconsole.log(sortedNumbers); // [1, 1, 3, 4, 5, 9]\nconsole.log(numbers); // [3, 1, 4, 1, 5, 9] (non modifié)\n\nconst reversedNumbers = numbers.toReversed();\nconsole.log(reversedNumbers); // [9, 5, 1, 4, 1, 3]",
              href: null,
            },
          ],
        },
      },
      { type: "divider", content: {} },
      {
        type: "heading_3",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Array.prototype.findLast", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Array.prototype.findLast",
              href: null,
            },
            {
              type: "text",
              text: { content: " et ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " et ",
              href: null,
            },
            {
              type: "text",
              text: { content: "findLastIndex", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "findLastIndex",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content:
                  "Ces méthodes permettent de rechercher le dernier élément ou son index dans un tableau qui satisfait une condition.",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "Ces méthodes permettent de rechercher le dernier élément ou son index dans un tableau qui satisfait une condition.",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Exemple :", link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Exemple :",
              href: null,
            },
          ],
        },
      },
      {
        type: "code",
        content: {
          caption: [],
          language: "javascript",
          text: [
            {
              type: "text",
              text: {
                content:
                  'const users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" },\n  { id: 3, name: "Alice" }\n];\n\nconst lastAlice = users.findLast(user => user.name === "Alice");\nconsole.log(lastAlice); // { id: 3, name: "Alice" }',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                'const users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" },\n  { id: 3, name: "Alice" }\n];\n\nconst lastAlice = users.findLast(user => user.name === "Alice");\nconsole.log(lastAlice); // { id: 3, name: "Alice" }',
              href: null,
            },
          ],
        },
      },
      { type: "divider", content: {} },
      {
        type: "heading_2",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content: "2. Les nouvelles opérations sur les objets",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "2. Les nouvelles opérations sur les objets",
              href: null,
            },
          ],
        },
      },
      {
        type: "heading_3",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Object.hasOwn", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Object.hasOwn",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content: "Cette méthode est une alternative plus sûre à ",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Cette méthode est une alternative plus sûre à ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Object.prototype.hasOwnProperty", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Object.prototype.hasOwnProperty",
              href: null,
            },
            {
              type: "text",
              text: { content: ".", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: ".",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Exemple :", link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Exemple :",
              href: null,
            },
          ],
        },
      },
      {
        type: "code",
        content: {
          caption: [],
          language: "javascript",
          text: [
            {
              type: "text",
              text: {
                content:
                  'const user = { name: "Alice", age: 25 };\nconsole.log(Object.hasOwn(user, "age")); // true\nconsole.log(Object.hasOwn(user, "email")); // false',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                'const user = { name: "Alice", age: 25 };\nconsole.log(Object.hasOwn(user, "age")); // true\nconsole.log(Object.hasOwn(user, "email")); // false',
              href: null,
            },
          ],
        },
      },
      { type: "divider", content: {} },
      {
        type: "heading_2",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "3. Nouveautés 2025 : Les ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "3. Nouveautés 2025 : Les ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Records", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Records",
              href: null,
            },
            {
              type: "text",
              text: { content: " et ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " et ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Tuples", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Tuples",
              href: null,
            },
            {
              type: "text",
              text: { content: " officialisés", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " officialisés",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Les ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Les ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Records", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Records",
              href: null,
            },
            {
              type: "text",
              text: { content: " et ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " et ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Tuples", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Tuples",
              href: null,
            },
            {
              type: "text",
              text: {
                content:
                  " introduisent des structures immuables inspirées des langages fonctionnels.",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                " introduisent des structures immuables inspirées des langages fonctionnels.",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Exemple :", link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Exemple :",
              href: null,
            },
          ],
        },
      },
      {
        type: "code",
        content: {
          caption: [],
          language: "javascript",
          text: [
            {
              type: "text",
              text: {
                content:
                  'const person = #({ name: "Alice", age: 25 });\nconst numbers = #[1, 2, 3, 4];\n\nconsole.log(person.name); // "Alice"\nconsole.log(numbers[2]); // 3',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                'const person = #({ name: "Alice", age: 25 });\nconst numbers = #[1, 2, 3, 4];\n\nconsole.log(person.name); // "Alice"\nconsole.log(numbers[2]); // 3',
              href: null,
            },
          ],
        },
      },
      { type: "divider", content: {} },
      {
        type: "heading_2",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "4. Les ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "4. Les ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Set", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Set",
              href: null,
            },
            {
              type: "text",
              text: { content: " et ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " et ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Map", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Map",
              href: null,
            },
            {
              type: "text",
              text: { content: " s'enrichissent encore", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " s'enrichissent encore",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Les nouvelles méthodes ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Les nouvelles méthodes ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Set.prototype.intersection", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Set.prototype.intersection",
              href: null,
            },
            {
              type: "text",
              text: { content: ", ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: ", ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Set.prototype.union", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Set.prototype.union",
              href: null,
            },
            {
              type: "text",
              text: { content: ", et ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: ", et ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Set.prototype.difference", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Set.prototype.difference",
              href: null,
            },
            {
              type: "text",
              text: {
                content: " facilitent la manipulation d'ensembles.",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " facilitent la manipulation d'ensembles.",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Exemple :", link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Exemple :",
              href: null,
            },
          ],
        },
      },
      {
        type: "code",
        content: {
          caption: [],
          language: "javascript",
          text: [
            {
              type: "text",
              text: {
                content:
                  "const setA = new Set([1, 2, 3, 4]);\nconst setB = new Set([3, 4, 5, 6]);\n\nconst union = setA.union(setB);\nconsole.log([...union]); // [1, 2, 3, 4, 5, 6]\n\nconst intersection = setA.intersection(setB);\nconsole.log([...intersection]); // [3, 4]",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "const setA = new Set([1, 2, 3, 4]);\nconst setB = new Set([3, 4, 5, 6]);\n\nconst union = setA.union(setB);\nconsole.log([...union]); // [1, 2, 3, 4, 5, 6]\n\nconst intersection = setA.intersection(setB);\nconsole.log([...intersection]); // [3, 4]",
              href: null,
            },
          ],
        },
      },
      { type: "divider", content: {} },
      {
        type: "heading_2",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "5. Support des ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "5. Support des ",
              href: null,
            },
            {
              type: "text",
              text: { content: "import()", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "import()",
              href: null,
            },
            {
              type: "text",
              text: { content: " asynchrones dans les modules ES", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " asynchrones dans les modules ES",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content: "Il est maintenant possible d'utiliser ",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Il est maintenant possible d'utiliser ",
              href: null,
            },
            {
              type: "text",
              text: { content: "import()", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "import()",
              href: null,
            },
            {
              type: "text",
              text: { content: " de manière dynamique avec ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " de manière dynamique avec ",
              href: null,
            },
            {
              type: "text",
              text: { content: "await", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "await",
              href: null,
            },
            {
              type: "text",
              text: {
                content:
                  ", sans avoir besoin d'une fonction asynchrone explicite.",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                ", sans avoir besoin d'une fonction asynchrone explicite.",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Exemple :", link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Exemple :",
              href: null,
            },
          ],
        },
      },
      {
        type: "code",
        content: {
          caption: [],
          language: "javascript",
          text: [
            {
              type: "text",
              text: {
                content:
                  'const module = await import("./utils.js");\nmodule.doSomething();',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                'const module = await import("./utils.js");\nmodule.doSomething();',
              href: null,
            },
          ],
        },
      },
      { type: "divider", content: {} },
      {
        type: "heading_2",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "6. Nouveautés 2025 : ", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "6. Nouveautés 2025 : ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Promise.withResolvers()", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Promise.withResolvers()",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content: "Une nouvelle méthode permettant de créer une ",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Une nouvelle méthode permettant de créer une ",
              href: null,
            },
            {
              type: "text",
              text: { content: "Promise", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: true,
                color: "default",
              },
              plain_text: "Promise",
              href: null,
            },
            {
              type: "text",
              text: {
                content: " avec ses résolvers directement accessibles.",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: " avec ses résolvers directement accessibles.",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Exemple :", link: null },
              annotations: {
                bold: true,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Exemple :",
              href: null,
            },
          ],
        },
      },
      {
        type: "code",
        content: {
          caption: [],
          language: "javascript",
          text: [
            {
              type: "text",
              text: {
                content:
                  'const { promise, resolve, reject } = Promise.withResolvers();\nsetTimeout(() => resolve("Donnée chargée"), 1000);\n\npromise.then(console.log); // "Donnée chargée" après 1 seconde',
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                'const { promise, resolve, reject } = Promise.withResolvers();\nsetTimeout(() => resolve("Donnée chargée"), 1000);\n\npromise.then(console.log); // "Donnée chargée" après 1 seconde',
              href: null,
            },
          ],
        },
      },
      { type: "divider", content: {} },
      {
        type: "heading_2",
        content: {
          is_toggleable: false,
          color: "default",
          text: [
            {
              type: "text",
              text: { content: "Conclusion", link: null },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "Conclusion",
              href: null,
            },
          ],
        },
      },
      {
        type: "paragraph",
        content: {
          color: "default",
          text: [
            {
              type: "text",
              text: {
                content:
                  "Ces nouveautés permettent d'écrire du code plus lisible, performant et immuable. JavaScript continue d'évoluer vers une syntaxe plus moderne, inspirée des meilleures pratiques du développement logiciel. Adopter ces nouvelles fonctionnalités vous permettra de tirer parti des dernières améliorations du langage !",
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text:
                "Ces nouveautés permettent d'écrire du code plus lisible, performant et immuable. JavaScript continue d'évoluer vers une syntaxe plus moderne, inspirée des meilleures pratiques du développement logiciel. Adopter ces nouvelles fonctionnalités vous permettra de tirer parti des dernières améliorations du langage !",
              href: null,
            },
          ],
        },
      },
      { type: "paragraph", content: { color: "default", text: [] } },
    ],
    name: "Les nouveautés JavaScript 2025",
    cover:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Découvrez ce que Javascript nous réservé de merveilleux en 2024 et ce qu’il nous présentera de fabuleux en 2025.",
    slug: "les-nouveautes-javascript-2025",
    createdBy: "Antonin SIMON",
    isPublished: true,
    propertyTags: ["JavaScript", "Node.js", "npm"],
  },
];
