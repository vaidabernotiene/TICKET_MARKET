import Button from "./Button";
import styles from "../style";

export const EventUserCard = ({
  eventUsers,
  onEditBtnClick,
  onDeleteBtnClick,
}) => {
  const { id, name, surname, email, phone } = eventUsers;

  return (
    <tbody className={`${styles.paragraph}`}>
      <tr className="text-[16px]">
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td className="flex justify-end">
          <Button
            styles={`m-5`}
            text="Edit"
            onClick={() => onEditBtnClick(eventUsers)}
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
