Hook: useContext

useContext is used to send the props to the nested child component skipping middle components.

useContext avoids prop-drilling (avoid passing on the props in the tree down below)

Create useContext:

```
import { createContext } from "react";
import Profile from "./Profile.js";

export const useContext = createContext();

const App = () => {
	const user = "Anusha"
	return (
		<UseContext.Provider value={user}>
			<Profile/>
		</UseContext.Provider>
	)
}
```
