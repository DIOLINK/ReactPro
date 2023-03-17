import { CSSProperties } from 'react';

export interface ProductCardProps {
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandler) => JSX.Element;
  className?: string;
  onChange?: (args: onChangesArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
  initialValues?: InitialValues;
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  count: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export interface ProductButtonProps {
  className?: string;
  style?: CSSProperties;
}

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface onChangesArgs {
  product: Product;
  count: number;
}

export interface useProductArg {
  onChange?: (args: onChangesArgs) => void;
  product: Product;
  value?: number;
  initialValues?: InitialValues;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandler {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
