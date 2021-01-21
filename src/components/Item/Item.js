import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

class Item extends React.Component {
    componentDidMount() {
       this.timerID = setInterval(() => console.log('setInterval'), 1000);
    }

    componentWillUnmount() {
       clearInterval(this.timerID);
   }

    render() {
        const { value, isDone, onClickDone, id, onClickDelete } = this.props;

    return (
     <div className ={styles.item}>


<Checkbox
      checked={isDone}
      color="Secondary"
      value="default"
      flex="1"
      inputProps={{ 'aria-label': 'checkbox with default color' }}
      onClick={() => onClickDone(id)}
  />
  <label className={
      classnames ({
          [styles.item]: true,
          [styles.done]: isDone
      })
  }>
      { value }
  </label>
 <button
     className = {styles.button}
     onClick={() => onClickDelete(id)} >
     Delete
  </button>

  </div>);
  }
}

Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone:PropTypes.bool.isRequired,
    onClickDone:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
    onClickDelete:PropTypes.func.isRequired
};

export default Item;
