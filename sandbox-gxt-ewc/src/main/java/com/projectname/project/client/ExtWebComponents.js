// Maven copies the javascript resources to the webapp folder.
// Another method of doing this is use the webpack to bake the resources together into a bundle.
import '/node_modules/@sencha/ext-web-components/src/ext-button.component.js';
import '/node_modules/@sencha/ext-web-components/src/ext-cartesian.component.js';

/**
 * Simple component
 */
class MyViewElement extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = "<div>My Simple View Web Component 5</div>";
  }

  // When the element is ready...
  connectedCallback() {
  }
}
window.customElements.define('my-view', MyViewElement);


/**
 * Simple Web
 */
const _template = `
   <ext-button
      text="Send"
      ui="action raised">
   </ext-button>
   `;

class MyViewButtonsElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = _template;
  }

  // When the element is ready...
  connectedCallback() {
    this._addListeners();
  }

  _addListeners() {
    let button1 = this.querySelector('ext-button');
    button1.addEventListener('tap', (event) => {
      // Fire an event, and listen to it in the GXT widget
      this.dispatchEvent(new Event('ext-button-tap'));
    });
  }
}
window.customElements.define('my-view-buttons', MyViewButtonsElement);


const chartTemplate = `
<ext-cartesian
  width="1000px"
  height="600px"
  downloadServerUrl="http://svg.sencha.io"
  shadow="true"
  insetPadding="25 35 0 10"
  axes='[{
          "type": "numeric" ,
          "position": "left" ,
          "fields": [ "1. open" ],
          "label": { "rotate": { "degrees": "-30" } },
          "title": { "text": "Netflix Stock Data" , "fontSize": "20" }
      },
      {
          "type": "category",
          "position": "bottom",
          "fields": "time",

          "title": { "text": "Monthly", "fontSize": "20" }
    }]'
    legend='{
      "type": "sprite",
      "position": "bottom"
    }'
    series='[{
      "type": "area" ,
      "xField": "time",
      "yField": [ "1. open", "2. high", "3. low", "4. close" ],
      "title": [ "open", "high", "low", "close" ],
      "style": { "stroke": "black" , "lineWidth": "2", "fillOpacity": "0.8" },
      "colors": ["#003f5c", "#58508d", "#bc5090", "#ff6361", "#ffa600"]
    }]'
    platformConfig='{
      "phone": { "insetPadding": "15 5 0 0" }
    }'>
</ext-cartesian>
`;



// https://www.alphavantage.co/support/#api-key
// M2GCFAR2WILSEM58
// https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&apikey=M2GCFAR2WILSEM58
class MyChartNetflix extends HTMLElement {
  connectedCallback() {
    this.innerHTML = chartTemplate;

    this._fetchChartData();
  }

  _fetchChartData() {
    let apiKey = 'M2GCFAR2WILSEM581';
    let stockSymbol = 'NFLX';
    let url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stockSymbol}&apikey=${apiKey}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return this._flattenData(json);
      })
      .then(jsonflatRows => {
        this._renderChartData(jsonflatRows);
      })
      .catch(err => {
        console.log("error", err);
      })
  }

  _flattenData(json) {
    let jsonTimes = json['Monthly Time Series']
    let flatRows = [];
    for (let jsonTime in jsonTimes) {
      let row = {
        "time": jsonTime
      };
      let jsonNestedTime = jsonTimes[jsonTime];
      for (let nestedKey in jsonNestedTime) {
        row[nestedKey] = jsonNestedTime[nestedKey];
      }
      flatRows.push(row);
    }
    return flatRows.reverse();
  }

  _renderChartData(jsonflatRows) {
    let store = Ext.create('Ext.data.Store', {
      fields: ["time", "1. open", "2. high", "3. low", "4. close", "5. volume"],
      data: jsonflatRows
    });

    let chartEl = this.querySelector('ext-cartesian');
    chartEl.store = store;
  }
}
window.customElements.define('my-chart-netflix', MyChartNetflix);
