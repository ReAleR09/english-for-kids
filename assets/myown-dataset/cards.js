import { CONF_ROOT_PATH } from '../../config';

const MY_DATASET_DIR = `${CONF_ROOT_PATH || ''}/assets/myown-dataset/`;
const myCategories = ['computers', 'food'];

const cardsEn = {
  computers: [
    'display',
    'keyboard',
    'key',
    'router',
    'cable',
    'mouse',
    'desktop',
    'power',
  ],
  food: [
    'sugar',
    'salt',
    'bread',
    'milk',
    'juice',
    'orange',
    'cucumber',
    'grape',
  ],
};

const cardsRu = {
  computers: [
    'экран',
    'клавиатура',
    'клавиша',
    'маршрутизатор',
    'кабель',
    'мышка',
    'рабочий стол',
    'питание',
  ],
  food: [
    'сахар',
    'соль',
    'хлеб',
    'молоко',
    'сок',
    'апельсин',
    'огурец',
    'виноград',
  ],
};

const result = [];
myCategories.forEach((catName) => {
  const cardsNames = cardsEn[catName];
  const cards = cardsNames.map((cardName, index) => {
    const translation = cardsRu[catName][index];
    return {
      word: cardName,
      translation,
      audioSrc: `${MY_DATASET_DIR}${catName}/${cardName}.mp3`,
      image: `${MY_DATASET_DIR}${catName}/${cardName}.jpg`,
    };
  });

  const category = {
    title: catName,
    image: cards[0].image,
    cards,
  };

  result.push(category);
});


export default result;
