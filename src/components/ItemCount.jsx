import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="flex gap-4 justify-start h-24 py-4 items-center">
            <button onClick={() => setCount(count - 1)} className={count == 0 ? `hidden`: `text-orange w-8 h-8`}>
                <MinusCircleIcon/>
            </button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)} className={`text-orange w-8 h-8`}>
                <PlusCircleIcon/>
            </button>
        </div>
    )
}

export default ItemCount