envGood = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  "height": 600,
  "width": {
    "step": 300
  },
  "config": {
    "background": "#f8ead8",
    "view": {
      "continuousHeight": 300,
      "continuousWidth": 300
    }
  },
  "data": {
    "name": "data-4a557056bbf9e6689a71c8f68ab0137e"
  },
  "datasets": {
    "data-4a557056bbf9e6689a71c8f68ab0137e": [
      {
        "ANNUAL_RATE": 11000.0,
        "DEPARTMENT": "Urban Planning & Community Development",
        "FULL_NAME": "Christopher Rabe",
        "NAME_FIRST": "Christopher",
        "NAME_LAST": "Rabe",
        "NUM_RATINGS": 1,
        "PAY_OTHER_ACTUAL": 0.0,
        "PAY_TOTAL_ACTUAL": 1480.78,
        "POSITION_TITLE": "Associate Lecturer",
        "RATING": 4.5
      },
      {
        "ANNUAL_RATE": 110488.035,
        "DEPARTMENT": "Urban Planning & Community Development",
        "FULL_NAME": "Lorena Estrada-Martinez",
        "NAME_FIRST": "Lorena",
        "NAME_LAST": "Estrada-Martinez",
        "NUM_RATINGS": 3,
        "PAY_OTHER_ACTUAL": 0.0,
        "PAY_TOTAL_ACTUAL": 25170.36,
        "POSITION_TITLE": "Associate Professor",
        "RATING": 3.0
      },
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
      },
      {
        "ANNUAL_RATE": 90480.0,
        "DEPARTMENT": "Urban Planning & Community Development",
        "FULL_NAME": "Sowmya Balachandran",
        "NAME_FIRST": "Sowmya",
        "NAME_LAST": "Balachandran",
        "NUM_RATINGS": 3,
        "PAY_OTHER_ACTUAL": 0.0,
        "PAY_TOTAL_ACTUAL": 20612.32,
        "POSITION_TITLE": "Assistant Professor",
        "RATING": 3.4
      }
    ]
  },
  "encoding": {
    "x": {
      "field": "DEPARTMENT",
      "type": "nominal",
      "axis": {
        "title": "",
        "labelFontSize": 20,
        "labelFontWeight": "bold",
        "labelAngle": 0,
        "labelLimit": 310,
      }
    },
    "y": {
      "aggregate": "mean",
      "field": "ANNUAL_RATE",
      "type": "quantitative",
      "scale": {
        "domain": [0, 150000]
      },
      "axis": {
        "title": "",
        "labelFontSize": 20,
        "labelFontWeight": "bold",
        "tickCount": 6,
        "grid": false
      }
    },
    "color": {
      "value": "green"
    },
    "tooltip": [
      {"content": "encoding"},
      {
        "aggregate": "mean",
        "field": "ANNUAL_RATE", 
        "title": "Annual Rate", 
        "format": "$,.0f"
      },
      {
        "field": "DEPARTMENT",  
        "title": "Department"
      },
    ],
  },
  "mark": {
    "type": "bar",
    "size": 80
  }
}
  
envBad = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.16.3.json",
  "height": 600,
  "width": {
    "step": 300
  },
  "config": {
    "background": "#f8ead8",
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
      "type": "nominal",
      "axis": {
        "title": "",
        "labelFontSize": 20,
        "labelFontWeight": "bold",
        "labelAngle": 0,
        "labelLimit": 310,
      }
    },
    "y": {
      "aggregate": "mean",
      "field": "ANNUAL_RATE",
      "type": "quantitative",
      "scale": {
        "domain": [0, 150000]
      },
      "axis": {
        "title": "",
        "labelFontSize": 20,
        "labelFontWeight": "bold",
        "tickCount": 6,
        "grid": false
      }
    },
    "color": {
      "value": "darkred"
    },
    "tooltip": [
      {"content": "encoding"},
      {
        "aggregate": "mean",
        "field": "ANNUAL_RATE", 
        "title": "Annual Rate", 
        "format": "$,.0f"
      },
      {
        "field": "DEPARTMENT",  
        "title": "Department"
      },
    ],
  },
  "mark": {
    "type": "bar",
    "size": 80
  }
}
  
vegaEmbed('#environment-graph-good', envGood, {"actions": false, "renderer": "svg"});
vegaEmbed('#environment-graph-bad', envBad, {"actions": false, "renderer": "svg"});