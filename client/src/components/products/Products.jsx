import { useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import { useNavigate } from "react-router-dom";
const Products = ({ categories, filtered, products, setProducts, search }) => {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="products-wrapper grid grid-cols-card gap-8 mb-10">
         {filtered
        .filter((product) => product.title.toLowerCase().includes(search))
        .map((item) => (
          <ProductItem item={item} key={item._id} />
        ))}

      <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-red-700 flex justify-center items-center rounded-2xl hover:bg-yellow-500 min-h-[90px] min-w-[100px]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="text-white md:text-2xl" />
      </div>  <div
        className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-red-700 flex justify-center items-center rounded-2xl hover:bg-yellow-500 min-h-[90px] min-w-[100px]"
        onClick={() => navigate("/products")}
      >
     
        <EditOutlined className="text-white md:text-2xl" />
      </div>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};

export default Products;