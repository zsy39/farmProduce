import Loading from '../Loading';
import Tehui from '../Tehui';
import Huodong from '../Huodong'

const routes = [
    {
        path: '/loading',
        element: <Loading />
    },
    {
        path: '/tehui',
        element: <Tehui />
    },
    {
        path: '/act',
        element: <Huodong />
    }
]
export default routes