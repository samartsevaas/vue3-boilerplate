# Vue boilerplate

## About

Project was build on Vue 3 version using Composition API.

Core dependencies:

- Vue-router
- Pinia
- Vue-query
- Mitt

## Structure

    .
    ├── src
    |   ├── api
    |   |   ├── base
    |   |        ├── BaseClient.ts
    |   ├── assets
    |   ├── components
    |   ├── declarations
    |   |    ├── env.d.ts
    |   |    ├── pinia.d.ts
    |   |    ├── shims-vue.d.ts
    |   ├── env
    |   ├── layouts
    |   ├── router
    |   |    ├── guards
    |   |    |   ├── _index.ts
    |   |    ├── modules
    |   |    |   ├── _index.ts
    |   |    ├── index.ts
    |   ├── shared
    |   |    ├── emmiter
    |   |    ├── models
    |   |    ├── query-plugin
    |   |    ├── utils
    |   |    ├── composables
    |   |    ├── types
    |   ├── store
    |   ├── styles
    |   |    ├── abstracts
    |   |    ├── base
    |   |    ├── components
    |   |    ├── helpers
    |   |    ├── layouts
    |   |    ├── vendors
    |   |    ├── styles.scss
    |   ├── views
    |   ├── App.vue
    |   ├── main.ts
    ├── tsconfig.json
    └── vite.config.json

### Folders

I advise you to watch as reference - [Folder Structure Conventions](https://github.com/kriasoft/Folder-Structure-Conventions/blob/master/README.md)

**api** - Contains all api call services. Where each service must be inherited from BaseClient.

**views** - Contains all application pages.

**styles/base** - Contains the default styles that will be applied to the page after loading.

**styles/abstracts** - The folder contains all of variables / value for the projects components and etc.

**styles/helpers** - The folder gathers all Sass tools and helpers used across the project. Every global function, mixin and placeholder should be put in here.

**styles/components** - For smaller components, there is the `components/` folder. While `layout/` is macro (defining the global wireframe), `components/` is more focused on widgets.
