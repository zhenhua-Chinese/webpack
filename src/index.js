// import React,{Component} from "react";
// import ReactDom from "react-dom";
// class App extends Component{
//     render(){
//         return (
//             <div>hello world!!!111221</div>
//         )
//     }
// }
// ReactDom.render(<App/>,document.getElementById("root"));
import counter from './counter';
import number from './number';

counter();
number();

if(module.hot) {
	module.hot.accept('./number', () => {
		document.body.removeChild(document.getElementById('number'));
		number();
	})
}
