import Button from "./Button";

export const EventUserCard = ({ name, surname, email, phone }) => {
  
  const onEditBtnClick = () => {
    console.log("Paspaude EDIT");
  };

  const onDeleteBtnClick = () => {
    console.log("Paspaude DELETE");
  };
  return (
    <tbody className="text-[24px] ss:text-[16px]">
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="flex justify-end">
          <Button styles={`m-5`} text="Edit User" onClick={onEditBtnClick} />
          <Button styles={`m-5`} text="Delete" onClick={onDeleteBtnClick} />
        </td>
      </tr>
    </tbody>
  );
};
