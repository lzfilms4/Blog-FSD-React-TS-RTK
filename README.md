# Blog-FSD-React-TS-RTK

Блог, реализованный на стеке **React + TypeScript + Redux Toolkit** с использованием методологии **Feature-Sliced Design (FSD)**.

### Основные технологии

-   **React** — библиотека для построения пользовательских интерфейсов
-   **TypeScript** — типизация JavaScript-кода
-   **Redux Toolkit** — современный инструмент для управления состоянием
-   **React Router** — маршрутизация
-   **i18next** — мультиязычность
-   **Jest** — тестирование
-   **Storybook** — разработка UI-компонентов
-   **SCSS** — стилизация
-   **Feature-Sliced Design** — архитектурный подход к организации фронтенд-проектов

## Структура проекта

Проект организован по FSD-архитектуре:

-   `src/app` — инициализация приложения, провайдеры, глобальные стили
-   `src/entityes` — бизнес-сущности (Пользователь, Профиль, Статья и т.д.)
-   `src/features` — отдельные фичи (авторизация, форма комментариев и т.д.)
-   `src/pages` — страницы приложения
-   `src/shared` — переиспользуемые компоненты, утилиты, константы, типы
-   `src/widgets` — крупные UI-блоки (Navbar, Sidebar и т.д.)

## Запуск проекта

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm start
```

### Запуск json-server (локальный mock API)

```bash
npm run server
```

### Запуск Storybook

```bash
npm run storybook
```

### Запуск тестов

```bash
npm test
```

## Мультиязычность

Локализации хранятся в папке `public/locales`. Поддерживаются как минимум русский и английский языки.

## Темизация

В проекте реализовано несколько тем (светлая, тёмная, оранжевая). Переключение темы доступно через UI.

## Скрипты

-   `npm run lint` — запуск линтера
-   `npm run test` — запуск тестов
-   `npm run storybook` — запуск Storybook
-   `npm run build` — сборка проекта
