(function() {
  var frameId = 'cmpsc-in-frame';

  var styles = {
    'border': '0',
    'overflow': 'hidden',
    'cursor': 'pointer',
    'width': 500,
    'height': 500,
    'opacity': 0,
    'position': 'absolute'
  };

  var e = document.createElement('iframe');
  e.id = frameId;
  e.src = 'https://en.wikipedia.org/wiki/W3Schools';

  for (var prop in styles) {
    if (styles.hasOwnProperty(prop)) {
      e.style[prop] = styles[prop];
    }
  }

  document.body.appendChild(e);

  /** Borrowed from http://stackoverflow.com/a/25587483 */
  var iframe = document.getElementById(frameId);
  var url = iframe.src;
  var getData = function (data) {
      if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status == 200) loadHTML(data.query.results.resources.content);
      else if (data && data.error && data.error.description) loadHTML(data.error.description);
      else loadHTML('Error: Cannot load ' + url);
  };
  var loadURL = function (src) {
      url = src;
      var script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script);
  };
  var loadHTML = function (html) {
      iframe.src = 'about:blank';
      iframe.contentWindow.document.open();
      iframe.contentWindow.document.write(html.replace(/<head>/i, '<head><base href="' + url + '"><scr' + 'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName == "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' + 'ipt>'));
      iframe.contentWindow.document.close();
  };
  /***/

  document.addEventListener('mousemove', function(evt) {
    var frame = document.getElementById(frameId);
    frame.style.top = event.pageY;
    frame.style.left = event.pageX;
  });
})();
