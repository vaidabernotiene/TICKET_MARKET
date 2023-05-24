import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useEffect } from "react";

export const EventUserCard = ({ id, name, surname, email, phone }) => {
  const navigate = useNavigate();

  const onDeleteBtnClick = (e) => {
    
    e.preventDefault();
    try {
      axios.delete(`http://localhost:5000/participants_list/${id}`)
      .then((response) => {
        console.log("Istrinta sekmingai")
        console.log(response.data)
        navigate("/participants_list");
      })
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <tbody className="text-[24px] ss:text-[16px]">
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="flex justify-end">
          <Button styles={`m-5`} text="Edit User"/>
          <Button styles={`m-5`} text="Delete" onClick={onDeleteBtnClick}/>
        </td>
      </tr>
    </tbody>
  );
};
