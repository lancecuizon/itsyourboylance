import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async() => {
        try {
            const response = await
            axios.get('http://localhost:8000/items/')
            setItems(response.data);
        }catch(error) {
            console.error('Error catching the items!', error)
        }
    };

    return(
        <div className='list-table' style={{marginTop: '5%', marginBottom: '1%', marginLeft: '1%'}}>
                <table className='item-list'>
                <tr>
                    <td colSpan={'14'} className='title-list'>
			            <b><i>All PERSONAL DATA SHEET LIST</i></b>
		            </td>
                </tr>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td colSpan={'2'} className='item' style={{backgroundColor:'gold'}}>{item.id}</td>
                            <td colSpan={'2'} className='item'>{item.surname}</td>
                            <td colSpan={'2'} className='item'>{item.firstname}</td>
                            <td colSpan={'2'} className='item'>{item.middlename}</td>
                            <td colSpan={'2'} className='item'>{item.extension}</td>
                            <td colSpan={'2'} className='item'>
                            <button onClick={() => onEdit(item)} className='list-button-edit' style={{paddingLeft:'13px', paddingRight:'13px', marginLeft: '10px'}}>Edit</button>
                            </td>
                            <td colSpan={'2'} className='item'>
                            <button onClick={() => onDelete(item.id)} className='list-button-delete' style={{paddingLeft:'13px', paddingRight:'13px', marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
        </div>
    );
}

export default ItemList;