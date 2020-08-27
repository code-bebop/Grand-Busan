import { createAction, handleActions } from "redux-actions";

const INCREASE = "rev/INCREASE";
const DECREASE = "rev/DECREASE";

export const increase = createAction(INCREASE, (roomNum, age) => ({
  roomNum,
  age,
}));
export const decrease = createAction(DECREASE, (roomNum, age) => ({
  roomNum,
  age,
}));

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
            ? room.adult < 3
              ? { ...room, adult: room.adult + 1 }
              : room
            : room.adult <= 0
            ? room
            : room.child < 2
            ? { ...room, child: room.child + 1 }
            : room
          : room
      ),
    }),
    [DECREASE]: (state, { payload: { roomNum, age } }) => ({
      rooms: state.rooms.map((room) =>
        room.id === roomNum
          ? age === "성인"
            ? room.adult > 0
              ? { ...room, room: room.adult - 1 }
              : room
            : room.child > 0
            ? { ...room, room: room.child - 1 }
            : room
          : room
      ),
    }),
  },
  initialState
);

export default rev;
