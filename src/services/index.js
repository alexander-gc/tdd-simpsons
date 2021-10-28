// src/services/index.js

const baseURL =
    process.env.NODE_ENV !== "test"
        ? "https://thesimpsonsquoteapi.glitch.me/"
        : ""

export const getQuotes = () => fetch(`${baseURL}/quotes`)