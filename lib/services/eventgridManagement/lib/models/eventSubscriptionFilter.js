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
 * Filter for the Event Subscription
 *
 */
class EventSubscriptionFilter {
  /**
   * Create a EventSubscriptionFilter.
   * @property {string} [subjectBeginsWith] An optional string to filter events
   * for an event subscription based on a resource path prefix.
   * The format of this depends on the publisher of the events.
   * Wildcard characters are not supported in this path.
   * @property {string} [subjectEndsWith] An optional string to filter events
   * for an event subscription based on a resource path suffix.
   * Wildcard characters are not supported in this path.
   * @property {array} [includedEventTypes] A list of applicable event types
   * that need to be part of the event subscription. If it is desired to
   * subscribe to all default event types, set the IncludedEventTypes to null.
   * @property {boolean} [isSubjectCaseSensitive] Specifies if the
   * SubjectBeginsWith and SubjectEndsWith properties of the filter
   * should be compared in a case sensitive manner. Default value: false .
   * @property {array} [advancedFilters] An array of advanced filters that are
   * used for filtering event subscriptions.
   */
  constructor() {
  }

  /**
   * Defines the metadata of EventSubscriptionFilter
   *
   * @returns {object} metadata of EventSubscriptionFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EventSubscriptionFilter',
      type: {
        name: 'Composite',
        className: 'EventSubscriptionFilter',
        modelProperties: {
          subjectBeginsWith: {
            required: false,
            serializedName: 'subjectBeginsWith',
            type: {
              name: 'String'
            }
          },
          subjectEndsWith: {
            required: false,
            serializedName: 'subjectEndsWith',
            type: {
              name: 'String'
            }
          },
          includedEventTypes: {
            required: false,
            serializedName: 'includedEventTypes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          isSubjectCaseSensitive: {
            required: false,
            serializedName: 'isSubjectCaseSensitive',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          },
          advancedFilters: {
            required: false,
            serializedName: 'advancedFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AdvancedFilterElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'operatorType',
                      clientName: 'operatorType'
                    },
                    uberParent: 'AdvancedFilter',
                    className: 'AdvancedFilter'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = EventSubscriptionFilter;
