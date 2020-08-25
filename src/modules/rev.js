import { createAction, handleActions } from "redux-actions";

const INCREASE = "rev/INCREASE";
const DECREASE = "rev/DECREASE";

export const increase = createAction(INCREASE, (roomNum, age) => ({
  roomNum,
  age,
}));
const decrease = createAction(DECREASE, (roomNum) => roomNum);

const initialState = {
  rooms: [
    { id: 1, adult: 1, child: 0 },
    { id: 2, adult: 0, child: 0 },
    { id: 3, adult: 0, child: 0 },
  ],
};

const rev = handleActions(
  {
    [INCREASE]: (state, { payload: { roomNum, age } }) => ({
      rooms: state.rooms.map((room) =>
        room.id === roomNum
          ? age === "성인"
            ? { ...room, adult: room.adult + 1 }
            : { ...room, child: room.child + 1 }
          : room
      ),
    }),
  },
  initialState
);

export default rev;
