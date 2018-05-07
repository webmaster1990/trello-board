import React from 'react'
import PropTypes from 'prop-types'
import {Draggable} from 'react-beautiful-dnd';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  padding: grid * 2,
  background: isDragging ? 'lightgreen' : '',
  ...draggableStyle,
});

const BucketItem = ({bucketItem: {ItemTitle, Description, ItemId}, index}) => {
    return (
      <Draggable key={ItemId} draggableId={ItemId} index={index}>
        {(provided2, snapshot2) => (
          <div>
            <div className="card card-block item"
                 ref={provided2.innerRef}
                 {...provided2.draggableProps}
                 {...provided2.dragHandleProps}
                 style={getItemStyle(
                   snapshot2.isDragging,
                   provided2.draggableProps.style
                 )}
            >
              <p><b>{ItemTitle}</b></p>
              <p>{Description}</p>
            </div>
            {provided2.placeholder}
          </div>
        )}
      </Draggable>
    )
}

BucketItem.propTypes = {
  bucketItem: PropTypes.shape({
    ItemTitle: PropTypes.string,
    Description: PropTypes.string,
    ItemId: PropTypes.number,
  }),
  index: PropTypes.number,
}

BucketItem.defaultProps = {
  bucketItem: {}
}

export default BucketItem
