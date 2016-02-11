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

ReactDOM.render(<MessageBox/>,document.getElementById('app'));
