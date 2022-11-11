import { formatPrice } from 'utils/formatters';
import './styles.scss';

type Props = {
  price: number;
};

function ProductPrice({ price }: Props) {
  return (
    <>
      <div className="product-price-container">
        <span>R$</span>
        <h3>{formatPrice(price)}</h3>
      </div>
    </>
  );
}

export default ProductPrice;
