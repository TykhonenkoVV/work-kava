import { Fragment, useEffect, useState } from 'react';
import { CLOUD_NAME } from 'utils/constants';

export const ImagesSource = ({
  imageName,
  page,
  sectionId,
  sizes,
  types,
  URLs
}) => {
  const [isWebContent, setIsWebContent] = useState();

  useEffect(() => {
    setIsWebContent(() => {
      return [
        'coffee-classic',
        'coffee-with-milk',
        'desserts',
        'burgers',
        'rolls',
        'hot-dogs'
      ].includes(sectionId);
    });
  }, [sectionId]);

  return (
    <>
      {isWebContent ? (
        <>
          {sizes?.map((size, index) => (
            <Fragment key={index}>
              <source
                srcSet={`${CLOUD_NAME}w_${size.width},h_${size.height},c_fill/${URLs.webpImgURL} 1x, ${CLOUD_NAME}w_${size.width},h_${size.height},c_fill/${URLs.webpImgURL} 2x`}
                media={`(${size.media})`}
                width={size.width}
                height={size.height}
                type={`image/${types[0].type}`}
              />
              <source
                srcSet={`${CLOUD_NAME}w_${size.width},h_${size.height},c_fill/${URLs.imgURL} 1x, ${CLOUD_NAME}w_${size.width},h_${size.height},c_fill/${URLs.imgURL} 2x`}
                media={`(${size.media})`}
                width={size.width}
                height={size.height}
                type={`image/${types[1].type}`}
              />
            </Fragment>
          ))}
        </>
      ) : (
        <>
          {sizes?.map((size, index) => (
            <Fragment key={index}>
              {types?.map((type, typeIndex) => (
                <source
                  key={typeIndex}
                  srcSet={`${CLOUD_NAME}w_${size.width / 2},h_${
                    size.height / 2
                  },c_fill/v1/workkava/${page}/${sectionId}/${
                    type.type
                  }/${imageName}.${type.format} 1x,
                     ${CLOUD_NAME}w_${size.width},h_${
                    size.height
                  },c_fill/v1/workkava/${page}/${sectionId}/${
                    type.type
                  }/${imageName}.${type.format} 2x`}
                  media={`(${size.media})`}
                  width={size.width}
                  height={size.height}
                  type={`image/${type.type}`}
                />
              ))}
            </Fragment>
          ))}
        </>
      )}
    </>
  );
};
