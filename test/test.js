var nixt = require('nixt'),
    assert = require('assert'),
    fs = require('fs');

describe('resinate', function() {

    it('should work with source variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/source.css')
        .stdout(fs.readFileSync('test/fixtures/source.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });

    it('should work with license variable', function(done) {
      nixt()
        .run('resinate -s test/fixtures/license.css -l test/fixtures/license.txt')
        .stdout(fs.readFileSync('test/fixtures/license.out.css')
          .toString()
          .trim()
        )
        .end(done);
    });
});
