import { ReverseCategoryTagContainer } from './styles';

interface CategoryTagProps {
  text: string;
  isBold?: boolean;
}

export const ReverseCategoryTag: React.FC<CategoryTagProps> = ({
  text,
  isBold,
}) => {
  return (
    <ReverseCategoryTagContainer isBold={isBold}>
      {text}
    </ReverseCategoryTagContainer>
  );
};
