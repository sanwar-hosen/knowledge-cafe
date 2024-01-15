import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Home = () => {

    useEffect(() => {
        fetch('./src/Asset/data.json')
            .then(res => res.json())
            .then(data => setcardData(data))

    }, [])

    const [cardData, setcardData] = useState([]);
    console.log(cardData)

    return (
        <div>
            <div className="grid grid-cols-3 gap-8 w-3/4">
                {
                    cardData.map((data) => <Card key={data.id} cardData={data}></Card>)
                }
            </div>
            <div className="w-1/4">
                <Cart> </Cart>
            </div>
        </div>
    );
};

export default Home;