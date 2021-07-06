import { connectRange } from 'instantsearch.js/es/connectors';

import { createDateRangePickerRenderer } from './renderer';
import type {
  DateRangePickerWidgetCreator,
  DateRangePickerConnectorParams,
  DateRangePickerWidgetParams,
} from './types';

/*
 * Widget creator
 * Returns a widget instance
 */
export const dateRangePicker: DateRangePickerWidgetCreator = function DateRangePicker(
  widgetParams: DateRangePickerWidgetParams & DateRangePickerConnectorParams
) {
  const rendererWidgetParams: DateRangePickerWidgetParams = {
    container: widgetParams.container,
  };

  const { render, dispose } = createDateRangePickerRenderer(
    rendererWidgetParams
  );

  const createWidget = connectRange(render, dispose);

  const connectorParams: DateRangePickerConnectorParams = {
    attribute: widgetParams.attribute,
  };

  return {
    ...createWidget(connectorParams),
    $$widgetType: 'algolia.date-range-picker',
  };
};
