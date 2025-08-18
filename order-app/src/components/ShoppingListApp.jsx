import React, { useState } from "react";
import "./ShoppingListApp.css";

export default function ShoppingList() {
  const [categories, setCategories] = useState([
    { id: 1, name: "WATCH SHOPPING LIST", itemsCount: 5 },
    { id: 2, name: "CLOTHES SHOPPING LIST", itemsCount: 5 },
    { id: 3, name: "GROCERY SHOPPING LIST", itemsCount: 7 },
    { id: 4, name: "GUEST SHOPPING LIST", itemsCount: 3 },
    { id: 5, name: "BAGS SHOPPING LIST", itemsCount: 3 },
  ]);

  const [items, setItems] = useState([
    { id: 1, name: "Compete Track Tote", code: "24-WB02", price: 32.0, qty: 1, img: "https://images.unsplash.com/photo-1754766621748-2a96cbf56a1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"},
    { id: 2, name: "Fusion Backpack", code: "24-MB02", price: 59.0, qty: 1, img: "https://via.placeholder.com/60?text=Bag2" },
    { id: 3, name: "Savvy Shoulder Tote", code: "24-WB05", price: 32.0, qty: 1, img: "https://via.placeholder.com/60?text=Bag3" },
  ]);

  const [newItem, setNewItem] = useState({ name: "", code: "", price: "", qty: 1, img: "" });

  const updateQty = (id, qty) => {
    setItems(items.map(item => item.id === id ? { ...item, qty: Number(qty) } : item));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = () => {
    if (!newItem.name || !newItem.price) return;
    setItems([...items, { ...newItem, id: Date.now(), price: Number(newItem.price) }]);
    setNewItem({ name: "", code: "", price: "", qty: 1, img: "" });
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div className="shopping-container">
      <aside className="sidebar">
        <h2>Shopping Lists</h2>
        {categories.map(cat => (
          <div className="category" key={cat.id}>
            <span className="icon">🛒</span>
            <div>
              <strong>{cat.name}</strong>
              <p>{cat.itemsCount} Items</p>
            </div>
          </div>
        ))}
      </aside>

      <main className="main-content">
        <h3>Bags Shopping List</h3>
        <table className="items-table">
          <thead>
            <tr>
              <th>Item</th>
              <th></th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td><img src={item.img} alt={item.name} /></td>
                <td>
                  <strong>{item.name}</strong><br />
                  <small>Item # {item.code}</small>
                </td>
                <td>
                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) => updateQty(item.id, e.target.value)}
                  />
                </td>
                <td>${(item.price * item.qty).toFixed(2)}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-section">
          <strong>TOTAL:</strong> ${total}
        </div>

        <button className="order-btn">Create Order</button>

        <div className="add-item-form">
          <h4>Add New Item</h4>
          <input placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
          <input placeholder="Code" value={newItem.code} onChange={e => setNewItem({ ...newItem, code: e.target.value })} />
          <input placeholder="Price" type="number" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: e.target.value })} />
          <input placeholder="Image URL" value={newItem.img} onChange={e => setNewItem({ ...newItem, img: e.target.value })} />
          <button onClick={addItem}>Add Item</button>
        </div>
      </main>
    </div>
  );
}
