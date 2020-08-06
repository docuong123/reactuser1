import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }
    //hàm sửa from hiện thị from sửa
    imshowEditFrom = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser
                getUserEditInfo={(info) => this.getUserEditInfo(info)}
                userEditObject={() => this.props.userEditObject}
                changeEditUserStatus={() => this.props.changeEditUserStatus()} />
        }

    }

    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue)
    }

    hienthiNut = () => {
        if (this.props.hienthiForm === true) {

            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketnoi()}>Đóng lại</div>
        }
        else {

            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketnoi()}>Thêm mới</div>
        }
    }
    render() {
        return (
            <div className="col-12">
                {this.imshowEditFrom()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Nhập từ khóa" />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
                    </div>
                    <div className="form-group1 mt-2">
                        {this.hienthiNut()}
                    </div>

                </div>

                <hr />
            </div>

        );
    }
}

export default Search;