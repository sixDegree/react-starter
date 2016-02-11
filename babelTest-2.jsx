var MessageBox=require("./message.jsx");
var App=React.createClass({
	render:function(){
		return (<div>
			<h1>MessageBox</h1>
			<MessageBox/>
		</div>)
	}
});

ReactDOM.render(<App/>,document.getElementById('app'));