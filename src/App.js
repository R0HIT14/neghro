import Header from "./components/Header";
import Products from "./components/Products";

import "./app.css";

// const handelInfiniteScroll = async () => {
//   try {
//     if (
//       window.innerHeight + document.documentElement.scrollTop + 1 >=
//       document.documentElement.scrollHeight
//     ) {
//       setLoading(true);
//       setPage((prev) => prev + 1);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// useEffect(() => {
//   window.addEventListener("scroll", handelInfiniteScroll);
//   return () => window.removeEventListener("scroll", handelInfiniteScroll);
// }, []);


function App() {
  return (
    <div className="App">
      <Header />
      <Products uri={"products"} />
    </div>
  );
}

export default App;
