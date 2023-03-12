import { useState } from "react";

const items = [
    { productName: "Thummerer Vili Papa", vintage: "2009", price: "£100" },
    { productName: "Gilvesy Bohem Cuvee", vintage: "2020", price: "£29" },
    { productName: "Domaine De Trevaillon", vintage: "2005", price: "£300" },
    { productName: "Picpoul De Pinet", vintage: "2022", price: "£26" },
    { productName: "Felton Road", vintage: "2018", price: "£75" },
    { productName: "Dingic Plavac Mali", vintage: "2017", price: "£89" },
    { productName: "Chablis 1Er Cru", vintage: "2007", price: "£400" },
    { productName: "Riesling Trocken", vintage: "2021", price: "£48" }
];

let Board = () => {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const [counter, setCounter] = useState(0);


    let clickEvent = () => {
        // setIndex((index+1)%items.length);

        if (index + 1 >= items.length) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
        //% means that whenever the index reaches at 8, 8%8 equals to zero therefore the index start from 0 again
    }

    let showPrice = () => {
        setShow(!show)
    }

    let plusOne = () => {
        setCounter(counter + 1)
    }

    let item = items[index];
    //& means the second component is the value, e.g true and the component, false is not rendered
    return (
        <div className="product-box">
            <button onClick={clickEvent}>Next</button>
            <h1>{item.productName}</h1>
            <button onClick={showPrice}>
                {show ? 'Hide' : 'Show'} price
            </button>
            <p>{item.vintage}</p>
            {show &&
                <p>{item.price}</p>
            }
            <p>
                {counter}
            </p>
            <button onClick={() => {
                plusOne()
            }}>Click me</button>
        </div>
    )
}

export default Board