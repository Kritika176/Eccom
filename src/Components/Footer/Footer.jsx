import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="online foot">
          <h5 className="hbottom">ONLINE SHOPPING</h5>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
          <p>Home & Living</p>
          <p>Beauty</p>
          <p>Gift Cards</p>
          <p>
            Myntra Insider <span className="new2">New</span>
          </p>
        </div>
        <div className="link foot">
          <h5 className="hbottom">USEFUL LINKS</h5>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>T&C</p>
          <p>Terms Of Use</p>
          <p>Track Orders</p>
          <p>Shipping</p>
          <p>Cancellation</p>
          <p>Returns</p>
          <p>Whitehat</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Privacy policy</p>
          <p>Site Map</p>
          <p>Corporate Information</p>
        </div>
        <div className="mobile foot">
          <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
          <div>
            <img 
            className="google"
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt="googlestore"
              height="42px"
            />
            <img
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt="applestore"
              height="42px"
            />
            <h5 className="keep">KEEP IN TOUCH</h5>
            <img
            className="social-icons"
              src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
              alt="applestore"
              width="20px"
              height="22px"
            />
            <img
            className="social-icons"
              src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
              alt="applestore"
              width="20px"
              height="22px"
            />
            <img
            className="social-icons"
              src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
              alt="applestore"
              width="20px"
              height="22px"
            />
            <img
            className="social-icons"
              src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
              width="20px"
              height="22px"
              alt="applestore"
            />
          </div>
        </div>
        <div className="gurenty foot">
            <div className="lastfootdiv">
            <img
            className="footlogo"
              src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
              width="48px"
              height="40px"
              alt="applestore"
            />
            <div className="footerspan"><span className="bold">100% ORIGINAL guarantee</span><br/> for all products at myntra.com</div>
            </div>
            <div className="lastfootdiv">
            <img className="footlogo"
              src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
              width="48px"
              height="49px"
              alt="applestore"
            />
            <div className="footerspan"><span className="bold">Return within 30days of</span><br/> receiving your order</div>
            </div>
        </div>
      </div>
    </>
  );
};
