import { TextBold, TextRegular } from "./styles";

export const AppName = () => {
  return <TextBold fontSize={24}>Tip App</TextBold>;
};
export const Title = ({ text }) => {
  return <TextBold>{text}</TextBold>;
};

export const Subtitle = ({ text, variant }) => {
  return <TextRegular variant={variant}>{text}</TextRegular>;
};
const defaultValueSize = "medium";
export const Value = ({ value, size = "medium" }) => {
  const sizes = {
    large: 64,
    medium: 32,
    small: 24,
  };
  const currentSize = sizes[size] ?? sizes[defaultValueSize];

  return (
    <TextBold fontSize={currentSize}>{value}</TextBold>
  )
};
