/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Monitoring metric
 *
 */
class Metrics {
  /**
   * Create a Metrics.
   * @member {string} resourceId The id of metric source
   * @member {date} startTime The metric start time
   * @member {date} endTime The metric end time
   * @member {string} timeGrain The time grain, time grain indicates frequency
   * of the metric data
   * @member {string} primaryAggregation The metric aggregation type. Possible
   * values include: 'Average', 'Last', 'Maximum', 'Minimum', 'None', 'Total'
   * @member {object} name The name of the metrics
   * @member {string} [name.value] Name of the metric
   * @member {string} [name.localizedValue] Localized name of the metric
   * @member {array} dimensions The Metric dimension which indicates the source
   * of the metric
   * @member {string} unit The unit of the metric data. Possible values
   * include: 'Bytes', 'BytesPerSecond', 'Count', 'CountPerSecond', 'Percent',
   * 'Seconds'
   * @member {string} type The Type of the metric data
   * @member {array} values The metric data
   */
  constructor() {
  }

  /**
   * Defines the metadata of Metrics
   *
   * @returns {object} metadata of Metrics
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Metrics',
      type: {
        name: 'Composite',
        className: 'Metrics',
        modelProperties: {
          resourceId: {
            required: true,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: true,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          },
          timeGrain: {
            required: true,
            serializedName: 'timeGrain',
            type: {
              name: 'String'
            }
          },
          primaryAggregation: {
            required: true,
            serializedName: 'primaryAggregation',
            type: {
              name: 'Enum',
              allowedValues: [ 'Average', 'Last', 'Maximum', 'Minimum', 'None', 'Total' ]
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'MetricName'
            }
          },
          dimensions: {
            required: true,
            serializedName: 'dimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetricDimensionElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetricDimension'
                  }
              }
            }
          },
          unit: {
            required: true,
            serializedName: 'unit',
            type: {
              name: 'Enum',
              allowedValues: [ 'Bytes', 'BytesPerSecond', 'Count', 'CountPerSecond', 'Percent', 'Seconds' ]
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          values: {
            required: true,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MetricDataElementType',
                  type: {
                    name: 'Composite',
                    className: 'MetricData'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = Metrics;