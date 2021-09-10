React FetchAPI:

1. window.fetch enables us to make HTTP request using Promise
2. fetch is an inbuild JS method for getting resources from a server or API endpoint.
3. Fetch API takes compulsary argument which is a path or URL, It returns promise which points to response from request.

Basic syntax to use Fetch API:

```fetch("https://api.github.com/users/hacktivist123/repos").then(response => response.json()).then(data => console.log(data));```

Using JS default fetch:

```
import react, {useState, useEffect} from "react";

export default function getData () {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://randomuser.me/api")
		.then((response) => {
			if(response.ok) {
				return response.json();
			}
			throw response;
		}).catch((error) => {
			console.log("Error fetching data:", error);
			setError(error);		
		}).finally(() => {
			setLoading(false);
		})
	}, [])

	return (
		<pre>{JSON.stringify(data)}</pre>
	)
}
```

Using AXIOS:

```import react, {useState, useEffect} from "react";
import axios from "axios";

export default axiosData() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		axios("https://randomuser.me/api")
		.then((response) => {
			setData(response.data)
		}).catch((error) => {
			console.log(`Error fetching data: ${error}`);
			setError(error);
		}).finally(() => {
			setLoading(false);
		});
	},[]);

	if(loading) return "Loading...";
	if(error) return "Error..";
	
	return (
		<pre>JSON.stringify(data)</pre>
	)
}
```
Using useFetch its not offical hook, just seperating the fetch:

```
write all the code inside useFetch and use any fetch methods axios/fetch, return data to calloing function;
```
