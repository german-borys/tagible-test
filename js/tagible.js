var entities = [
    {
      "type": "City",
      "relevance": "0.936832",
      "sentiment": {
        "type": "positive",
        "score": "0.540038"
      },
      "count": "3",
      "text": "Barcelona",
      "disambiguated": {
        "subType": [
          "Country",
          "OlympicHostCity"
        ],
        "name": "Barcelona",
        "geo": "41.38333333333333 2.183333333333333",
        "website": "http://www.bcn.cat/english/ihome.htm",
        "dbpedia": "http://dbpedia.org/resource/Barcelona",
        "freebase": "http://rdf.freebase.com/ns/m.01f62",
        "geonames": "http://sws.geonames.org/3128760/",
        "yago": "http://yago-knowledge.org/resource/Barcelona"
      }
    },
    {
      "type": "PrintMedia",
      "relevance": "0.918446",
      "sentiment": {
        "type": "positive",
        "score": "0.142912",
        "mixed": "1"
      },
      "count": "3",
      "text": "Gothic Quarter"
    },
    {
      "type": "Facility",
      "relevance": "0.74431",
      "sentiment": {
        "type": "positive",
        "score": "0.389017"
      },
      "count": "1",
      "text": "Gothic Centre of Barcelona"
    },
    {
      "type": "Facility",
      "relevance": "0.49896",
      "sentiment": {
        "type": "positive",
        "score": "0.322704"
      },
      "count": "1",
      "text": "Cathedral de la Santa Cruz"
    },
    {
      "type": "Facility",
      "relevance": "0.424044",
      "sentiment": {
        "type": "neutral"
      },
      "count": "1",
      "text": "Ronda de Sant Pere"
    },
    {
      "type": "Person",
      "relevance": "0.362504",
      "sentiment": {
        "type": "neutral"
      },
      "count": "1",
      "text": "Barri Gòtic"
    },
    {
      "type": "City",
      "relevance": "0.311805",
      "sentiment": {
        "type": "neutral"
      },
      "count": "1",
      "text": "La Boquieria"
    },
    {
      "type": "City",
      "relevance": "0.238476",
      "sentiment": {
        "type": "positive",
        "score": "0.373874"
      },
      "count": "1",
      "text": "Las Ramblas"
    },
    {
      "type": "Quantity",
      "relevance": "0.238476",
      "sentiment": {
        "type": "neutral"
      },
      "count": "1",
      "text": "three-hour"
    }
  ];

  function decorateContent(el){

  }

  function searchForEntities(el) {
    //grab the container element and convert the nodelist to array
    var wrapper = [].slice.call(document.getElementsByClassName(el), 0);

    return wrapper;
  }

  console.log("Tagible Script is embedded");
  var wrapper = searchForEntities('overwrite-container');
  console.log(wrapper);
