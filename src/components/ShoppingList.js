import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {


const [FilterCategory, setFilterCategory] = useState("All");
const [ItemsFiltered,setItemsFiltered] = useState(items)

function changeFilter(event) {
    const filterValue=(event.target.value);
    setFilterCategory(filterValue);
    if (filterValue==="All"){
      setItemsFiltered(items)
    } else{
      setItemsFiltered((items.filter((item)=>item.category===FilterCategory)));
    }
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {ItemsFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
