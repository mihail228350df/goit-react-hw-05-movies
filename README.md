Настройка pre-commit хуков 1 - Установка зависимостей Установить в проект
следующие пакеты.

npm install --save-dev prettier eslint 2 - Инициализация lint-staged и husky
Пользователям MacOS и Linux систем необходимо выполнить в терминале следующую
команду. Она установит и настроит husky и lint-staged в зависимости от
инструментов качества кода из зависимостей проекта в package.json.

npx mrm lint-staged Пользователям Windows необходимо выполнить следующую
команду. Она делает тоже самое.

npx mrm@2 lint-staged 3 - Интерграция плагинов Ссылки на документацию по
интеграции плагинов в популярные редакторы.

Prettier editor integration ESLint editor integration 4 - Настройки VSCode Для
комфортной работы, после установки плагинов, нужно добавить несколько настроек
редактора для автосохранения и форматирования файлов.

{ "files.autoSave": "onFocusChange", "editor.formatOnSave": true,
"editor.codeActionsOnSave": { "source.fixAll.eslint": true } }

Автоматичне форматування коду Prettier — це впевнений форматувальник коду з
підтримкою JavaScript, CSS і JSON. За допомогою Prettier ви можете форматувати
код, який ви пишете автоматично, щоб забезпечити стиль коду у вашому проекті.
Перегляньте сторінку Prettier's GitHub для отримання додаткової інформації та
перегляньте цю сторінку, щоб побачити це в дії .

Щоб форматувати наш код кожного разу, коли ми робимо комміт у git, нам потрібно
встановити такі залежності:

npm install --save husky lint-staged prettier В якості альтернативи ви можете
використовувати yarn:

yarn add husky lint-staged prettier huskyдозволяє легко використовувати
githooks, ніби вони є скриптами npm. lint-stagedдозволяє нам запускати сценарії
для поетапних файлів у git. Перегляньте цю публікацію в блозі про lint-staged,
щоб дізнатися більше про це . prettierце інструмент форматування JavaScript,
який ми будемо запускати перед фіксацією. Тепер ми можемо переконатися, що кожен
файл відформатовано правильно, додавши кілька рядків до package.jsonкореня
проекту.

Додайте такий рядок до scriptsрозділу:

"scripts": {

- "precommit": "lint-staged", "start": "react-scripts start", "build":
  "react-scripts build", Далі ми додаємо поле «lint-staged» до package.json,
  наприклад:

"dependencies": { // ... },

- "lint-staged": {
- "src/\*_/_.{js,jsx,json,css}": [
-     "prettier --single-quote --write",
-     "git add"
- ]
- }, "scripts": { Тепер, коли ви робите фіксацію, Prettier автоматично
  форматуватиме змінені файли. Ви також можете запустити
  ./node\*modules/.bin/prettier --single-quote --write
  "src/\*\*/\_.{js,jsx,json,css}"форматування всього проекту вперше.

Далі ви можете інтегрувати Prettier у свій улюблений редактор. Прочитайте розділ
про інтеграцію редактора на сторінці Prettier GitHub.

Тепер, коли ви робите фіксацію, Prettier автоматично форматуватиме змінені
файли. Ви також можете запустити

`./node_modules/.bin/prettier --single-quote --write "src/**/*.{js,jsx,json,css}"`

форматування всього проекту вперше.

Далі ви можете інтегрувати Prettier у свій улюблений редактор. Прочитайте розділ
про інтеграцію редактора на сторінці Prettier GitHub.

https://github.com/luxplanjay/fe-03-react#formatting-code-automatically
https://github.com/goitacademy/react-lint-staged-workshop