/* Based in Leaflet Chroroplet map tutorial*/

	var map = L.map('map').setView([0,0], 2);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v9',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);
	
	// Select fechas
	L.control.custom({
		position: 'topleft',
		content : '<div class="input-group">'+
					'<label for="exampleFormControlSelect1">Select a date: </label>'+
						'<select class="form-control" id="datesSel"><option>SELECT A DATE</option></select>'+
					'</div>',
		classes : '',
		style   :
		{
			position: 'absolute',
			left: '50px',
			top: '0px',
			width: '200px',
		},
	}).addTo(map);
            
            
	$('#datesSel').on('change', function() {
	  //alert( this.value );
	  restyleLayer(this.value);
	});
	// delete duplicates
	$( '#datesSel').focus(function() {
		var optionValues =[];
		$('#datesSel option').each(function(){
		   if($.inArray(this.value, optionValues) >-1){
			  $(this).remove()
		   }else{
			  optionValues.push(this.value);
		   }
		});
	});



	// control that shows state info on hover
	var info = L.control({position: 'bottomleft'});

	info.onAdd = function (map) {
		this._div = L.DomUtil.create('div', 'info');
		this.update();
		return this._div;
	};

	info.update = function (props) {
		obj = Object(props);
		//console.log(obj);
		//console.log( Object.entries(obj) );
		var keys = Object.keys(obj);
		// filtrado para quedarse solo con keys de fecha
		keys = keys.filter(key => key.substring(key.length - 3, key.length) == '/20'   );
		// obtener un array de valores de las fechas
		values =[]
		for (var i = 0; i < keys.length; i++) {
			values.push( Number(props[keys[i]]) );
		}
		
		var casos = [];
		for (var i = 0; i < keys.length; i++) {
			//var caso = {  date: keys[i],  value: values[i]	};
			var caso = {  date: d3.timeParse("%m/%d/%Y")(keys[i]),  value: values[i]	};
			casos.push(caso);
		}	

		lastDate = keys[keys.length - 1];
		this._div.innerHTML = '<h4>COVID-19</h4>' +  (props ?
			props.name +' cases every 1000 people:<strong> ' + (((Number(props[lastDate]))*1000)/props.pop).toFixed(2) + '</strong><br>'+
			'<div id="chart"></div>'
			: 'Hover over a country');
		//chart(values);
		lineChart(casos);
		
	};

	info.addTo(map);

  function lineChart(data) {
	  // set the dimensions and margins of the graph
		var margin = {top: 10, right: 30, bottom: 60, left: 60},
			width = 300 - margin.left - margin.right,
			height = 200 - margin.top - margin.bottom;

		// append the svg object to the body of the page
		var svg = d3.select("#chart")
		  .append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		  .append("g")
			.attr("transform",
				  "translate(" + margin.left + "," + margin.top + ")");
    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.date; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")            
      .call(d3.axisBottom(x))   
       .selectAll("text")
		.attr("y", 0)
		.attr("x", 9)
		.attr("dy", ".35em")
		.attr("transform", "rotate(90)")
		.style("text-anchor", "start") ;  

      
    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.value; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
        )

}





// http://bl.ocks.org/Andrew-Reid/11602fac1ea66c2a6d7f78067b2deddb
function chart(d) {
  //console.log('iniciando chart');
  //var feature = d.feature;
  //var data = feature.properties.data;
  data = d;
  var width = 300;
  var height = 100;
  var margin = {left:20,right:15,top:40,bottom:40};
  var parse = d3.timeParse("%m");
  var format = d3.timeFormat("%b");
   
  svg = d3.select("#chart");
  //var div = d3.create("div")
  var svg = d3.create("svg")
  //var svg = div.append("svg")
    .attr("width", width+margin.left+margin.right)
    .attr("height", height+margin.top+margin.bottom);
  var g = svg.append("g")
    .attr("transform","translate("+[margin.left,margin.top]+")");
    
  var y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d; }) ])
    .range([height,0]);
    
  var yAxis = d3.axisLeft()
    .ticks(4)
    .scale(y);
  g.append("g").call(yAxis);
    
  var x = d3.scaleBand()
    .domain(d3.range(12))
    .range([0,width]);
    
  var xAxis = d3.axisBottom()
    .scale(x)
    .tickFormat(function(d) { return format(parse(d+1)); });
    
  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .attr("text-anchor","end")
      .attr("transform","rotate(-90)translate(-12,-15)")
    
  var rects = g.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y",height)
    .attr("height",0)
    .attr("width", x.bandwidth()-2 )
    .attr("x", function(d,i) { return x(i); })
    .attr("fill","steelblue")
    .transition()
    .attr("height", function(d) { return height-y(d); })
    .attr("y", function(d) { return y(d); })
    .duration(1000);
    
  var title = svg.append("text")
    .style("font-size", "20px")
    .text('hola')
    .attr("x", width/2 + margin.left)
    .attr("y", 30)
    .attr("text-anchor","middle");
    
  return svg;
    //console.log(svg);
}  
	
	
	// get color depending on population density value
	function getColor(d) {
		return d > 100000 ? '#800026' :
				d > 50000  ? '#BD0026' :
				d > 20000  ? '#E31A1C' :
				d > 10000  ? '#FC4E2A' :
				d > 5000   ? '#FD8D3C' :
				d > 2000   ? '#FEB24C' :
				d > 1000   ? '#FED976' :
							'#FFEDA0';
	}

	function style(feature) {
		return {
			weight: 2,
			opacity: 1,
			color: 'white',
			//dashArray: '3',
			fillOpacity: 0.7,
			fillColor: getColor(feature.properties.densidad)
		};
	}

	function highlightFeature(e) {
		var layer = e.target;

		layer.setStyle({
			weight: 2,
			//color: '#666', // color borde cuando el mouse está encima
			//dashArray: '',
			fillOpacity: 0.7
		});

		if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
			layer.bringToFront();
		}

		info.update(layer.feature.properties);
	}

	//var geojson;

	function resetHighlight(e) {
		geojson.resetStyle(e.target);
		info.update();
	}

	function zoomToFeature(e) {
		map.fitBounds(e.target.getBounds());
	}

	function onEachFeature(feature, layer) {
		layer.on({
			mouseover: highlightFeature,
			//mouseout: resetHighlight,
			click: zoomToFeature
		});
	}
	
	//https://stackoverflow.com/questions/25773389/changing-the-style-of-each-feature-in-a-leaflet-geojson-layer
	function restyleLayer(propertyName) {

		geojson.eachLayer(function(layer) {
			propertyValue = layer.feature.properties[propertyName];

			// Your function that determines a fill color for a particular
			// property name and value.
			//var myFillColor = getColor(propertyName, propertyValue);
			var myFillColor = getColor(propertyValue);

			layer.setStyle({
				fillColor: myFillColor,
				fillOpacity: 0.8,
				weight: 0.5
			});
		});
	}

/*
	geojson = L.geoJson(statesData, {
		style: style,
		onEachFeature: onEachFeature
	}).addTo(map);
*/
	// Geojson from file
	// Cargar GeoJSON desde un archivo externo
	var geojson = L.geoJson(null, {
		style: style,
		onEachFeature: onEachFeature
	});
	
	var start = Date.now();

	url='src/data/countries_data.geojson'; 
	d3.json(url).then( function(data) {		 
	//d3.json(url, function(error, data) { // d3.v3
		urlcsv = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
		d3.csv(urlcsv).then( function(csv) {
		//d3.csv("data/covid19.csv", function(error, csv) {  /d3.v5
			var world = data.features;
			// Renombrar una columna
			csv = csv.map(function(obj) { 
				obj['name'] = obj['Country/Region']; // Assign new key 
				delete obj['Country/Region']; // Delete old key 
				return obj; 
			}); 

			csv.forEach(function(d, i) {
				//console.log(d);
				keys = Object.keys(d) ;
				// rellenar el combo quitando los que no son fecha
				cols = keys.filter(key => key.substring(key.length - 3, key.length) == '/20'   );				
				$('#datesSel').empty().append('<option selected="selected" value="nothing">(Select a date)</option>');
				cols.forEach(function(col) {
					if ( col.substring(col.length - 3, col.length) == '/20'   ) {	
						$('#datesSel').append($('<option><option/>').val(col).text(col)); 
					}
				});				
				
				// Join entre tablas por key name
				world.forEach(function(e, j) {
					if(e.properties.name === d.name && d['Province/State']=== '') {
						//console.log('coinciden');
						//e.properties= d;
						Object.assign(e.properties, d); // suma a las propiedades del geojson las del csv
					}
				})
			}); 
			
			geojson = L.geoJson(data, {
				style: style,
				onEachFeature: onEachFeature
			});
			geojson.addTo(map);
			//console.log(geojson);

		})
		
    });//.addTo(map);
    
	map.attributionControl.addAttribution('Develop by <a href="https://github.com/josemamira.io/covid19maps">Jose Manuel Mira</a> | Covid-19 data &copy; <a href="https://github.com/CSSEGISandData">CSSE at Johns Hopkins University</a>');

	var legend = L.control({position: 'bottomright'});

	legend.onAdd = function (map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 1000, 2000, 5000, 10000, 20000, 50000, 100000],
			labels = [],
			from, to;

		for (var i = 0; i < grades.length; i++) {
			from = grades[i];
			to = grades[i + 1];

			labels.push(
				'<i style="background:' + getColor(from + 1) + '"></i> ' +
				from + (to ? '&ndash;' + to : '+'));
		}

		div.innerHTML = labels.join('<br>');
		return div;
	};

	legend.addTo(map);

function merge(arr1, arr2, prop1, prop2) {
    return arr1.map(function(item){
        var p = item[prop1];
        el = arr2.filter(function(item) {
            return item[prop2] === p;
        });
        if (el.length === 0) {
            return null;
        }
        var res = {};
        for (var i in item) {
            if (i !== prop1) {
                res[i] = item[i];
            }
        }
        for (var i in el[0]) {
            if (i !== prop2) {
                res[i] = el[0][i];
            }
        }
        return res;
    }).filter(function(el){
        return el !== null;
    });
}

 
