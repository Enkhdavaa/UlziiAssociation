# Ulzii Association

Website for the Ulzii Association — a non-profit organization connecting people from Mongolia and the Netherlands through cultural exchange, community events, and a shared book library.

## Tech Stack

- **[Astro](https://astro.build/)** — SSR framework (`output: "server"`)
- **[Deno](https://deno.com/)** — runtime + `@deno/astro-adapter`
- **[Deno KV](https://deno.com/kv)** — built-in key-value database for events, books, and leads
- **Three-language i18n** — Mongolian (`/mn`), English (`/en`), Dutch (`/nl`)

## Getting Started

Requires [Deno](https://deno.com/) v2+.

```bash
# Start dev server (http://localhost:8080)
deno task dev

# Build for production
deno task build

# Run the built server
deno task serve

# Clean build artifacts and caches
deno task clean
```

## Project Structure

```
src/
├── components/       # Shared UI components (Header, Footer, EventCard)
├── i18n/             # Translation dictionaries (en.ts, mn.ts, nl.ts) + utils
├── layouts/          # MainLayout wrapping all pages
├── lib/
│   ├── kv.ts         # Deno KV data layer (events, books, leads)
│   └── utils.ts      # Shared utilities (formatDate, formatTime)
├── pages/
│   ├── [lang]/       # Localized pages — home, event, books, contact, support
│   ├── api/          # API endpoints (book requests, contact, volunteer leads)
│   ├── event/        # Legacy routes (redirect to /mn/event)
│   └── books/        # Legacy routes (redirect to /mn/books)
└── styles/           # Global CSS (forms, layout)
```

## Localization

All UI text is translated. The default locale is Mongolian (`/mn`).

To update or add translations, edit the files in `src/i18n/`:

- `en.ts` — source of truth; defines all translation keys
- `mn.ts` — Mongolian translations (`satisfies Translations`)
- `nl.ts` — Dutch translations (`satisfies Translations`)

Adding a new key: add it to `en.ts` first, then TypeScript will flag missing keys in `mn.ts` and `nl.ts`.

## Features

### Events

Upcoming events are listed at `/[lang]/event`. Past events are automatically hidden. Each event can accept a volunteer storyteller via the lead sign-up form at `/[lang]/event/monthly-book-reading/lead`.

### Book Library

Community-donated books are browsable at `/[lang]/books`. Visitors can request a book; the team arranges pickup. Book status: `available`, `using`, or `reserved`.

### Donate Books

Members can donate books by contacting the association via `/[lang]/support/donate-books`.

## Data (Deno KV)

All data is stored in Deno KV. The data layer lives in `src/lib/kv.ts`. Key namespaces:

| Namespace | Contents                                  |
| --------- | ----------------------------------------- |
| `events`  | Upcoming events with date, time, location |
| `books`   | Book library with title, language, status |
| `leads`   | Volunteer sign-ups linked to an event ID  |
