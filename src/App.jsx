import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'
import './App.css'
function App() {
    return (
        <div id="root">
            <h1>农产品热门推荐</h1>
            {/* 设置路由链接 */}
            <div className='nav'>
                <NavLink to='/loading'>正在进行</NavLink>
                <NavLink to='/tehui'>商城特惠</NavLink>
                <NavLink to='/act'>长期活动</NavLink>
            </div>
            {useRoutes(routes)}
        </div>
    )
}
export default App