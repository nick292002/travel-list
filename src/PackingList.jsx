import { useState } from "react";
import { Stack, Button, Form, Row, Col } from "react-bootstrap";

export default function PackingList({ onClearList, items, onDeleteItem, onToggleItem }) {

    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "status") sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

    return (
        // Items list
        <div className="container-fluid p-2 bg-success flex-grow-1 d-flex align-item-start flex-column">
            <div className="container text-white text-center mb-0">
                <List sortedItems={sortedItems}
                    onDeleteItem={onDeleteItem}
                    onToggleItem={onToggleItem} />
            </div>

            {/* Bottom Select and Button */}
            <div className="container mt-auto d-flex justify-content-center align-items-center ">
                <Row>
                    <Col>
                        <Form.Select size="sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="input">Sort by input order</option>
                            <option value="description">Sort by description</option>
                            <option value="status">Sort by packed  statue</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Button variant="dark" size="sm" onClick={onClearList}>Clear List</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const List = ({ sortedItems, onDeleteItem, onToggleItem }) => {
    return (
        <div className="d-flex flex-wrap ">
            {sortedItems.map((item) => <Item item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem} key={item.id} />)}
        </div>
    )
}

const Item = ({ item, onDeleteItem, onToggleItem }) => {

    return (
        <Stack direction="horizontal" className="col-xl-2  col-lg-3 col-md-4 col-sm-6 col-12 p-1 " gap={1} >
            <Form.Check className="m-1" type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
            <span size="sm" className={item.packed ? "text-decoration-line-through " : ""}  >
                {item.quantity} {item.description}
            </span>
            <Button variant="info" size="sm"
                onClick={() => onDeleteItem(item.id)}>❌</Button>

        </Stack >
    )

}