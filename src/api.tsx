export const getCactusList = async () => {
  try {
    const res = await fetch("http://127.0.0.1:5000/api/products");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Failed to fetch cactus list:", err);
    return [];
  }
};
