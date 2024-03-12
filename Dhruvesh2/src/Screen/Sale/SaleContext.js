import React, { createContext, useContext, useState } from 'react';

const SaleContext = createContext();

export const SaleProvider = ({ children }) => {
    const [saleDataList, setSaleDataList] = useState([]);

    const addSaleData = (data) => {
        setSaleDataList((prevList) => [...prevList, data]);
    };
    const clearSaleDataList = () => {
        setSaleDataList([]);
    };
    const deleteSaleData = (itemToDelete) => {
        setSaleDataList((prevList) => prevList.filter(item => item !== itemToDelete));
    };

    return (
        <SaleContext.Provider value={{ saleDataList, addSaleData, clearSaleDataList ,deleteSaleData}}>
            {children}
        </SaleContext.Provider>
    );
};

export const useSaleContext = () => {
    const context = useContext(SaleContext);
    if (!context) {
        throw new Error('useSaleContext must be used within a SaleProvider');
    }
    return context;
};
