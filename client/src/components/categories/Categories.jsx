import { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import Edit from "./Edit";
import "./style.css";
const Categories = ({ categories, setCategories, setFiltered, products }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useState(false);
    const [categoryTitle, setCategoryTitle] = useState("Tümü");
  
    useEffect(() => {
      if (categoryTitle === "Tümü") {
        setFiltered(products);
      } else {
        setFiltered(products.filter((item) => item.category === categoryTitle));
      }
    }, [products, setFiltered, categoryTitle]);
  return (
    <div>
       <ul className="flex gap-4 md:flex-col text-lg mb-5">
       {categories.map((item) => (
          <li
          className={`category-item ${
            item.title === categoryTitle && "!bg-black"
          }`}
          key={item._id}
          onClick={() => setCategoryTitle(item.title)}
        >
          <span>{item.title}</span>
        </li>
      ))}
        <li
        className="category-item !bg-red-700 rounded-2xl hover:!bg-yellow-500"
        onClick={() => setIsAddModalOpen(true)}
      >
        <PlusOutlined className="md:text-2xl" />
      </li>
      <li
        className="category-item !bg-red-700 rounded-2xl hover:!bg-yellow-500"
        onClick={() => setIsEditModalOpen(true)}
      >
        <EditOutlined className="md:text-2xl" />
      </li>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
      <Edit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
      </ul>
    </div>
  );
};

export default Categories;
