import "./Item.css";

export default function Item({item, onDeleteItem, onToggleItem}) {
    return (
        <li className="item">
            <input type="checkbox" checked={item.packed} onChange={() => onToggleItem(item.id)} />
            <span className={item.packed ? "packed" : ""}>
                {item.quantity} {item.description}
                </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}