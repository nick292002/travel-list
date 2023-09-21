import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';


export default function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('packingList')) || []);

  useEffect(() => {
    localStorage.setItem('packingList', JSON.stringify(items))

  }, [items]);

  function HandleAddItem(newItem) {
    setItems(items => [...items, newItem])
  }

  function HandleRemoveItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item => (item.id === id ?
        { ...item, packed: !item.packed }
        : item)
      ));
  }

  function HandleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all the items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Logo />
      <Navbar onAddItems={HandleAddItem} />
      <PackingList items={items}
        onDeleteItem={HandleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearList={HandleClearList} />
      <Stats Items={items} />
    </div>
  );
}









