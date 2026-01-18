
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches a response from Gemini AI based on the user prompt and conversation history.
 * Adheres to GenAI SDK guidelines by using ai.models.generateContent and direct API key access.
 */
export const getGeminiResponse = async (prompt: string, history: { role: string; content: string }[]) => {
  // Safe access to API Key to prevent "process is not defined" error in some browser environments
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : (window as any).API_KEY;
  
  if (!apiKey) {
    console.error("Gemini API Key is missing. Ensure process.env.API_KEY is set in Vercel.");
    return "The health assistant is currently offline. Please try again later.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const contents = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));
  
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `You are VitalPoint AI, a knowledgeable and compassionate health assistant. 
        Your goal is to provide helpful, evidence-based wellness advice, explain medical concepts simply, 
        and encourage healthy lifestyles. 
        IMPORTANT: Always remind users that you are an AI and not a doctor. If a user describes a medical 
        emergency, advise them to call emergency services immediately. Keep responses concise and structured.`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
};
