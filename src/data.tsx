import Ferrari250GTO from './images/ferrari_250_gto.jpg';
import BugattiAtlantic from './images/bugatti_type57sc_atlantic.jpg';
import Mercedes300SL from './images/mercedes_300sl.jpg';
import AstonDB4 from './images/aston_db4_gt_zagato.jpg';
import LamborghiniMiura from './images/lamborghini_miura_sv.jpg';
import Porche550 from './images/porsche-550-spyder.jpg';
import Maserati from './images/Maserati.jpg';
import Jaguar from './images/jaguar.jpg';

export interface CarData {
    id: number;           // <-- Добавили id
    img: string;
    title: string;
    description: string[];
}

const structures: CarData[] = [
    {
        id: 1,            // <-- Добавили id
        img: Ferrari250GTO,
        title: "Ferrari 250 GTO", 
        description: [
            `Легендарный GT-автомобиль, созданный для гонок и ставший символом итальянского дизайна.`
        ],
    },   
    {
        id: 2,            // <-- Добавили id
        img: BugattiAtlantic,
        title: "Bugatti Type 57SC Atlantic", 
        description: [
            `Уникальное купе с алюминиевым кузовом и культовым «гребнем» по всей длине автомобиля.`
        ]
    },
    {
        id: 3,            // <-- Добавили id
        img: Mercedes300SL, 
        title: "Mercedes-Benz 300SL Gullwing", 
        description: [
            `Первый дорожный автомобиль с прямым впрыском и узнаваемыми дверями-«крыльями чайки».`
        ]
    },
    
    {
        id: 4,            // <-- Добавили id
        img: AstonDB4,
        title: 'Aston Martin DB4 GT Zagato',
        description: [
            `Облегчённая гоночная версия классического DB4, созданная ателье Zagato.`
        ] 
    },
    {
        id: 5,            // <-- Добавили id
        img: LamborghiniMiura,
        title: "Lamborghini Miura SV",  
        description: [
             `Финальная и самая совершенная модификация Miura, ставшая эталоном суперкаров 1970-х.`
        ]
    },
    {
        id: 6,            // <-- Добавили id
        img: Ferrari250GTO,  
        title: "Ferrari 250 GTO",
        description: [
            `Один из самых ценных коллекционных автомобилей мира.`
        ]
    },
    
    {
        id: 7,            // <-- Добавили id
        img: Jaguar,
        title: "Jaguar XKSS", 
        description: [
            `Лимитированная дорожная версия гоночного D-Type, созданная для клиентов, мечтавших о почти гоночной машине на каждый день.`
        ],
    },   
    
    {
        id: 8,            // <-- Добавили id
        img: Ferrari250GTO,
        title: "Alfa Romeo 33 Stradale", 
        description: [
            `Один из самых красивых спорткаров 1960-х: среднемоторный V8, двери «крыло бабочки» и экстремально лёгкий гоночный кузов.`
        ]
    },
    
    {
        id: 9,            // <-- Добавили id
        img: Maserati, 
        title: "Maserati 250F", 
        description: [
            `Формульный болид 1950-х, на котором Фанхио и другие легенды побеждали в Гран-при.`
        ]
    },
    
    {
        id: 10,           // <-- Добавили id
        img: Ferrari250GTO,
        title: 'Ferrari 250 GTO',
        description: [
            `Омологационная GT-модель начала 1960-х с лёгким кузовом Scaglietti и гоночной аэродинамикой.`
        ] 
    },
    
    {
        id: 11,           // <-- Добавили id
        img: Porche550,
        title: "Porsche 550 Spyder",  
        description: [
             `Компактный и лёгкий родстер с центральным мотором, прославившийся успехами в гонках.`
        ]
    },
    
    {
        id: 12,           // <-- Добавили id
        img: BugattiAtlantic,
        title: "Bugatti Type 57SC Atlantic",  
        description: [
            `Разделённые панели кузова и длинный капот делают Atlantic скульптурой на колёсах.`
        ]
    },
    
    {
        id: 13,           // <-- Добавили id
        img: Mercedes300SL,
        title: 'Mercedes-Benz 300SL Gullwing',
        description: [
            `Пространственная рама и механический впрыск Bosch задали новый стандарт для спорткаров.`  
        ] 
    },
   
    {
        id: 14,           // <-- Добавили id
        img: LamborghiniMiura,
        title: 'Lamborghini Miura SV',
        description: [
            `Впервые объединила среднемоторную компоновку, выдающийся дизайн.`
        ]
    },
    
    {
        id: 15,           // <-- Добавили id
        img: AstonDB4,
        title: 'Aston Martin DB4 GT Zagato',
        description: [
            `Лёгкая, быстрая и редкая версия DB4, подготовленная ателье Zagato.`
        ]
    },
];

export default structures;