import { connectDateRangePicker } from './connector';
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
  widgetParams
) {
  const rendererWidgetParams: DateRangePickerWidgetParams = {
    container: widgetParams.container,
    // TODO: pick the widget-only parameters from the widgetParams
  };

  const { render, dispose } = createDateRangePickerRenderer(
    rendererWidgetParams
  );

  const createWidget = connectDateRangePicker(render, dispose);

  const connectorParams: DateRangePickerConnectorParams = {
    // TODO: pick the connector-only parameters from the widgetParams
  };

  return {
    ...createWidget(connectorParams),
    $$widgetType: 'algolia.date-range-picker',
  };
};
