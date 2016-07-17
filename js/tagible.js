//extracted data
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

  var parent_wrapper = 'overwrite-container';
  //add event listener which detects any entity elements
  document.getElementsByClassName(parent_wrapper)[0].addEventListener("mouseover", showTooltip);
  document.getElementsByClassName(parent_wrapper)[0].addEventListener("mouseout", hideTooltip);

  function showTooltip(e) {
     if (e.target.className == 'entity'){
       //display tooltip if tooltip exists inside DOM, otherwise build it
       if (hasTooltip(e.target)) {
         showHideTooltip(e.target, 'show');
       } else {
         var tooltip = createTooltip(e.target);
         e.target.appendChild(tooltip);
       }
     }
  }

  function hideTooltip(e) {
    if (e.target.className == 'entity') {
      if (hasTooltip(e.target)) {
        //find and hide tooltip
        showHideTooltip(e.target, 'hide');
      }
    }
  }

  function hasTooltip(el) {
    if (el.hasChildNodes()) {
      var children = [].slice.call(el.childNodes);
      for (i in children) {
        if (children[i].className == 'tagible-tooltip') {
           return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

  function showHideTooltip(el, action) {
    var display = (action == 'show') ? 'block' : 'none';
    var children = [].slice.call(el.childNodes);
    for (i in children) {
        if (children[i].className == 'tagible-tooltip') {
           children[i].style.display = display;
        }
    }
  }

  function createTooltip(el) {
    var tooltip = document.createElement('div'),
      id = el.getAttribute('entity-id'),
      width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      console.log("Screen Width: " + width);
      console.log("Left: " + el.offsetLeft);
      console.log("Top: " + el.offsetTop);

      tooltip.className = 'tagible-tooltip';
      tooltip.innerHTML = '<div class="contents"><div class="media-wrapper"><span class="rect"></span>VIDEOS</div><div class="media-wrapper"><span class="rect"></span>PHOTOS</div><div class="media-wrapper"><span class="rect"></span>3D VIEWS</div></div>';
      tooltip.style.display = 'block';
      tooltip.style.position = 'absolute';
      tooltip.style.top = (el.offsetTop - 80) + 'px';
      tooltip.style.left = (el.offsetLeft + 5) + 'px';
    return tooltip;
  }

  function searchForEntities(el) {
    //grab the container element and convert the nodelist to array
    var wrapper = document.getElementsByClassName(el);
    var content = wrapper[0].innerHTML;

    for (var i in entities) {
      //for each entity locate the matching text and wrap the text in a span
      var re = new RegExp(entities[i].text, "g");
      content = content.replace(re, '<span class="entity" entity-id="'+ i +'">' + entities[i].text + '</span>');
    }
    document.getElementsByClassName(el)[0].innerHTML = content;
  }

  searchForEntities(parent_wrapper);
