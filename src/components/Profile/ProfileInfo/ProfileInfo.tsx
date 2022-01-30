import {FC, useState} from "react";
import s from "./style.module.scss";
import {Button, Input} from "antd";
import {useAppDispatch, useAppSelector} from "../../../Hooks/redux";
import {updateStatus} from "../../../redux/reducers/profile/ProfileSlice";

export const ProfileInfo: FC = () => {

    const dispatch=useAppDispatch()
    const status = useAppSelector(state => state.postReducer.status)

    const [value, setValue] = useState('');
    const [activeMode, setActiveMode] = useState(false);


    const setStatus = () => {
        if (value.length > 0) {
            dispatch(updateStatus(value))
        }
        setActiveMode(false)
    };

    return (
        <div className={s.profileInfo}>
            <div className={s.status}>
                <div className={s.statusName}>
                    <h2>Oleg Mykytchuk</h2>
                    {!activeMode && <p onDoubleClick={() => setActiveMode(true)}>{status}</p>}
                    {activeMode && <Input type="text" value={value}
                                          onChange={e => setValue(e.target.value)}
                                          onPressEnter={setStatus}
                                          onBlur={setStatus}
                                          allowClear
                                          maxLength={20}
                                          autoFocus={true}


                    />
                    }
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