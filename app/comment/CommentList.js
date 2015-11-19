"use strict";

import React from 'react';

function* test(name) {
  yield "hello" + name + "!";
  yield "test this ";
}

function* filter(test, iterable) {
  for (var item of iterable) {

    if (test(item)) {
      yield item;
    }
  }
}

console.log('Reflect',Reflect);
function readOnlyView(target) {
  return new Proxy(target, handler);
}

function renderTmpl(templateData) {
  var s = templateData[0];
  var mySymbol = Symbol('mySymbol');
  let c = 0;
  let map = new Map();
  map.set('a', '1');
  map.set('b', '2');

  var promise = new Promise(function(resolve, reject) {
    // ... some code

    setTimeout(function(){
      resolve('yes');
    },2000);
  });
  promise.then((value)=>{console.log('延迟处理'+value)});
  console.log(map.get('a'), map.values(), map.keys(), map.entries());
  var nSet = new Set([1, 3, 4]);
  nSet.forEach(k => c += k);
  // console.log('c',c);
  // console.log()
  for (var item of filter(k => `K的值${k+1}`, [1, 2, 3, 4][Symbol.iterator]())) {
    console.log('item', `结果：${item}`, typeof item);
  }
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);
    var {
      a, ...f
    } = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    console.log(a, f);
    // 转义占位符中的特殊字符。
    s += arg.replace(/&/g, "&")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // 不转义模板中的特殊字符。
    s += templateData[i];
  }
  return s;
}

function authorize(user, action = "写") {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      renderTmpl `用户${user.name} 未被授权执行 ${action} 操作。`
    );

  }
}
class user {

  hasPrivilege(action) {
    for (var value of this.actList) {
      if (value == action) {
        return true;
      }
    }
  }
  constructor(name) {
    this.actList = ['写', '读', '复制'][Symbol.iterator]();
    this.name = name;
  }
}
class CommentList extends React.Component {
  getClassName() {
    var [a, b, c] = [1, 2, 3];
    var [b] = [3];
    var $iter = test("aaa");
    for (var value of $iter) {
      console.log(value);
    }
    try {
      authorize(new user("<p>zhaobo</p>"), '测试');
    } catch (e) {
      console.log(e.message);
    } finally {

    }

    return 'test';
  }

  render() {
    return ( <div className = {this.getClassName()} > 评论列表 < /div>);
  };
};

export {
  CommentList as
  default
};
