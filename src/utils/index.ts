export const getCollapseValue = () => {
  return JSON.parse(localStorage.getItem("collapseValue") as string);
};
