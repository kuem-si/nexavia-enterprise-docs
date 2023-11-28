# Documentation for Nexavia Enterprise

Technology: https://astro.build/

Base theme: https://starlight.astro.build/

## Prerequisites
- Node.js: https://nodejs.org/

## Recommendations
- Update **npm**: ``npm install -g npm@latest``

## Project generation command
- Install current Starlight template (in the current folder): ``npm create astro@latest -- --template starlight``

## Run development
- Install dependencies: ``npm install``
- Run solution: ``npm run dev``

## Upgrading based theme (template)
- Upgrading process of base theme is manual. There is folder named **_ThemeUpgrade** with subfolders *Current* and *New*.
- Generated base theme version which is currently in use should always be present in *Current* folder **without any modifications**.
- Newer version of base theme should be generated in *New* folder with command which is written under section **Project generation command**.
- Compare content of *Current* and *New* folders with tool like WinMerge: https://winmerge.org/
- Make all changes in actual project.
- Copy content from *New* folder to *Current* folder and delete content inside *New* folder

## IMPORTANT
There should be filename named ``CNAME`` (no file extension!) inside ``public`` folder with correct URL name of deployed application (e.g.: docs.enterprise.nexavia.io).

## Writing documentation
- Update menu in file astro.config.mjs
- Create subfolders inside ``src\content\docs`` with ``.md`` files
- Look Markdown syntax and Starlight examples