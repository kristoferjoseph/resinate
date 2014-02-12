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
        .run('resinate -s test/fixtures/browsers.css')
        .stdout(fs.readFileSync('test/fixtures/browsers.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });
});
