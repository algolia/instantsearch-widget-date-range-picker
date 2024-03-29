# date-range-picker

InstantSearch widget that makes a date range picker

---

[![MIT](https://img.shields.io/npm/l/@algolia/instantsearch-widget-date-range-picker)](./LICENSE.md) [![NPM version](http://img.shields.io/npm/v/@algolia/instantsearch-widget-date-range-picker.svg)](https://npmjs.org/package/@algolia/instantsearch-widget-date-range-picker)

## Demo

[Demo](https://codesandbox.io/s/github/algolia/instantsearch-widget-date-range-picker?file=/example/index.ts) on CodeSandbox.

## Install

```bash
npm install @algolia/instantsearch-widget-date-range-picker
# or
yarn add @algolia/instantsearch-widget-date-range-picker
```

This widget is using [`@duetds/date-picker`](https://github.com/duetds/date-picker) under the hood, so you need to include this at the end of `<head>` tag.

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.esm.js"
></script>
<script
  nomodule
  src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/themes/default.css"
/>
```

This widget is using [`@duetds/date-picker`](https://github.com/duetds/date-picker) under the hood, so you need to include this at the end of `<head>` tag.

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.esm.js"
></script>
<script
  nomodule
  src="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/themes/default.css"
/>
```

## Widget

### Usage

```js
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { dateRangePicker } from '@algolia/instantsearch-widget-date-range-picker';

const searchClient = algoliasearch('appId', 'apiKey');

const search = instantsearch({
  indexName: 'indexName',
  searchClient,
});

search.addWidgets([
  dateRangePicker({
    // widget parameters
  }),
]);

search.start();
```

### Options

| Option | Type | Required | Default | Description |
| :-- | :-- | :-- | :-- | --- |
| [`container`](#container) | `string` or `HTMLElement` | true | - | The element to insert the widget into. |
| [`option1`](#option1) | `...` | true | - | REPLACE WITH THE DESCRIPTION FOR THIS OPTION |

#### container

> `string | Element` | **required**

The element to insert the widget into.

This can be either a valid CSS Selector:

```js
dateRangePicker({
  container: '#date-range-picker',
  // ...
});
```

or an `HTMLElement`:

```js
dateRangePicker({
  container: document.querySelector('#date-range-picker'),
  // ...
});
```

#### option1

> `...` | **required**

REPLACE WITH THE DESCRIPTION FOR THIS OPTION

```js
dateRangePicker({
  option1: 'value',
  // ...
});
```

## Connector

### Usage

```js
import { connectDateRangePicker } from '@algolia/instantsearch-widget-date-range-picker';

// 1. Create a render function
const renderDateRangePicker = (renderOptions, isFirstRender) => {
  // Rendering logic
};

// 2. Create the custom widget
const customDateRangePicker = connectDateRangePicker(renderDateRangePicker);

// 3. Instantiate
search.addWidgets([
  customDateRangePicker({
    // instance params
  }),
]);
```

### Options

#### option1

> `...`

REPLACE WITH THE DESCRIPTION FOR THIS RENDERING ITEM

```js
const renderDateRangePicker = (renderOptions, isFirstRender) => {
  // show how to use this render option
};

const customDateRangePicker = connectDateRangePicker(renderDateRangePicker);

search.addWidgets([
  customDateRangePicker({
    // ...
  }),
]);
```

#### widgetParams

> `object`

All original widget options forwarded to the render function.

```js
const renderDateRangePicker = (renderOptions, isFirstRender) => {
  const { widgetParams } = renderOptions;
  widgetParams.container.innerHTML = '...';
};

const customDateRangePicker = connectDateRangePicker(renderDateRangePicker);

search.addWidgets([
  customDateRangePicker({
    container: document.querySelector('#date-range-picker'),
    // ...
  }),
]);
```

## Contributing

To start contributing to code, you need to:

1. [Fork the project](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
2. [Clone the repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)
3. Install the dependencies: `yarn`
4. Run the development mode: `yarn start`

Please read [our contribution process](./CONTRIBUTING.md) to learn more.

---

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._
