import React, { Component } from 'react';

class TableDataRow extends Component {


    permissionShow = () => {
        if (this.props.Permission === 1) {
            return "Admin";
        }
        else if (this.props.Permission === 2) {
            return "Modrator";
        }
        else {
            return "Normal";
        }
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();

    }
    deletebuttonClick = (iduser) => {
        this.props.deleteButtomClick(iduser)

    }
    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionShow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={() => this.editClick()}><i className="fa fa-edit    " />Sửa</div>
                        <div className="btn btn-danger xoa" onClick={(iduser) => this.deletebuttonClick(this.props.id)}><i className="fa fa-delete    " />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;