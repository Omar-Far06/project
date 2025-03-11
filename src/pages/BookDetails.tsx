import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, User, DollarSign, Calendar } from 'lucide-react';
import { books } from '../data/books';

export const BookDetails: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const book = books.find(b => b.id === Number(id));

    if (!book) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        الكتاب غير موجود
                    </h1>
                    <button
                        onClick={() => navigate('/shop')}
                        className="inline-flex items-center text-green-600 hover:text-green-700"
                    >
                        <ArrowRight className="ml-2 w-5 h-5" />
                        العودة إلى المتجر
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <button
                    onClick={() => navigate('/shop')}
                    className="inline-flex items-center text-green-600 hover:text-green-700 mb-6"
                >
                    <ArrowRight className="ml-2 w-5 h-5" />
                    العودة إلى المتجر
                </button>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <img
                                src={book.image}
                                alt={book.title}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>

                        <div className="p-6 md:w-1/2">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {book.title}
                                </h1>
                                <div className="flex flex-col gap-2">
                                    {book.isNew && (
                                        <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                      جديد
                    </span>
                                    )}
                                    {book.isOnSale && (
                                        <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                      تخفيض
                    </span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <User className="w-5 h-5 ml-2" />
                                    <span>المؤلف: {book.author}</span>
                                </div>

                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <DollarSign className="w-5 h-5 ml-2" />
                                    <span>السعر: {book.price} ج.م</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    عن الكتاب
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {book.description}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    const message = `مرحباً، أود شراء كتاب "${book.title}"`;
                                    const whatsappUrl = `https://wa.me/+201234567890?text=${encodeURIComponent(message)}`;
                                    window.open(whatsappUrl, '_blank');
                                }}
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                            >
                                <BookOpen className="w-5 h-5 ml-2" />
                                شراء عبر واتساب
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};