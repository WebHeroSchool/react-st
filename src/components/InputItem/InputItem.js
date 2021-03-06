import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
  };

  inputValueChange = event => this.setState({ inputValue: event.target.value });

  onSubmit= (event) => {
      event.preventDefault();
      this.props.onClickAdd(this.state.inputValue);

      this.setState ({
      inputValue: ''
   });
  };


  render() {
   const error = this.props.isEmptyField;
   let textField;
   if(error) {
    textField = <TextField
      error
      id="standard-full-width"
      label=""
      style={{ margin: 0}}
      placeholder="Что нужно сделать?"
      helperText = "Пожалуйста, заполните поле!"
      fullWidth
      margin="normal"
      InputLabelProps={{
      shrink: true,}}
      value={this.state.inputValue}
      onChange ={ this.inputValueChange }
      />

   } else {
    textField = <TextField
      id="standard-full-width"
      label=""
      style={{ margin: 0}}
      placeholder="Что нужно сделать?"
      helperText=""
      fullWidth
      margin="normal"
      InputLabelProps={{
      shrink: true,}}
      value={this.state.inputValue}
      onChange ={ this.inputValueChange }
      />
   }

    return (
       <form
           className ={styles.itemInput}
           onSubmit={this.onSubmit}>
        {textField}
        <button
            className = { styles.button}>
            Добавить задание
        </button>
       </form>
    );
  }
};

export default InputItem;
