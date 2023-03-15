import { CSSProperties, ReactElement } from 'react';

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  onChange?: (args: onChangesArgs) => void;
  product: Product;
  style?: CSSProperties;
  value?: number;
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
}
