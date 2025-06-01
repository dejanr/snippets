import type { FC } from 'react';
import type { Snippet } from "@snippets/shared"

interface Props {
  snippet: Snippet
}

export const SnippetPage: FC<Props> = ({ snippet }: Props) => {
  return (<div className="container mx-auto p-4 max-w-4xl">
    <div className="space-y-4">
      <pre className="bg-gray-800 text-gray-100">
        <code className="whitespace-pre-wrap font-mono text-sm">
          {snippet.text}
        </code>
      </pre>
      <blockquote>{snippet.summary}</blockquote>
    </div>
  </div>
  );
}
