import React, { useState } from 'react';
import Menu from '../component/Menu';

const Income = () => {

    const [list, setList] = useState([]);
    const [item, setItem] = useState();

    const addItem = ()=>{
        if(!item) return;
        list.push(item);
        setList([...list])
        setItem("");
    }

    const delItem =(index)=>{
        list.splice(index,1);
        setList([...list])
    }

    return (
        <div>
            <Menu></Menu>
            <h1> <u>Income</u> </h1>
            <input placeholder="Income details" value={item} onChange={(e)=>{setItem(e.target.value)}} />
            <button onClick={addItem}>Add</button>
            {
                list.length !==0 ?(
                    list.map((element,index)=> {
                        return(
                        <ul>
                        <li>{element} <button onClick={()=>{delItem(index)}}>remove</button></li>
                        </ul>
                        )
                    }
                    )
                ):("")
            }
        </div>
    );
};

export default Income;