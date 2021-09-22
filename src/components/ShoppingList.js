import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, SetSelectedCategory] = useState("All")

  function selectCategory(event){
    SetSelectedCategory(event.target.value);
  }

  const displayItems = items.map((item) => (<Item key={item.id} name={item.name} category={item.category} />));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(selectCategory)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory !== "All" ? displayItems.filter(items => items.props.category === selectedCategory) : displayItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
