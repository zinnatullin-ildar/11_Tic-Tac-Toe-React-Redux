import { useDispatch, useSelector } from "react-redux";
import FieldLayout from "./fieldLayout";
import { PLAYER, STATUS } from "../../constants";
import { checkEmptyCell, checkWin } from "../../utils";
import { setField, setStatus, setCurrentPlayer } from "../../actions";
import {
    selectStatus,
    selectField,
    selectCurrentPlayer,
} from "../../selectors";

export const Field = () => {
    const status = useSelector(selectStatus);
    const field = useSelector(selectField);
    const currentPlayer = useSelector(selectCurrentPlayer);

    const dispatch = useDispatch();

    const handleCellClick = (cellIndex) => {
        // аргумент celIndex получаем из массива field в компоненте FieldLayout и прокидываем сюда по цепочке
        // console.log(cellIndex);
        if (
            status === STATUS.WIN ||
            status === STATUS.DRAW ||
            field[cellIndex] !== PLAYER.NOBODY
        ) {
            return null;
        } // условие, когда нельзя продолжить игру: уже победа или ничья или когда ячейка не пустая

        const newField = [...field];
        newField[cellIndex] = currentPlayer;

        dispatch(setField(newField));
        // в зависимости от текущего игрока, в массив newField по индексу ячейки, на которой кликнули,
        // ставится соответствующий символ и состояние поля обновляется

        if (checkWin(newField, currentPlayer)) {
            dispatch(setStatus(STATUS.WIN));
        } else if (checkEmptyCell(newField)) {
            const newCurrentPlayer =
                currentPlayer === PLAYER.CROSS ? PLAYER.ZERO : PLAYER.CROSS;
            dispatch(setCurrentPlayer(newCurrentPlayer));
        } else {
            dispatch(setStatus(STATUS.DRAW));
        } // проверяется на победу текущего игрока или ничью, и если нет, то текущий игрок меняется на другого
    };

    return (
        <FieldLayout
            field={field}
            handleCellClick={handleCellClick}
        />
    );
};
