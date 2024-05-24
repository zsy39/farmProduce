import './App.css'
import imgUrl1 from './assets/img/h1.jpg'
import imgUrl2 from './assets/img/h2.jpg'
import imgUrl3 from './assets/img/h3.jpg'

function Huodong() {
    const huodongData = [{
        id: 0,
        pic: imgUrl1,
        title: '好吃的豆笋',
        overTime: '长期活动'
    }, {
        id: 1,
        pic: imgUrl2,
        title: '山西小米',
        overTime: '长期活动'
    }, {
        id: 2,
        pic: imgUrl3,
        title: '细丝陈皮！',
        overTime: '长期活动'
    }]

    return (
        <div className='content'>
            {huodongData.map((item, index) => {
                return (
                    <div className='imgList' key={item.id} >
                        <img src={item.pic} />
                        <span>{item.title}</span>
                        <a href='#'>{item.overTime}</a>
                    </div>
                )

            })}
        </div>
    )
}
export default Huodong