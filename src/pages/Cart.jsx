import { CartContent } from 'components/CartContent/CartContent';
import { CartSection, Container } from 'styles/globalComponents.styled';

const Cart = () => {
  return (
    <CartSection>
      <Container>
        <CartContent />
      </Container>
    </CartSection>
  );
};

export default Cart;
