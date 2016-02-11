var MessageBox=React.createClass({
  render:function(){
    return <div>This is Babel Test</div>;
    //return React.DOM.div(null,"Render on Server Side");
  }
});
var element = React.createElement(MessageBox);
ReactDOM.render(element,document.getElementById('app'));


