import styles from './history.module.css';
import iccopy from './img/ic-copy.png';
import icback from './img/right-arrow.png';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div className={styles.history}>
            <div className={styles.header}>
                <Link to={'/'}><img src={icback} /></Link>
                <span className={styles.title}>History of Deposit</span>
            </div>

            <div className={styles.detailtable}>
                <Table striped bordered hover>
                    <thead>
                        <tr >
                            <th>Order number</th>
                            <th>Uri/ Coin</th>
                            <th>Halaga</th>
                            <th>Chip Halaga</th>
                            <th>Status</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.order}>
                                    <div className={styles.codeNum}>0xjjfvjkfnkkv 12nfjvckkckoqia</div>
                                    <div className={styles.iconcopy}><img src={iccopy} /></div>
                                </div>   
                            </td>
                            <td>USDT</td>
                            <td>100</td>
                            <td>10000 <br/> chip</td>
                            <td><div className={styles.status}>Completed</div></td>
                            <td>1 day ago</td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.order}>
                                    <div className={styles.codeNum}>0xjjfvjkfnkkv 12nfjvckkckoqia</div>
                                    <div className={styles.iconcopy}><img src={iccopy} /></div>
                                </div>   
                            </td>
                            <td>USDT</td>
                            <td>100</td>
                            <td>10000 <br/> chip</td>
                            <td><div className={styles.status}>Completed</div></td>
                            <td>1 day ago</td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.order}>
                                    <div className={styles.codeNum}>0xjjfvjkfnkkv 12nfjvckkckoqia</div>
                                    <div className={styles.iconcopy}><img src={iccopy} /></div>
                                </div>   
                            </td>
                            <td>USDT</td>
                            <td>100</td>
                            <td>10000 <br/> chip</td>
                            <td><div className={styles.status}>Completed</div></td>
                            <td>1 day ago</td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.order}>
                                    <div className={styles.codeNum}>0xjjfvjkfnkkv 12nfjvckkckoqia</div>
                                    <div className={styles.iconcopy}><img src={iccopy} /></div>
                                </div>   
                            </td>
                            <td>USDT</td>
                            <td>100</td>
                            <td>10000 <br/> chip</td>
                            <td><div className={styles.status}>Completed</div></td>
                            <td>1 day ago</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* <div className={styles.detailtable}>
            <table style="width:100%">
                <tr>
                    <th>Order <br/> number</th>
                    <th>Uri/ <br/>Coin</th>
                    <th>Halaga</th>
                    <th>Chip <br/>Halaga</th>
                    <th>Status</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>0xjjfvjkfnkkv 12nfjvckkckoqia 9xmcjfloaikasn <img src="../img/ic-copy.png" /></td>
                    <td>USDT</td>
                    <td>100</td>
                    <td>10000 chip</td>
                    <td>Completed</td>
                    <td>1 day ago</td>
                </tr>
                <tr>
                    <td>0xjjfvjkfnkkv 12nfjvckkckoqia 9xmcjfloaikasn <img src="../img/ic-copy.png" /></td>
                    <td>USDT</td>
                    <td>100</td>
                    <td>10000 chip</td>
                    <td>Completed</td>
                    <td>1 day ago</td>
                </tr>
                <tr>
                    <td>0xjjfvjkfnkkv 12nfjvckkckoqia 9xmcjfloaikasn <img src="../img/ic-copy.png" /></td>
                    <td>USDT</td>
                    <td>100</td>
                    <td>10000 chip</td>
                    <td>Completed</td>
                    <td>1 day ago</td>
                </tr>
            </table>
        </div> */}
        </div>
    )
}

export default History;