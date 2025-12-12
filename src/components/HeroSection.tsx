import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
