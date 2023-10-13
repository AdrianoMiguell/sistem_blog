import React, { useEffect, useState } from "react";
import Axios from "axios";
import TableUser from "./TableUser";
import "./sectionTableUser.css"

const SectionTableUser = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/selectUsers")
      .then((res) => {
        setAllUser(res.data);
        console.log("Dados pegos com sucesso!");
      })
      .catch((err) => {
        console.error("Algo deu errado! " + err);
      });
  }, []);

  return (
    <div className="tableUser">
      <h2 className="secTitle"> Dados dos usuarios cadastrados </h2>
      <table>
        <thead>
          <tr>
            <th scope="col" > ID </th>
            <td scope="col"> Name </td>
            <td scope="col"> Email </td>
          </tr>
        </thead>
        <tbody>
          {allUser.map((user) => (
            <TableUser key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionTableUser;
