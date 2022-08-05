import {createContext, useContext, useState} from 'react';

const CalorieContext = createContext(null);
export function CalorieContextProvider(props) {
  const [calorie, setCalorie] = useState(0);
  const [target, setTarget] = useState(0);
  return (
    <CalorieContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ calorie, setCalorie, target, setTarget }}
    >
      {props.children}
    </CalorieContext.Provider>
  );
}
export function useCalorieContext() {
  const register = useContext(CalorieContext);
  return register;
}