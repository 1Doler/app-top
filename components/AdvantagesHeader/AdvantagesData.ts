import calendar from "./icons/calendar.svg";
import message from "./icons/message.svg";
import pc from "./icons/pc.svg";
import price from "./icons/price.svg";
import prog from "./icons/prog.svg";
import refund from "./icons/refund.svg";
import spin from "./icons/spin.svg";

export const icons = {
  calendar,
  message,
  pc,
  price,
  prog,
  refund,
  spin,
};

export type IconName = keyof typeof icons;

export interface IAdvantagesData {
  icon: IconName;
  title: string;
  description: string;
}

export const advantagesData: IAdvantagesData[] = [
  {
    icon: "prog",
    title: "Огромное количество практики",
    description:
      "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
  },
  {
    icon: "spin",
    title: "Современные методики обучения",
    description:
      "Спиральное обучение: погружаемся в материал постепенно, виток за витком",
  },
  {
    icon: "pc",
    title: "Простое и понятное изложение",
    description: "Вместо заумных терминов – примеры из реального мира",
  },
  {
    icon: "calendar",
    title: "Гибкий график занятий",
    description: "Учитесь в любое время в удобном для вас темпе",
  },
  {
    icon: "message",
    title: "Прямая связь с преподователями",
    description: "Задавайте вопросы и отправляйте свои решения на проверку",
  },
  {
    icon: "price",
    title: "Огромное количество практики",
    description:
      "Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу",
  },
  {
    icon: "refund",
    title: "Быстрый и легкий возврат",
    description: "Если передумаете учиться – вернем деньги за 3 рабочих дня",
  },
];
