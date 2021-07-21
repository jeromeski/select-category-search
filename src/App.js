import "./styles.css";
import "antd/dist/antd.css";
import { useSelector } from 'react-redux'
import useProductData from "./hooks/useProductData";
import productData from "./data/product.json"

export default function App() {
  const globalState = useSelector((state) => state.global);
  const data = useProductData(productData, globalState.category, "jacket")
  console.log(data)
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
