import 'dotenv/config'
import assert from 'assert'

export async function createSummary(text: string) {
  assert.ok(process.env.OPENAI_API_KEY != '', 'Missing environment variable OPENAI_API_KEY')

  const openaiRequest = {
    model: 'o4-mini',
    temperature: 1,
    messages: [
      {
        role: 'system',
        content: 'You are a an assistant that creates concise, accurate summaries of text'
      },
      {
        role: 'user',
        content: `Please provide summary of the following text in less then 30 words:\n\n${text}`
      }
    ]
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify(openaiRequest)
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${await response.text()}`)
  }

  const openaiResponse = await response.json()
  const summary = openaiResponse.choices[0]?.message?.content || 'No summary generated'

  return summary
}
