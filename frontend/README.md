# To do Application
## Front-end

### Project settings:
1. ESLint + Prettier code formatter
2. Webpack + Babel

### Scripts:
1. `npm run dev` to create transpiled JavaScript bundle.

### Adding JavaScript:
1. Create new JavaScript file.
2. Import file in main `index.js` script or in any other JS file that is (or its parent is) imported to main script.
3. To check results in `index.html` file you need to run `npm run dev` script so webpack/babel can build transpiled bundle.

### Adding styles:
1. Create stylesheet with your css
2. Import your css file at the top of `main.css` file (file need to be under `rests.css` import)
3. DO NOT import styles to JavaScript files.
4. There is no configuration for `less/sass` files. If you want to use css preprocessors I recommend to use VS Code plugin, eg. [Easy LESS auto compiler](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)

### Files structure:
1. JavaScript
 - keep main `js` files in top `js` folder,
 - keep helper functions in `utils` folder,
 - keep static files containing data in `static` folder, eg. api urls, data objects,
 - keep smaller scripts that are part of main files in `shared` folder,
 - keep reusable API call functions in `services` folder.