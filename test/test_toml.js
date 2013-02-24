var toml = require('../');
var fs = require('fs');

exports.testParsesExample = function(test) {
  var expected = {
    title: "TOML Example",
    owner: {
      name: "Tom Preston-Werner",
      organization: "GitHub",
      bio: "GitHub Cofounder & CEO\n\tLikes \"tater tots\" and beer and backslashes: \\",
      dob: new Date("1979-05-27T07:32:00Z")
    },
    database: {
      server: "192.168.1.1",
      ports: [8001, 8001, 8003],
      connection_max: 5000,
      connection_min: -2,
      max_temp: 87.1,
      min_temp: -17.76,
      enabled: true
    },
    servers: {
      alpha: {
        ip: "10.0.0.1",
        dc: "eqdc10"
      },
      beta: {
        ip: "10.0.0.2",
        dc: "eqdc10"
      }
    },
    clients: {
      data: [ ["gamma", "delta"], [1, 2] ]
    }
  };

  fs.readFile(__dirname + "/example.toml", 'utf-8', function(err, str) {
    test.ifError(err);
    test.deepEqual(toml.parse(str), expected);
    test.done();
  });
};

exports.testSupportsTrailingCommasInArrays = function(test) {
  var str = 'arr = [1, 2, 3,]';
  var expected = { arr: [1, 2, 3] };
  var results = toml.parse(str);
  test.deepEqual(results, expected);
  test.done();
};

exports.testErrorOnKeyOverride = function(test) {
  test.throws(function() {
    var str = '[server]\nnum = 1\n[server.num]\ndata = 2'
    toml.parse(str);
  });
  test.done()
};

exports.testErrorOnArrayMismatch = function(test) {
  test.throws(function() {
    var str = 'data = [1, 2, "test"]'
    toml.parse(str);
  });
  test.done();
};
