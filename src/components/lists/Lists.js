import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListForm from './ListForm';
import ListFeed from './ListFeed';
import Spinner from '../common/Spinner';
import { getLists } from '../../actions/listActions';

class Posts extends Component {
  componentDidMount() {
    this.props.getlists();
  }

  render() {
    const { lists, loading } = this.props.list;
    let listtContent;

    // if (lists === null || loading) {
    //   listContent = <Spinner />;
    // } else {
    //   listContent = <PostFeed posts={lists} />;
    // }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ListForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  getLists: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  list: state.post,
});

export default connect(
  mapStateToProps,
  { getLists },
)(Posts);
