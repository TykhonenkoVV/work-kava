import { StyledBtn } from './SetBtn.styled';

export const SetBtn = ({ styles, children }) => {
  return (
    <StyledBtn type="button" styles={styles}>
      {children}
    </StyledBtn>
  );
};
