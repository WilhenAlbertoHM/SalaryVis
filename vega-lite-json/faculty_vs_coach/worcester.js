worcesterCoach = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json",
  "config": {
    "view": {
      "continuousHeight": 300,
      "continuousWidth": 400
    }
  },
  "data": {
    "name": "data-12feb12538bb9af274f5d2a1ba2f4254"
  },
  "datasets": {
    "data-12feb12538bb9af274f5d2a1ba2f4254": [
      {
        "ANNUAL_RATE": 73499.92,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 7067.3,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2021
      },
      {
        "ANNUAL_RATE": 77031.591,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 74420.43,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2022
      },
      {
        "ANNUAL_RATE": 75000.12,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 25961.58,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2022
      },
      {
        "ANNUAL_RATE": 80000.18,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 12307.76,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2022
      },
      {
        "ANNUAL_RATE": 75000.12,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 5769.24,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2022
      },
      {
        "ANNUAL_RATE": 77000.04,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 31318.47,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2023
      },
      {
        "ANNUAL_RATE": 78957.381,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 63040.04,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2023
      },
      {
        "ANNUAL_RATE": 76875.123,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 77365.49,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2023
      },
      {
        "ANNUAL_RATE": 82000.185,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 77769.55,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2023
      },
      {
        "ANNUAL_RATE": 76875.123,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 52211.61,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2023
      },
      {
        "ANNUAL_RATE": 75000.12,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 32241.03,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2023
      },
      {
        "ANNUAL_RATE": 77000.002,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 51530.8,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2023
      },
      {
        "ANNUAL_RATE": 76875.123,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 2956.73,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2024
      },
      {
        "ANNUAL_RATE": 77000.002,
        "DEPARTMENT_LOCATION_ZIP_CODE": "U Mass Worcester",
        "Job": "Coach",
        "PAY_TOTAL_ACTUAL": 2961.54,
        "POSITION_TITLE": "Assessment Coach, CCWT",
        "YEAR": 2024
      }
    ]
  },
  "encoding": {
    "x": {
      "field": "YEAR",
      "type": "ordinal"
    },
    "y": {
      "aggregate": "max",
      "field": "ANNUAL_RATE",
      "type": "quantitative"
    }
  },
  "mark": "line"
}


vegaEmbed("#worcester-coach", worcesterCoach, {"actions": false, "renderer": "svg"});