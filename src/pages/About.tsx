import React from 'react';
import { BookOpen, Phone, Mail, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
            عن مكتبتنا
          </h1>
          
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              مرحباً بكم في مكتبتنا الإلكترونية، وجهتكم المفضلة للكتب المميزة والمعرفة القيمة.
              نحن نسعى لتقديم أفضل تجربة تسوق للكتب عبر الإنترنت.
            </p>
            
            <p>
              نفخر بتقديم مجموعة متنوعة من الكتب في مختلف المجالات، من الأدب والتاريخ
              إلى العلوم والتكنولوجيا والتنمية الذاتية.
            </p>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                تواصل معنا
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 ml-2" />
                  <span>+201554229848</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 ml-2" />
                  <span>info@bookstore.com</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 ml-2" />
                  <span>القاهرة، مصر</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};