import { HistoryContent } from 'components/HistoryContent/HistoryContent';
import { CartSection, Container } from 'styles/globalComponents.styled';

const History = () => {
  return (
    <CartSection>
      <Container>
        <HistoryContent />
      </Container>
    </CartSection>
  );
};

export default History;
