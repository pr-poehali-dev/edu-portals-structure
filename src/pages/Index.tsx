import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('catalog');

  const categories = [
    { icon: 'Code2', title: 'Программирование', count: 45, color: 'bg-gradient-primary' },
    { icon: 'Palette', title: 'Дизайн', count: 32, color: 'bg-gradient-secondary' },
    { icon: 'TrendingUp', title: 'Маркетинг', count: 28, color: 'bg-gradient-accent' },
    { icon: 'Database', title: 'Аналитика', count: 19, color: 'bg-gradient-primary' },
    { icon: 'Megaphone', title: 'Менеджмент', count: 24, color: 'bg-gradient-secondary' },
    { icon: 'Languages', title: 'Языки', count: 36, color: 'bg-gradient-accent' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Fullstack разработка на React',
      description: 'Освойте современную веб-разработку с нуля до продакшена',
      category: 'Программирование',
      level: 'Средний',
      duration: '12 недель',
      students: 2847,
      rating: 4.9,
      price: '24 900 ₽',
      image: '🚀',
    },
    {
      id: 2,
      title: 'UI/UX Design: от идеи до прототипа',
      description: 'Создавайте пользовательские интерфейсы, которые любят',
      category: 'Дизайн',
      level: 'Начальный',
      duration: '8 недель',
      students: 1923,
      rating: 4.8,
      price: '19 900 ₽',
      image: '🎨',
    },
    {
      id: 3,
      title: 'Data Science & ML',
      description: 'Машинное обучение и анализ данных на Python',
      category: 'Аналитика',
      level: 'Продвинутый',
      duration: '16 недель',
      students: 1456,
      rating: 4.9,
      price: '34 900 ₽',
      image: '📊',
    },
    {
      id: 4,
      title: 'Digital маркетинг 2024',
      description: 'SMM, таргет, аналитика и стратегия продвижения',
      category: 'Маркетинг',
      level: 'Средний',
      duration: '10 недель',
      students: 3201,
      rating: 4.7,
      price: '21 900 ₽',
      image: '📱',
    },
  ];

  const myCourses = [
    {
      id: 1,
      title: 'Fullstack разработка на React',
      progress: 68,
      nextLesson: 'Урок 24: React Router и навигация',
      deadline: '12 дней',
    },
    {
      id: 2,
      title: 'UI/UX Design: от идеи до прототипа',
      progress: 42,
      nextLesson: 'Урок 15: Прототипирование в Figma',
      deadline: '5 дней',
    },
  ];

  const stats = [
    { label: 'Активных студентов', value: '125K+', icon: 'Users', color: 'text-primary' },
    { label: 'Курсов онлайн', value: '450+', icon: 'BookOpen', color: 'text-secondary' },
    { label: 'Экспертов', value: '89', icon: 'Award', color: 'text-accent' },
    { label: 'Средний рейтинг', value: '4.8', icon: 'Star', color: 'text-yellow-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-blue-50/30">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
              Э
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EduPortal
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost">Курсы</Button>
            <Button variant="ghost">Преподаватели</Button>
            <Button variant="ghost">О платформе</Button>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-gradient-secondary text-white border-0 px-4 py-1.5 text-sm">
              <Icon name="Sparkles" size={14} className="mr-1.5" />
              Новая образовательная платформа
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Учись у лучших,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                становись лучшим
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 450 курсов от экспертов индустрии. Практика, проекты для портфолио и помощь в трудоустройстве.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 h-14">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto animate-slide-up">
            {stats.map((stat, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6 pb-6">
                  <Icon name={stat.icon} size={32} className={`mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Популярные направления
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {categories.map((cat, idx) => (
              <Card
                key={idx}
                className="group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className={`w-16 h-16 rounded-2xl ${cat.color} mx-auto flex items-center justify-center text-white transform group-hover:scale-110 transition-transform`}>
                    <Icon name={cat.icon} size={28} />
                  </div>
                  <h3 className="font-semibold text-sm">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground">{cat.count} курсов</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="catalog" value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">Обучение</h2>
              <TabsList className="bg-white shadow-sm">
                <TabsTrigger value="catalog" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-white">
                  <Icon name="Grid3x3" size={16} className="mr-2" />
                  Каталог
                </TabsTrigger>
                <TabsTrigger value="my-courses" className="data-[state=active]:bg-gradient-secondary data-[state=active]:text-white">
                  <Icon name="GraduationCap" size={16} className="mr-2" />
                  Мои курсы
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="catalog" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all group hover:-translate-y-1">
                    <div className="h-48 bg-gradient-primary flex items-center justify-center text-8xl group-hover:scale-105 transition-transform">
                      {course.image}
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <Badge variant="outline" className="text-xs">{course.category}</Badge>
                        <div className="flex items-center gap-1 text-sm font-semibold">
                          <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                          {course.rating}
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                      <CardDescription className="text-sm">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Signal" size={12} />
                          {course.level}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={12} />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={12} />
                          {course.students.toLocaleString()}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {course.price}
                      </span>
                      <Button className="bg-gradient-primary hover:opacity-90">
                        Записаться
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="my-courses" className="space-y-6">
              <div className="grid gap-6">
                {myCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1 flex-1">
                          <CardTitle className="text-xl">{course.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm">
                            <Icon name="PlayCircle" size={14} />
                            {course.nextLesson}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary" className="ml-4">
                          <Icon name="Clock" size={12} className="mr-1" />
                          {course.deadline}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Прогресс обучения</span>
                          <span className="font-semibold">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-3" />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                          <Icon name="Play" size={16} className="mr-2" />
                          Продолжить
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="MoreVertical" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-secondary text-white border-0">
                <CardContent className="p-8 text-center space-y-4">
                  <Icon name="Trophy" size={48} className="mx-auto opacity-90" />
                  <h3 className="text-2xl font-bold">Продолжай в том же духе!</h3>
                  <p className="text-white/90 max-w-md mx-auto">
                    Ты прошёл уже 55% пути к завершению текущих курсов. Осталось совсем немного!
                  </p>
                  <Button variant="secondary" size="lg" className="mt-4">
                    <Icon name="Target" size={16} className="mr-2" />
                    Посмотреть все достижения
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
                  Э
                </div>
                <span className="text-xl font-bold">EduPortal</span>
              </div>
              <p className="text-sm text-slate-400">
                Современная образовательная платформа для профессионального развития
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Политика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Youtube" size={18} />
                </Button>
                <Button size="icon" variant="secondary" className="rounded-full">
                  <Icon name="Linkedin" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
            © 2024 EduPortal. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;