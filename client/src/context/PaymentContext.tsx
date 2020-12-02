import React from "react";

export type PaymentContextProps = {};

export const PaymentContext = React.createContext<PaymentContextProps>({});

export const PaymentProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    const values = React.useMemo(() => ({}), []);
    return <PaymentContext.Provider value={values}>{children}</PaymentContext.Provider>;
};

export const usePaymentContext = () => {
    const context = React.useContext(PaymentContext);
    if (context === undefined) throw new Error("du text");
    return context;
};
