import Button from "./Button";

export const EventUserCard = ({
  id,
  name,
  surname,
  email,
  phone,
  onEditBtnClick,
  onDeleteBtnClick,
}) => {
  return (
    <tbody className="text-[24px] ss:text-[16px]">
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="flex justify-end">
          <Button
            styles={`m-5`}
            text="Edit User"
            onClick={() => onEditBtnClick(id)}
          />
          <Button
            styles={`m-5`}
            text="Delete"
            onClick={() => onDeleteBtnClick(id)}
          />
        </td>
      </tr>
    </tbody>
  );
};
