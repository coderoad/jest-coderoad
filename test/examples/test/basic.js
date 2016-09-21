
(function(){'use strict';
const _resolve = require('path').resolve;
require('babel-register')({plugins:[['transform-es2015-modules-commonjs',{loose:true,sourceRoot:_resolve(__dirname,'..','test')}]]});
function getType(e){switch(Object.prototype.toString.call(e)){case"[object Array]":return"array";case"[object Date]":return"date";case"[object Null]":return"null";case"[object Number]":return e!==e?"NaN":"number"}return typeof e}function assignTypes(e){return JSON.stringify(e.map(function(e){var t=getType(e);switch(t){case"object":case"array":e=JSON.stringify(e),e=util.inspect(e,inspectOptions),e=e.substring(1,e.length-1);break;case"undefined":case"null":case"NaN":return{type:t}}return{type:t,output:e}}))}var _this=this,util=require("util"),inspectOptions={depth:null};if(console&&console.log){var originalLog_1=console.log;console.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t-0]=arguments[t];(new Error).stack;setTimeout(originalLog_1.apply(_this,[assignTypes(e)]))}}
let _fileExists = require('node-file-exists').default;
global.exists = (p) => _fileExists(_resolve(__dirname,'..','test', p));
require = require('rewire-coderoad');

// unit tests

// REPLACE_WITH_PATH_TO_CODE

describe('01 pass', () => {

  it('should be true', () => {
    expect(true).toBe(true);
  });

});

describe('02 pass', () => {

  it('should pass', () => {
    expect(true).toBe(true);
  });

});



}());