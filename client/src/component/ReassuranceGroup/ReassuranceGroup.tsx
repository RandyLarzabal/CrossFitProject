import React, { FunctionComponent } from "react";
import ReassuranceCard from "./ReassuranceCard/ReassuranceCard";
import { IconList } from "../Icon/Icon";
import global from "../../App.module.scss";

type Props = {};

const ReassuranceGroup: FunctionComponent<Props> = (props: Props) => {
    const { row, mv5 } = global;

    return (
        <>
            <div className={`${row} ${mv5}`}>
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"title"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cupiditate dignissimos, error impedit, ipsum iste laudantium maxime, mollitia necessitatibus nemo quae quos sunt unde velit vero vitae! Quod, voluptatem!"
                    }
                />
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"title"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cupiditate dignissimos, error impedit, ipsum iste laudantium maxime, mollitia necessitatibus nemo quae quos sunt unde velit vero vitae! Quod, voluptatem!"
                    }
                />
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"title"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cupiditate dignissimos, error impedit, ipsum iste laudantium maxime, mollitia necessitatibus nemo quae quos sunt unde velit vero vitae! Quod, voluptatem!"
                    }
                />
                <ReassuranceCard
                    icon={IconList.shop}
                    title={"title"}
                    description={
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cupiditate dignissimos, error impedit, ipsum iste laudantium maxime, mollitia necessitatibus nemo quae quos sunt unde velit vero vitae! Quod, voluptatem!"
                    }
                />
            </div>
        </>
    );
};

export default ReassuranceGroup;
