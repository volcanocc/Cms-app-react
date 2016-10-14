/**
 * React.
 */


/*
 ===============================================================
* React-router
===============================================================


<Router history={hashHistory}>
    <Route path="/" component={Index} > //首页父组件
        <IndexRoute component={EventList}/> //默认首页子组件
        <Route path="/EventList" component={EventList} />  //根据点击切换组件
        <Route path="/AddEvent" component={AddEvent} />
        <Route path="/EventDetail/:itemId" component={EventDetail} />  //传递参数
    </Route>

</Router>

//传递参数
<Link to={`/EventDetail/${item.id}`} className="v-card-preview" key={i} data-id={item.id}></Link>



//嵌套路由，父组件传递方法给子组件
 {this.props.children && React.cloneElement(this.props.children, {
     sysLoadingShow: this.sysLoadingShow,
     sysLoadingHide: this.sysLoadingHide
 })}



 * */










