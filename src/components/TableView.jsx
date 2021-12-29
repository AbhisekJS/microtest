import { Table, Avatar, Popconfirm } from "antd";
import React, { useState } from "react";

const TableView = () => {

    // list data from local storage and converted to array
    const [list, setList] = useState(
        Object.values(JSON.parse(localStorage.getItem("users")))
    );
    console.log(list, 'localStorage')
    //columns of table
    const columns = [
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            width: 60,
            align: "center",
            render: (avatar) => <Avatar src={avatar} />
        },
        {
            title: "First Name",
            dataIndex: "first_name",
            key: "firstname",
            align: "center",
            width: 100
        },
        {
            title: "Last Name",
            dataIndex: "last_name",
            key: "lastname",
            align: "center",
            width: 100
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "name",
            align: "center",
            width: 160
        },
        {
            title: "Action",
            dataIndex: "operation",
            width: 120,
            render: (_, user) =>
                list?.length >= 1 ? (
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(user.id)}
                    >
                        <a>Edit/Delete</a>
                    </Popconfirm>
                ) : null
        }
    ];

    // delete user from UI
    const handleDelete = (id) => {
        console.log(id);
        const newList = list.filter((user) => user.id !== id);
        console.log(newList);
        setList(newList);
    };

    return (
        <Table
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={list}
            scroll={{ x: 'max-width', y: 400 }}
            size="middle"
            pagination={false}
        />
    );
};

export default TableView;
