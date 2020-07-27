/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Top-level URL handlers for Code City.
 */

//////////////////////////////////////////////////////////////////////
// AUTO-GENERATED CODE FROM DUMP.  EDIT WITH CAUTION!
//////////////////////////////////////////////////////////////////////

$.http = {};

$.http['www.'] = {};

$.http['www.'][404] = {};
$.http['www.'][404].www = function jssp(request, response) {
  // DO NOT EDIT THIS CODE.  AUTOMATICALLY GENERATED BY JSSP.
  // To edit contents of generated page, edit this.source.
  return jssp.render(this, request, response);  // See $.Jssp for explanation.
};
Object.setPrototypeOf($.http['www.'][404].www, $.Jssp.prototype);
Object.setOwnerOf($.http['www.'][404].www, Object.getOwnerOf($.Jssp.OutputBuffer));
$.http['www.'][404].www.source = '<% response.statusCode = 404; %>\n<html>\n<head>\n  <title>404 - Code City</title>\n  <style>\n    body {\n      font-family: "Roboto Mono", monospace;\n      text-align: center;\n    }\n    h1 {\n      font-size: 40pt;\n      font-weight: 100;\n    }\n    h1>img {\n      vertical-align: text-bottom;\n    }\n    pre {\n      margin: 2em;\n    }\n  </style>\n  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">\n  <link href="<%=$.servers.http.makeUrl(\'static\', \'favicon.ico\')%>" rel="shortcut icon">\n</head>\n<body>\n  <h1>\n    <img src="<%=$.servers.http.makeUrl(\'static\', \'logo-error.svg\')%>" alt="">\n    404 Page Not Found\n  </h1>\n  <pre><%= $.utils.html.escape(request.headers.host) %>\n<%= request.method %> <%= $.utils.html.escape(request.url) %></pre>\n</body>\n</html>';
$.http['www.'][404].www.hash_ = '00345064687c9f2a99117283850e5313v1.0.0';
$.http['www.'][404].www.compiled_ = function(request, response) {
// DO NOT EDIT THIS CODE: AUTOMATICALLY GENERATED BY JSSP.
 response.statusCode = 404; 
response.write("\n<html>\n<head>\n  <title>404 - Code City</title>\n  <style>\n    body {\n      font-family: \"Roboto Mono\", monospace;\n      text-align: center;\n    }\n    h1 {\n      font-size: 40pt;\n      font-weight: 100;\n    }\n    h1>img {\n      vertical-align: text-bottom;\n    }\n    pre {\n      margin: 2em;\n    }\n  </style>\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto+Mono\" rel=\"stylesheet\">\n  <link href=\"");
response.write($.servers.http.makeUrl('static', 'favicon.ico'));
response.write("\" rel=\"shortcut icon\">\n</head>\n<body>\n  <h1>\n    <img src=\"");
response.write($.servers.http.makeUrl('static', 'logo-error.svg'));
response.write("\" alt=\"\">\n    404 Page Not Found\n  </h1>\n  <pre>");
response.write($.utils.html.escape(request.headers.host));
response.write("\n");
response.write(request.method);
response.write(" ");
response.write($.utils.html.escape(request.url));
response.write("</pre>\n</body>\n</html>");
};
Object.setOwnerOf($.http['www.'][404].www.compiled_, Object.getOwnerOf($.Jssp.prototype.compile));
Object.setOwnerOf($.http['www.'][404].www.compiled_.prototype, Object.getOwnerOf($.Jssp.prototype.compile));
Object.defineProperty($.http['www.'][404].www.compiled_, 'name', {value: '$.www[404].www.compiled_'});
$.http['www.'][404].www.jssp = '<% response.statusCode = 404 %>\n<html>\n<head>\n  <title>404 - Code City</title>\n  <style>\n    body {\n      font-family: "Roboto Mono", monospace;\n      text-align: center;\n    }\n    h1 {\n      font-size: 40pt;\n      font-weight: 100;\n    }\n    h1>img {\n      vertical-align: text-bottom;\n    }\n    pre {\n      margin: 2em;\n    }\n  </style>\n  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">\n  <link href="/static/favicon.ico" rel="shortcut icon">\n</head>\n<body>\n  <h1>\n    <img src="/static/logo-error.svg" alt="">\n    404 Page Not Found\n  </h1>\n  <pre><%= request.method %> <%= $.utils.html.escape(request.url) %></pre>\n</body>\n</html>';

$.http['www.']['/'] = {};
$.http['www.']['/'].www = function jssp(request, response) {
  // DO NOT EDIT THIS CODE.  AUTOMATICALLY GENERATED BY JSSP.
  // To edit contents of generated page, edit this.source.
  return jssp.render(this, request, response);  // See $.Jssp for explanation.
};
Object.setPrototypeOf($.http['www.']['/'].www, $.Jssp.prototype);
Object.setOwnerOf($.http['www.']['/'].www, Object.getOwnerOf($.Jssp.OutputBuffer));
Object.setOwnerOf($.http['www.']['/'].www.prototype, Object.getOwnerOf($.Jssp.OutputBuffer));
$.http['www.']['/'].www.source = '<!doctype html>\n<html lang="en">\n<head>\n  <title>Code City</title>\n  <style>\n    body {\n      font-family: "Roboto Mono", monospace;\n      text-align: center;\n    }\n    h1 {\n      font-size: 40pt;\n      font-weight: 100;\n    }\n    h1>img {\n      vertical-align: text-bottom;\n    }\n    #tagline {\n      font-style: italic;\n      margin: 2em;\n    }\n    iframe {\n      height: 50px;\n      width: 100px;\n      border: none;\n      display: block;\n      margin: 0 auto;\n    }\n  </style>\n  <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">\n  <link href="<%=$.servers.http.makeUrl(\'static\', \'favicon.ico\')%>" rel="shortcut icon">\n</head>\n<body>\n  <h1>\n    <img src="<%=$.servers.http.makeUrl(\'static\', \'logo.svg\')%>" alt="" width="95" height="100">\n    Code City\n  </h1>\n  <p id="tagline">A community of inquisitive programmers.</p>\n  <iframe src="<%=$.servers.http.makeUrl(\'login\')%>"></iframe>\n</body>\n</html>';
$.http['www.']['/'].www.hash_ = '841efc262a393ba30c1c8ca92e01803ev1.0.0';
$.http['www.']['/'].www.compiled_ = function(request, response) {
// DO NOT EDIT THIS CODE: AUTOMATICALLY GENERATED BY JSSP.
response.write("<!doctype html>\n<html lang=\"en\">\n<head>\n  <title>Code City</title>\n  <style>\n    body {\n      font-family: \"Roboto Mono\", monospace;\n      text-align: center;\n    }\n    h1 {\n      font-size: 40pt;\n      font-weight: 100;\n    }\n    h1>img {\n      vertical-align: text-bottom;\n    }\n    #tagline {\n      font-style: italic;\n      margin: 2em;\n    }\n    iframe {\n      height: 50px;\n      width: 100px;\n      border: none;\n      display: block;\n      margin: 0 auto;\n    }\n  </style>\n  <link href=\"https://fonts.googleapis.com/css?family=Roboto+Mono\" rel=\"stylesheet\">\n  <link href=\"");
response.write($.servers.http.makeUrl('static', 'favicon.ico'));
response.write("\" rel=\"shortcut icon\">\n</head>\n<body>\n  <h1>\n    <img src=\"");
response.write($.servers.http.makeUrl('static', 'logo.svg'));
response.write("\" alt=\"\" width=\"95\" height=\"100\">\n    Code City\n  </h1>\n  <p id=\"tagline\">A community of inquisitive programmers.</p>\n  <iframe src=\"");
response.write($.servers.http.makeUrl('login'));
response.write("\"></iframe>\n</body>\n</html>");
};
Object.setOwnerOf($.http['www.']['/'].www.compiled_, Object.getOwnerOf($.Jssp.prototype.compile));
Object.setOwnerOf($.http['www.']['/'].www.compiled_.prototype, Object.getOwnerOf($.Jssp.prototype.compile));
Object.defineProperty($.http['www.']['/'].www.compiled_, 'name', {value: "$.www['/'].www.compiled_"});

$.http['www.']['/mirror'] = {};
Object.setOwnerOf($.http['www.']['/mirror'], Object.getOwnerOf($.Jssp.prototype.compile));
// CLOSURE: type: function, vars: source, jssp
// CLOSURE: type: funexp, vars: Jssp
$.http['www.']['/mirror'].www = function jssp(request, response) {
  // DO NOT EDIT THIS CODE.  AUTOMATICALLY GENERATED BY JSSP.
  // To edit contents of generated page, edit this.source.
  return jssp.render(this, request, response);  // See $.Jssp for explanation.
};
Object.setPrototypeOf($.http['www.']['/mirror'].www, $.Jssp.prototype);
Object.setOwnerOf($.http['www.']['/mirror'].www, Object.getOwnerOf($.Jssp.prototype.compile));
Object.setOwnerOf($.http['www.']['/mirror'].www.prototype, Object.getOwnerOf($.Jssp.prototype.compile));
$.http['www.']['/mirror'].www.source = "<html>\n  <head>\n    <title>Code City Browser Mirror</title>\n  </head>\n  <body>\n    <h1>Code City Browser Mirror</h1>\n\n<%\nfor (var n in request) {\n  if (!request.hasOwnProperty(n)) {\n    continue;\n  }\n  response.write('<h2>request.' + $.utils.html.escape(n) + ':</h2>\\n');\n  response.write('<pre>');\n  if (n === 'user') {\n    response.write(request[n] ? $.utils.html.escape(request[n].name) : request[n] + '\\n');\n  } else {\n    if (request[n] && typeof request[n] === 'object') {\n      for (var m in request[n]) {\n        response.write($.utils.html.escape(m + ': ' + JSON.stringify(request[n][m])) + '\\n');\n      }\n    } else {\n        response.write($.utils.html.escape(JSON.stringify(request[n])) + '\\n');\n    }\n  }\n  response.write('</pre>');\n}\n%>\n    <h2>request.fromSameOrigin():</h2>\n    <pre><%= request.fromSameOrigin() %></pre>\n    <p>Done</p>\n  </body>\n</html>";
$.http['www.']['/mirror'].www.hash_ = '182f1ec75ee0702997968b2366a21808v1.0.0';
$.http['www.']['/mirror'].www.compiled_ = function(request, response) {
// DO NOT EDIT THIS CODE: AUTOMATICALLY GENERATED BY JSSP.
response.write("<html>\n  <head>\n    <title>Code City Browser Mirror</title>\n  </head>\n  <body>\n    <h1>Code City Browser Mirror</h1>\n\n");

for (var n in request) {
  if (!request.hasOwnProperty(n)) {
    continue;
  }
  response.write('<h2>request.' + $.utils.html.escape(n) + ':</h2>\n');
  response.write('<pre>');
  if (n === 'user') {
    response.write(request[n] ? $.utils.html.escape(request[n].name) : request[n] + '\n');
  } else {
    if (request[n] && typeof request[n] === 'object') {
      for (var m in request[n]) {
        response.write($.utils.html.escape(m + ': ' + JSON.stringify(request[n][m])) + '\n');
      }
    } else {
        response.write($.utils.html.escape(JSON.stringify(request[n])) + '\n');
    }
  }
  response.write('</pre>');
}

response.write("\n    <h2>request.fromSameOrigin():</h2>\n    <pre>");
response.write(request.fromSameOrigin());
response.write("</pre>\n    <p>Done</p>\n  </body>\n</html>");
};
Object.setOwnerOf($.http['www.']['/mirror'].www.compiled_, Object.getOwnerOf($.Jssp.prototype.compile));
Object.setOwnerOf($.http['www.']['/mirror'].www.compiled_.prototype, Object.getOwnerOf($.Jssp.prototype.compile));
Object.defineProperty($.http['www.']['/mirror'].www.compiled_, 'name', {value: "$.www['/mirror'].www.compiled_"});

$.http['www.']['/robots.txt'] = {};
$.http['www.']['/robots.txt'].www = function jssp(request, response) {
  // DO NOT EDIT THIS CODE.  AUTOMATICALLY GENERATED BY JSSP.
  // To edit contents of generated page, edit this.source.
  return jssp.render(this, request, response);  // See $.Jssp for explanation.
};
Object.setPrototypeOf($.http['www.']['/robots.txt'].www, $.Jssp.prototype);
Object.setOwnerOf($.http['www.']['/robots.txt'].www, Object.getOwnerOf($.Jssp.OutputBuffer));
Object.setOwnerOf($.http['www.']['/robots.txt'].www.prototype, Object.getOwnerOf($.Jssp.OutputBuffer));
$.http['www.']['/robots.txt'].www.source = "<% response.setHeader('Content-Type', 'text/plain; charset=utf-8') %>\n# Don't index this Code City instance at this time.\nUser-agent: *\nDisallow: /";
$.http['www.']['/robots.txt'].www.hash_ = '93d21ff90a36d1fb6bcf5d7cb4f5add3v1.0.0';
$.http['www.']['/robots.txt'].www.compiled_ = function(request, response) {
// DO NOT EDIT THIS CODE: AUTOMATICALLY GENERATED BY JSSP.
 response.setHeader('Content-Type', 'text/plain; charset=utf-8') 
response.write("\n# Don't index this Code City instance at this time.\nUser-agent: *\nDisallow: /");
};
delete $.http['www.']['/robots.txt'].www.compiled_.name;
Object.setOwnerOf($.http['www.']['/robots.txt'].www.compiled_, Object.getOwnerOf($.Jssp.OutputBuffer));
Object.setOwnerOf($.http['www.']['/robots.txt'].www.compiled_.prototype, Object.getOwnerOf($.Jssp.OutputBuffer));

$.http['login.'] = null;

$.www = $.http['www.'];

