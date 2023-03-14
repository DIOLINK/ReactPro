import { CSSProperties, ReactElement } from 'react';

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
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
