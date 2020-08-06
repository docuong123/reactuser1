import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

//tự tạo id bằng uuid import thư viện này vào
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm: false,
      data: DataUser,
      tempValue: '',
      searchText: '',//du lieu tim kiem luon rong tra ve luon cac du lieu da co
      editUserStatus: false,
      userEditObject: {}
    }
  }
  //xoa 
  deleteUser = (iduser) => {

    //su dung ham filter de xoa phan tu

    var tempalteData = this.state.data.filter(item => item.id !== iduser);
    this.setState({
      data: tempalteData
    })



  }
  getUserEditInfoApp = (info) => {

    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.Permission = info.Permission;
      }
    })
    console.log(info)
  }
  //kết nối đến tabledata->kết nối đến tabledatarow

  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
    console.log(user);
  }
  //thay đổi trạng thái khi ấn sua thì nó mới hiện from sửa
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  //đóng gói dữ liệu từ thêm mới đẩy dữ liệu ra bảng data
  getNewUserData = (name, tel, Permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.Permission = Permission;

    var items = this.state.data;
    items.push(item)

    //sau khi them vaof state thi ta set state lai
    this.setState({
      data: items
    });

    console.log("ket noi thanh cong");
    console.log(this.state.data);
  }

  doitrangthai = () => {
    this.setState({
      hienthiForm: !this.state.hienthiForm
    });
  }
  //tìm kiếm 
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
    // console.log("du lieu bo nhan duoc la:" + dl)
  }
  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item)
      }
    })
    console.log(ketqua)
    return (
      <div>
        <Header />
        <div className="seachForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                checkConnectProps={(dl) => this.getTextSearch(dl)}
                ketnoi={() => this.doitrangthai()}
                hienthiForm={this.state.hienthiForm} />
              <TableData
                deleteUser={(iduser) => this.deleteUser(iduser)}
                editFun={(user) => this.editUser(user)}
                datauserProps={ketqua}
                changeEditUserStatus={() => this.changeEditUserStatus()} />
              <AddUser add={(name, tel, Permission) => this.getNewUserData(name, tel, Permission)} hienthiForm={this.state.hienthiForm} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
