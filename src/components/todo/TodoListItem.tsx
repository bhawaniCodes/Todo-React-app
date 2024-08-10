import { RiDeleteBin3Line } from "react-icons/ri";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GoCircle } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import React,{ useCallback, useState } from "react";
import { TodoListItemProps } from "./TodoTypes";



const TodoListItem = ({
  item,
  index,
  updateItem,
  deleteItem,
  updateEditEnable,
  isEditableProp
}: TodoListItemProps) => {
  const [text, setText] = useState(item?.title);

  const keyPress = useCallback((e: any) => {
    if (e.key === "Enter") {
      updateItem(index, 'title', e.target.value);
      updateEditEnable(null);
    }
  }, [])

  const handleChange = useCallback((e: any) => {
    setText(e.target.value)
  }, [])

  return (
    <div className="flex items-center my-1 w-full bg-gray-50">
      <div className="w-10">
        <span>
          {item.isCompleted ? (
            <IoMdCheckmarkCircle size="28" />
          ) : (
            <GoCircle size="28" onClick={() => updateItem(index, 'isCompleted', true)} />
          )}
        </span>
      </div>
      <div className="w-5/6">
        {isEditableProp ? (
          <input
            autoFocus
            value={text}
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => keyPress(e)}
            className="pl-1"
          ></input>
        ) : (
          <span className={item.isCompleted ? 'line-through' : ''}>{text}</span>
        )}
      </div>
      {!isEditableProp ? (
        <div className="w-1/6 self-end">
          <span className="flex justify-end">
            <FaEdit size="28" onClick={() => {updateEditEnable(index);}} />
            <RiDeleteBin3Line
              className="hover:bg-red-200"
              color="red"
              size="28"
              onClick={() => deleteItem(index)}
            />
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default React.memo(TodoListItem);