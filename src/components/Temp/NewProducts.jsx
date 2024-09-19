const NewProducts = (props) => {
    const { productName, article, title, shortDescr, properties, isOnStock = true, imgUrl } = props;
    return (
<div>
    <h3>Title: {productName}</h3>
    <img src={imgUrl} alt={productName} />
    <p>Number: {article}</p>
    <p>Title: {title}</p>
    <p>Description: {shortDescr}</p>
    <p>Properties: {properties}</p>
    <p>In Stock: {isOnStock ? "Yes" : "No"}</p>
    <p></p>
</div>
    )
}


export default NewProducts;