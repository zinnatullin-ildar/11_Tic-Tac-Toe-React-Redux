import { useSelector } from "react-redux";
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from "../../constants";
import { selectStatus, selectCurrentPlayer } from "../../selectors";
import InfoLayout from "./infoLayout";

export const Info = () => {
    const status = useSelector(selectStatus);
    const currentPlayer = useSelector(selectCurrentPlayer);

    const playerAction = PLAYER_ACTION[status];
    const playerName = PLAYER_NAME[currentPlayer];
    const information =
        status === STATUS.DRAW ? "Ничья" : `${playerAction} ${playerName}`;

    return <InfoLayout information={information} />;
};
