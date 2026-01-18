import { GoogleGenAI } from "@google/genai";

/**
 * Fetches a response from Gemini AI based on the user prompt and conversation history.
 */
export const getGeminiResponse = async (prompt: string, history: { role: string; content: string }[]) => {
  // Safe access to the API key. Vite will replace process.env.API_KEY during build.
  const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || (window as any).API_KEY;
  
  if (!apiKey) {
    console.error("VitalPoint: Gemini API Key is missing. Please set API_KEY in your environment variables.");
    return "The VitalPoint Health assistant is currently offline. Please check your configuration.";
  }

  // Initialize the AI client
  const ai = new GoogleGenAI({ apiKey });
  
  // Format the history for the model
  const contents = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));
  
  // Add current message
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `You are VitalPoint AI, a professional medical wellness assistant. 
        Your tone is supportive, precise, and authoritative. 
        Focus on preventative care, fitness, and lifestyle optimization.
        DISCLAIMER: Always state you are an AI and not a substitute for professional medical advice.`,
      },
    });

    return response.text || "I couldn't process that. Could you rephrase?";
  } catch (error) {
    console.error("VitalPoint AI Error:", error);
    return "I'm having trouble connecting to my neural core. Please try again in a moment.";
  }
};