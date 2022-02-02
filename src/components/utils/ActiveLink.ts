import s from "../Navbar/style.module.scss";

export  const isAct = (props:{isActive:boolean}) :string=> props.isActive ? s.active : '';