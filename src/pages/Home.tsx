import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { books } from '../data/books';
import { BookCard } from '../components/BookCard';

export const Home: React.FC = () => {
  const newBooks = books.filter(book => book.isNew);
  const onSaleBooks = books.filter(book => book.isOnSale);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000",
      title: "اكتشف عالم القراءة",
      description: "مجموعة متنوعة من أفضل الكتب العربية"
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2000",
      title: "أحدث الإصدارات",
      description: "تصفح أحدث الكتب المضافة لمكتبتنا"
    },
    {
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000",
      title: "عروض خاصة",
      description: "اكتشف خصوماتنا المميزة على الكتب"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="h-[60vh] w-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>
                <div className="relative h-full flex items-center justify-center text-center px-4">
                  <div className="max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-xl text-gray-200">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* New Books Slider */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            أحدث الإصدارات
          </h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
            loop={true}
            className="pb-12"
          >
            {newBooks.map(book => (
              <SwiperSlide key={book.id}>
                <BookCard book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* On Sale Books */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            عروض خاصة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onSaleBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};