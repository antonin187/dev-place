"use client";

import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";
import { useEffect, useState } from "react";
import { Skeleton } from "../skeleton";

export default function CustomCodeBlock({ code, language }: { code: string; language: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton />; // 👈 Placeholder avant le rendu client
  }

  return (
    <CodeBlock
      text={code}
      language={language}
      theme={dracula}
      showLineNumbers
      customStyle={{ fontFamily: 'monospace' }}
    />
  );
}