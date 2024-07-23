import "./Product.css";
export default function Product({ id, name, pict, price }) {
    const url = process.env.PUBLIC_URL+'/assets/';
    return (
        <div>
            id : {id} <br />
            name : {name} <br />
            price : {price} <br />
            <img src= {url+pict} alt={name} className="hinh" />
        </div>
    );

    // {require('/images/image-name.png')}
}