import { useState } from "react";

function useArray(initialList) {
    const [list, setList] = useState(initialList);
    const [index, setIndex] = useState(0);
    return {
        list,
        addItem: newItemText => {
            setList([
                ...list,
                {
                    id: index,
                    text: newItemText,
                    completed: false
                }
            ]);
            setIndex(index + 1)
        },
        removeItem: itemId => {
            setList(list.filter(item => item.id !== itemId));
        },
        toggleItem: itemId => {
            const updatedItems = list.map(item => {
                return item.id === itemId ? { ...item, completed: !item.completed } : item;
            });
            setList(updatedItems);
        }
    };
}

export default useArray;