type TodoItemProps = {
    title: string;
    id: string;
    isCompleted: boolean;
 };
type TodoProps = {
    list: TodoItemProps[],
    dispatch: React.Dispatch<any>
}
type TodoListProps = {
    list: TodoItemProps[];
    updateItem: (index: number, key: string, value: any) => void;
    deleteItem: (index: number) => void;
}
type TodoListItemProps = {
    item: TodoItemProps;
    updateItem: (index: number, key: string, value: any) => void;
    deleteItem: (index: number) => void,
    updateEditEnable: (index: number | null) => void,
    isEditableProp: boolean,
    index: number;
};
type TodoInputProps = {
    addItem: (text: string) => void;
};
type StateProps = {
    list: TodoItemProps[]
}
type ActionProps = 
    | {type: 'ADD_TODO', payload: TodoItemProps}
    | {type: 'DELETE_TODO', payload: {index: number}}
    | {type: 'UPDATE_TODO', payload: {index: number, key: string, value: string}}


export type  { TodoProps, TodoListItemProps, TodoInputProps, TodoListProps, ActionProps, StateProps }