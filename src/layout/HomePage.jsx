import data from '../data.json'
import './Layoutmodule.css'
import { useState, createContext, useContext } from 'react'


const ContextCart = createContext(null);

const Child = () => {
    const { cart, total, CalQty, ClickFun } = useContext(ContextCart);


    return (
        <>
            <div style={{ display: 'inline', backgroundColor: 'grey' }}>
                <h1 style={{ float: 'left', color: 'blue' }}>{'Smart Phones'}</h1>
                <button style={{ float: 'right', fontSize: '15px', padding: '8px', borderRadius: '5px', color: 'aqua', backgroundColor: 'black' }}>
                    {'Total Price : '}<i style={{ padding: '2px' }} className="fa-solid fa-indian-rupee-sign">{' ' + total[0].totalPrice}</i>
                </button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    cart.map((val) => (
                        <div key={val.id}>
                            <div className='product'>
                                <img style={{ height: '350px', width: '300px', objectFit: 'contain' }} src={val.image}></img>
                                <div className='proname'>
                                    <h3 style={{ paddingBottom: '0', textAlign: 'center', color: 'yellow' }}>{val.title}</h3>
                                    <h4>Brand : {val.brand}</h4>
                                    <h5>Description : {val.description}</h5>
                                    <label>Quantity: </label>
                                    <select value={val.quantity} onChange={(e) => {
                                        const { value } = e.target;
                                        CalQty(val.id, value);
                                    }}>
                                        <option value={"1"}>1</option>
                                        <option value={"2"}>2</option>
                                        <option value={"3"}>3</option>
                                    </select>
                                    <i style={{ padding: '10px', color: 'aqua', paddingTop: '0', }} className="fa-solid fa-indian-rupee-sign">
                                        {' ' + val.price * val.quantity}
                                    </i><br></br>
                                    <button className='btn' onClick={() => ClickFun(val.price * val.quantity)}>{'Add to Cart'}</button>
                                </div>
                            </div>
                        </div>
                    ))
                };

            </div>
        </>
    )
}

const Home = () => {
    const [cart, setCart] = useState(data);

    const CalQty = (id, Qty) => {
        const obj = cart.find((item) => item.id === id);
        obj.quantity = Qty;

        const objin = cart.findIndex((item) => item.id === id);
        const empty = [...cart];
        empty[objin] = obj;
        setCart(empty);
    }

    const [total, settotal] = useState([{
        totalPrice: 0
    }]);

    const ClickFun = (temprice) => {
        const temp = [...total];
        temp[0].totalPrice += temprice;
        settotal(temp);

    }

    return (
        <ContextCart.Provider value={{ cart, total, CalQty, ClickFun }}>
            <Child />
        </ContextCart.Provider>
    )
}

export default Home