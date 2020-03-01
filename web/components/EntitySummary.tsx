import { css } from '@emotion/core';
import { Indexable } from '@local/schema';

import { colors } from '../style';
import { memoize } from '../utility';

import { EntityImage } from './EntityImage';

const borderSize = 2;
const basePadding = 16;
const insetAmount = 0.625;

const getHeaderStyles = memoize((imageSize: number) => css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  margin: 0,
  fontSize: 36,
  fontWeight: 'lighter',
  textTransform: 'uppercase',
  lineHeight: '1.0',
  paddingLeft: imageSize + basePadding * 2 + borderSize,
  paddingBottom: basePadding,
  minHeight: (imageSize * insetAmount) - basePadding,
}));

const summaryContainerStyles = css({
  border: `${borderSize}px solid ${colors.Light.N400}`,
  borderRadius: 16,
  padding: basePadding,
  backgroundColor: colors.Light.N0,
});

const summaryStyles = css({
  display: 'flex',
});

const getEntityImageStyles = memoize((imageSize: number) => css({
  marginTop: -(imageSize * insetAmount),
  marginRight: basePadding,
  filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.3))',
}));

const descriptionStyles = css({
  margin: 0,
  flex: 1,
});

const statisticsStyles = css({
  'dl': {
    display: 'inline-block',
    margin: 0,
    marginTop: basePadding / 2,
    padding: `0 ${basePadding}px`,
    fontSize: 14,
    
    borderRight: `1px solid ${colors.Light.N400}`,
    '&:first-child': {
      paddingLeft: 0,
    },
    '&:last-child': {
      paddingRight: 0,
      borderRight: 'none',
    },
    'dt': {
      color: colors.Dark.N500,
      marginBottom: 4,
    },
    'dd': {
      margin: 0,
    },
  },
});

export interface EntityWithDescription extends Indexable {
  description: string;
}

export interface EntitySummaryParams {
  entity: EntityWithDescription;
  imageSize: number;
  statistics?: Record<string, React.ReactNode>;
}

export function EntitySummary({ entity, imageSize, statistics }: EntitySummaryParams) {
  const headerStyles = getHeaderStyles(imageSize);
  const entityImageStyles = getEntityImageStyles(imageSize);

  return (
    <React.Fragment>
      <h2 css={headerStyles}>{entity.name}</h2>
      <section>
        <div css={summaryContainerStyles}>
          <div css={summaryStyles}>
            <EntityImage entity={entity} size={imageSize} css={entityImageStyles} />
            <p css={descriptionStyles}>{entity.description}</p>
          </div>
          {!!statistics && 
            <div css={statisticsStyles}>
              {Object.entries(statistics).map(([title, content], index) =>
                <dl key={index}>
                  <dt>{title}</dt>
                  <dd>{content}</dd>
                </dl>
              )}
            </div>
          }
        </div>
      </section>
    </React.Fragment>
  );
}