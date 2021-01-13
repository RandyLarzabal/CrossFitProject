import React, { FunctionComponent } from "react";

interface OwnProps {
    icon: string;
    description: string;
    title: string;
}

type Props = OwnProps;

const ReassuranceCard: FunctionComponent<Props> = (props: Props) => {
    const { icon, title, description } = props;
    return (
        <div>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ReassuranceCard;
