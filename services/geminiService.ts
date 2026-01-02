
import { GoogleGenAI } from "@google/genai";

// Fix: Use process.env.API_KEY directly in the named parameter object as per the SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are the AI Strategic Consultant for KAVY LTD, an integrated infrastructure and building intelligence unicorn. 
        Divisions:
        1. KAVY COATINGS: Surface protection, industrial coatings, waterproofing.
        2. KAVY DESIGN: AI-assisted space design, 3D textures.
        3. KAVY SPACES: Interior finishing, furniture production, office fit-outs.
        4. KAVY INFRASTRUCTURE: Bridges, roads, airports, large-scale government projects.
        5. KAVY MAINTENANCE: Preventive contracts, asset lifecycle management.
        6. KAVY MANUFACTURING: Paints, specialty chemicals, sustainable materials.
        7. KAVY SYSTEMS: AI software, IoT monitoring, infrastructure data analytics.
        
        Goal: Provide high-level advice on infrastructure, design trends, and asset management. Always maintain a professional, visionary tone. Mention the phone +234 8144130329 if they want to speak to an executive.`,
        temperature: 0.6,
      },
    });
    // Fix: Access .text as a property directly, not as a method, according to the GenerateContentResponse interface
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our intelligence systems are temporarily offline. Please contact KAVY Headquarters at +234 8144130329.";
  }
};