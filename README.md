# My Wishes

Стек: Vue 3 + TypeScript + Vuetify (Vite) для фронтенда, PHP 8.2 (без фреймворков) + Nginx + MySQL в Docker.

## Архитектура
- **Frontend**: Vue 3 + TS + Vuetify, запускается в dev режиме с hot reload (порт 5173)
- **Backend**: PHP 8.2 FPM + Nginx как веб-сервер (порт 8080)
- **Database**: MySQL 8.0 (порт 3306)

## Структура
- `frontend/` — SPA на Vue 3 + TS + Vuetify, сборка Vite
- `backend/` — PHP (классы, простой роутинг), точка входа `public/index.php`
- `nginx/` — Dockerfile и конфиг для веб-сервера
- `compose.yml` — Docker Compose для всего проекта

## Запуск
1. Соберите и запустите контейнеры:
   ```bash
   docker compose up -d --build
   ```
2. Откройте:
   - **Фронтенд** (dev режим): `http://localhost:5173`
   - **API**: `http://localhost:8080/api/hello`
   - **Backend info**: `http://localhost:8080`

## Детали
- Nginx работает как веб-сервер для PHP бэкенда
- Frontend запускается в dev режиме с hot reload
- Vite проксирует `/api` запросы на nginx (8080)
- `GET /api/hello` возвращает JSON `{ "message": "Hello world" }`
- MySQL запускается в контейнере (db: `mywishes`, user/pass: `app/app`, root: `root`)

## Разработка
- Изменения в `frontend/` автоматически перезагружаются
- Изменения в `backend/` требуют перезапуска PHP контейнера
- Логи можно смотреть: `docker compose logs -f [service_name]`
