//本文件无用
//import React from 'react;'
class Editor extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-default">Add</button>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odioa
            <a className="f_r glyphicon glyphicon-edit" href=""></a>
            <a className="f_r glyphicon glyphicon-remove" href=""></a>
          </li>
          <li className="list-group-item">
            <input className="item-edit" type="text"/>
            <a className="glyphicon glyphicon-saved" href=""></a>
            <a className="glyphicon glyphicon-remove" href=""></a>
          </li>
        </ul>
      </div>
    )
  }
}
export default Editor;

























