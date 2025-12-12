import { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const queryClient = new QueryClient();

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <header className="sticky top-0 z-50 glass-effect border-b border-border/50">
              <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <Icon name="Zap" size={20} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gradient">LUXTECH</span>
                  </Link>

                  <div className="hidden lg:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                      Каталог
                    </Link>
                    <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                      О нас
                    </a>
                    <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">
                      Доставка
                    </a>
                    <a href="#warranty" className="text-sm font-medium hover:text-primary transition-colors">
                      Гарантия
                    </a>
                    <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
                      Блог
                    </a>
                    <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">
                      Контакты
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="relative">
                      <Icon name="Heart" size={20} />
                      {favCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs gradient-primary">
                          {favCount}
                        </Badge>
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" className="relative">
                      <Icon name="ShoppingCart" size={20} />
                      {cartCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs gradient-primary">
                          {cartCount}
                        </Badge>
                      )}
                    </Button>

                    <Sheet>
                      <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon">
                          <Icon name="Menu" size={24} />
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-72">
                        <div className="flex flex-col gap-4 mt-8">
                          <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                            Каталог
                          </Link>
                          <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                            О нас
                          </a>
                          <a href="#delivery" className="text-lg font-medium hover:text-primary transition-colors">
                            Доставка
                          </a>
                          <a href="#warranty" className="text-lg font-medium hover:text-primary transition-colors">
                            Гарантия
                          </a>
                          <a href="#blog" className="text-lg font-medium hover:text-primary transition-colors">
                            Блог
                          </a>
                          <a href="#contacts" className="text-lg font-medium hover:text-primary transition-colors">
                            Контакты
                          </a>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </nav>
            </header>

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <footer className="glass-effect border-t border-border/50 mt-20">
              <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                        <Icon name="Zap" size={20} className="text-white" />
                      </div>
                      <span className="text-xl font-bold text-gradient">LUXTECH</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Премиальная бытовая техника от лучших мировых брендов
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Навигация</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><Link to="/" className="hover:text-primary transition-colors">Каталог</Link></li>
                      <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                      <li><a href="#delivery" className="hover:text-primary transition-colors">Доставка</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Поддержка</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li><a href="#warranty" className="hover:text-primary transition-colors">Гарантия</a></li>
                      <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                      <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">Контакты</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Icon name="Phone" size={16} />
                        <span>+7 (495) 123-45-67</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Mail" size={16} />
                        <span>info@luxtech.ru</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="MapPin" size={16} />
                        <span>Москва, ул. Примерная, 1</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
                  <p>© 2024 LUXTECH. Все права защищены.</p>
                </div>
              </div>
            </footer>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
