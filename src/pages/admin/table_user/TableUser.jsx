import React from "react";

const TableUser = ({ user }) => {
  return (
    <tr>
      <th scope="row"> {user.id} </th>
      <td> {user.name} </td>
      <td> {user.email} </td>
    </tr>
  );
};

export default TableUser;
