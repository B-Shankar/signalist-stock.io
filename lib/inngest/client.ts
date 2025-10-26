import {Inngest} from "inngest";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is required");
}

export const inngest = new Inngest({
    id: 'signalist',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY}}
})