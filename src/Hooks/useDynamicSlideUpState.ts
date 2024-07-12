import { useReducer } from 'react';

type SlideUpState = Record<string, boolean>;

type SlideUpAction = {
  type: 'SET_CARD';
  card: string;
  payload: boolean;
};

const slideUpReducer = (state: SlideUpState, action: SlideUpAction): SlideUpState => {
  switch (action.type) {
    case 'SET_CARD':
      return { ...state, [action.card]: action.payload };
    default:
      return state;
  }
};

const useDynamicSlideUpState = (initialCards: string[]) => {
  const initialState: SlideUpState = initialCards.reduce((acc, card) => {
    acc[card] = false;
    return acc;
  }, {} as SlideUpState);

  const [state, dispatch] = useReducer(slideUpReducer, initialState);

  const setCard = (card: string, value: boolean) => {
    dispatch({ type: 'SET_CARD', card, payload: value });
  };

  return [state, setCard] as const;
};

export default useDynamicSlideUpState;
