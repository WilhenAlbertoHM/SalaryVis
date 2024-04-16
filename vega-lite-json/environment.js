envGood = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json",
    "config": {
      "view": {
        "continuousHeight": 300,
        "continuousWidth": 300
      }
    },
    "data": {
      "name": "data-8dfc0d46081cb17590741fe0462685b2"
    },
    "datasets": {
      "data-8dfc0d46081cb17590741fe0462685b2": [
        {
          "ANNUAL_RATE": 108160.0,
          "DEPARTMENT": "Urban Public Health",
          "FULL_NAME": "Alexander More",
          "NAME_FIRST": "Alexander",
          "NAME_LAST": "More",
          "NUM_RATINGS": 15,
          "PAY_OTHER_ACTUAL": 0.0,
          "PAY_TOTAL_ACTUAL": 24640.0,
          "POSITION_TITLE": "Associate Professor",
          "RATING": 4.4
        }
      ]
    },
    "encoding": {
      "x": {
        "field": "DEPARTMENT",
        "type": "nominal"
      },
      "y": {
        "aggregate": "mean",
        "field": "ANNUAL_RATE",
        "type": "quantitative"
      }
    },
    "mark": {
      "type": "bar"
    }
  }
  
  envBad = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json",
    "config": {
      "view": {
        "continuousHeight": 300,
        "continuousWidth": 300
      }
    },
    "data": {
      "name": "data-5689784ac2adad4a7f67f03fcb7cf001"
    },
    "datasets": {
      "data-5689784ac2adad4a7f67f03fcb7cf001": [
        {
          "ANNUAL_RATE": 127595.084,
          "DEPARTMENT": "Urban Planning & Community Development",
          "FULL_NAME": "Chi-Kan Hung",
          "NAME_FIRST": "Chi-Kan",
          "NAME_LAST": "Hung",
          "NUM_RATINGS": 11,
          "PAY_OTHER_ACTUAL": 0.0,
          "PAY_TOTAL_ACTUAL": 29067.52,
          "POSITION_TITLE": "Associate Professor",
          "RATING": 2.4
        },
        {
          "ANNUAL_RATE": 145405.264,
          "DEPARTMENT": "Urban Public Health",
          "FULL_NAME": "Ana Lindsay",
          "NAME_FIRST": "Ana",
          "NAME_LAST": "Lindsay",
          "NUM_RATINGS": 17,
          "PAY_OTHER_ACTUAL": 0.0,
          "PAY_TOTAL_ACTUAL": 33124.92,
          "POSITION_TITLE": "Professor",
          "RATING": 1.9
        }
      ]
    },
    "encoding": {
      "x": {
        "field": "DEPARTMENT",
        "type": "nominal"
      },
      "y": {
        "aggregate": "mean",
        "field": "ANNUAL_RATE",
        "type": "quantitative"
      }
    },
    "mark": {
      "type": "bar"
    }
  }
  
vegaEmbed('#environment-graph-good', envGood, {"actions": false});
vegaEmbed('#environment-graph-bad', envBad, {"actions": false});