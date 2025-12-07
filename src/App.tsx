import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/thunks";
import type { RootState, AppDispatch } from "./store/index";
import type { Product } from "./types";
import Card from "./components/Card";
import LogoIcon from "./components/LogoIcon";
import styles from "./App.module.css";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <a href="/">
          <h1 className={styles.title}>Product catalog</h1>
        </a>
        <div className={styles.brand}>
          <LogoIcon />
          <div className={styles.brandTextContainer}>
            <p className={styles.brandText}>Green companions</p>
            <p className={styles.brandText}>for every space</p>
          </div>
        </div>
      </header>
      <main className={styles.cardList}>
        {data.map((p: Product) => (
          <Card key={p.id} product={p} />
        ))}
      </main>
    </div>
  );
};

export default App;
