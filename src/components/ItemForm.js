import React, { useState, useEffect } from 'react';

function ItemForm() {
    const [search, setSearch] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemImages, setItemImages] = useState({});
    const [itemAttributes, setItemAttributes] = useState([]);
    const [itemEffect, setItemEffect] = useState("");
    const [itemFlavorText, setItemFlavorText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = '/items/' + search
        fetch(url).then(res => res.json()).then(data => {
            setItemName(data.name);
            setItemImages(data.sprites);
            setItemAttributes(data.itemAttributes);
            setItemEffect(data.effect_entries[0].short_effect);
            setItemFlavorText(data.flavor_text_entries[2].text);
        })
    }

    useEffect(() => {
        fetch('/items/master-ball').then(res => res.json()).then(data => {
            setItemName(data.name);
            setItemImages(data.sprites);
            setItemAttributes(data.attributes);
            setItemEffect(data.effect_entries[0].short_effect);
            setItemFlavorText(data.flavor_text_entries[2].text);
        })
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Search Items:
                <p><input type="text" value={search} onChange={e => setSearch(e.target.value)} /></p>
            </label>
            <input type="submit" value="Search" />
            <p>{itemName}</p>
            <p>{itemAttributes ? (itemAttributes.map((element, i) => {
                return (<span key={i}>{element.name}, </span>)
            })) : (null)}</p>
            <img src={itemImages.default} alt={itemName} />
            <p>{itemEffect}</p>
            <p>Flavor Text:</p>
            <p>{itemFlavorText}</p>
        </form>
    )
}

export default ItemForm;