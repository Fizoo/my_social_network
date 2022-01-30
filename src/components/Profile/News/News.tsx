import React, {FC} from 'react';
import s from "./style.module.scss";

const News:FC = () => {
    return (
        <div className={s.news}>
            <h3>News</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, inventore.</p>
            <h3>Post</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, inventore.</p>
            <h3>History</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, inventore.</p>

        </div>
    );
};

export default News;
