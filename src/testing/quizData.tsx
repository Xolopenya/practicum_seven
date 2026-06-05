export type tTasks = {
  "question": string;
  "answer": string | string[] | boolean; 
}[];

export type tQuizzes = {
  "id": number;
  "type": "M" | "S" | "C";
  "title": string;
  "tasks": tTasks;
  "multiple"?: boolean; 
}[];

export const quiz: tQuizzes = [
  {
    id: 1,
    type: "M",
    title: "Сопоставьте марку автомобиля и страну производителя.",
    tasks: [
      { question: "Ferrari", answer: "Италия" },
      { question: "Bugatti", answer: "Франция" },
      { question: "Porsche", answer: "Германия" },
      { question: "Aston Martin", answer: "Великобритания" },
    ]
  },

  {
    id: 2,
    type: "M",
    title: "Сопоставьте модель автомобиля и год выпуска.",
    tasks: [
      { question: "250 GTO", answer: "1963" },
      { question: "F40", answer: "1989" },
      { question: "Enzo", answer: "2003" },
      { question: "Veyron", answer: "2006" },
    ]
  },

  {
    id: 3,
    type: "S",
    title: "Расположите модели в порядке возрастания года выпуска.",
    tasks: [
      { question: "Type 57SC Atlantic", answer: "1937" },
      { question: "250 GTO", answer: "1963" },
      { question: "F40", answer: "1989" },
      { question: "Veyron", answer: "2006" },
      { question: "Chiron", answer: "2018" },
    ]
  },

  {
    id: 4,
    type: "S",
    title: "Расположите автомобили в порядке убывания мощности (л.с.).",
    tasks: [
      { question: "Bugatti Chiron", answer: "1500" },
      { question: "Koenigsegg One:1", answer: "1360" },
      { question: "Ferrari Enzo", answer: "660" },
      { question: "Porsche 911 Carrera RS", answer: "210" },
    ]
  },

  {
    id: 5,
    type: "C",
    title: "Какой автомобиль имеет самую высокую оценочную стоимость?",
    multiple: false,
    tasks: [
      { question: "Ferrari 250 GTO", answer: false },
      { question: "Bugatti Type 57SC Atlantic", answer: true },
      { question: "Mercedes-Benz 300SL Gullwing", answer: false },
      { question: "McLaren F1", answer: false }
    ]
  },

  {
    id: 6,
    type: "C",
    title: "Какие из этих автомобилей произведены в Италии? (выберите все верные)",
    multiple: true,
    tasks: [
      { question: "Ferrari F40", answer: true },
      { question: "Lamborghini Countach", answer: true },
      { question: "Porsche 959", answer: false },
      { question: "Pagani Zonda", answer: true },
      { question: "Aston Martin DB5", answer: false }
    ]
  },
];