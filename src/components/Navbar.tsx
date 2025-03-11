import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ShoppingBag, Info } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-xl font-bold text-gray-800 dark:text-white">
              <BookOpen className="w-6 h-6 mr-2" />
              <span> عبدو باشا </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              الرئيسية
            </Link>
            <Link to="/shop" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              <ShoppingBag className="w-5 h-5 inline-block ml-1" />
              التسوق
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2">
              <Info className="w-5 h-5 inline-block ml-1" />
              عن المكتبة
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
