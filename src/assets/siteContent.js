import project1 from "./projects/project1.webp";
import project4 from "./projects/project4.webp";
import project2 from "./projects/project2.webp";
import project3 from "./projects/project3.webp";
import review1 from "./reviews/review1.webp";
import review2 from "./reviews/review2.webp";
import review3 from "./reviews/review3.webp";

export const stats = [
  { label: "лет частной практики", value: 12, suffix: "+" },
  { label: "интерьеров реализовано", value: 148, suffix: "" },
  { label: "клиентов пришли по рекомендации", value: 64, suffix: "" }
];

export const projects = [
  {
    id: "aurora",
    title: "Резиденция «Аврора»",
    location: "Москва, Хамовники",
    area: "186 м²",
    format: "Семейные апартаменты",
    timeline: "8 месяцев",
    description:
      "Интерьер для семьи с двумя детьми: спокойная палитра, длинные линии света, отдельный тихий блок спален и общая зона, в которой удобно собираться каждый день.",
    image: project1
  },
  {
    id: "monolith",
    title: "Лофт «Монолит»",
    location: "Санкт-Петербург, Петровский остров",
    area: "214 м²",
    format: "Лофт с авторской мебелью",
    timeline: "10 месяцев",
    description:
      "Здесь всё держится на контрасте фактур: тёмный камень, тёплое дерево и мягкий рассеянный свет. Пространство получилось строгим, но не холодным.",
    image: project2
  },
  {
    id: "vista",
    title: "Пентхаус у моря",
    location: "Сочи, Морской фасад",
    area: "242 м²",
    format: "Пентхаус с панорамой",
    timeline: "9 месяцев",
    description:
      "Светлый интерьер с большими окнами, плавными формами и материалами, которые не спорят с видом. Главная задача здесь — не перекрыть воздух и горизонт.",
    image: project3
  },
  {
    id: "frame",
    title: "Квартира «Ракурс»",
    location: "Казань, исторический центр",
    area: "138 м²",
    format: "Городская квартира",
    timeline: "6 месяцев",
    description:
      "Компактный городской интерьер, где каждый метр работает: встроенное хранение, выразительные вертикали, спокойная спальня и гибкая гостиная для повседневной жизни.",
    image: project4
  }
];

export const testimonials = [
  {
    id: "review-1",
    image: review1,
    author: "Екатерина и Андрей",
    project: "Резиденция «Аврора»"
  },
  {
    id: "review-2",
    image: review2,
    author: "Ирина С.",
    project: "Пентхаус у моря"
  },
  {
    id: "review-3",
    image: review3,
    author: "Михаил К.",
    project: "Лофт «Монолит»"
  }
];

export const services = [
  {
    id: "concept",
    title: "Концепция интерьера",
    text: "Определяем характер пространства, палитру, материалы и общий ритм будущего интерьера."
  },
  {
    id: "planning",
    title: "Планировка и сценарии",
    text: "Пересобираем квартиру под реальную жизнь: маршруты, хранение, приватные зоны и свет."
  },
  {
    id: "supervision",
    title: "Авторское сопровождение",
    text: "Следим за стройкой, согласуем решения с подрядчиками и удерживаем качество на каждом этапе."
  },
  {
    id: "furnishing",
    title: "Комплектация",
    text: "Подбираем мебель, свет, сантехнику, текстиль и предметы, чтобы интерьер не развалился в деталях."
  }
];