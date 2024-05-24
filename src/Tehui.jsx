import './App.css'
import imgUrl1 from './assets/img/T1.jpg'
import imgUrl2 from './assets/img/T2.jpg'
import imgUrl3 from './assets/img/T3.jpg'

function Tehui() {
    const tehuiData = [{
        id: 0,
        pic: imgUrl1,
        title: '新疆红枣',
        overTime: '24天后结束'
    }, {
        id: 1,
        pic: imgUrl2,
        title: '枸杞',
        overTime: '已结束'
    }, {
        id: 2,
        pic: imgUrl3,
        title: '黄大蒜',
        overTime: '已结束'
    }]

    return (
        <div className='content'>
            {tehuiData.map((item, index) => {
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
export default Tehui