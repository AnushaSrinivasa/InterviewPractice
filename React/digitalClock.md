```
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

const Clock = () => {
	const [date, setDate] = useState(new Date());
	
	useEffect(() => {
		var timerID = setInterval(()=>tick(),1000);
	
		return function cleanup(){
			clearInterval(timerID);
		}
	});

	function tick() {
		setDate(new Date())
	}

	return(
		<div>
			<h1>{date.toLocaleTimeString}</h1>
		</div>
	)
}

ReactDOM.render(<Clock />, document.getElementById('app'));

```
