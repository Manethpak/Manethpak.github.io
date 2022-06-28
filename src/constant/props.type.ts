export type GenericProps = {
  // generic react props
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  // custom props
  [key: string]: any;
};
