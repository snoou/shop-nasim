import { useState, useEffect } from 'react';
import "./Error.css"
export default function Error({ error }) {
    const [isVisible, setIsVisible] = useState(true);


    useEffect(()=>{
        setIsVisible(true)

        const timer = setTimeout(()=>{
            setIsVisible(false)
        } , 5000);

        return () => clearTimeout(timer)
    } , [error])

    if (!isVisible || !error) return null;
    return (
        <div key={error} className="error-exit absolute z-50 bg-red-500 text-white py-4 px-8 right-3 top-2 rounded-lg shadow-xl">
            {error}
        </div>
    );
}