import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Bucket from './Bucket'
import {DragDropContext} from 'react-beautiful-dnd';

const reorderBucket = ({ bucketList, source, destination }) => {
  const current = bucketList.find(x=>x.BucketId === parseInt(source.droppableId, 10));
  const next = bucketList.find(x=>x.BucketId === parseInt(destination.droppableId, 10));
  const target = current.Items[source.index];

  if (source.droppableId === destination.droppableId) {

    const reordered = reorder(
      current.Items,
      source.index,
      destination.index,
    );

    bucketList.map((bucket) => {
      let items = bucket;
      if(bucket.BucketId === parseInt(source.droppableId, 10)) {
        items.Items = reordered
      }
      return items;
    })

    return {
      bucketList: bucketList,
      autoFocusQuoteId: null,
    };

  }

  current.Items.splice(source.index, 1);

  next.Items.splice(destination.index, 0, target);

  bucketList.map((bucket) => {

    let items = bucket;

    if(bucket.BucketId === parseInt(source.droppableId, 10)) {
      items = current
    }

    if(bucket.BucketId === parseInt(destination.droppableId, 10)) {
      items = next
    }

    return items;

  })


  return {
    bucketList: bucketList,
    //autoFocusBucketId: target.ItemId,
  };
};


const reorder = (list, startIndex, endIndex) => {
  const [removed] = list.splice(startIndex, 1);
  list.splice(endIndex, 0, removed);
  return list
};


class BucketList extends Component {

  static propTypes = {
    bucketList: PropTypes.array,
  }


  state = {
    bucketList: this.props.bucketList,
  }

  onDragEnd = (result) => {

    if (!result.destination) {
      return;
    }

    const res = reorderBucket({
      bucketList: this.state.bucketList,
      source: result.source,
      destination: result.destination,
    });

    this.setState({bucketList: res.bucketList});

  }

  render() {
    const {bucketList} = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {
          bucketList.map((bucket, index) => <Bucket bucket={bucket} key={index}/>)
        }
      </DragDropContext>
    )
  }
}

export default BucketList
