import React from 'react';
import './style.css';

const scaleNames = {
    hr: 'Harga Rumah',
    cr: 'Credit'
  };
  
  function toHargarumah(harga) {
    return (harga * 36) ;
  }
  
  function toCredit(credit) {
    return (credit / 36) ;
  }
  
  function tryConvert(money, convert) {
    const input = parseInt(money);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
    class HargaInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onMoneyChange(e.target.value);
    }
  
    render() {
      const money = this.props.money;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Masukkan Jumlah Uang {scaleNames[scale]}:</legend>
          <input value={money}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
  export default class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleHargarumahChange = this.handleHargarumahChange.bind(this);
      this.handleCreditChange = this.handleCreditChange.bind(this);
      this.state = {money: '', scale: 'hr'};
    }
  
    handleHargarumahChange(money) {
      this.setState({scale: 'hr', money});
    }
  
    handleCreditChange(money) {
      this.setState({scale: 'cr', money});
    }
  
    render() {
      const scale = this.state.scale;
      const money = this.state.money;
      const harga = scale === 'cr' ? tryConvert(money, toHargarumah) : money;
      const credit = scale === 'hr' ? tryConvert(money, toCredit) : money;
  
      return (
        <div>
            Cek Credit Rumah
          <HargaInput
            scale="hr"
            money={harga}
            onMoneyChange={this.handleHargarumahChange} />
          <HargaInput
            scale="cr"
            money={credit}
            onMoneyChange={this.handleCreditChange} />
        </div>
      );
    }
  }