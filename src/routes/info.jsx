import React, {useState} from "react";
import { Link } from "react-router-dom";
import iccopy from './img/ic-copy.png';
import icqr from './img/ic-qr.png';
import back from './img/right-arrow.png';
import ichistory from './img/ic-history.png';
import metamask from './img/metamask.png';
import ic98 from './img/98.png';
import binance from './img/binance.png';
import bing from './img/bing.png';
import trustwallet from './img/trust-wallet.png';
import styles from './info.module.css';

const Info = () => {    


    return (


        <div className={styles.info}>
            <div className={styles.menutop}>
                <img src={back} className={styles.btn-back} />
                <Link to={'/history'}><img src={ichistory} className={styles.btnhistory} /></Link>
            </div>

            <div className={styles.main}>
                <div className={styles.maincontent}>DEPOSIT WITH CRYPTO</div>
                <div className={styles.mainnoti}>
                    <div className={styles.noti}>NOTICE</div>
                    <div className={styles.detail}>
                        <div className={styles.text1}>Please check and make sure you send to the exact Address, Network, and Crypto Currency as provided
                            below.</div>
                        <div className={styles.text2}>We would not be responsible for any transaction sent to any other address.</div>
                    </div>
                </div>

                <div id="form">

                    <form className={styles.form}>
                        <div className={styles.formgroup} id="address-form">
                            <label className={styles.label} for="faddress">Address</label><br />
                            <img className={styles.iconcopy} src={iccopy}  />
                            <img className={styles.iconqr} src={icqr}  />
                            <input className={styles.input} type="text" id="address" name="address" /><br />

                        </div>
                        <div className={styles.formgroup} id="networl-form">
                            <label className={styles.label} for="lnetwork">Network</label><br />
                            <input className={styles.input} type="text" id="network" name="network" />
                        </div>
                        <div className={styles.formgroup} id="amount-form">
                            <label className={styles.label} for="famount">Amount</label><br />
                            <input className={styles.input} type="text" id="amount" name="amount" /><br />
                        </div>
                        <div className={styles.formgroup} id="coin-form">
                            <label className={styles.label} for="fcoin">Coin</label><br />
                            <input className={styles.input} type="text" id="coin" name="coin" />
                        </div>

                    </form>
                </div>

            </div>

            <div className={styles.footter}>
                <img src={metamask} />
                <img src={ic98}  />
                <img src={binance}  />
                <img src={bing}  />
                <img src={trustwallet}  />
            </div>
        </div>

    )
}

export default Info;