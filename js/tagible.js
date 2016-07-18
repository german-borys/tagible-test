var tagible = (function TagibleModule(parent_wrapper) {
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
    //add event listener which detects any entity elements
    document.getElementsByClassName(parent_wrapper)[0].addEventListener("mouseover", showTooltip);
    document.getElementsByClassName(parent_wrapper)[0].addEventListener("mouseout", removeTooltip);

    function showTooltip(e) {
       if (e.target.className == 'entity'){
           var tooltip = createTooltip(e);
           e.target.appendChild(tooltip);
       }
    }

    function removeTooltip(e) {
      if (e.target.className == 'entity'){
        var children = [].slice.call(e.target.childNodes);
        for (i in children) {
            if (children[i].className == 'tagible-tooltip' || children[i].className == 'tagible-tooltip right-side') {
               e.target.removeChild(children[i]);
            }
        }
      }
    }

    function createTooltip(e) {
      e = e || window.event;
      var tooltip = document.createElement('div'),
          leftOffset = e.target.offsetLeft,
          topOffset = e.target.offsetTop,
          width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          rightSideFlag = '',
          mouseXPos = e.pageX;

      //This section determines how to position tooltip considering the position of the parent element
      //To determine if an entity includes a line-break we look at mouse position in relation to the screen and the parent element
      //not a pixel perfect solution
      if (width - leftOffset <= 70) {
        if (mouseXPos <= 80) {
          tooltip.style.left = (mouseXPos) + 'px';
          tooltip.style.top = (topOffset - 60) + 'px';
        } else {
          tooltip.style.left = (leftOffset - 140) + 'px';
          tooltip.style.top = (topOffset - 80) + 'px';
          rightSideFlag = ' right-side';
        }
      } else if (width - leftOffset <= 130) {
        if (mouseXPos <= 50) {
          tooltip.style.left = (mouseXPos - 20) + 'px';
          tooltip.style.top = (topOffset - 60) + 'px';
        } else if (mouseXPos <= 100) {
          tooltip.style.left = (mouseXPos - 20) + 'px';
          tooltip.style.top = (topOffset - 60) + 'px';
        } else {
          tooltip.style.left = (leftOffset - 120) + 'px';
          tooltip.style.top = (topOffset - 80) + 'px';
          rightSideFlag = ' right-side';
        }
      } else if (width - leftOffset <= 180) {
        tooltip.style.left = (leftOffset - 120) + 'px';
        tooltip.style.top = (topOffset - 80) + 'px';
        rightSideFlag = ' right-side';
      } else {
        tooltip.style.left = (leftOffset) + 'px';
        tooltip.style.top = (topOffset - 80) + 'px';
      }

      tooltip.className = 'tagible-tooltip' + rightSideFlag;
      tooltip.innerHTML = '<div class="contents"><div class="media-wrapper"><span class="rect"></span>VIDEOS</div><div class="media-wrapper"><span class="rect"></span>PHOTOS</div><div class="media-wrapper"><span class="rect"></span>3D VIEWS</div></div>';

      return tooltip;
    }

    function searchForEntities() {
      //grab the container element and convert the nodelist to array
      var wrapper = document.getElementsByClassName(parent_wrapper);
      var content = wrapper[0].innerHTML;

      for (var i in entities) {
        //for each entity locate the matching text and wrap the text in a span
        var re = new RegExp(entities[i].text, "g");
        content = content.replace(re, '<span class="entity" entity-id="'+ i +'">' + entities[i].text + '</span>');
      }
      document.getElementsByClassName(parent_wrapper)[0].innerHTML = content;
    }

    var publicAPI = {
      findEntities: searchForEntities
    }

    return publicAPI;
})("overwrite-container");

tagible.findEntities();
