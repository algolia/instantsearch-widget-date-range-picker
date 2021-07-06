import type { Renderer, Connector, WidgetFactory } from 'instantsearch.js';

/*
 * Parameters send only to the widget creator function
 * These parameters will be used by the widget creator to create the widget renderer and factory
 */
export type DateRangePickerWidgetParams = {
  container: Element | string;
};

/*
 * Parameters send to the widget creator function
 * These parameters will be used by the widget creator to manage the widget logic
 */
export type DateRangePickerConnectorParams = {
  attribute: string;
};

export type DateRangePickerRenderState = {
  // TODO: add the render state params
};

type DateRangePickerWidgetDescription = {
  $$type: 'algolia.date-range-picker';
  renderState: DateRangePickerRenderState;
  indexRenderState: {
    dateRangePicker: {
      // TODO: add the return type of getRenderState
    };
  };
  indexUiState: {
    dateRangePicker: {
      // TODO: add the return type of getWidgetUiState
    };
  };
};

/*
 * Connector type, constructed from the Renderer and Connector parameters
 */
export type DateRangePickerConnector = Connector<
  DateRangePickerWidgetDescription,
  DateRangePickerConnectorParams
>;

/*
 * Renderer type, constructed from the Renderer and Connector parameters
 */
export type DateRangePickerRendererCreator = (
  widgetParams: DateRangePickerWidgetParams
) => {
  render: Renderer<
    DateRangePickerWidgetDescription['renderState'],
    DateRangePickerConnectorParams
  >;
  dispose: () => void;
};

/*
 * Widget type, constructed from the Renderer, Connector and Widget parameters
 */
export type DateRangePickerWidgetCreator = WidgetFactory<
  DateRangePickerWidgetDescription & {
    $$widgetType: 'algolia.date-range-picker';
  },
  DateRangePickerConnectorParams,
  DateRangePickerWidgetParams
>;
