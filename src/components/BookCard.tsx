import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const handlePurchase = () => {
    const message = `مرحباً، أود شراء كتاب "${book.title}"`;
    const whatsappUrl = `https://wa.me/+201554229848?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{book.title}</h3>
          {book.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">جديد</span>
          )}
          {book.isOnSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">تخفيض</span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{book.author}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{book.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900 dark:text-white">{book.price} ج.م</span>
          <button
            onClick={handlePurchase}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
          >
            شراء عبر الواتساب
          </button>
        </div>
      </div>
    </div>
  );
};