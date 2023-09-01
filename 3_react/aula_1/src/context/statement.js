import React, { useState } from 'react';
export const StatementContext = React.createContext();
StatementContext.displayName = 'Statement';

export const StatementProvider = ({ children }) => {
    const [statementList, setStatementList] = useState([]);
    function addPayment(statement) {
        setStatementList([
            ...statementList, statement
        ])
    }
    return (
        <StatementContext.Provider
            value={{
                statementList,
                addPayment
            }}
        >
            {children}
        </StatementContext.Provider>
    )
}