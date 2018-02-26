# golang-cover-json

Parse [golang-cover](https://blog.golang.org/cover) report files, and return a JSON representation in a [lcov-parse](https://github.com/davglass/lcov-parse) compatible manner.

## Usage

```javascript
var gocov = require("golang-cover-json");

// Parse by file path
gocov.parseFile("filepath.xml")
    .then(function (result) {
        console.log(JSON.stringify(result));
    }).catch(function (err) {
        console.error(err);
    });

// Parse by file contents
gocov.parseContent("mode: count ...")
    .then(function (result) {
        console.log(JSON.stringify(result));
    }).catch(function (err) {
        console.error(err);
    });
```

## Thanks

This repo was initially forked from [vokal/golang-cover-parse](https://github.com/vokal/golang-cover-parse). Thanks a lot!
