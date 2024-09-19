

import { Alert } from "./Alert"; 
import Product from "./Product"; 

export const App = () => {
  return (
    <>
      <h1>Best Selling</h1>

      {/* Alerts */}
      <Alert variant="info">Would you like to browse our recommended products?</Alert>
      <Alert variant="error">There was an error during your last transaction</Alert>
      <Alert variant="success">Payment received, thank you for your purchase</Alert> {/* Исправлено "succes" на "success" */}
      <Alert variant="warning">Please update your profile contact information</Alert>

      {/* Products */}
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </>
  );
};

export default App;






// import NewProducts from "./Temp/NewProducts";
// import productsData from "./products.json"
// import NewSection from "./Temp/NewSection";


// function App () {
//   return (
//     <div>
//       <h1>Welcome to our shop</h1>

//       <NewSection title="New Products">
//         {productsData.map((productsItem) => {
//           return (
//             <NewProducts
//               key={productsItem.article}  
//               productName={productsItem.productName}
//               article={productsItem.article}
//               title={productsItem.title}
//               shortDescr={productsItem.shortDescr}
//               properties={productsItem.properties}
//               isOnStock={productsItem.isOnStock}
//               imgUrl={productsItem.imgUrl}
//             />
//           )
//         })}
//       </NewSection>
          

//       <NewSection title="Most Interested">
//       {productsData.map((productsItem) => {
//           return (
//             <NewProducts
//               key={productsItem.article}  
//               productName={productsItem.productName}
//               article={productsItem.article}
//               title={productsItem.title}
//               shortDescr={productsItem.shortDescr}
//               properties={productsItem.properties}
//               isOnStock={productsItem.isOnStock}
//               imgUrl={productsItem.imgUrl}
//             />
//           )
//         })}
//       </NewSection>
//     </div>


//   )
// }

// export default App