# BOILERPLATE

Základní šablona a devstack pro další vývoj.


## CSS

Kompilace do CSS řeší **Gulp.js**, je použit preprocesor **SASS** s post procesingem přes **postCSS**.

Při vývoji se generují pouze SCSS soubory a sourcemapy. Při použití `gulp makecss` se nejprve SCSS soubory upraví pomocí CSScomb, následně se vygeneruje CSS soubor na který je aplikován autoprefixer, minifikace a případné další pluginy (standardně flexbugs a pixrem).

Při použití `gulp deploy` se vyjma výše uvedeného použije **Stylelint** pro kontrolu.


### Základní struktura stylů

* **css/styles.scss** - základní struktura stylů, propojení na další části
  * **css/base** - základní vlastnosti a styly, nastavení, typografie
    * **base/base** - základní definice dokumentu a respo
    * **base/fonts** - definice a nastavení fontů
    * **base/form** - základní vzhled formulářových polí
    * **base/helpers** - pomocné styly
    * **base/layout** - vstupní layout a jednoduchá mřížka (flexbox)
    * **base/print** - tiskové styly, přebíjíme deklarace pro standardizaci
    * **base/typography** - vstupní vzhled nadpisů, odstavců...
    * **base/variables** - nastavení, barvy, kulaté rohy, breakpointy
  * **css/components** - jednotlivé komponenty stylů
  * **css/libs** - externí knihovny a styly
  * **css/icons** - ikony generované do SVG sprite


## JavaScript

Je používána **jQuery** ve verzi 1.12.4, spojování skriptů a minifikaci řeší **Gulp.js**.

Při vývoji se aplikuje **Prettier**, následně se spojí soubory a generují sourcemapy. Při použití `gulp makejs` se navíc provede minifikace. Soubory umístěné v adresáři **js/libs se nekontrolují a nespojují**.

Při použití `gulp deploy` se vyjma výše uvedeného použije **jshint** pro kontrolu.

### Další použité knihovny

* **jquery.magnific-popup.js** - lightbox skript pro jQuery - https://github.com/dimsemenov/Magnific-Popup
* **svg4everybody.js** - podpora SVG pro starší prohlížeče - https://github.com/jonathantneal/svg4everybody
* **webfont.js** - loader pro Google Fonts, asynchronní odložené načítání - https://github.com/typekit/webfontloader


## Gulp

Gulp řeší spojování, generování a minifikaci SASS a JS souborů, optimalizaci obrázků, autoprefixování, atd. Dále optimalizuje obrázky a generuje ikony do SVG sprite.

### Gulp - instalace

* stáhnout a nainstalovat Node.js - https://nodejs.org/en/ (nutný restart počítače po první instalaci)
* spustit konzoli a najít cestu k projektu (cd + přetáhnout adresář projektu)
* zadat `npm install -g gulp-cli`
* zadat `npm install`
* vytvoří se adresář "node_modules" který neverzovat a nezasahovat do něj
* po instalaci stačí zadat `gulp` který bude hlídat změnu souborů a generovat potřebné

### Gulp - použití

* Před nasazením na produkci použijte `gulp deploy` task, který spojí a minifikuje CSS a JS soubory a provede optimalizaci obrázků.
* Základní task `gulp` provádí pouze sledování změn, spojování CSS a JS souborů z důvodů rychlosti.
* Lze využít také tasky `gulp makejs` (spojí a minifikuje JS) a `gulp makecss` (vygeneruje CSS z SASS souborů, spustí autoprefixer a minifikuje CSS). Příkaz `gulp icons` vygeneruje SVG sprite z vložených souborů a optimalizuje jej.


## Ikony

Pomocí **Gulp.js** se ze SVG souborů umístěných v **img/icons** generuje sprite **img/icons.svg**. Těmto ikonám jsou odstraněny styly a fill atributy pro možné obarvování v CSS. Pokud chcete zachovat původní barvy SVG, pak použijte prefix **color-** v názvu ikony. Do souboru **../css/icons/icons.scss** se generují velikosti ikon, které se berou z nativní velikosti souboru.

Markup pro vkládání do HTML je:
`<span class="icon icon--nazevsouboru">
  <svg class="icon__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use xlink:href="/img/icons.svg#nazevsouboru" x="0" y="0" width="100%" height="100%"></use>
  </svg>
</span>`

Vložené ikony lze přebarvovat přes CSS standardně **color: barva** a používat velikost **width: hodnota** - tyto vlastnosti se aplikují na obalující span `.icon--nazevsouboru`.
