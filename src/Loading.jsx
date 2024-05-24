import './App.css'
import imgUrl1 from './assets/img/L1.jpg'
import imgUrl2 from './assets/img/L2.jpg'
import imgUrl3 from './assets/img/L3.jpg'

function Loading() {
    const loadingData = [{
        id: 0,
        pic: imgUrl1,
        title: '新鲜牛油果',
        overTime: '24天后结束'
    }, {
        id: 1,
        pic: imgUrl2,
        title: '酸爽柠檬',
        overTime: '14天后结束'
    }, {
        id: 2,
        pic: imgUrl3,
        title: '小鸭子',
        overTime: '13天后结束'
    }]
    return (
        <div className='content'>
            {loadingData.map((item, index) => {
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
export default Loading