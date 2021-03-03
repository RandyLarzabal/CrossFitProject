import React, { FunctionComponent } from "react";
import ReassuranceCard from "./ReassuranceCard/ReassuranceCard";
import { IconList } from "../Icon/Icon";
import global from "../../App.module.scss";

type Props = {};

const ReassuranceGroup: FunctionComponent<Props> = (props: Props) => {
    const { row, mv5 } = global;

    return (
        <>
            <div className={`${row}`}>
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"LIVRAISON EN 48H"}
                    description={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    }
                />
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"LIVRAISON EN 48H"}
                    description={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    }
                />
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"LIVRAISON EN 48H"}
                    description={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    }
                />
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"LIVRAISON EN 48H"}
                    description={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                    }
                />
            </div>
        </>
    );
};

export default ReassuranceGroup;
