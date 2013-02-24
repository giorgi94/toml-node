/* parser generated by jison 0.4.2 */
var toml = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"file":3,"lines":4,"line":5,"comment":6,"keygroup":7,"assignment":8,"EOF":9,"COMMENT":10,"identifier":11,"EQUALS":12,"value":13,"IDENTIFIER":14,"[":15,"keygroupid":16,"]":17,".":18,"string":19,"float":20,"integer":21,"bool":22,"datetime":23,"array":24,"STR":25,"DATETIME":26,"INTEGER":27,"-":28,"FLOAT":29,"strarray":30,"floatarray":31,"integerarray":32,"boolarray":33,"datetimearray":34,"arrayarray":35,",":36,"TRUE":37,"FALSE":38,"$accept":0,"$end":1},
terminals_: {2:"error",9:"EOF",10:"COMMENT",12:"EQUALS",14:"IDENTIFIER",15:"[",17:"]",18:".",25:"STR",26:"DATETIME",27:"INTEGER",28:"-",29:"FLOAT",36:",",37:"TRUE",38:"FALSE"},
productions_: [0,[3,1],[4,1],[4,2],[5,1],[5,1],[5,1],[5,2],[6,1],[8,3],[11,1],[7,3],[16,1],[16,3],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,1],[23,1],[21,1],[21,2],[20,1],[20,2],[24,3],[24,3],[24,3],[24,3],[24,3],[24,3],[30,1],[30,3],[31,1],[31,3],[32,1],[32,3],[33,1],[33,3],[34,1],[34,3],[35,1],[35,3],[22,1],[22,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return parser.toml.data; 
break;
case 2: this.$ = $$[$0] 
break;
case 9: parser.toml.set($$[$0-2], $$[$0]); 
break;
case 10: this.$ = $$[$0] 
break;
case 11:
      parser.toml.setCurrentGroup($$[$0-1]);
    
break;
case 14: this.$ = $$[$0] 
break;
case 15: this.$ = $$[$0] 
break;
case 16: this.$ = $$[$0] 
break;
case 17: this.$ = $$[$0] 
break;
case 18: this.$ = $$[$0] 
break;
case 19: this.$ = $$[$0] 
break;
case 20: this.$ = parseString($$[$0]) 
break;
case 21: this.$ = new Date($$[$0]) 
break;
case 22: this.$ = parseInt($$[$0], 10); 
break;
case 23: this.$ = $$[$0] * -1 
break;
case 24: this.$ = parseFloat($$[$0], 10); 
break;
case 25: this.$ = $$[$0] * -1 
break;
case 26: this.$ = $$[$0-1] 
break;
case 27: this.$ = $$[$0-1] 
break;
case 28: this.$ = $$[$0-1] 
break;
case 29: this.$ = $$[$0-1] 
break;
case 30: this.$ = $$[$0-1] 
break;
case 31: this.$ = $$[$0-1] 
break;
case 32: this.$ = [$$[$0]] 
break;
case 33: $$[$0-2].push($$[$0]) 
break;
case 34: this.$ = [$$[$0]] 
break;
case 35: $$[$0-2].push($$[$0]) 
break;
case 36: this.$ = [$$[$0]] 
break;
case 37: $$[$0-2].push($$[$0]) 
break;
case 38: this.$ = [$$[$0]] 
break;
case 39: $$[$0-2].push($$[$0]) 
break;
case 40: this.$ = [$$[$0]] 
break;
case 41: $$[$0-2].push($$[$0]) 
break;
case 42: this.$ = [$$[$0]] 
break;
case 43: $$[$0-2].push($$[$0]) 
break;
case 44: this.$ = true; 
break;
case 45: this.$ = false; 
break;
}
},
table: [{3:1,4:2,5:3,6:4,7:5,8:6,10:[1,7],11:9,14:[1,10],15:[1,8]},{1:[3]},{1:[2,1],5:11,6:4,7:5,8:6,10:[1,7],11:9,14:[1,10],15:[1,8]},{1:[2,2],9:[1,12],10:[2,2],14:[2,2],15:[2,2]},{1:[2,4],9:[2,4],10:[2,4],14:[2,4],15:[2,4]},{1:[2,5],9:[2,5],10:[2,5],14:[2,5],15:[2,5]},{1:[2,6],9:[2,6],10:[2,6],14:[2,6],15:[2,6]},{1:[2,8],9:[2,8],10:[2,8],14:[2,8],15:[2,8]},{11:14,14:[1,10],16:13},{12:[1,15]},{12:[2,10],17:[2,10],18:[2,10]},{1:[2,3],9:[1,12],10:[2,3],14:[2,3],15:[2,3]},{1:[2,7],9:[2,7],10:[2,7],14:[2,7],15:[2,7]},{17:[1,16],18:[1,17]},{17:[2,12],18:[2,12]},{13:18,15:[1,32],19:19,20:20,21:21,22:22,23:23,24:24,25:[1,25],26:[1,31],27:[1,28],28:[1,27],29:[1,26],37:[1,29],38:[1,30]},{1:[2,11],9:[2,11],10:[2,11],14:[2,11],15:[2,11]},{11:33,14:[1,10]},{1:[2,9],9:[2,9],10:[2,9],14:[2,9],15:[2,9]},{1:[2,14],9:[2,14],10:[2,14],14:[2,14],15:[2,14]},{1:[2,15],9:[2,15],10:[2,15],14:[2,15],15:[2,15]},{1:[2,16],9:[2,16],10:[2,16],14:[2,16],15:[2,16]},{1:[2,17],9:[2,17],10:[2,17],14:[2,17],15:[2,17]},{1:[2,18],9:[2,18],10:[2,18],14:[2,18],15:[2,18]},{1:[2,19],9:[2,19],10:[2,19],14:[2,19],15:[2,19]},{1:[2,20],9:[2,20],10:[2,20],14:[2,20],15:[2,20],17:[2,20],36:[2,20]},{1:[2,24],9:[2,24],10:[2,24],14:[2,24],15:[2,24],17:[2,24],36:[2,24]},{20:34,21:35,27:[1,28],28:[1,27],29:[1,26]},{1:[2,22],9:[2,22],10:[2,22],14:[2,22],15:[2,22],17:[2,22],36:[2,22]},{1:[2,44],9:[2,44],10:[2,44],14:[2,44],15:[2,44],17:[2,44],36:[2,44]},{1:[2,45],9:[2,45],10:[2,45],14:[2,45],15:[2,45],17:[2,45],36:[2,45]},{1:[2,21],9:[2,21],10:[2,21],14:[2,21],15:[2,21],17:[2,21],36:[2,21]},{15:[1,32],19:42,20:43,21:44,22:45,23:46,24:47,25:[1,25],26:[1,31],27:[1,28],28:[1,27],29:[1,26],30:36,31:37,32:38,33:39,34:40,35:41,37:[1,29],38:[1,30]},{17:[2,13],18:[2,13]},{1:[2,25],9:[2,25],10:[2,25],14:[2,25],15:[2,25],17:[2,25],36:[2,25]},{1:[2,23],9:[2,23],10:[2,23],14:[2,23],15:[2,23],17:[2,23],36:[2,23]},{17:[1,48],36:[1,49]},{17:[1,50],36:[1,51]},{17:[1,52],36:[1,53]},{17:[1,54],36:[1,55]},{17:[1,56],36:[1,57]},{17:[1,58],36:[1,59]},{17:[2,32],36:[2,32]},{17:[2,34],36:[2,34]},{17:[2,36],36:[2,36]},{17:[2,38],36:[2,38]},{17:[2,40],36:[2,40]},{17:[2,42],36:[2,42]},{1:[2,26],9:[2,26],10:[2,26],14:[2,26],15:[2,26],17:[2,26],36:[2,26]},{19:60,25:[1,25]},{1:[2,27],9:[2,27],10:[2,27],14:[2,27],15:[2,27],17:[2,27],36:[2,27]},{20:61,28:[1,62],29:[1,26]},{1:[2,28],9:[2,28],10:[2,28],14:[2,28],15:[2,28],17:[2,28],36:[2,28]},{21:63,27:[1,28],28:[1,64]},{1:[2,29],9:[2,29],10:[2,29],14:[2,29],15:[2,29],17:[2,29],36:[2,29]},{22:65,37:[1,29],38:[1,30]},{1:[2,30],9:[2,30],10:[2,30],14:[2,30],15:[2,30],17:[2,30],36:[2,30]},{23:66,26:[1,31]},{1:[2,31],9:[2,31],10:[2,31],14:[2,31],15:[2,31],17:[2,31],36:[2,31]},{15:[1,32],24:67},{17:[2,33],36:[2,33]},{17:[2,35],36:[2,35]},{20:34,28:[1,62],29:[1,26]},{17:[2,37],36:[2,37]},{21:35,27:[1,28],28:[1,64]},{17:[2,39],36:[2,39]},{17:[2,41],36:[2,41]},{17:[2,43],36:[2,43]}],
defaultActions: {},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};


function parseString(str) {
  var str = str.substr(1, str.length - 2);
  str = str.replace(/([^\\])\\0/g, "$1\0")
           .replace(/([^\\])\\n/g, "$1\n")
           .replace(/([^\\])\\t/g, "$1\t")
           .replace(/([^\\])\\r/g, "$1\r")
           .replace(/([^\\])\\"/g, "$1\"")
           .replace(/\\\\/g, "\\")
  return str;
}

function deepValue(obj, path, value) {
  var tags = path.split("."), len = tags.length - 1;
  for (var i = 0; i < len; i++) {
    obj[tags[i]] = obj[tags[i]] || {};
    obj = obj[tags[i]];
  }
  if (value !== undefined)
    obj[tags[len]] = value;
  else
    return obj[tags[len]]
}

parser.toml = {
  data: {},
  currentGroup: null,
  setCurrentGroup: function(group) {
    if (deepValue(this.data, group))
      throw new Error("Cannot overrite previously set key " + group + " with keygroup");
    this.currentGroup = group;
  },
  set: function(key, value) {
    if (this.currentGroup)
      key = this.currentGroup + '.' + key;
    deepValue(this.data, key, value);
  }
};
/* generated by jison-lex 0.1.0 */
var lexer = (function(){
var lexer = {
EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* ignore whitespace */
break;
case 1:return 37
break;
case 2:return 38
break;
case 3:return 26
break;
case 4:return 25
break;
case 5:return 12
break;
case 6:return 10
break;
case 7:return 29
break;
case 8:return 27
break;
case 9:return 28
break;
case 10:return 15
break;
case 11:return 17
break;
case 12:return 36
break;
case 13:return 14
break;
case 14:return 9
break;
}
},
rules: [/^(?:\s+)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z\b))/,/^(?:"([^"\\]|\\.)*")/,/^(?:=)/,/^(?:#.*)/,/^(?:[0-9]+\.[0-9]+)/,/^(?:[0-9]+)/,/^(?:-)/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?:[^\"\s=\[\]]+)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = toml;
exports.Parser = toml.Parser;
exports.parse = function () { return toml.parse.apply(toml, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}