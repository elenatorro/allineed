# All I Need

## Simple and minimalist CSS framework

---

### Download & install

```
$ bower install --save allineed
```

* Dest files: `bower_components/allineed/dist/assets/css/allineed.css`
* Source files: `bower_components/allineed/src/allineed`

---
### Customize

Create your own `main.scss` file with the following structure, to import the modules you need and overwrite the ones you want to modify:

```
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// This is an example of your main style file
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//
// Import the files you will need from your bower_components directory
//
// @import 'your/path/to/bower_components/allineed/src/allineed/allineed.scss';
//
// overwride the following lines

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Core
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@import 'allineed/core/fonts';
@import 'allineed/core/variables';
@import 'allineed/core/base';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

@import 'allineed/core/components/blockquotes';
@import 'allineed/core/components/buttons';
@import 'allineed/core/components/captions';
@import 'allineed/core/components/code';
@import 'allineed/core/components/forms';
@import 'allineed/core/components/grid';
@import 'allineed/core/components/icons';
@import 'allineed/core/components/images';
@import 'allineed/core/components/links';
@import 'allineed/core/components/lists';
@import 'allineed/core/components/navbar';
@import 'allineed/core/components/panels';
@import 'allineed/core/components/tables';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Modules
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Add additional modules here
// @import 'allineed/modules/allineed-sidebar/sidebar.scss';

```

* Colors: `bower_components/allineed/src/allineed/core/_variables.scss`

Change the following variables with the main colors of your choice:

* $colors-base
* $colors-primary-background
* $colors-success-background
* $colors-warning-background
* $colors-danger-background

You can also change all the main variables you want to, this is just a boilerplate to make it simple.

---

## Modules

---

You can use only the modules you want.

Modules list:

* [Collapse Sidebar](https://github.com/elenatorro/allineed-sidebar)

---

* Demo & samples: [elenatorro.github.io/allineed](https://elenatorro.github.io/allineed)

---

[LICENSE](https://github.com/elenatorro/allineed/blob/master/LICENSE)

---

Any feedback is very welcome.
