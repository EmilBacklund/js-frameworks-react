import { useState, useReducer } from 'react';

const ACTIONS = {
  ADD_PRODUCT: 'add-product',
  DELETE_PRODUCT: 'delete-product',
};

function reducer(products, action) {
  console.log(products);
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return [
        ...products,
        { id: Date.now(), name: action.payload.productName },
      ];
    case ACTIONS.DELETE_PRODUCT:
      return products.filter((product) => product.id !== action.payload.id);
    default:
      return products;
  }
}

const ProductExample = () => {
  const [products, dispatch] = useReducer(reducer, []);

  const [productName, setProductName] = useState('');

  function handleSubmit(event) {
    console.log('Hello you are submitted');
    event.preventDefault();

    console.log(productName);

    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: { productName: productName },
    });

    setProductName('');
  }

  function deleteProduct(id) {
    console.log('Delete me');
    console.log('ID: ', id);

    dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: { id: id } });
  }

  return (
    <div className="productContainer">
      <h1>ProductExample</h1>
      <form onSubmit={handleSubmit} className="flex">
        <div>
          <label>Product Name</label>
          <input
            placeholder="Write product name"
            type="text"
            onChange={(event) => setProductName(event.target.value)}
            value={productName}
          />
        </div>
      </form>

      <ul>
        {products.map((item) => {
          return (
            <li key={item.id} className="product">
              <span>{item.name}</span>
              <button onClick={() => deleteProduct(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductExample;
