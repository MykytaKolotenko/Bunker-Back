const fs = require('fs/promises');
const path = require('path');

const data = {
	proffesion: [
		'Полицейский',
		'Стриптизер',
		'Слесарь',
		'Парикмахер',
		'Таксист',
		'Директор предприятия',
		'Учитель',
		'Рекрутер',
		'Аналитик',
		'Историк',
		'Переводчик',
		'Вирусолог',
		'Имиджмейкер',
		'Актер',
		'Ландшафтный дизайнер',
		'Блогер',
		'Хирург',
		'Ветеринар',
		'Эколог',
		'Маляр',
		'Судья',
		'Следователь',
		'Пожарный',
		'Кинолог ',
		'Гувернантка ',
		'Адвокат',
		'Дегустатор',
		'Шеф-повар',
		'Бармен',
		'Секретарь',
		'Курьер',
		'Дворецкий',
		'Страховой агент',
		'Электрик',
		'Психолог',
		'Продавец-консультант',
		'Автомеханик',
		'Агроном',
		'Экономист',
		'Брокер',
		'Налоговый инспектор',
		'Фитнес тренер',
		'Диджей',
		'Клоун',
		'Каскадер',
		'Продюссер',
		'Астрофизик',
		'Онколог ',
		'Фотограф',
		'Капитан специального назначения',
		'Адмирал (Военно-Морской Флот России)',
		'Кондуктор',
		'Президент Югославии',
		'Жигало ',
		'Космонавт',
		'Безработный',
		'Комик',
		'Инженер',
		'Дворецкий',
		'Архитектор',
		'Строитель',
		'Сексолог',
		'Учитель',
		'Депутат',
		'Физик ядерщик',
		'Астроном',
		'ВДВшник',
		'Порноактер',
		'Вебкам модель',
		'Инженер',
	],
	additional_info: [
		'Является мастером спорта по боксу',
		'Имеет 2 высших образования',
		'Является резидентом Comedy Club',
		'Верит в пришельцев',
		'Хорошо знает высшую математику',
		'Умеет ориентироваться по звездам',
		'Может оказать первую помощь',
		'Проходил(а) курс по самообороне',
		'Проходил курсы по выживанию',
		'Знает наизусть все стихи Пушкина',
		'Читал(а) книгу про выживание на необитаемом острове',
		'Сидел(а) в тюрьме',
		'По первому образованию - терапевт',
		'Верит в сверхъестественных существ',
		'Спасал(а) утопающего',
		'Быстро бегает',
		'Побывал(а) в восемнадцати странах',
		'Разговаривает на 3 языках',
		'Умеет делать оружие из любой херни',
		'Ненавидит современную музыку',
		'Побывал(а) на вершине Эвереста',
		'Увлекается охотой',
		'Является копрофилом',
		'Ведёт личный дневник',
		'Гадает по картам',
		'Пережил(а) три покушения',
		'Продал(а) почку',
		'Может оказать первую помощь',
		'Был(а) вожатым в лагере',
		'Любит показывать карточные фокусы',
		'Верит в экстрасенсов',
		'Спасал(а) утопающего',
		'Ворует кошельки',
		'Страдает морской болезнью',
		'Проходил курсы сексолога',
		'Ограбил(а) банк',
		'Проходил(а) курсы кулинарии',
		'Умеет делать и чинить часы',
		'Любит мягкие игрушки',
		'Читал книги про зомби',
		'Думает что эта катастрофа - заговор рептилий',
		'Шулер',
		'Проходил(а) курсы массажа',
		'Думает что живет в матрице',
		'Владеет хорошей спортивной подготовкой',
		'Умеет вскрывать замки',
		'Умеет варить пиво',
		'Хорошо знает высшую математику',
		'Смотрел фильмы про апокалипсис',
		'Занял(а) первое место на марафоне',
		'Умеет стрелять',
		'Поставил(а) мировой рекорд по поеданию бургеров',
		'Хорошо ладит с животными',
		'IQ меньше 70',
		'IQ 150',
		'Входил в топ-100 богатейших людей в мире',
		'Осужден за педофилию',
		'Перфекционист',
		'Зоофил',
		'Феноменальная память',
		'Стратег',
		'Имеет суицидальные наклонности',
		'Имеет садистские наклонности',
		'Свингер',
	],
	baggage: [
		'Стерильные одноразовые шприцы',
		'Зажигалка',
		'Семена',
		'Четыре рации',
		'Компас',
		'Пистолет с одним патроном',
		'Кофе',
		'Комиксы',
		'Фильтр для воды',
		'Рулоны туалетной бумаги',
		'Стерильные одноразовые шприцы',
		'Три респираторные маски',
		'Консервы',
		'Аптечка',
		'Скрипка',
		'Попугай',
		'Коробка пазлов',
		'Грудной ребёнок',
		'Ноутбук',
		'Четыре рации',
		'Карманные часы',
		'Карты таро',
		'Коробка с боеприпасами',
		'Пачка сигарет',
		'Компьютер',
		'Запас шоколадок на две недели',
		'Лук и стрелы',
		'Плюшевый медведь',
		'Зажигалка',
		'Книга по социологии',
		'Набор инструментов',
		'Фильтр для воды',
		'Губная гармошка',
		'Семена',
		'Ящик пива',
		'Тесак',
		'1кг марихуаны',
		'Три респираторные маски',
		'Книга по социологии',
		'Настольные игры',
		'Топор и веревка',
		'Компас',
		'Бутылка водки',
		'200грамм кокса',
		'Золотые сережки',
		'Журнал с кроссвордами',
		'Пачка сигарет',
		'Фонарик и запасные батарейки',
		'Принтер',
		'Книга по выживанию',
		' Коробок спичек',
		'Попугай',
		'Настольные игры',
		'Фотоаппарат',
		'Книги',
		'Набор для шитья',
		'Газовая горелка',
		'Радиоуправляемая машинка',
		'Противогаз',
		'Собака',
		'Пистолет с одним патроном',
		'Дедовское ружьё',
		'Сотовый телефон',
		'Десять одноразовых медицинских масок',
		'Пачка презервативов',
		'Коробка с боеприпасами',
		'Ребенок 12 лет',
		'Кошка',
		'Набор кухонных приборов',
		'Мясо',
		'Семена пшеницы',
		'Кофе',
		'Только что использованый презерватив',
		'Воображаемый друг',
		'Стрелы',
	],
	bunker_data: [
		'Кухня',
		'Медпункт с большим набором лекарств',
		'Столовая',
		'Комната для массажа',
		'Детская комната',
		'Склад с едой',
		'Склад с медикаментами',
		'Операционная',
		'Тренажерный зал',
		'Звукозаписывающая студия',
		'Комната для пыток',
		'Винный погреб',
		'Порно студия',
		'Библиотека со всеми обучающими книгами в мире',
		'Комната с супер мощным телескопом (самая важная часть бункера)',
		'Оружейная',
		'Теплица',
		'Рассадник',
		'Ящик с оружием',
		'Ящик с патронами',
		'Набор инструментов',
		'Материалы для строительства',
		'Граната',
		'Кофемашина',
		'Гитара ',
		'Барабаны',
		'Книжная полка с детскими книжками',
		'Книжная полка с литературой про зомби',
		'Книжная полка с научной литературой',
		'Книжная полка с порно журналами',
		'Книги по психологии',
		'Сборник журналов ',
		'Сделай сам',
		'Полка с настольными играми',
		'Осцилограф',
		'Пара прожекторов',
		'Детские игрушки',
		'Пара автоматов',
		'Пара самурайских мечей',
		'Рекурсивный лук',
	],
	additional_card: [
		'Указаный тобой игрок раскрывает любую характеристику по вашему выбору',
		'В 20 м от бункера есть склад с оружием',
		'В 100 м от вас есть бункер с мужчинами(Здоровыми и Плодовитыми)',
		'Данная карта даёт вам возможность поменять способность к деторождению любого игрока на противоположный',
		'Указаный тобой игрок раскрывает одну характеристику по вашему выбору',
		'В 30 м от бункера есть погреб с вином',
		'Указаный тобой игрок раскрывает свое здоровье',
		'В 50 м от вас есть бункер с женщинами(С возмощностью производства наследия 3 раза, после они умирают (господи зачем так сложно???))',
		'Поблизости находится агресивно настроенный бункер (ну очень агрессивно настроеный бункер)',
		'Вы можете активировать карту №2 указаного тобой игрока по выбору',
		'Указаный тобой игрок раскрывает одну характеристику по вашему выбору',
		'Ваш бункер находится около пресного озера',
		'Вы можете активировать карту №1 указаного тобой игрока по выбору',
		'Защищает любого игрока на один ход(кроме вас)',
		'Лечит любого игрока, включая вас',
		'Аннулирование всех профессий',
		'НЕОЖИДАННЫЙ ПОВОРOТ (поблизости есть еще один бункер 300м.кв. с набором первой мед помощи, телевизором и всемя частями Американского пирога',
		'При равном количестве голосов на вылет, ты остаешься в игре, противник вылетает (разыгрывать в саааааааамый последний момент =))',
		'Аннулирование всех профессий',
		'Заткни противника (запрещено разговаривать на обсуждении)',
		'На територии бункера находиться зоопарк (вот и нахер он нам нужен?)',
		'Указаный тобой игрок раскрывает любую характеристику ',
		'Указаный тобой игрок раскрывает одну характеристику по вашему выбору',
		'В бункере нету света',
		'Присваивает выбранному игроку еще одну рандомную фобию',
		'Замена хобби из колоды ',
		'замена телосложения из колоды',
		'замена возраста с колоды',
		'обмена возрастом с любым игроком',
		'обмен телосложения с любым игроком',
		'В 1000 м от вас есть бункер с мужчинами(Здоровыми и Плодовитыми)',
		'В 3км от вас есть бункер с мужчинами(Не здоровыми, но Плодовитыми)',
		'В 100 м от вас есть бункер с мужчинами(Здоровыми и Плодовитыми)',
		'В 10км от вас есть бункер с женщинами(Здоровыми и Плодовитыми)',
		'В 150 м от вас есть бункер с женщинами(Не здоровыми, но Плодовитыми)',
		'В 700 м от вас есть бункер с женщинами(Здоровыми и Плодовитыми)',
		'Данная карта даёт вам возможность поменять способность к деторождению любого игрока на противоположный',
		'Иммунитет на голосовании, на следующем кругу нужно выгнать двоих',
		'НЕОЖИДАННЫЙ ПОВОРOТ (у тебя украли багаж, теперь ты можешь украсть чужой)',
		'Укради чужой багаж (плохой поступок, но кому не похер?)',
		'Все узнают что поблизости находится заброшенная аптека',
		'Позволяет вам скрыть любую одну характеристику и не рассказывать о ней',
		'Все узнают что рядом есть бункер с двумя молодыми женщинами-медиками 30 лет',
		'Изменить свой багаж на новый',
		'Ваш голос считается за два ',
		'Вернуть игрока в бункер',
		'Поменяться хобби с другим игроком',
		'Обмен профессиями слева направо',
		'Вы можете заставить игрока замолчать на голосовании',
		'Ты можешь обменять свою фобию на фобию другого игрока',
		'Поменяться багажом с другим игроком',
		'Вернуть игрока в игру',
		'Убирает одно место в бункере',
		'Обмен профессиями справа налево',
		'Ты можешь поменять свою карту фобии на новую',
		'Друг(Игрок после тебя обязательно должен попасть в бункер)',
		'Друг(Игрок перед тобой обязательно должен попасть в бункер)',
		'Ты можешь поменять свою карту профессии на новую из колоды',
		'Добавляет одно место в бункере',
		'Враг(Игрок перед тобой не должен попасть в бункер)',
		'У тебя есть защита на 1 игровой круг (Если против твоего персонажа максимальное кол-во голосов)',
		'НЕОЖИДАННЫЙ ПОВОРТ (каждый персонаж должен разыграть одну из карт действий)',
		'Вы можете перекинуть чужой голос на другого игрока',
		'Враг(Игрок после тебя не должен попасть в бункер)',
		'Убирает одно место в бункере',
		'НЕОЖИДАННЫЙ ПОВОРТ (анулирует чужую карту действия)',
		'Добавляет одно место в бункере',
		'Поменяться здоровьем с другим игроком',
		'Поменяться багажом с другим игроком',
		'Поменяться доп инфой с другим игроком',
		'Замена всех професий',
		'Замена возраста для всех',
		'Замена здоровья для всех',
		'Замена всех фобий из колоды',
	],
	character_info: [
		'Вспыльчивый',
		'Обидчивый',
		'Понимающий',
		'Равнодушный',
		'Лицемерный',
		'Честный',
		'Грубый',
		'Мелочный',
		'Понимающий',
		'Гнусный',
		'Бесстрашный',
		'Грамотный',
		'Доверчивый',
		'Обидчивый',
		'Вежливость',
		'Алчный',
		'Образованный',
		'Деспотичный',
		'Неграмотный',
		'Вредный',
		'Яростный',
		'Болтливый',
		'Гордый',
		'Брезгливый',
		'Депрессивный',
		'Бесстыдный',
		'Навязчивый',
		'Коварный',
		'Заботливый',
		'Закрытый',
		'Душевный',
		'Аскетизм',
		'Капризный',
		'Доверчивый',
		'Высокомерие',
		'Герой',
		'Настойчивый',
		'Двуличный',
		'Искренный',
		'Жалкий',
		'Жестокий',
		'Бережливый',
		'Великодушный',
		'Агрессивный',
		'Смешной',
		'Болтливый',
		'Гуманный',
		'Властный',
		'Безумный',
		'Ленивый',
		'Жадный',
		'Тихий',
		'Добрый',
		'Стевозный',
		'Раздражительний',
		'Искустный пьяница',
	],
	global_event: [
		'Закончилась третяя, ядерная, мировая война, по крайней мере в это хочется верить, так как уничтожено 99.9% населения земли, оставшиеся люди успели укрыться в бункерах, что придется сделать и нам. Облака пепла закрыли небо на долгие годы( ядерная зима) все растения и животные погибли. Время ожидания в бункере - 20 лет',
		'Мир в анархии, массовые терракты по всему миру. Взрыв на химическом заводе в атмосферу попало много ядовитых паров, заражена земля и вода. К счастью в нашем небольшом городке был бункер времён холодной войны, где можно переждать. Остаток населения Земли 5 миллионов человек у которых иммунитетом к яду. Нахождение в бункере - 3 года (пока ядовитый газ не изчезнет)',
		'Классический зомби апокалипсис как в фильмах, армия не справляется с толпами заражённых. Единственный способ группе выживших спастись, это переждать в бункере как минимум 20 лет, пока все на поверхности не умрут.',
		'Произошел глобальный потоп, в следствии чего население земли сократилось до 2 миллионов человек, осталось только 15% суши, изменился кардинально климат, на тропический, нужно будет привыкать к новым растениям и животным (крупные растения и насекомые). Срок пробывания в бункере 2 года.',
		'Химическая война. В результате применения химического и бактериологического оружия был нарушен микробиологический состав почв значительно изменился экологический баланс растения почва и вода были отравлены. На Земле остался малый процент населяющих её живых существ. Остаток выжившего населения: 1% ',
		'Инопланетная раса решила захватить Землю Межпланетные аппараты падают на поверхность планеты один за другим Оружие военных оказывается бессильным против них и постепенно пришельцы истребляют большую часть населения После выхода из бункера подавляющее большинство инопланетян погибло из-за неприспособленности к микроорганизмами населяющими Землю Остаток выжившего населения: 1% ',
		'Суперкомпьютер. Искусственный интеллект который задумывался для управления системами обороны вышел из строя и посчитал человечество большой опасностью. Это привело к тому что искусственный интеллект отключил инструкцию не убивать человека и взял под контроль процедуры управления военными роботами которые начали истреблять человечество. Суперкомпьютер захватил власть над планетой выжившим людям пришлось прятаться в старых бункерах. Остаток выжившего населения: 4%',
		'На планету падает космический объект огромных размеров создавая мощную ударную волну которая сносит все на своем пути. На месте падения образовывается масштабный кратер. Повсюду проходят сильные землетрясения и цунами. Пожары охватывают всю Землю а из-за количество пыли которое поднялось в атмосферу на планете настает долгая ядерная зима. Остаток выжившего населения: 30% ',
		'Проект «A.N. USA» Военные работавшие над проектом нечаянно открыли вход в иное измерение. Густой неестественный белый туман медленно начал заполонять огромные участки поверхности Видимость практически нулевая. По миру стали бродить неведомые чудовища которые могут уничтожить все человечество. Разрушения глобальные. Остаток выжившего населения: 0,1%',
		'Взрыв Йеллоустонского супервулкана пошатнул Землю выброшенный в атмосферу пепел закрыл Солнце на несколько месяцев. На планете началась ядерная зима средняя температура опустилась на 11 градусов погибли пять из каждых шести населявших Землю существ Климат существенно изменился. На планете теперь царит глобальная засуха ',
	],
	health: [
		'Плоскостопие',
		'Слепота',
		'Сифилис',
		'Болезнь Альцгеймера',
		'Астма',
		'Депрессия',
		'Астма',
		'Диарея',
		'Сахарный диабет',
		'Глухой',
		'Нет ног',
		'Эпилепсия',
		'Шизофрения ',
		'Глухо-немой',
		'Заикание',
		'Аллергия на лекарства',
		'Сифилис',
		'Туберкулез',
		'Без руки',
		'Диабет',
		'Гастрит',
		'Биполярка',
		'СПИД ',
		'СПИД',
		'Язва желудка',
		'Без руки',
		'Несвертываемость крови',
		'Мигрени',
		'Кластерные головные боли',
		'Рак',
		'Слепота',
		'Бесплодие',
		'Бесплодие',
		'Кариес',
		'Бессонница',
		'Бессонница',
		'Бронхит',
		'Аллергия на шерсть',
		'Немой',
		'Рак',
		'Паранойя',
		'Косоглазие',
		'Дальтонизм',
		'ВИЧ ',
		'Плоскостопие',
		'Полностью здоровый',
		'Без ногтя',
		'Без пальца',
		'Без пальца ноги',
		'Здоров',
		'Бешенство',
		'Деменция',
	],
	hobbies: [
		'Бодибилдинг',
		'Пение',
		'Верховая езда',
		'Рыбалка',
		'Виноделие',
		'Скалолазание',
		'Теннис',
		'Бег',
		'Взламывание замков',
		'Резьба по дереву',
		'Нумизматика',
		'Чтение',
		'Шахматы',
		'Фитнес',
		'Восточные танцы',
		'Катание на велосипеде',
		'Игра на гитаре',
		'Хиромантия',
		'Плавание',
		'Готовка',
		'Рукоделие',
		'Стриптиз',
		'Лыжи',
		'Верховая езда',
		'Боевые искусства',
		'Восточные танцы',
		'Будущий киберспортсмен (задрот)',
		'Стрельба',
		'Собирание пазлов',
		'Резьба по дереву',
		'Футбол',
		'Танцы',
		'Хиромантия',
		'Блоггерство',
		'Рыбалка',
		'Дартс',
		'Граффити',
		'Паркур',
		'Бильярд',
		'Готовка',
		'Зоология',
		'Любит собирать грибы',
		'Виноделие',
		'Резьба по металлу',
		'Садоводство',
		'Плавание',
		'Пикап',
		'Программирование',
		'Психология',
		'Татуировки и пирсинг',
		'Йога',
		'Алкоголизм',
		'Эксгибиционизм',
		'Умеет выживать в дикой природе',
		'Серфинг',
		'Фокусы',
		'Футбол',
		'Поход',
		'Сурвивализм',
		'Боевые искусства',
		'Метание ножей',
		'Езда на мотоцикле',
		'Сомелье',
		'Охота',
		'Историческая реконструкция',
		'Волонтёрство',
	],
	phobia: [
		'Вестифобия (Боязнь одеваться)',
		'Блаттофобия (Страх при виде тараканов/жуков)',
		'Гоплофобия (Боязнь при виде огнестрельного оружия)',
		'Гаптофобия (Боязнь касаний)',
		'Никрофобия (Боязнь темноты)',
		'Птеронофобия (Боязнь птичьих перьев)',
		'Нет фобий',
		'Аблутофобия (Боится плавать)',
		'Барофобия (Боязнь поднимать тяжести)',
		'Пирофобия – боязнь огня',
		'Виккафобия (Боязнь колдовства)',
		'Вагинофобия (Страх перед женскими гениталиями)',
		'Нет фобий',
		'Антофобия (Боязнь цветов)',
		'Нумерофобия (Боязнь чисел)',
		'Нет фобий',
		'Вагинофобия (Страх перед женскими гениталиями)',
		'Гравидофобия (Боязнь беременности)',
		'Эремофобия – боязнь одиночества',
		'Андрофобия (Боязнь мужчин и полового акта с ними)',
		'Айхмофобия – боязнь острых предметов',
		'Реектофобия – боязнь отказа',
		'Ахлуофобия – боязнь темноты',
		'Некрофобия – боязнь трупов',
		'Барофобия (Боязнь поднимать тяжести)',
		'Нет фобий',
		'Социофобия',
		'Кинофобия (Боязнь собак)',
		'X‑ФОБИЯ – боязнь буквы X',
		'Инсектофобия (Боязнь и страх всех насекомых)',
		'Блаттофобия (Страх при виде тараканов/жуков)',
		'Атихифобия – боязнь неудачи',
		'Анирофобия (Паникует во время перехода через улицу)',
		'Гоплофобия (Боязнь при виде огнестрельного оружия)',
		'Социофобия',
		'АНТРОПОФОБИЯ – боязнь людей',
		'ГИМНОФОБИЯ – боязнь наготы',
		'Гоплофобия (Боязнь при виде огнестрельного оружия)',
		'Алгофобия (Паника при боли)',
		'АНУПТАФОБИЯ – боязнь холостого образа жизни',
		'Вагинофобия (Страх перед женскими гениталиями)',
		'Нумерофобия (Боязнь чисел)',
		'Фелинофобия – боязнь кошек',
		'АутоМизофобия (Боязнь испачкаться)',
		'Мониторофобия – боязнь наблюдения',
		'Ятрофобия – боязнь врачей',
		'Вестифобия (Боязнь одеваться)',
		'Мелофобия (Боязнь музыки) Мизофобия (Боязнь грязи и микробов)',
		'Рипофобия – боязнь грязи',
		'Спермофобия – боязнь микробов',
		'АРКТОФОБИЯ – боязнь плюшевых мишек',
		'ГИНЕФОБИЯ – боязнь женщин',
		'ГОПЛОФОБИЯ – боязнь огнестрельного оружия',
		'ЗООФОБИЯ – боязнь животных (домашних)',
		'ИНФЕРТИЛИОФОБИЯ – боязнь бесплодия',
		'КАТАРАКТОФОБИЯ – боязнь катаракты',
		'КИМОФОБИЯ – боязнь волн',
		'ЛЕОНТОФОБИЯ – боязнь львов',
		'ЛАТЕКСОФОБИЯ – боязнь латекса',
		'МАММАФОБИЯ – боязнь груди',
		'МУСОФОБИЯ – боязнь мышей',
		'НЕГРОФОБИЯ – боязнь чернокожих людей',
		'ЭВРОТОФОБИЯ – боязнь влагалища',
		'ЭНТОМОФОБИЯ – боязнь насекомых',
		'ЭККЛЕСИОФОБИЯ – боязнь церквей',
	],
	weight_data: [
		'Анорексия',
		'Ожирение (1 степень)',
		'Дефицит веса',
		'Норма',
		'Спортивное',
		'Накачаное',
		'Перекачанное',
		'Ожирение (2 степень)',
	],
};

const parameters = {
	haveChild: [true, false],
	gender: [true, false],
	maxAge: 80,
	minAge: 18,
	minAverageAge: 33,
	maxAverageAge: 36,
	percentageNegative: 30,
	percentagePositive: 55,
	maxBunkerSquare: 280,
	minBunkerSquare: 80,
	maxPlayers: 16,
	minPlayers: 8,
};

// Creates an array of the property names from the 'data' object.
const keys = Object.keys(data);

// Maps over the 'keys' array to create SQL table creation statements for each key and concatenates them into a single string with two newline characters as separators.
const tables = keys
	.map(
		(item) => `create table ${item} (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    ${item} VARCHAR
);`,
	)
	.join('\n \n');

// Flattens out the 'data' object, maps over its arrays and creates SQL insertion statements for each item. It concatenates these statements into a single string with newline characters as separators.
const sqlQuone = keys
	.flatMap((item) =>
		data[item].map((data) => `insert into ${item} (${item}) values ('${data}');`),
	)
	.join('\n');

// Gets the absolute path to the add_data.sql file
const PATH = path.resolve(__dirname, 'add_data.sql');

// Write SQL code to add_data.sql file, by joining the string created from 'tables', '\n \n' separator, and the string created from 'sqlQuone'
fs.writeFile(PATH, [tables, '\n \n', sqlQuone]);
