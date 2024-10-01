import { useState } from "react"


export default function Counter() {
	const [count, setCount] = useState(0);
	
	return (
		<>
			<button onClick={() => {
				setCount((prev) => prev + 1);
			}}>increment</button>
			<h1>Count: {count}</h1>
		</>
	)
}