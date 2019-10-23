import React from 'react';
import DefaultItem from './DefaultItem';
import DefaultItemMobile from './DefaultItemMobile';
import Media from 'react-media';
import { screenSizes } from 'themes/mediaSettings';

function Items({ rowKey, columns, data }) {
  return (
    <Media query={{ minWidth: screenSizes.sm }} key="mediaDefault">
      {matches =>
        data && data.map((item, i) => {
          const Row = matches ? DefaultItem : DefaultItemMobile;
          const key = rowKey ? item[rowKey] : i;
          return <Row key={key} item={item} columns={columns} isLastItem={data.length === i + 1} />;
        })
      }
    </Media>
  );
}
export default Items;
