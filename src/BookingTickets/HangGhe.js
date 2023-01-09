import React, { Component } from 'react'

export default class HangGhe extends Component {


  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe,index) =>{
      // if(index===0){
      //   return <span className="rowNumber">{ghe.soGhe}</span>
      // }
      let cssGheDaDat = '';
      let disabled = false;

      if(ghe.daDat){
        cssGheDaDat='gheDuocChon';
      }
      return <button disabled ={disabled} className = {`ghe ${cssGheDaDat}`} key ={index}>
        {index+1}

      </button>
    })
  }

  renderSoHang = () =>{
    return this.props.hangGhe.danhSachGhe.map((hang, index) =>{
      return <button className="rowNumber">{hang.soGhe}</button>
  })}
  renderHangGhe =() => {
    if(this.props.HangDau ===0){
      return <div className='ml-4'>
        {this.props.hangGhe.hang} {this.renderSoHang()}
      </div>
    } else{
      return <div>
        {this.props.hangGhe.hang} {this.renderGhe()}

      </div>
    }
    
  }

  render() {
    return (
      <div className='text-light text-left ml-5 mt-5' style={{fontSize:30}}>
        {this.renderHangGhe()}
      </div>
    )
  }
}
