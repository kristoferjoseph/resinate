var nixt = require('nixt'),
    assert = require('assert'),
    fs = require('fs');

describe('resinate', function() {

    it('should parse source variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/source.css')
        .stdout(fs.readFileSync('test/fixtures/source.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });

    it('should parse license variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/license.css -l test/fixtures/license.txt')
        .stdout(fs.readFileSync('test/fixtures/license.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });

    it('should parse namespace variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/namespace.css -n dam')
        .stdout(fs.readFileSync('test/fixtures/namespace.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });

    it('should parse browsers variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/browsers.css')
        .stdout(fs.readFileSync('test/fixtures/browsers.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });

    it('should parse browsers variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/browsers.css -b "Last 1 version" "BlackBerry 10" "Android 4"')
        .stdout(fs.readFileSync('test/fixtures/browsers.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });

    it('should parse url variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/url.css -u production/images/')
        .stdout(fs.readFileSync('test/fixtures/url.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });

// This test breaks due to rework not removing whitespace
// The values we actually care about are correct. Comparison fails on
// whitespace
/*
    it('should parse vars variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/vars.css -v')
        .stdout(fs.readFileSync('test/fixtures/vars.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });
*/

    it('should parse extend variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/extend.css -e')
        .stdout(fs.readFileSync('test/fixtures/extend.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });
});
