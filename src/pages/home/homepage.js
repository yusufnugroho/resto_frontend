import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
class Homepage extends Component {
  constructor(props){
    super(props)
    this.moveToOrderPage = this.moveToOrderPage.bind(this)
  }
  moveToOrderPage(){
    this.props.history.push("/order");
  }
  render() {
    const main_props = this.props
    console.log(main_props.user.id)
    console.log(main_props.user.getUsername)
    console.log("TESSS")
    return (
      <div>
        <p>
          Home Page
          <button onClick={this.moveToOrderPage}>Move To Order</button>
        </p>
      </div>
    );
  }
}

export default inject("user")(observer(Homepage))
