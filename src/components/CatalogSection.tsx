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

const CatalogSection = () => {
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
  );
};

export default CatalogSection;
