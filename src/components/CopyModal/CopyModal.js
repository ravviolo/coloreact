import * as Styled from "./CopyModal.styles";

const CopyOverlay = ({ bgColor, copied }) => {
  return <Styled.Overlay bgColor={bgColor} copied={copied} />;
};
const OverlayContent = ({ bgColor, copied }) => {
  return (
    <Styled.Content copied={copied}>
      <h1>copied</h1>
      <p>{bgColor}</p>
    </Styled.Content>
  );
};
const CopyModal = ({ bgColor, copied }) => {
  return (
    <>
      <CopyOverlay bgColor={bgColor} copied={copied} />
      <OverlayContent bgColor={bgColor} copied={copied} />
    </>
  );
};
export default CopyModal;
