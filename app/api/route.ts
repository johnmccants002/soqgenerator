import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXTJS_OPENAI_API_KEY });

export const dynamic = "force-dynamic"; // defaults to auto
export async function POST(request: Request, response: Response) {
  const body = await request.json();

  console.log(body, "THIS IS THE Fkldsjflkwedfjlk");
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: body.stuff }],
    model: "gpt-3.5-turbo",
  });

  // Respond with a JSON object
  return new Response(JSON.stringify({ data: completion.choices[0] }), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200, // OK status
  });
}
