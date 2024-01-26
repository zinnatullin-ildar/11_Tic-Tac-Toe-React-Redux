// Переработать приложение «Крестики-Нолики», сделанное в задании восьмого урока
// State management.Введение.Основы Redux:
// использовать пакет "redux" для управления состоянием приложения;
// не использовать React Context и хук useReducer();
// использовать пакет "react-redux" для рендера компонентов вместо собственного решения,
// сделанного для этих целей;
// соблюдать 3 фундаментальных принципа Redux.

import { useDispatch } from "react-redux";
import GameLayout from "./gameLayout";
import { RESTART_GAME } from "../actions";

export const Game = () => {
    const dispatch = useDispatch();

    const handleRestart = () => {
        dispatch(RESTART_GAME);
    };

    return <GameLayout handleRestart={handleRestart} />;
};
