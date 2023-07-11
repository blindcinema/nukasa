
import { createContext, useState, useEffect } from "react";

export const PageContext = createContext("asdf");


export function PageContextProvider({ children }) {
    const [contextQuery, setContextQuery] = useState("asdf");

    return (
        <PageContext.Provider value={{
            contextQuery :contextQuery,
            setContextQuery: setContextQuery,
            
        }}>
            {children}
        </PageContext.Provider>
    )
}
