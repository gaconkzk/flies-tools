# flies-tools

For now is just a experiment project

## Tech stacks

`tauri` applications with ~~`SvelteKit`~~ `Svelte` as frontend

- use `plyr` and `openplayerjs` as video player
- use `unocss` for css design

### Problems and solved

- ~~[x] `SvelteKit` default use ssr so some client only modules can't be load, and tauri not support ssr, just static. So we need to disable ssr using `hooks.js` and use `@sveltejs/adapter-static` for build~~ Removed `SvelteKit` because ssr or server render is not my target. It also cause video players can't run on `Safari`
- ~~[x] Similar, we also need to use clients mode when import browser only library, so I decided use `vite-plugin-iso-import` for adding `?client` suffix into import statement, there some other ways but this one is the best (for now use this for `@tauri-apps/api` and `openplayerjs`)~~ Removed `vite-plugin-iso-import` I don't need this anymore, I'm client only
- main's `index.html` MUST in root folder - for multiple pages worked

## Plan

- [ ] Sidebar with simple (icon only) and expanded state (200px width) for functionality of a application
- [ ] Code runner sandbox runner - evaluate solution with provided testcases ??? lot of time - may be dropped if not interested in this anymore
- [ ] Code typing speed racing - join, challenge others on speed code typing racing (up to 8, allow watch, ranking system ...) ??? lot of time - may be dropped if not interested in this anymore
- [ ] Video watcher - watch film with link/list (watch together, stream) ??? may be dropped if not interested in this any more
- [ ] Manga flies - read manga - edit manga text for translation - auto apply translated text on image ??? (AI, machine learning, ocr, lot of work) may be dropped if not have enough time
- [ ] Novel books - read book - edit and translated (easier than manga)

## some new and may be cool
- [ ] p2p system - join flies networks - distributed apps runner ??? lot of work and time research - may be dropped if not interested in this any more
- [ ] This will be root application and can easily integrate with other app using `qiankun` MFE architechture (FE only/ or BE integrated) ??? lot of time - may be dropped if not interested in `qiankun` anymore

> I'll add/remove when I like