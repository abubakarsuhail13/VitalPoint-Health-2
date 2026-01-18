
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (prompt: string, history: { role: string; content: string }[]) => {
  if (!API_KEY) {
    throw new Error("API Key is missing. Please ensure process.env.API_KEY is configured.");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  // Create chat session with system instruction
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are VitalPoint AI, a knowledgeable and compassionate health assistant. 
      Your goal is to provide helpful, evidence-based wellness advice, explain medical concepts simply, 
      and encourage healthy lifestyles. 
      IMPORTANT: Always remind users that you are an AI and not a doctor. If a user describes a medical 
      emergency, advise them to call emergency services immediately. Keep responses concise and structured.`,
    },
  });

  try {
    // We don't use full history in sendMessage for simplicity of this SPA demo, 
    // but the model maintains session context if we used the same chat object.
    // For a stateless feel, we'll just send the current message.
    const result = await chat.sendMessage({ message: prompt });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my knowledge base right now. Please try again in a moment.";
  }
};
