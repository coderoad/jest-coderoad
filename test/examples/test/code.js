
(function(){'use strict';
const _resolve = require('path').resolve;
require('babel-register')({plugins:[['transform-es2015-modules-commonjs',{loose:true,sourceRoot:_resolve(__dirname,'..','test')}]]});
function getType(e){switch(Object.prototype.toString.call(e)){case"[object Array]":return"array";case"[object Date]":return"date";case"[object Null]":return"null";case"[object Number]":return e!==e?"NaN":"number"}return typeof e}function assignTypes(e){return JSON.stringify(e.map(function(e){var t=getType(e);switch(t){case"object":case"array":e=JSON.stringify(e),e=util.inspect(e,inspectOptions),e=e.substring(1,e.length-1);break;case"undefined":case"null":case"NaN":return{type:t}}return{type:t,output:e}}))}var _this=this,util=require("util"),inspectOptions={depth:null};if(console&&console.log){var originalLog_1=console.log;console.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];(new Error).stack;setTimeout(originalLog_1.apply(_this,[assignTypes(e)]))}}
let _fileExists = require('node-file-exists').default;
global.exists = (p) => _fileExists(_resolve(__dirname,'..','test',p));
require = require('rewire-coderoad');

// unit tests

// REPLACE_WITH_PATH_TO_CODE

describe('01 addOne', () => {

	const addOne = p1.__get__('addOne');

	it('doesn\'t exist', () => {
		expect(addOne).to.not.be.undefined;
	});

	it('should take a parameter', () => {
		expect(addOne).to.have.length(1);
	});

	it('doesn\'t return anything', () => {
		expect(addOne(1)).to.exist;
	});

	it('should output a number', () => {
		expect(addOne(1)).to.be.a('number');
	});

	it('doesn\'t add 1 + 1', () => {
		expect(addOne(1)).to.equal(2);
		expect(addOne(10)).to.equal(11);
	});

});

describe('02 subtractOne', () => {

  const subtractOne = p1.__get__('subtractOne');

  it('doesn\'t exist', () => {
    expect(subtractOne).to.not.be.undefined;
  });

  it('should take a parameter', () => {
    expect(subtractOne).to.have.length(1);
  });

  it('should output a number', () => {
    expect(subtractOne(1)).to.be.a('number');
  });

  it('doesn\'t subtract 1', () => {
    expect(subtractOne(1)).to.equal(0);
    expect(subtractOne(10)).to.equal(9);
  });

});



}());