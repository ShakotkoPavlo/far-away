import "./Stats.css";

export default function Stats({ items }) {
const numItems = items.length;
const packedCount = items.filter(item => item.packed).length;
const percentPacked = numItems === 0 ? 0 : Math.round((packedCount / numItems) * 100);

    return (
        <footer className="stats">
            <em>💼 You have {numItems} items on your packing list, and you already packed {packedCount} ({percentPacked}%) 🧳</em>
        </footer>
    );
}