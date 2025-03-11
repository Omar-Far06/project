import booksData from './csvjson (1).json';

// التأكد من أن البيانات مصفوفة وتصفيتها
export const books = Array.isArray(booksData)
    ? booksData.filter(book => book.title && book.title.trim() !== "")
    : [];
