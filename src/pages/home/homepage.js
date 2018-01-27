import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
class Homepage extends Component {
  constructor(props){
    super(props)
    this.state = {
      all_menu: []
    }
    this.moveToOrderPage = this.moveToOrderPage.bind(this)
  }
  componentDidMount(){
    console.log(this.state.all_menu)
    const allMenuFromDB = fetch("http://localhost:9000/menus",{
      method: 'GET',
    }).then(res => res.json()).then((res)=>{
      console.log("Current Result ", res)
      this.setState({
        all_menu: res
      })
      console.log(this.state.all_menu)
    })
    console.log(allMenuFromDB)
    console.log("COMPONENT DID MOUNT DIPANGGIL")
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
