import { CLOUD_NAME } from 'utils/GlobalUtils';

export const ImagesSource = ({ imageName, page, sizes, type }) => {
  const span = i => {
    let span = '';
    i === 1 ? (span = '-tablet') : i === 2 ? (span = '-mobile') : (span = '');
    return span;
  };

  return (
    <>
      {sizes?.map((size, index) => (
        <>
          <source
            srcSet={`${CLOUD_NAME}${page}-webp/${imageName}${span(
              index
            )}.webp 1x,
                ${CLOUD_NAME}${page}-webp/${imageName}${span(
              index
            )}_2x.webp 2x`}
            media={`(${size.media})`}
            width={size.width}
            height={size.height}
            type="image/webp"
          />
          <source
            srcSet={`${CLOUD_NAME}${page}/${imageName}${span(index)}.${type} 1x,
                ${CLOUD_NAME}${page}/${imageName}${span(index)}_2x.${type} 2x`}
            media={`(${size.media})`}
            width={size.width}
            height={size.height}
          />
        </>
      ))}
    </>
  );
};

export const ImagesSource_tmp = ({ imageName, page }) => {
  return (
    <>
      <source
        srcSet={`${CLOUD_NAME}${page}-webp/${imageName}.webp 1x,
                ${CLOUD_NAME}${page}-webp/${imageName}_2x.webp 2x`}
        media="(min-width: 1440px)"
        type="image/webp"
      />
      <source
        srcSet={`${CLOUD_NAME}${page}/${imageName}.png 1x,
                ${CLOUD_NAME}${page}/${imageName}_2x.png 2x`}
        media="(min-width: 1440px)"
      />
      <source
        srcSet={`${CLOUD_NAME}${page}-webp/${imageName}-tablet.webp 1x,
                ${CLOUD_NAME}${page}-webp/${imageName}-tablet_2x.webp 2x`}
        media="(min-width: 1024px)"
        type="image/webp"
      />
      <source
        srcSet={`${CLOUD_NAME}${page}/${imageName}-tablet.png 1x,
                ${CLOUD_NAME}${page}/${imageName}-tablet_2x.png 2x`}
        media="(min-width: 1024px)"
      />
      <source
        srcSet={`${CLOUD_NAME}${page}-webp/${imageName}-mobile.webp 1x,
                ${CLOUD_NAME}${page}-webp/${imageName}-mobile_2x.webp 2x`}
        media="(max-width: 1024px)"
        type="image/webp"
      />
      <source
        srcSet={`${CLOUD_NAME}${page}/${imageName}-mobile.png 1x,
                ${CLOUD_NAME}${page}/${imageName}-mobile_2x.png 2x`}
        media="(max-width: 1024px)"
      />
    </>
  );
};
