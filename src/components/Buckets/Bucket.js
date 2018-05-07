import React from 'react'
import PropTypes from 'prop-types'
import {Droppable} from 'react-beautiful-dnd';
import BucketItem from './BucketItem'

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? '#6b879e' : '',
  padding: grid,
});

const Bucket = ({bucket: {BucketId, Items, Description}}) => {
  return (
    <Droppable key={BucketId} droppableId={String(BucketId)}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
          className="col-12 col-sm-6 col-md-6 col-lg-3 main-item">
          <h4>
            <b>{Description}</b>
          </h4>
          {
            Items && Items.map((item, index) => <BucketItem key={index} bucketItem={item} index={index} />)
          }
        </div>
      )}
    </Droppable>
  )
}

Bucket.propTypes = {
  bucket: PropTypes.shape({
    Items: PropTypes.array,
    Description: PropTypes.string,
    BucketId: PropTypes.number,
  }),
}

Bucket.defaultProps = {
  bucket: {},
}

export default Bucket
