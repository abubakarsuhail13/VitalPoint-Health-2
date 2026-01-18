
import { GoogleGenAI } from "@google/genai";

/**
 * Fetches a response from Gemini AI based on the user prompt and conversation history.
 * Adheres to GenAI SDK guidelines by using ai.models.generateContent and direct API key access.
 */
export const getGeminiResponse = async (prompt: string, history: { role: string; content: string }[]) => {
  // Always initialize with process.env.API_KEY directly as per guidelines.
  // We initialize inside the function to ensure the latest environment state is captured.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
  
  // Map conversation history to the format expected by the Gemini API (user/model roles).
  const contents = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));
  
  // Add the current user prompt to the contents array.
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  try {
    // Using ai.models.generateContent as the primary way to query GenAI for text tasks.
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

    // Access the text property directly on the response object.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
};
