/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as moment from "moment";

export interface ImageUrl {
  url?: string;
}

export interface BoundingBox {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}

export interface Prediction {
  readonly probability?: number;
  readonly tagId?: string;
  readonly tagName?: string;
  readonly boundingBox?: BoundingBox;
}

export interface ImagePrediction {
  readonly id?: string;
  readonly project?: string;
  readonly iteration?: string;
  readonly created?: Date;
  readonly predictions?: Prediction[];
}
