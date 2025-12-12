import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const products = [
  {
    id: 1,
    name: 'Премиум кофемашина Deluxe X1',
    brand: 'Deluxe',
    category: 'Кофемашины',
    price: 249990,
    image: 'https://cdn.poehali.dev/projects/476ed6fb-d006-4947-b1be-daa28ad11520/files/84abe9d5-2543-409a-8989-6cde04b98ce1.jpg',
    features: ['Автоматическая', 'Капучинатор', 'Wi-Fi'],
    rating: 4.9
  },
  {
    id: 2,
    name: 'Холодильник Smart Vision Pro',
    brand: 'Vision',
    category: 'Холодильники',
    price: 389990,
    image: 'https://cdn.poehali.dev/projects/476ed6fb-d006-4947-b1be-daa28ad11520/files/023b2780-235e-466f-b7bd-01cef5bd4ffd.jpg',
    features: ['Smart Home', 'No Frost', 'LED подсветка'],
    rating: 5.0
  },
  {
    id: 3,
    name: 'Стиральная машина Elite Wash',
    brand: 'Elite',
    category: 'Стиральные машины',
    price: 179990,
    image: 'https://cdn.poehali.dev/projects/476ed6fb-d006-4947-b1be-daa28ad11520/files/a9989042-efd6-4142-9273-a8667d40c4a5.jpg',
    features: ['AI управление', 'Тихая работа', 'Eco режим'],
    rating: 4.8
  },
  {
    id: 4,
    name: 'Мультиварка PremiumChef 5000',
    brand: 'PremiumChef',
    category: 'Мультиварки',
    price: 89990,
    image: 'https://cdn.poehali.dev/projects/476ed6fb-d006-4947-b1be-daa28ad11520/files/84abe9d5-2543-409a-8989-6cde04b98ce1.jpg',
    features: ['30 программ', 'Голосовое управление', 'Керамическое покрытие'],
    rating: 4.7
  },
  {
    id: 5,
    name: 'Духовой шкаф MasterBake Ultra',
    brand: 'MasterBake',
    category: 'Духовые шкафы',
    price: 159990,
    image: 'https://cdn.poehali.dev/projects/476ed6fb-d006-4947-b1be-daa28ad11520/files/023b2780-235e-466f-b7bd-01cef5bd4ffd.jpg',
    features: ['Конвекция', 'Пиролиз', 'Touch дисплей'],
    rating: 4.9
  },
  {
    id: 6,
    name: 'Посудомоечная машина AquaPure',
    brand: 'AquaPure',
    category: 'Посудомоечные машины',
    price: 129990,
    image: 'https://cdn.poehali.dev/projects/476ed6fb-d006-4947-b1be-daa28ad11520/files/a9989042-efd6-4142-9273-a8667d40c4a5.jpg',
    features: ['Тихая работа', 'Сушка Zeolith', 'Эко режим'],
    rating: 4.8
  }
];

const brands = ['Все бренды', 'Deluxe', 'Vision', 'Elite', 'PremiumChef', 'MasterBake', 'AquaPure'];
const categories = ['Все категории', 'Кофемашины', 'Холодильники', 'Стиральные машины', 'Мультиварки', 'Духовые шкафы', 'Посудомоечные машины'];

const Index = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 400000]);
  const [sortBy, setSortBy] = useState('popular');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const toggleCart = (id: number) => {
    setCart(prev =>
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const filteredProducts = products.filter(product => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return brandMatch && categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <Badge className="mb-6 gradient-accent text-white border-0">
              Эксклюзивная коллекция 2024
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient leading-tight">
              Бытовая техника премиум-класса
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Откройте для себя мир инновационных технологий от ведущих мировых брендов. 
              Эксклюзивные модели, безупречное качество, индивидуальный подход.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary text-white border-0 hover:opacity-90 transition-opacity">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Новинки
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="space-y-6 animate-slide-up">
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Icon name="Filter" size={20} className="text-primary" />
                  Фильтры
                </h3>

                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-semibold mb-3 block">Цена</Label>
                    <div className="space-y-4">
                      <Slider
                        min={0}
                        max={400000}
                        step={10000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="mb-2"
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{priceRange[0].toLocaleString()} ₽</span>
                        <span>{priceRange[1].toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="text-sm font-semibold mb-3 block">Бренды</Label>
                    <div className="space-y-3">
                      {brands.filter(b => b !== 'Все бренды').map(brand => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox
                            id={brand}
                            checked={selectedBrands.includes(brand)}
                            onCheckedChange={() => toggleBrand(brand)}
                          />
                          <Label htmlFor={brand} className="text-sm cursor-pointer">
                            {brand}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label className="text-sm font-semibold mb-3 block">Категории</Label>
                    <div className="space-y-3">
                      {categories.filter(c => c !== 'Все категории').map(category => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={category}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                          />
                          <Label htmlFor={category} className="text-sm cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedBrands([]);
                        setSelectedCategories([]);
                        setPriceRange([0, 400000]);
                      }}
                      className="w-full"
                    >
                      <Icon name="X" size={16} className="mr-2" />
                      Сбросить фильтры
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Каталог техники</h2>
                <p className="text-muted-foreground mt-1">
                  Найдено товаров: {filteredProducts.length}
                </p>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="rating">Рейтинг</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Card
                  key={product.id}
                  className="group glass-effect border-border/50 hover:border-primary/50 transition-all duration-300 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-10 w-10 rounded-full glass-effect"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Icon
                          name="Heart"
                          size={18}
                          className={favorites.includes(product.id) ? 'fill-red-500 text-red-500' : ''}
                        />
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 gradient-accent text-white border-0">
                      {product.brand}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="text-accent fill-accent" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{product.category}</span>
                    </div>

                    <h3 className="font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gradient">
                          {product.price.toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button
                      className="w-full gradient-primary text-white border-0 hover:opacity-90 transition-opacity"
                      onClick={() => toggleCart(product.id)}
                    >
                      <Icon name={cart.includes(product.id) ? "Check" : "ShoppingCart"} size={18} className="mr-2" />
                      {cart.includes(product.id) ? 'В корзине' : 'В корзину'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры фильтрации
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default Index;
