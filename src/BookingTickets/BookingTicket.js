import React, { Component } from 'react';
import './BaiTapBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe.js'
import danhSachGhe from '../data/danhSachGhe.json'
import HangGhe from './HangGhe';
export default class BookingTicket extends Component {


  renderSeats = () => {
    return danhSachGhe.map((hangGhe,index)=>{
      return <div key ={index} >
        <HangGhe hangGhe={hangGhe} HangDau = {index} />
      </div>
    })

  };















  render() {
    return (
      <div className="bookingMovive" style={{position: "fixed", width: "100%", height: "100%", backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize:"100%"}}>
        <div style={{position: "fixed", width: "100%", height: "100%",backgroundColor: 'rgba(0,0,0,0.3)'}}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4 text-center'>
                        <div style ={{fontSize:'35px'}} className='text-light mt-2'>DANH SÁCH CHỌN GHẾ</div>
                        <ThongTinDatGhe />
                      
                    </div>
                    <div className='col-8 text-center'>
                        <div className='text-light display-4'>Đặt vé xem phim tai đây bla bal</div>
                        <div className='mt-5 text-light'style={{fontSize: '15px'}}>Màn hình</div>
                        <div className='mt-1' style={{display: "flex", flexDirection:'column', justifyContent: 'center'}}>
                          
                          <div className='screen'></div>
                          {this.renderSeats()}
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}
