import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, User, DollarSign, Calendar, Share2, ShoppingCart, Heart } from 'lucide-react';
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

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: book.title,
                text: book.description,
                url: window.location.href,
            });
        }
    };

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

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="md:grid md:grid-cols-2 gap-8 p-6">
                        {/* صورة الكتاب */}
                        <div className="mb-6 md:mb-0">
                            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    {book.isNew && (
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      جديد
                    </span>
                                    )}
                                    {book.isOnSale && (
                                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      تخفيض
                    </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* تفاصيل الكتاب */}
                        <div className="flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {book.title}
                                </h1>
                                <button
                                    onClick={handleShare}
                                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <User className="w-5 h-5 ml-2" />
                                    <span>المؤلف: {book.author}</span>
                                </div>

                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                    <DollarSign className="w-5 h-5 ml-2" />
                                    <span className="text-xl font-bold text-green-600">
                    {book.price} ج.م
                  </span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    عن الكتاب
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {book.description}
                                </p>
                            </div>

                            <div className="mt-auto space-y-3">
                                <button
                                    onClick={() => {
                                        const message = `مرحباً، أود شراء كتاب "${book.title}"`;
                                        const whatsappUrl = `https://wa.me/+201234567890?text=${encodeURIComponent(message)}`;
                                        window.open(whatsappUrl, '_blank');
                                    }}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    شراء عبر واتساب
                                </button>

                                <button
                                    className="w-full border-2 border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <Heart className="w-5 h-5" />
                                    إضافة إلى المفضلة
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* كتب مشابهة */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        كتب مشابهة
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {books
                            .filter(b => b.id !== book.id)
                            .slice(0, 4)
                            .map(relatedBook => (
                                <div
                                    key={relatedBook.id}
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                                    onClick={() => navigate(`/book/${relatedBook.id}`)}
                                >
                                    <div className="relative aspect-[3/4]">
                                        <img
                                            src={relatedBook.image}
                                            alt={relatedBook.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                                            {relatedBook.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {relatedBook.author}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};