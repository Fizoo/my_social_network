import {FC} from "react";
import s from "./ProfileInfo.module.css";
import {Button, Divider} from "antd";

export const ProfileInfo: FC = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.status}>
                <div className={s.statusName}>
                    <h2>Oleg Mykytchuk</h2>
                    <p>Vini Vici Viki</p>
                </div>
                <p> online</p>
            </div>
            <hr/>
            <div>
                <div className={s.day}>
                    <div>День народження:</div>
                    <div>13 февраля 1991г</div>
                </div>
                <div>
                    <Button className={s.fullInfo} block>Показать подробную информацию</Button>
                </div>
               <div className={s.hidden}>hidden div</div>

            </div>
            <hr/>

            <div className={s.statistic}>
                <a href="">
                    <div className={s.number}>10</div>
                    <div className={s.str}>friends</div>
                </a>
                <a href="">
                    <div className={s.number}>20</div>
                    <div className={s.str}>subscribers</div>
                </a>
                <a href="">
                    <div className={s.number}>2</div>
                    <div className={s.str}>photo</div>
                </a>
                <a href="">
                    <div className={s.number}>2</div>
                    <div className={s.str}>video</div>
                </a>
                <a href="">
                    <div className={s.number}>6</div>
                    <div className={s.str}>presents</div>
                </a>
            </div>
        </div>
    )
}