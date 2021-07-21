export const getProductsByCategory = (arr, category) => {
  return category ? arr.filter((item) => item.category.toLowerCase() === category.toLowerCase())
  : arr;
}

export const getProductsBySearch = (products, keyword) => keyword && keyword !== "" ? products.filter(product => product.name.toLowerCase().includes(keyword)) : products;