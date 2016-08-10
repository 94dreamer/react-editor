/**
 * Created by zz on 2016/8/9.
 */
/*import React from 'react';
import ReactDOM from  'react-dom';*///webpack 打包引入
//import Editor from 'editor.jsx';//没有打包引入不了
class Item extends React.Component{
  render() {
    return(
      <li className="list-group-item" id={this.props.id}>
        {this.props.value}
        <a className="f_r glyphicon glyphicon-edit" onClick={this.props.edit}></a>
        <a className="f_r glyphicon glyphicon-remove" onClick={this.props.remove}></a>
      </li>
    )
  }
}
class Itemeditor extends React.Component{
  render() {
    return(
      <li className="list-group-item" id={this.props.id}>
        <input className="item-edit" type="text" defaultValue={this.props.value} />
        <a className="glyphicon glyphicon-saved" onClick={this.props.save}></a>
        <a className="glyphicon glyphicon-remove" onClick={this.props.remove}></a>
      </li>
    )
  }
}
class Editor extends React.Component {
  /*getInitialState(){//也就是说 通过es6类的继承实现时 state的初始化要在constructor中声明
    return{
      list:1,
      editList:2
    }
  }*/
  //React在ES6的实现中去掉了getInitialState这个hook函数，规定state在constructor中实现，如下：
  constructor(porps){//也就是说 通过es6类的继承实现时 state的初始化要在constructor中声明
    super(porps)
    this.state={
      key:0,
      list:new Map(),
      editList:new Map()
    }
  }
  addHandler(event){
    var key= ++this.state.key;
    this.state.editList.set(key,key);
    //this.setState({list: data.data});//改变状态
    this.forceUpdate();
  }
  saveHandler(event){
    console.log(event.target.previousSibling.value);
    var id=event.target.parentNode.id*1;
    this.state.editList.delete(id);
    this.state.list.set(id,event.target.previousSibling.value);
    this.forceUpdate();
  }
  removeHandler(event){
    var id=event.target.parentNode.id*1;//草草草草 取出来的id是数字
    !this.state.editList.delete(id) && this.state.list.delete(id)
    this.forceUpdate();
  }
  editHandler(event){
    var id=event.target.parentNode.id*1;
    this.state.editList.set(id,this.state.list.get(id))
    this.state.list.delete(id)
    this.forceUpdate();
  }
  render() {
    const ListDOM=[];
    const editListDOM=[];
    for(let item of this.state.list.entries()){
      ListDOM.push(<Item key={item[0]} id={item[0]} value={item[1]} edit={this.editHandler.bind(this)} remove={this.removeHandler.bind(this)} />)
    }
    for(let item of this.state.editList.entries()){
      editListDOM.push(<Itemeditor key={item[0]} id={item[0]} value={item[1]} save={this.saveHandler.bind(this)} remove={this.removeHandler.bind(this)} />)
    }
    return (
      <div>
        <button className="btn btn-default" onClick={this.addHandler.bind(this)}>Add(注意bind后面的this)</button>
        <ul className="list-group">
          {ListDOM}
          {editListDOM}
        </ul>
      </div>
    )
  }
}
//export default Editor;
ReactDOM.render(
  <Editor />,
  document.getElementById('container')
);



































