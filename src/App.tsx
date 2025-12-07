import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Card from "./components/Card";
import { getCactusList } from "./api";
import LogoIcon from "./components/LogoIcon";

const App = () => {
  const [products, setProducts] = useState<
    { id: number; name: string; description: string; price: number }[]
  >([]);

  useEffect(() => {
    getCactusList()
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <a href="/">
          <h1 className={styles.title}>Product catalog</h1>
        </a>
        <div className={styles.brand}>
          <LogoIcon />
          <p className={styles.brandText}>
            Green companions <br />
            for every space
          </p>
        </div>
      </header>
      <main className={styles.cardList}>
        {products.map((p) => (
          <Card key={p.id} product={p} />
        ))}
      </main>
    </div>
  );
};

export default App;
