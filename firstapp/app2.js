/**
 * Created by zz on 2016/8/9.
 */
/*import React from 'react';
 import ReactDOM from  'react-dom';*///webpack 打包引入
//import Editor from 'editor.jsx';//没有打包引入不了
class Item extends React.Component {
  constructor(props) {
    super(props);
    //属性校验器，表示改属性必须是bool，否则报错
    //this.propTypes.value=React.PropTypes.string.isRequired;
    this.state = {
      edit: true,
      value: this.props.value
    };
    this.save=this.save.bind(this);
    this.edit=this.edit.bind(this);
    this.remove=this.remove.bind(this);
    this.change=this.change.bind(this)
  }

  save() {
    this.state.edit=false;
    this.forceUpdate();
  }

  edit() {
    this.state.edit=true;
    this.forceUpdate();
  }

  remove() {
    this.props.remove(this.props.id)
  }

  change(event) {
    this.state.value=event.target.value;
    this.forceUpdate();
  }

  /*propTypes：{//ES5的写法
    value:React.propTypes.string.isRequired
  }*/

  render() {
    return (
      !this.state.edit ?//是否可编辑，默认可编辑
        <li className="list-group-item" id={this.props.id}>
          {this.state.value}
          <a className="f_r glyphicon glyphicon-edit" onClick={this.edit}></a>
          <a className="f_r glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li> :
        <li className="list-group-item" id={this.props.id}>
          <input className="item-edit" type="text" onChange={this.change} value={this.state.value}/>
          <a className="glyphicon glyphicon-saved" onClick={this.save}></a>
          <a className="glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li>
    )
  }
}

class Editor extends React.Component {
  //React在ES6的实现中去掉了getInitialState这个hook函数，规定state在constructor中实现，如下：
  constructor(porps) {//也就是说 通过es6类的继承实现时 state的初始化要在constructor中声明
    super(porps);
    this.state = {
      key: 0,
      list: new Map(),
    };
    this.addHandler=this.addHandler.bind(this)
    this.removeHandler=this.removeHandler.bind(this)
  }

  addHandler(event) {
    var key = ++this.state.key;
    this.state.list.set(key, key);
    //this.setState({list: data.data});//改变状态
    this.forceUpdate();
  }

  removeHandler(id) {
    this.state.list.delete(id);
    this.forceUpdate();
  }

  render() {
    const ListDOM = [];
    for (let item of this.state.list.entries()) {//两种遍历Map对象的方法，可加entries也可不加
      ListDOM.push(<Item key={item[0]} id={item[0]} value={item[1]} remove={this.removeHandler} />)
    }
    return (
      <div>
        <button className="btn btn-default" onClick={this.addHandler}>Add(注意bind后面的this)</button>
        <ul className="list-group">
          {ListDOM}
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



































