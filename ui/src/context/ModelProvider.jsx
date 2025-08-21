import React, { createContext, useState } from 'react';
export const ModelContext = createContext();
import { getNextFiveDays } from '../utils/utils';

function ModelProvider({ children }) {
  const [modelVisible, setModelVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
      const [dates, setDates] = useState(getNextFiveDays());

    return (
        <ModelContext.Provider value={{ modelVisible, setModelVisible,selectedDate,setSelectedDate,dates,setDates }}>
            {children}
        </ModelContext.Provider>
    );
}

export default ModelProvider;