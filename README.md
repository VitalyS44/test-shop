# Webpack 5 project

Масштабируемый шаблон настроек Webpack 5, включающий Babel, PostCSS, Less, Vue, сервер для разработки и оптимизированную сборку для продакшана.

## Installation / Установка

```
git clone https://github.com/VitalyS44/webpack-project.git
cd webpack-project
npm i / yarn
```

## Usage / Использование

### Development server / Сервер для разработки

```bash
npm start / yarn start
```

You can view the development server at `localhost:3000`.

Сервер запускается по адресу `localhost:3000`

### Production build / Сборка для продакшна

```bash
npm run build / yarn build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

> Примечание: установите [http-server](https://www.npmjs.com/package/http-server) глобально для запуска простого сервера.

```bash
npm i -g http-server / yarn global add http-server
```

You can view the deploy by creating a server in `dist`.

Вы можете увидеть результат сборки, создав сервер в `dist`

```bash
cd dist && http-server
```

## Author / Автор

-   [Vitaliy Sergienko]
