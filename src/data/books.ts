import booksData from './csvjson (1).json';

type Book = {
    id: number;
    title: string;
    author: string;
    price: number | string;
    image: string;
    description: string;
    isOnSale: string;
};

// تأكيد أن booksData هو مصفوفة من نوع Book[]
const books: Book[] = Array.isArray(booksData) ? booksData as Book[] : [];

// تصفية البيانات لإزالة الكتب الفارغة
export const filteredBooks = books.filter(book => book.title && book.title.trim() !== "");
