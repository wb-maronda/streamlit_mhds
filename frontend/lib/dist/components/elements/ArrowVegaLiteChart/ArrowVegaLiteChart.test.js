/**
 * Copyright (c) Streamlit Inc. (2018-2022) Snowflake Inc. (2022-2024)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { render } from "../../../test_util";
import { mockTheme } from "../../../mocks/mockTheme";
import { WidgetStateManager } from "../../../WidgetStateManager";
import { ArrowVegaLiteChart } from "./ArrowVegaLiteChart";
import { jsx as _jsx } from "react/jsx-runtime";
const getProps = function () {
  let elementProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    element: {
      data: null,
      id: "1",
      useContainerWidth: false,
      datasets: [],
      selectionMode: [],
      formId: "",
      spec: JSON.stringify({
        data: {
          values: [{
            category: "A",
            group: "x",
            value: 0.1
          }, {
            category: "A",
            group: "y",
            value: 0.6
          }, {
            category: "A",
            group: "z",
            value: 0.9
          }, {
            category: "B",
            group: "x",
            value: 0.7
          }, {
            category: "B",
            group: "y",
            value: 0.2
          }, {
            category: "B",
            group: "z",
            value: 1.1
          }, {
            category: "C",
            group: "x",
            value: 0.6
          }, {
            category: "C",
            group: "y",
            value: 0.1
          }, {
            category: "C",
            group: "z",
            value: 0.2
          }]
        },
        mark: "bar",
        encoding: {
          x: {
            field: "category"
          },
          y: {
            field: "value",
            type: "quantitative"
          }
        }
      }),
      vegaLiteTheme: "streamlit",
      ...elementProps
    },
    theme: mockTheme.emotion,
    width: 0,
    widgetMgr: new WidgetStateManager({
      sendRerunBackMsg: jest.fn(),
      formsDataChanged: jest.fn()
    }),
    height: 0,
    isFullScreen: false,
    ...props
  };
};
describe("ArrowVegaLiteChart", () => {
  it("renders without crashing", () => {
    render( /*#__PURE__*/_jsx(ArrowVegaLiteChart, {
      ...getProps()
    }));
    expect(screen.getByTestId("stArrowVegaLiteChart")).toBeInTheDocument();
  });
});
//# sourceMappingURL=ArrowVegaLiteChart.test.js.map