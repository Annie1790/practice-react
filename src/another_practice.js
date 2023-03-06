import { useState } from "react";

const items = [
    {productName:"Thummerer Vili Papa", vintage: "2009", price:"£100"},
    {productName:"Gilvesy Bohem Cuvee", vintage: "2020", price:"£29"},
    {productName:"Domaine De Trevaillon", vintage: "2005", price:"£300"},
    {productName:"Picpoul De Pinet", vintage: "2022", price:"£26"},
    {productName:"Felton Road", vintage: "2018", price:"£75"},
    {productName:"Dingic Plavac Mali", vintage: "2017", price:"£89"},
    {productName:"Chablis 1Er Cru", vintage: "2007", price:"£400"},
    {productName:"Riesling Trocken", vintage: "2021", price:"£48"}
];

let Board = () => {
    const [index, setIndex] = useState(0);
    

    let clickEvent = () => {
        // setIndex((index+1)%items.length);

        if (index+1 >= items.length) {
            setIndex(0)
        } else {
            setIndex(index+1)
        }
        

        //% means that whenever the index reaches at 8, 8%8 equals to zero therefore the index start from 0 again
    }

    

    let item = items[index];

    return (
        <div className="product-box">
            <button onClick={clickEvent}>Next</button>
            <h1>{item.productName}</h1>
            <p>{item.vintage}</p>
            <p>{item.price}</p>
        </div>
    )
}

export default Board