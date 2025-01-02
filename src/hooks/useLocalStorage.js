import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [data, setData] = useState(() => {
        try {
            const localValue = localStorage.getItem(key);
            if (localValue) {
                return JSON.parse(localValue);
            } else {
                localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            console.error('LocalStorage error:', error); // Hata mesajını konsola yazdır
            return initialValue;
        }
        
    });

    const updateStorage = (newValue) => {
        setData(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [data, updateStorage];
}
