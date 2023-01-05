import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon'></button><span className='text-light' style={{fontSize:'30px'}}>ghế đã đặt</span>
          <br/>
          <button className='gheDangChon'></button><span className='text-light' style={{fontSize:'30px'}}>ghế đang đặt</span>
          <br/>
          <button className='ghe'></button><span className='text-light' style={{fontSize:'30px'}}>ghế chưa đặt</span>
        </div>
        <div className='mt-5 '>
          <table class="table"border='2'>
            <thead>
              <tr className='text-light' stlye ={{fontSize: '35px'}}>
                <th>Số ghế</th>
                <th>Gía</th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>

      </div>
      
    )
  }
}
