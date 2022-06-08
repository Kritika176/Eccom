

import "../Home/Home.css";
import { Navbar } from "../../Components/Navbar/NavbarComp";
import { productFunc } from "../../Redux/Product/action";
import { useEffect } from "react";
import {Footer} from "../../Components/Footer/Footer";
import { useState } from "react";

// import {Navbar} from ".."
import { useDispatch } from "react-redux";


export const Home = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        dispatch(productFunc());
      
     },[dispatch]);
    return (
        <>
        <Navbar></Navbar>
        {/* <Navbar></Navbar> */}
        <div className="slider">
           <div className="sliderfirst">
           <div className="firstimg">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/2112f5fa-70ff-48e9-801d-5e3f0911d7d71651897098404-Sale-Is-Live_02.jpg" alt="first" />
            </div>
            <div className="firstimg">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/f9453219-4814-46cb-9500-783c03f19f1a1651897098411-Sale-Is-Live_03.jpg" alt="second" />
            </div>
            <div className="firstimg">
            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/38198e6d-ad6d-4751-af80-cf685b1cabfb1651897098417-Sale-Is-Live_04.jpg" alt="second" />
            </div>
            <div className="firstimg">
            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/e7fd4595-f282-491f-b0d1-9df8f6fe5bf01651897098424-Sale-Is-Live_05.jpg" alt="second" />
            </div>
           </div>
           <div className="sliderfirst">
           <div className="firstimg">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/58c62616-99d1-4f0c-8029-5e7190eb3eb21651897098430-Sale-Is-Live_06.jpg" alt="first" />
            </div>
            <div className="firstimg">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/13c3a6d2-e005-4dc6-ad48-c4ae974b01941651897098436-Sale-Is-Live_07.jpg" alt="second" />
            </div>
            <div className="firstimg">
            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/69d0ce99-6fbf-46ec-8f3b-dd69d8e358811651897098442-Sale-Is-Live_08.jpg" alt="second" />
            </div>
            <div className="firstimg">
            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/cf949d18-5de7-4b6c-b2e3-25206b9b597a1651897098448-Sale-Is-Live_09.jpg" alt="second" />
            </div>
           </div>
           <div className="sliderfirst">
           <div className="firstimg">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/df793939-d769-43d1-a08b-9cf98422c31e1651897098454-Sale-Is-Live_10.jpg" alt="first" />
            </div>
            <div className="firstimg">
                <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/025ccb0d-1f9a-4459-94af-1a8c8b9153041651897098460-Sale-Is-Live_11.jpg" alt="second" />
            </div>
            <div className="firstimg">
            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/fc4fb14a-4427-4454-baad-aa2d5e24d9231651897098466-Sale-Is-Live_12.jpg" alt="second" />
            </div>
            <div className="firstimg">
            <img src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/8db13338-1c92-461a-beba-7a117e70c8891651897098472-Sale-Is-Live_13.jpg" alt="second" />
            </div>
           </div>
</div>
<div className="sliderSec">
<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/13/06ccee69-6f8c-4359-823f-907a41e410f51652430215133-DK-RDSTR.jpg" alt="second" />
</div>
<div className="sliderSec">
<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/ba07b5b3-ad1f-4800-8968-4b1bc000be191651897264745-Budget-Buys.jpg" alt="second" />
</div>
<div className="sliderthird">
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/5d1b7ad3-c3ed-4ef9-a654-18231743d3cd1651484798059-Anouk-Inddus.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/f7575784-edbf-411f-acc0-51891ea7f4331651484798329-Inddus-_Varanga.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/ce40419d-6408-404e-9320-96e41aee1b791651484798300-Hrx-_Puma_-_More.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/44192c45-7393-4ede-a926-11f30b0b92a51651484798036-All.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/764761e7-c505-459e-92a2-6c4387f9e2511651484798319-Hush_Puppies-_Arrow.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/2f424664-e746-4af1-b0e1-366ccb0f2c681651484798552-Red_Tape.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/a802fc48-8f5b-4d69-97ab-e6a3cf3fb70c1651484798800-USPA-_Flying_Machine.jpg" alt="second" />
    </div>
</div>
<div className="sliderSec">
<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/ba07b5b3-ad1f-4800-8968-4b1bc000be191651897264745-Budget-Buys.jpg" alt="second" />
</div>
<div className="sliderthird">
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/19ec05fd-2288-4d94-826e-7c8e980ed90a1651475194672-T-Shirts--Men-.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/de547809-394d-4a2d-93c3-f63f5941710a1651475194235-Flats-_-Heels.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/24adafbb-843e-40b5-9da0-03704825c0db1651475194171-Beauty-Essentials.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/aaa1f4eb-faf3-41ff-b807-dd05a92755311651475194162-Backpacks.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/25a1ed95-5f3e-449a-8ca4-ca7128fbda241651475194660-Trousers.jpg" alt="second" />
    </div>
    </div>
    <div className="sliderthird">
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/032793cd-1d10-4c96-abcc-c11ca8b625a51651475194630-Trackpants.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/bc9e2b7d-a685-4806-95dd-fa27dd15df3d1651475194279-Home-Decor.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/8f2c6f5e-8b1a-4204-a63f-990b6dd430d11651475194155-Activewear.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/cc2363fd-2a3d-4258-b00f-e34422db30a71651475194215-Dresses-Women.jpg" alt="second" />
    </div>
    <div className="firstimg">
        <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/2/bbe86259-5883-475e-82a5-da813b38e02a1651475194382-Kurta-Sets-Women.jpg" alt="second" />
    </div>
    </div>
    <div className="sliderSec">
<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/0b611aab-e2ba-4a03-9910-146e9396a03f1651897264778-Lit-Brands-At-The-Hottest-Prices.jpg" alt="second" />
</div>

<div class="sliderthird"><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/6008de69-48b7-407e-86a9-a58d0cbe716b1651730784697-Nike.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/2a26eebe-28ad-4f64-98df-58cdcb721c121651730784724-Puma.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/16a31146-0423-4066-b1c2-e47a9241bfae1651730784531-ADIDAS.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/d2d9a39c-d1e5-42d6-9d55-8e635b29dd011651730784750-Skechers.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/413d73ba-72b4-4990-9645-eb156c5cfb591651730784741-Reebok.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/cff27630-6553-48d9-99ba-1b451ceb3a061651730784602-Crocs.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/a875194d-27c8-48dd-8a9c-593a2a9db9ad1651730784768-Tommy_Hilfiger_Accessories.jpg" alt="second" /></div></div>
<div className="sliderSec">
<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/4f8a8f56-e3d2-4a91-830b-98c6e4069b461651897264784-Loving-These-Brands.jpg" alt="second" />
</div>

<div class="sliderthird"><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/6c4fd229-7319-46c9-a323-9270b2ad10e01651730302287-Jack_-_Jones.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/60a3cf47-a8c9-4aed-9927-afcb6074bec11651730302307-Levis.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/b4e9603a-ba69-4366-ae15-a862396346df1651730302504-USPA.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/e9c5aef6-3e45-4119-858b-67942e57021f1651730301751-_1.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/84e400e2-998d-4c1e-a0cb-9e7cf10abd191651730302150-Biba.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/d446614b-fa26-450a-b9ef-d47f1d71367d1651730302195-F21.jpg" alt="second" /></div></div>



<div class="sliderthird"><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/18c9bb21-7b05-49b7-9a52-713de3b98f951651730301816-_10.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/8cc8e7c3-a224-4e8e-96be-353b22240d371651730302141-_49.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/21624b7f-dfa0-4d55-b7c8-90109e7a20741651730302317-Mango.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/a39a7ee1-a4a9-44cf-9a1a-f4ceae9a6bd01651730302058-_40.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/1d2fa7a1-2589-4003-ad12-bae2b2f77b091651730301998-_33.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/5/1eac71e1-42ca-401c-8f3f-8f72bf3670971651730302132-_48.jpg" alt="second" /></div></div>


<div className="sliderSec">
<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/f4b10903-d18d-44fa-8dc9-b49e7e86ae521651897264790-Shop-By-Category.jpg" alt="second" />
</div>


<div class="sliderthird"><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1307fd62-7b4b-4c52-babb-c9e76227f80d1651897646863-Shop-by-Category---Desktop_17.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/53e3cbc1-50a2-447e-afa4-9529a31c128f1651897646872-Shop-by-Category---Desktop_18.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/3fb99c03-efac-496e-b29c-b5b0e6d819861651897646879-Shop-by-Category---Desktop_19.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/6a6f1480-0b73-4330-9631-dda705ccf49e1651897646887-Shop-by-Category---Desktop_20.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/2072267a-6461-4703-ae06-aa3315c73c1d1651897646894-Shop-by-Category---Desktop_21.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/49a0cb2c-686b-4c47-bbd1-25403f9047211651897646901-Shop-by-Category---Desktop_22.jpg" alt="second" /></div></div>


<div class="sliderthird"><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1307fd62-7b4b-4c52-babb-c9e76227f80d1651897646863-Shop-by-Category---Desktop_17.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/1fd83d6c-938d-4b4e-a75f-a395a7a7978c1651897646916-Shop-by-Category---Desktop_24.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/a6adb84d-5cdf-42aa-8333-6b37a96dfd621651897646923-Shop-by-Category---Desktop_25.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/abc3987c-a34c-4523-8b4e-7787afb67c971651897646931-Shop-by-Category---Desktop_26.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/cff69d71-3c22-4393-b32e-6b358427b0e61651897646940-Shop-by-Category---Desktop_27.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/00d09d12-d338-43d1-b446-38a35f71a23d1651897646947-Shop-by-Category---Desktop_28.jpg" alt="second" /></div></div>


<div class="sliderthird"><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/9bdf0c08-147c-4eae-af2c-5f56613684ba1651897647041-Shop-by-Category---Desktop_41.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/2530c4e8-6254-4bd6-bdb5-bc37e29db8ee1651897647048-Shop-by-Category---Desktop_42.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/c7a851b2-d97e-4780-b055-63d29f1251ec1651897647056-Shop-by-Category---Desktop_43.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/0a6d5492-2752-467d-afcd-c4890060cdf01651897647063-Shop-by-Category---Desktop_44.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/aacd6ade-4f19-427f-a179-25a2fbfaa92d1651897647071-Shop-by-Category---Desktop_45.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/eed9ea86-6c91-43bb-bc91-2d987b3122911651897647079-Shop-by-Category---Desktop_46.jpg" alt="second" /></div></div>


<div class="sliderthird"><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/9bf17698-4f55-48cd-9814-e17738c741f01651897647088-Shop-by-Category---Desktop_47.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/0975b485-300b-4a12-b6b0-865b5e9e8b651651897647096-Shop-by-Category---Desktop_48.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/34585487-0fd0-4180-aaec-f51e485f22271651897647104-Shop-by-Category---Desktop_49.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/aaa7517b-3eb9-424a-92fb-9c8ab331227f1651897647112-Shop-by-Category---Desktop_50.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/0c5bec5a-5431-4b38-980a-10da76f620871651897647120-Shop-by-Category---Desktop_51.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/f045f4a3-d840-4201-a3e8-f0b18e0a8e391651897647128-Shop-by-Category---Desktop_52.jpg" alt="second" /></div><div class="firstimg"><img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/7/d6e910ce-9c82-46c3-942e-d4be4d051ea81651897647136-Shop-by-Category---Desktop_53.jpg" alt="second" /></div></div>
  <Footer></Footer>
        </>
    )
}