import React from 'react';
import DefaultItem from './DefaultItem';
import DefaultItemMobile from './DefaultItemMobile';
import Media from 'react-media';

function Items({ columns, data }) {
  return (
    <Media query={{ minWidth: 576 }} key="mediaDefault">
      {matches =>
          data.map((item, i) => {
          const Item = matches ? DefaultItem : DefaultItemMobile;
          return (
            <Item key={item.key} item={item} columns={columns} isLastItem={data.length === i + 1} />
          );
        })
      }
    </Media>
  );
}
export default Items;
