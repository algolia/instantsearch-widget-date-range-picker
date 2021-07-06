import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { highlight } from 'instantsearch.js/es/helpers';
import { searchBox, hits, pagination } from 'instantsearch.js/es/widgets';

import { dateRangePicker } from '../src';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const search = instantsearch({
  indexName: 'airbnb_with_date',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: '#searchbox',
  }),
  dateRangePicker({
    container: '#date-range',
    attribute: 'date',
  }),
  hits({
    container: '#hits',
    templates: {
      item: (hit: any) => `
        <div class="hit">
        <div class="pictures-wrapper">
          <img class="picture" alt=${hit.name} src=${hit.picture_url} />
          <img
            class="profile"
            alt=${hit.user.user.first_name}
            src=${hit.user.user.thumbnail_url}
          />
        </div>
        <div class="infos">
          <h4 class="media-heading">
            ${highlight({ attribute: 'name', hit })}
          </h4>
          <p>
            ${hit.room_type} - ${highlight({
        attribute: 'city',
        hit,
      })}, ${highlight({ attribute: 'country', hit })}
          </p>
        </div>
      </div>
`,
    },
  }),
  pagination({
    container: '#pagination',
  }),
]);

search.start();
