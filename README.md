Basic scaffolding to run Mocha in the browser
=====================

Set-up
-------------
Clone the repo, then run:

    bower install

Bower will download the latest versions of jQuery and Mocha


Run in the browser
-------------
Start-up a web server.
If you have PHP 5.4 installed you can use:

    php -S localhost:8000

Or you can try Python HTTP server:

    python -m SimpleHTTPServer


Run from CLI
-------------
You can run the tests from CLI using mocha-phantomjs.
Make sure the server is running, then type:

    mocha-phantomjs http://localhost:8000/spec