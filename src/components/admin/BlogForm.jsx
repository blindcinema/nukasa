import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';



export function BlogForm(props) {
//TODO change input types by showing a dialog
const [list, setList] = useState([]);

 const addItemToList = () => {
    setList( [ ...list, {id:uuidv4(),} ] )
 }
 function handleSubmit(e) {
    e.preventDefault();
 }

 const listComponent = list.map((item) =>
 {
    
    const deleteItemFromList = () => {
        console.log(list)
        
        setList (list.filter((newItem) => {
            console.log(newItem.id)
            return newItem.id !== item.id;
    
        })
        )
     }
    return (<div key={item.id}><input type="text" placeholder={item.id} /><button onClick={deleteItemFromList}>DELETE</button></div>)
 })
return (
        <div className={props.className + " blog_form"}>
            <div className="form_container">
                PLACEHOLDER TEXT
                <form onSubmit={handleSubmit}>
                    {listComponent}
                    <button onClick={addItemToList}>Add Item</button>
                    <button onClick={()=>{setList([])}}>CLEAR</button>
                </form>
                
            </div>
        </div>
    )
}