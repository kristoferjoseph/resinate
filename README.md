resinate
========

Write your CSS with imports like node.js requires

Install
-------

```
npm install resinate
```
global install
```
npm i -g resinate
```

Use
-----

```
Usage: resinate [options] <file ...>

  Options:

    -h, --help               output usage information
    -V, --version            output the version number
    -s --source <file>       css file to process
    -l --license <file>      license file to append to the output
    -n --namespace <string>  optional namespace to prefix all class selectors with
    -b --browsers <items>    autoprefixer supported browser versions
    -u --url <string>        optional url to append to asset paths in css
    -v --vars                use variables during processing
    -e --extend              use extend during processing
    -d --debug               generate a sourcemap for debugging
```

Example

`resinate -s path/to/my/file.css -d -e -v > bundle.css`

Test
----

To run the test suite

* `npm link`
* `npm test`
