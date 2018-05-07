import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getBucketsList} from '../../redux/actions/index'
import BucketList from './BucketList'
import loading from '../../assets/images/loading.svg'
import './Buckets.css'

const mapDispatchToProps = dispatch => bindActionCreators({
  getBucketsList,
}, dispatch)

const mapStateToProps = state => ( {
  bucketList: state.buckets.items || [],
  isBucketsLoading: state.buckets.isLoading,
  bucketListError: state.buckets.error,
} )

class InnRoad extends Component {
  static propTypes = {
    bucketList: PropTypes.array,
    getBucketsList: PropTypes.func,
    isBucketsLoading: PropTypes.bool,
    bucketListError: PropTypes.string,
  }

  componentWillMount() {
    this.props.getBucketsList()
  }

  render() {
    const {bucketList, isBucketsLoading, bucketListError} = this.props
    return (
      <div className="buckets">
        <div className="header">
          <h1 className="text-center heading">
            InnRoad
          </h1>
        </div>
        {
          bucketListError ?
            <div className="alert alert-danger">{bucketListError}</div> :
            <div className="item-list">
              <div className="row flex-row main-item flex-nowrap">
                {
                  isBucketsLoading && <div className="mt-5 ml-auto mr-auto"><img src={loading} width={100} alt="loading" /></div>
                }
                {
                  !isBucketsLoading && <BucketList bucketList={bucketList} />
                }
              </div>
            </div>
        }

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InnRoad)
