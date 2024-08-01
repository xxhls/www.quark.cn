import React from "react";
import styles from "./index.module.scss";


const HeaderView: React.FC = () => {
    return (
        // Header 容器
        <header className={styles.header}>
            {/*Header 内容区域*/}
            <div className={styles.wrapper}>
                {/*左侧区域*/}
                <div className={styles.left}>
                    <img className={styles.logo} src={'https://gw.alicdn.com/imgextra/i1/O1CN0119EgaC1yoIi6UVLTQ_!!6000000006625-55-tps-80-32.svg'} alt={'夸克'}/>
                    <div className={styles.campus}>校园招聘</div>
                </div>
                {/*右侧区域*/}
                <div className={styles.right}>
                    <div className={styles.tab}>
                        <div className={styles.tabImg} style={{
                            backgroundImage: `url(https://img.alicdn.com/imgextra/i2/O1CN01Ot2JV71NodPKdpVjc_!!6000000001617-2-tps-72-72.png)`
                        }}></div>
                        <div className={styles.tabText}>移动端</div>
                        {/*COMMENT: tab 与 menu 若不进行包裹，会存在缝隙，当 tab -> menu 时，tab 会失去 hover，导致 menu 消失*/}
                        {/*增加 menu 包裹层，使 menu 与 tab 之间通过 wrapper 紧密贴合，在 tab -> menu 时，menu 不会消失*/}
                        <div className={styles.tabMenuWrapper}>
                            <div className={styles.tabMenu}>
                                <img className={styles.tabMenuImg}
                                     src={'https://img.alicdn.com/imgextra/i1/O1CN01Lweqz51l90BUV0ass_!!6000000004775-2-tps-252-252.png'} alt={'移动端'}/>
                                <div className={styles.tabMenuText}>扫码下载</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.tabImg} style={{
                            backgroundImage: `url(https://img.alicdn.com/imgextra/i2/O1CN01IPa0dE1e9jVOWSNCg_!!6000000003829-2-tps-72-72.png)`
                        }}></div>
                        <div className={styles.tabText}>iPad端</div>
                        <div className={styles.tabMenuWrapper}>
                            <div className={styles.tabMenu}>
                                <img className={styles.tabMenuImg}
                                     src={'https://img.alicdn.com/imgextra/i1/O1CN01Lweqz51l90BUV0ass_!!6000000004775-2-tps-252-252.png'} alt={'iPad端'}/>
                                <div className={styles.tabMenuText}>扫码下载</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tab}>
                        <div className={styles.tabImg} style={{
                            backgroundImage: `url(https://img.alicdn.com/imgextra/i1/O1CN015KUniV1kqgL8RhqwS_!!6000000004735-2-tps-72-72.png)`
                        }}></div>
                        <div className={styles.tabText}>网盘端</div>
                        <div className={styles.tabMenuWrapper}>
                            <div className={styles.tabMenu} style={{
                                height: '117px'
                            }}>
                                <div className={styles.tabItem}>
                                    <div className={styles.tabItemText}>客户端</div>
                                    <div className={styles.tabItemIcon} style={{
                                        backgroundImage: `url(https://img.alicdn.com/imgextra/i1/O1CN01gZh5Cw2A685nAHsKP_!!6000000008153-2-tps-30-39.png)`
                                    }}></div>
                                </div>
                                <div className={styles.tabLine}></div>
                                <div className={styles.tabItem}>
                                    <div className={styles.tabItemText}>网页版</div>
                                    <div className={styles.tabItemIcon} style={{
                                        backgroundImage: `url(https://img.alicdn.com/imgextra/i2/O1CN01rtou8k1yUbsC2IRSJ_!!6000000006582-2-tps-30-30.png)`
                                    }}></div>
                                </div>
                                <div className={styles.tabLine}></div>
                                <div className={styles.tabItem}>
                                    <div className={styles.tabItemText}>TV端</div>
                                    <div className={styles.tabItemIcon} style={{
                                        backgroundImage: `url(https://img.alicdn.com/imgextra/i1/O1CN01gZh5Cw2A685nAHsKP_!!6000000008153-2-tps-30-39.png)`
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

const HeaderController: React.FC = () => {
    return <HeaderView/>;
};

export default HeaderController;
