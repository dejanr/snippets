import type { FC } from 'react';
import type { Snippet } from "@snippets/shared"

interface Props {
  snippet: Snippet
}

export const SnippetPage: FC<Props> = ({ snippet }: Props) => {
  return (<div className="container mx-auto p-4 max-w-4xl">
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-800">Snippet</h1>
      <span>{snippet.text}</span>
      <span>{snippet.summary}</span>
    </div>
  </div >);
};
