export type TitleVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'h8';
export type SubTitleVariant = 's1' | 's2' | 's3';
export type ParagraphVariant =
  | 'p0'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4'
  | 'p5'
  | 'p6'
  | 'p7'
  | 'p8';
export type ButtonVariant = 'b1' | 'b2';
export type CaptionVariant = 'c1';
export type OverlineVariant = 'o1';
export type LinkVariant = 'l1' | 'l2' | 'l3' | 'l4';
export type ErrorVariant = 'e1';

export type Variant =
  | TitleVariant
  | SubTitleVariant
  | ParagraphVariant
  | ButtonVariant
  | CaptionVariant
  | OverlineVariant
  | LinkVariant
  | ErrorVariant;

export type AlignText = 'left' | 'center' | 'right';
