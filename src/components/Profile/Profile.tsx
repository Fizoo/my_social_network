import {FC, useState} from "react";
import s from "./Profile.module.css";
import myPhoto from './../../assets/images/37395461_1728469247273574_2742199746478211072_o.jpg'
import photo1 from "./../../assets/images/DSC08977.png"
import photo2 from "./../../assets/images/IMG_20210114_225428_298.jpg"
import photo3 from "./../../assets/images/яя.jpg"
import photo4 from "./../../assets/images/я22.jpg"
import photo5 from "./../../assets/images/LEJf_ihxHNQ.jpg"
import {Button,Form, Row,Image} from "antd";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import TextArea from "antd/lib/input/TextArea";
import {MyPost} from "./ProfileInfo/MyPost/MyPost";



export const Profile:FC = ()=>{
    const [value, setValue] = useState('');
    const [posts, setPosts] = useState(['']);
    return(
        <div className={s.content}>
            <div className={s.left}>
                <div className={s.myPhoto} >
                    <img src={myPhoto} alt="mainPhoto"/>
                    <Button shape="round" block>Edit</Button>
                </div>
                <div className={s.friends}>
                    <Image
                        width={50}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Image
                        width={50}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Image
                        width={50}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Image
                        width={50}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Image
                        width={50}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Image
                        width={50}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                <div className={s.news}>
                    <h3>News</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim et exercitationem iusto neque? Cum deserunt iste magni nesciunt quis quisquam, sint ullam! Architecto doloribus impedit magnam numquam pariatur praesentium quidem quos sint. Adipisci animi cum earum eos facilis fugiat ipsum nobis numquam odit perferendis, quo tenetur ut. A accusamus accusantium animi aut, beatae dolor dolore eligendi enim eum eveniet ex facere, ipsa iste itaque labore neque nesciunt, nihil non quae recusandae sunt ut veniam voluptas. A aliquam atque dolore doloribus enim eos eveniet inventore minus natus obcaecati officiis quae quam, ratione recusandae reiciendis rem sapiente sed tempora vero voluptatem.</p>
                </div>
            </div>
            <div className={s.right}>
                <ProfileInfo/>
                <div className={s.allPhoto}>
                    <Image
                        width={100}
                        height={100}
                        src={photo1}
                    />
                    <Image
                        width={100}
                        height={100}
                        src={photo2}
                    />
                    <Image
                        width={100}
                        height={100}
                        src={photo3}
                    />
                    <Image
                        width={100}
                        height={100}
                        src={photo4}
                    />
                    <Image
                        width={100}
                        height={100}
                        src={photo5}
                    />
                    {/*<img className={s.photoImg} src={photo1} alt=""/>
                    <img className={s.photoImg} src={photo2} alt=""/>
                    <img className={s.photoImg} src={photo3} alt=""/>
                    <img className={s.photoImg} src={photo4} alt=""/>
                    <img className={s.photoImg} src={photo5} alt=""/>*/}
                </div>
                <div className={s.form}>
                    <Form onFinish={()=>setPosts(posts.concat(value))}>
                            <TextArea onChange={(e)=>setValue(e.target.value)} placeholder="Add post" autoSize />
                            <Row className={s.btnRow} justify='end'>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Row>
                    </Form>
                </div>
              <MyPost posts={posts}/>
            </div>






        </div>
    )
}