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
-----

## Branding (Nexavia Enterprise identity)
- The site uses the Nexavia Enterprise identity from the public `kuem-si/nexavia-brand-assets` release (currently `v1.6.0`): the Enterprise lockup (`Docs/src/assets/brand/`), favicons (`Docs/public/`), the tokens (`Docs/src/styles/vendor/nexavia.tokens.css`) and Schibsted Grotesk (`@fontsource/schibsted-grotesk`, OFL).
- These files are unchanged copies. To update them, copy the new files from a newer brand-assets tag; never edit them here.
- `Docs/src/styles/nexavia-theme.css` maps Starlight's colour variables to the Nexavia tokens. It holds no colour values of its own. Light and dark follow Starlight's theme switch; high contrast follows the system setting.
- Tier cards use Nexavia's categorical data colours, never status colours.

## Conformance evidence
The site uses the Nexavia Enterprise identity from `nexavia-brand-assets` (tokens, lockup, favicon). Kuem governance checks it against the shared accessibility contracts with rendered evidence this repository generates:

- Inside ``/Docs``: ``npm run build`` and then ``npm run conformance``. This renders every page in light, dark, light high contrast and dark high contrast at 1440 and 390 px and writes ``conformance/evidence.json`` (repository root) for the current commit. Commit your changes first; the evidence names the commit it was measured on.
- Pull requests run the same measurement as a check (``.github/workflows/verify.yml``, ``npm run conformance -- --check``), which writes nothing.
- Never edit ``conformance/evidence.json`` by hand; regenerate it in the pull request that changes the site.

