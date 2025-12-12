import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

const InfoSections = () => {
  return (
    <>
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="glass-effect rounded-2xl p-12 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Badge className="mb-6 gradient-primary text-white border-0">О компании</Badge>
              <h2 className="text-4xl font-bold mb-6 text-gradient">
                Эксперты премиального качества
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                LUXTECH — это более 15 лет опыта в сфере премиальной бытовой техники. 
                Мы работаем напрямую с производителями, гарантируя подлинность и эксклюзивность 
                каждой единицы товара.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Официальная гарантия</h4>
                    <p className="text-sm text-muted-foreground">До 5 лет расширенной гарантии на всю технику</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Премиум доставка</h4>
                    <p className="text-sm text-muted-foreground">Бесплатная доставка и установка по Москве</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Поддержка 24/7</h4>
                    <p className="text-sm text-muted-foreground">Персональный менеджер и техподдержка</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-6 rounded-xl border border-border/50 text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">15+</h3>
                <p className="text-sm text-muted-foreground">Лет на рынке</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-border/50 text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Премиум брендов</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-border/50 text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">10K+</h3>
                <p className="text-sm text-muted-foreground">Довольных клиентов</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-border/50 text-center">
                <h3 className="text-4xl font-bold text-gradient mb-2">99%</h3>
                <p className="text-sm text-muted-foreground">Рейтинг качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-6 gradient-accent text-white border-0">Доставка</Badge>
          <h2 className="text-4xl font-bold mb-4 text-gradient">Премиум сервис доставки</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы заботимся о каждом этапе — от оформления заказа до установки техники у вас дома
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'Package',
              title: 'Упаковка премиум-класса',
              description: 'Многослойная защита и индивидуальная упаковка для каждого товара'
            },
            {
              icon: 'MapPin',
              title: 'Доставка в удобное время',
              description: 'Выбор точного времени доставки с уведомлением за час'
            },
            {
              icon: 'Settings',
              title: 'Установка и настройка',
              description: 'Профессиональная установка и настройка техники специалистом'
            }
          ].map((item, index) => (
            <Card key={index} className="glass-effect border-border/50 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={item.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="warranty" className="container mx-auto px-6 py-20">
        <div className="glass-effect rounded-2xl p-12 border border-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 gradient-primary text-white border-0">Гарантия и обслуживание</Badge>
            <h2 className="text-4xl font-bold mb-6 text-gradient">Ваше спокойствие — наш приоритет</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Каждая единица техники поставляется с официальной гарантией производителя. 
              Мы предлагаем расширенные программы обслуживания и ремонта.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Расширенная гарантия до 5 лет</h4>
                  <p className="text-sm text-muted-foreground">Полное покрытие всех деталей и работ</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Бесплатное ТО в первый год</h4>
                  <p className="text-sm text-muted-foreground">Регулярная профилактика и диагностика</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Замена техники в день обращения</h4>
                  <p className="text-sm text-muted-foreground">При невозможности ремонта на месте</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Горячая линия поддержки</h4>
                  <p className="text-sm text-muted-foreground">Консультации специалистов 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <Badge className="mb-6 gradient-accent text-white border-0">Блог</Badge>
          <h2 className="text-4xl font-bold mb-4 text-gradient">Советы и рекомендации</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Экспертные статьи о выборе, использовании и уходе за премиальной техникой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Как выбрать идеальную кофемашину',
              excerpt: 'Разбираемся в типах кофемашин и находим идеальную под ваши потребности',
              date: '10 декабря 2024',
              category: 'Руководство'
            },
            {
              title: 'Умный холодильник: функции будущего',
              excerpt: 'Обзор инновационных технологий в современных холодильниках премиум-класса',
              date: '8 декабря 2024',
              category: 'Технологии'
            },
            {
              title: 'Уход за премиальной техникой',
              excerpt: 'Простые правила, которые продлят срок службы вашей техники на годы',
              date: '5 декабря 2024',
              category: 'Советы'
            }
          ].map((article, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-primary/50 transition-all group cursor-pointer animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">{article.category}</Badge>
                <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{article.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Calendar" size={14} />
                  <span>{article.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contacts" className="container mx-auto px-6 py-20">
        <div className="glass-effect rounded-2xl p-12 border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-6 gradient-primary text-white border-0">Контакты</Badge>
              <h2 className="text-4xl font-bold mb-6 text-gradient">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Наши эксперты готовы помочь вам с выбором техники и ответить на все вопросы
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@luxtech.ru</p>
                    <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Шоурум</h4>
                    <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                    <p className="text-sm text-muted-foreground">Пн-Вс: 10:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl border border-border/50">
              <h3 className="font-semibold text-xl mb-6">Задайте вопрос</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <input
                    id="name"
                    type="text"
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <input
                    id="email"
                    type="email"
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Расскажите, чем мы можем помочь..."
                  />
                </div>
                <Button type="submit" className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
