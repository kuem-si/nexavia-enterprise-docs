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
- Go inside ``/Docs`` folder in terminal
- Install dependencies (**run always after fetching from git and/or running the solution**): ``npm install``
- Run solution: ``npm run dev``

## Upgrading based theme (template)
- Upgrading process of base theme is manual. There is folder named **_ThemeUpgrade** with subfolders *Current* and *New*.
- Before generating new version update
  - Nodejs
  - npm: ``npm install -g npm@latest``
- Generated base theme version which is currently in use should always be present in *Current* folder **without any modifications**.
- Newer version of base theme should be generated in *New* folder with command which is written under section **Project generation command**.

  Install dependencies = **Yes**

  Typescript = **Yes (Strict)**

  Init new git repo = **No**

- Compare content of *Current* and *New* folders with tool like WinMerge: https://winmerge.org/
- Make all changes in actual project.
- Copy content from *New* folder to *Current* folder and delete content inside *New* folder

-----

- When upgrading, always:

  - delete ``node_modules`` folder (inside ``/Docs`` folder)
  - replace ``package-lock.json`` file with new one (inside ``/Docs`` folder)
  - compare ``package.json`` (inside ``/Docs`` folder) with new one. **Change also ``name`` attribute with new one.**
  - run ``npm install`` (inside ``/Docs`` folder)
  - run ``npm run dev`` (inside ``/Docs`` folder) and check if everything is ok