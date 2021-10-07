const showLoading = () => { loading.classList.remove("hide-loading") }

const hideLoading = () => { loading.classList.add("hide-loading") }

const get = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  throw new Error("no element selected")
}

const setCocktail = (section) => {
  section.addEventListener("click", (e) => {
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem("drink", id);
  });
};
const loading = get(".loading");

export {
  get,
  setCocktail,
  showLoading,
  hideLoading
}
