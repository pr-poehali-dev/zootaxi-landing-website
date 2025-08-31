import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      icon: "Trophy",
      title: "Выставки и соревнования",
      description: "Специализированная перевозка животных на выставки с комфортным сопровождением",
      price: "от 2500₽"
    },
    {
      icon: "Heart",
      title: "Ветеринарная клиника",
      description: "Безопасная доставка к ветеринару с минимальным стрессом для питомца",
      price: "от 800₽"
    },
    {
      icon: "Home",
      title: "Переезд с питомцем",
      description: "Организация переезда на новое место жительства с любимым питомцем",
      price: "от 1200₽"
    },
    {
      icon: "Plane",
      title: "Аэропорт / ЖД вокзал",
      description: "Трансфер к месту отправления для дальних поездок",
      price: "от 1500₽"
    }
  ];

  const tariffs = [
    {
      name: "Стандарт",
      price: "800₽",
      features: ["До 15 км", "Базовая переноска", "Опытный водитель", "SMS уведомления"]
    },
    {
      name: "Комфорт",
      price: "1200₽", 
      features: ["До 30 км", "Премиум переноска", "Ветеринарное сопровождение", "Фото-отчет поездки"],
      popular: true
    },
    {
      name: "VIP",
      price: "2500₽",
      features: ["Без ограничений", "Индивидуальный транспорт", "Персональный ветеринар", "Полное сопровождение"]
    }
  ];

  const reviews = [
    {
      name: "Мария К.",
      rating: 5,
      text: "Отвезли нашего кота на выставку. Все прошло отлично, кот приехал спокойный!",
      pet: "🐱"
    },
    {
      name: "Андрей П.",
      rating: 5,
      text: "Быстро доставили собаку к ветеринару. Водитель очень внимательный к животным.",
      pet: "🐕"
    },
    {
      name: "Елена С.",
      rating: 5,
      text: "Помогли с переездом. Три кошки перенесли поездку без стресса. Спасибо!",
      pet: "🐈"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-cyan-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Heart" size={48} className="text-primary mr-4" />
            <h1 className="text-5xl font-bold text-gray-800" style={{fontFamily: 'Montserrat'}}>
              ЗооТакси
            </h1>
          </div>
          <p className="text-2xl text-gray-600 mb-8 font-light" style={{fontFamily: 'Open Sans'}}>
            Заботливая перевозка ваших питомцев
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-secondary text-white">
              🏆 Выставки и соревнования
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4 border-primary text-primary">
              🚗 Безопасная перевозка
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4 border-accent text-accent">
              ⭐ Опытные водители
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать поездку
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{fontFamily: 'Montserrat'}}>
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl" style={{fontFamily: 'Montserrat'}}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed" style={{fontFamily: 'Open Sans'}}>
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary" style={{fontFamily: 'Montserrat'}}>
                      {service.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{fontFamily: 'Montserrat'}}>
            Тарифы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                tariff.popular ? 'ring-2 ring-primary scale-105 bg-gradient-to-br from-white to-primary/5' : 'bg-white/80'
              }`}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2" style={{fontFamily: 'Montserrat'}}>
                    {tariff.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-primary mb-4" style={{fontFamily: 'Montserrat'}}>
                    {tariff.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm" style={{fontFamily: 'Open Sans'}}>
                        <Icon name="Check" size={16} className="text-secondary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${
                      tariff.popular 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-secondary hover:bg-secondary/90 text-white'
                    }`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12" style={{fontFamily: 'Montserrat'}}>
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{review.pet}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800" style={{fontFamily: 'Montserrat'}}>
                        {review.name}
                      </h4>
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{fontFamily: 'Open Sans'}}>
                    {review.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8" style={{fontFamily: 'Montserrat'}}>
            Свяжитесь с нами
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'Montserrat'}}>Телефон</h3>
              <p className="text-gray-600" style={{fontFamily: 'Open Sans'}}>+7 (495) 123-45-67</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'Montserrat'}}>Режим работы</h3>
              <p className="text-gray-600" style={{fontFamily: 'Open Sans'}}>Круглосуточно</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'Montserrat'}}>География</h3>
              <p className="text-gray-600" style={{fontFamily: 'Open Sans'}}>Москва и область</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Heart" size={24} className="text-primary mr-2" />
            <span className="text-xl font-bold" style={{fontFamily: 'Montserrat'}}>ЗооТакси</span>
          </div>
          <p className="text-gray-400 mb-4" style={{fontFamily: 'Open Sans'}}>
            Заботливая перевозка ваших питомцев по Москве и области
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Phone" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="Mail" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-500">
            © 2024 ЗооТакси. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}