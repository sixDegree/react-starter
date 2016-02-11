var isNode = typeof module !== 'undefined' && module.exports ? true:false;
var React = isNode ? require('react') : window.React;
var ReactDOM = isNode ? require('react-dom') : window.ReactDOM;
console.log(isNode);

var MessageBox = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      <div>
      	<h1>This is Isomorphic Test:</h1>
        <input type="text" value={value} onChange={this.handleChange} />
        <p>Inputed:{value}</p>
      </div>
    );
  }
});

if (isNode) {
  module.exports= MessageBox;
} else {
  ReactDOM.render(<MessageBox/>,document.getElementById('app'));
}
