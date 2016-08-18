/**
 * Created by zz on 2016/8/9.
 */
/*import React from 'react';
 import ReactDOM from  'react-dom';*///webpack 打包引入
//import Editor from 'editor.jsx';//没有打包引入不了
class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: true,
      value: this.props.value
    };
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
  }

  /*static defaultProps={

  }*/
  /*static propTypes={//属性校验器，表示改属性必须是bool，否则报错
    value:React.PropTypes.string.isRequired
  }*/


  save() {
    this.setState({
      edit: false,
      value: this.refs.edtInput.value
    })//和旧的state会合并，而不是重设//替换状态：replaceState
  }

  edit() {
    /*this.state.edit=true;this.forceUpdate();*/
    this.setState({
      edit: true
    })
  }

  remove() {
    this.props.remove(this.props.id)
  }

  componentWillMount() {
    console.log("1componentWillMount")
  }

  componentDidMount() {
    //一般ajax装载数据放在这一步
    console.log("2componentDidMount")
  }

  shouldComponentUpdate() {
    console.log("3shouldComponentUpdate");
    //需要返回一个布尔值
    return true;
  }

  componentWillUpdate() {
    console.log("4componentWillUpdate")
  }

  componentDidUpdate() {
    console.log("5componentDidUpdate")
  }

  componentWillUnmount() {
    //组件的未响应ajax中断一般在此调用
    //this.serverRequest.abort();
    console.log("6componentWillUnmount");
  }

  render() {
    return (
      !this.state.edit ?//是否可编辑，默认可编辑
        <li className="list-group-item" id={this.props.id}>
          {this.state.value}
          <a className="f_r glyphicon glyphicon-edit" onClick={this.edit}></a>
          <a className="f_r glyphicon glyphicon-remove" onClick={this.remove}></a>
        </li> :
        <li className="list-group-item" id={this.props.id}>
          <input className="item-edit" type="text" ref="edtInput" defaultValue={this.state.value}/>
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
    this.addHandler = this.addHandler.bind(this)
    this.removeHandler = this.removeHandler.bind(this)
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
      ListDOM.push(<Item key={item[0]} id={item[0]} value={item[1]} remove={this.removeHandler}/>)
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



































