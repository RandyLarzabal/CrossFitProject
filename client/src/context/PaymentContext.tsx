import React, { useState } from "react";

export type PaymentContextProps = {
    addToChart?: (item: any) => void;
    chart?: any;
};

export const PaymentContext = React.createContext<PaymentContextProps>({});

export const PaymentProvider = ({ children }: { children: JSX.Element[] }): JSX.Element => {
    const [chart, setChart] = useState<any[]>([]);

    const addToChart = (item: any) => {
        setChart((chart) => [...chart, item]);
    };

    const values = React.useMemo(
        () => ({
            chart,
            addToChart,
        }),
        [chart]
    );

    return <PaymentContext.Provider value={values}>{children}</PaymentContext.Provider>;
};

export const usePaymentContext = () => {
    const context = React.useContext(PaymentContext);
    if (context === undefined) throw new Error("du text");
    return context;
};
