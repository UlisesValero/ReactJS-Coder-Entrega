import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const ItemCount = ({ count, setCount }) => {
    return (
        <div className="flex gap-4 justify-start h-24 py-4 items-center">
            <button onClick={() => setCount(prev => Math.max(0, prev - 1))} className={count === 0 ? `hidden` : `text-cyan w-8 h-8`}>
                <MinusCircleIcon />
            </button>
            <span className="font-bold">{count}</span>
            <button onClick={() => setCount(prev => prev + 1)} className="text-cyan w-8 h-8">
                <PlusCircleIcon />
            </button>
        </div>
    );
};

export default ItemCount;
