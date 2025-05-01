import React, { use } from "react";

const categoriesPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  //   console.log(categoriesPromise);
  const categories = use(categoriesPromise);

  return (
    <div>
      <h2 className="font-bold">All categories</h2>
    </div>
  );
};

export default Categories;
