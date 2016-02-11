(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var MessageBox = React.createClass({
  displayName: 'MessageBox',

  getInitialState: function getInitialState() {
    return { value: 'Hello!' };
  },
  handleChange: function handleChange(event) {
    this.setState({ value: event.target.value });
  },
  render: function render() {
    var value = this.state.value;
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'This is Isomorphic Test:'
      ),
      React.createElement('input', { type: 'text', value: value, onChange: this.handleChange }),
      React.createElement(
        'p',
        null,
        'Inputed:',
        value
      )
    );
  }
});

ReactDOM.render(React.createElement(MessageBox, null), document.getElementById('app'));

},{}]},{},[1]);
