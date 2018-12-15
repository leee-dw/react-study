import React, { Component } from 'react';
import {MdDelete as RemoveIcon} from 'react-icons/md'
import koLocale from 'date-fns/locale/ko'
import differenceInDays from 'date-fns/difference_in_days'
import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'

import './PostCard.sass'

class PostCard extends Component {
  prev = null

  get formattedDate() {
    
    const {post} = this.props
    const now = new Date()
    const date = new Date(post.date)
    if ( now - date < 60 * 1000 ) return '방금'
    const diff = differenceInDays(new Date(), post.date)

    if (diff > 10) return format(post.date, 'YYYY-MM-DD HH:mm:ss')
    return distanceInWords(new Date(), post.date, {
      locale: koLocale,
      addSuffix: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    this.prev = this.formattedDate
  }

  componentDidMount() {
    this.prev = this.formattedDate
  }


  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.post !== nextProps.post || this.formattedDate !== this.prev
    )
  }

  handleRemove = () => {
    const {post, onRemove} = this.props
    onRemove(post.id)
  }

  render() {
    const {post} = this.props
    return (
      <div className="PostCard">
        <div className="remove" onClick={this.handleRemove}>
         <RemoveIcon />
        </div>
        <div className="date">{this.formattedDate}</div>
        <div className="text">{post.text}</div>
      </div>
    );
  }
}

export default PostCard;