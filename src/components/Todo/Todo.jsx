import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import styles from './Todo.module.css';

export default function Todo({todo, onUpdate, onDelete}) {
    const {id, text, status} = todo;

    // 고유 ID를 생성하기 위해 todo.id 사용
    const checkboxId = `checkbox-${id}`;

    const handleChange = (e) => {
        onUpdate({...todo, status: e.target.checked ? 'completed' : 'active'});
    }

    const handleDelete = () => {
        onDelete(todo);
    }

    return (
        <li className={styles.todo}>
            <input
                className={styles.checkbox}
                type='checkbox'
                id={checkboxId} // 동적으로 ID 부여
                checked={status === 'completed'}
                onChange={handleChange}/>

            <label htmlFor={checkboxId} // label의 htmlFor을 동적으로 설정
            className={styles.text}>{text}</label>

            <span className={styles.icon}>
                <button
                    onClick={handleDelete}
                    className={styles.button}>
                    <FaTrashAlt />
                </button>
            </span>
        </li>
    );
}
