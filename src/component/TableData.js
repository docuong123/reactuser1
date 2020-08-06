import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtomClick = (iduser) => {
        this.props.deleteUser(iduser)
    }


    mappingDataUser = () => this.props.datauserProps.map((value, key) => (
        <TableDataRow
            deleteButtomClick={(iduser) => this.deleteButtomClick(iduser)}
            editFunClick={(user) => this.props.editFun(value)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}
            id={value.id}
            userName={value.name}
            key={key} stt={key}
            tel={value.tel}
            Permission={value.Permission} />
    ))

    render() {

        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điên thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;