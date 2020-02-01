import showblog from'./component/showblog';
import addblog from'./component/addblog';
import singleblog from'./component/singleblog';


export default[
    {path:'/',component:showblog},
    {path:'/add',component:addblog},
    {path:'/blog/:id',component:singleblog}
]

