import { useEffect, useState } from "react"

type Product = {
    userId: number,
    id: number,
    title: string,
    body: string
};

const MyComponent = () => {
    const [data, setData] = useState<Product[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log("Error fetching the data", error);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            {data ? data.map((item: Product) => (
                <div key={item.id}>
                    <div>
                        <h2>User ID: {item.userId}</h2>
                        <h3>Product ID: {item.id}</h3>
                        <h2>Product Title: {item.title}</h2>
                        <h3>Product Description: {item.body}</h3>
                    </div>
                </div>
            )) : <p>Loading data...</p>}
        </div>
    );
}

export default MyComponent
