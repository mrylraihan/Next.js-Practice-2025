import { useState } from "react";
import MyContext from "./MyContext";



export const MyContextProvider = ({children})=>{
    const [name, setName] = useState('Wallie')
    return (
			<MyContext.Provider value={{ name:name, setName:setName }}>
				{children}
			</MyContext.Provider>
		)
}

