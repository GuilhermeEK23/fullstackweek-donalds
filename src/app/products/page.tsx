import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="rounded-xl border border-red-500 p-5">
      <h1>Products Page</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="Bora fechar este projeto" />
    </div>
  );
};

export default ProductPage;
