Hook: useContext

useContext is used to send the props to the nested child component skipping middle components.

Create useContext:

```
import { createContext } from "react";
import Profile from "./Profile.js";

export const useContext = useContext();

const App = () => {
	const user = "Anusha"
	return (
		<UseContext.Provider value={user}>
			<Profile/>
		</UseContext.Provider>
	)
}
```
