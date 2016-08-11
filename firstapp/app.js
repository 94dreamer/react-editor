/**
 * Created by zz on 2016/8/9.
 */
/*import React from 'react';
import ReactDOM from  'react-dom';*///webpack 打包引入
//import Editor from 'editor.jsx';//没有打包引入不了
class Item extends React.Component{
  edit(){
    this.props.edit(this.props.id)
  }
  remove(){
    this.props.remove(this.props.id)
  }
  render() {
    return(
      <li className="list-group-item" id={this.props.id}>
        {this.props.value}
        <a className="f_r glyphicon glyphicon-edit" onClick={this.edit.bind(this)}></a>
        <a className="f_r glyphicon glyphicon-remove" onClick={this.remove.bind(this)}></a>
      </li>
    )
  }
}w

class Itemeditor extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:this.props.value
    }
  }
  save(event){
    this.props.save(this.props.id,this.state.value)
  }
  remove(){
    this.props.remove(this.props.id)
  }
  change(event){
    //this.state.value=event.target.value;
    //this.forceUpdate()//此两行可以合成一行
    this.setState({
      value:event.target.value
    });
  }
  render() {
    return(
      <li className="list-group-item" id={this.props.id}>
        <input className="item-edit" type="text" onChange={this.change.bind(this)} value={this.state.value} />
        <a className="glyphicon glyphicon-saved" onClick={this.save.bind(this)}></a>
        <a className="glyphicon glyphicon-remove" onClick={this.remove.bind(this)}></a>
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
  saveHandler(id,value){
    /*console.log(event.target.previousSibling.value);
    var id=event.target.parentNode.id*1;*/
    this.state.editList.delete(id);
    //this.state.list.set(id,event.target.previousSibling.value);
    this.state.list.set(id,value);
    this.forceUpdate();
  }
  removeHandler(id){
    //var id=event.target.parentNode.id*1;//草草草草 取出来的id是数字
    !this.state.editList.delete(id) && this.state.list.delete(id);
    this.forceUpdate();
  }
  editHandler(id){
    //var id=event.target.parentNode.id*1;
    this.state.editList.set(id,this.state.list.get(id));
    this.state.list.delete(id);
    this.forceUpdate();
  }
  render() {
    const ListDOM=[];
    const editListDOM=[];
    for(let item of this.state.list.entries()){//两种遍历Map对象的方法，可加entries也可不加
      ListDOM.push(<Item key={item[0]} id={item[0]} value={item[1]} edit={this.editHandler.bind(this)} remove={this.removeHandler.bind(this)} />)
    }
    for(let item of this.state.editList){
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



































