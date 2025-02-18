import {Link, useNavigate} from '@remix-run/react';
import {AddToCartButton} from './AddToCartButton';
import {useAside} from './Aside';

type ProductFormProps = {
  product: any; // Replace with proper type
};

export function ProductForm({product}: ProductFormProps) {
  const navigate = useNavigate();
  const {openAside} = useAside();

  return (
    <div className="grid gap-4">
      <AddToCartButton
        lines={[
          {
            merchandiseId: product.variants.nodes[0].id,
            quantity: 1,
          },
        ]}
        onClick={() => {
          openAside();
        }}
      >
        Add to Cart
      </AddToCartButton>
    </div>
  );
}
