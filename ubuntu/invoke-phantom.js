var webpage = require('webpage');
var page = webpage.create()
page.open('http://gocontainer.redf4rth.net:8080/green/timer/dots', function(status) {
  page.close();
});
