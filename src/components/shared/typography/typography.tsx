import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

export type TTypographyLevel =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'text-big'
  | 'text-main'
  | 'text-small'
  | 'text-xsmall'
  | 'text-xxsmall'
  | 'text-tiny';

export type TTypographyWeight = 'black' | 'bold' | 'medium' | 'regular';

export type TTypographyVariant = 'plain' | 'outlined';

export type TTypographyFontStyle = 'italic' | 'normal';

interface ITypographyProps extends PropsWithChildren {
  level?: TTypographyLevel;
  weight?: TTypographyWeight;
  variant?: TTypographyVariant;
  fontStyle?: TTypographyFontStyle;
  ellipsis?: boolean;
  color?: string;
  uppercase?: boolean;
  as?: string;
  style?: any;
  title?: string;
  noWhitespace?: boolean;
}

const getLineHeight = (level: TTypographyLevel) => {
  switch (level) {
    case 'h1':
      return '2.625rem'; // 42px
    case 'h2':
      return '2.5rem'; // 40px
    case 'h3':
      return '2rem'; // 32px
    case 'h4':
      return '1.5rem'; // 24px
    case 'text-big':
      return '1.25rem'; // 20px
    case 'text-main':
      return '1.125rem'; // 18px
    case 'text-small':
      return '1rem'; // 16px
    case 'text-xsmall':
      return '0.875rem'; // 14px
    case 'text-xxsmall':
      return '0.75rem'; // 12px
    case 'text-tiny':
      return '0.625rem'; // 10px
    default:
      return 'normal';
  }
};

const Container = styled.p`
  margin: 0;
  padding: 0;
  list-style: none;

  ${({ noWhitespace }: ITypographyProps) =>
    noWhitespace &&
    css`
      white-space: nowrap;
    `}

  ${({ level, weight }: ITypographyProps) =>
    css`
      font-size: var(--font-size-${level});
      font-weight: var(--font-weight-${weight});
    `}

  ${({ variant }: ITypographyProps) =>
    variant === 'outlined' &&
    css`
      font-weight: var(--font-weight-black);

      color: var(--elements-system-white);
      -webkit-text-stroke: var(--size-1) var(--elements-system-black);
      -webkit-text-fill-color: var(--elements-system-white);
    `}

    ${({ ellipsis }: ITypographyProps) =>
    ellipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    `}

  font-style: ${({ fontStyle }: ITypographyProps) => fontStyle && `${fontStyle}`};
  color: ${({ color }: ITypographyProps) => (color ? `${color}` : 'inherit')};
  text-transform: ${({ uppercase }: ITypographyProps) => (uppercase ? 'uppercase' : 'none')};

  cursor: default;
  letter-spacing: 0%;
  line-height: ${({ level }: ITypographyProps) => level && `${getLineHeight(level)}`};
`;

const Typography: FC<ITypographyProps> = ({
  children,
  level = 'text-main',
  weight = 'regular',
  variant = 'plain',
  fontStyle = 'normal',
  ellipsis = false,
  uppercase = false,
  noWhitespace = false,
  color = 'inheritance',
  as,
  style,
  title
}) => {
  const getTag = (level: TTypographyLevel): string => {
    switch (level) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      case 'text-tiny':
        return 'span';
      default:
        return 'p';
    }
  };

  return (
    <>
      <Container
        style={style}
        color={color}
        level={level}
        weight={weight}
        variant={variant}
        fontStyle={fontStyle}
        ellipsis={ellipsis}
        uppercase={uppercase}
        title={title}
        noWhitespace={noWhitespace}
        as={as ? as : (getTag(level) as any)}>
        {children}
      </Container>
    </>
  );
};

export default Typography;
