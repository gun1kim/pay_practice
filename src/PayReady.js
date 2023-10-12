// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// function PayReady() {
//     const [state, setState] = useState({});
//     state = {
//         next_redirect_pc_url: "",
//         tid: "",
//         params: {
//             cid: "", 
//             tid: "",
//             partner_order_id: "partner_order_id",
//             partner_user_id: "partner_user_id",
//             item_name: "테스트",
//             quantity: 1,
//             total_amount: 10000,
//             vat_amount: 200,
//             tax_free_amount: 0,
//             approval_url: "http://localhost:3000/",
//             fail_url: "http://localhost:3000/",
//             cancel_url: "http://localhost:3000/",
//         },
//     };
    

//     useEffect(() => { 
//         const { params } = state;
//         axios({ 
//             url: "/v1/payment/ready",
//             method: "POST",
//             headers: {
//                 Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
//                 "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
//             },
//             params,
//         }).then((response) => {
//             const {
//                 data: {next_redirect_pc_url, tid},
//             } = response;
//         })
//         // console.log(next_redirect_pc_url);
//         // console.log(tid);
//         // window.localStorage.setItem("tid", tid);
//         // setState({ next_redirect_pc_url, tid });

//     }, []);
    
//     const { next_redirect_pc_url } = state;
    
//     return (
//         <div>
//             <h2>pay page</h2>
//             <a href={next_redirect_pc_url}>{next_redirect_pc_url}</a>
//         </div>
//     );
// }

// export default PayReady;

import { useState, useEffect } from "react";
import axios from "axios";
import pay_icon from "./payment_icon_yellow_small.png"
const kpConfig = {
  next_redirect_pc_url: "",
  tid: "",
  params: {
    cid: "TC0ONETIME",
        partner_order_id: "partner_order_id",
        partner_user_id: "partner_user_id",
        item_name: "테스트",
        quantity: 1,
        total_amount: 10000,
        vat_amount: 200,
        tax_free_amount: 0,
        approval_url: "http://localhost:3000/payresult",
        fail_url: "http://localhost:3000/",
        cancel_url: "http://localhost:3000/",
  },
};

function PayReady() {
  // const config = useState({
  //   next_redirect_pc_url: "",
  // tid: "",
  // params: {
  //   cid: "TC0ONETIME",
  //       partner_order_id: "partner_order_id",
  //       partner_user_id: "partner_user_id",
  //       item_name: "테스트",
  //       quantity: 1,
  //       total_amount: 10000,
  //       vat_amount: 200,
  //       tax_free_amount: 0,
  //       approval_url: "http://localhost:3000/payresult",
  //       fail_url: "http://localhost:3000/",
  //       cancel_url: "http://localhost:3000/",
  // },
  // })
  const [data, setData] = useState({});
  const { params } = kpConfig;

  useEffect(() => {
    const postKakaopay = async () => {
      const data = await axios.post('/v1/payment/ready', null, {
        params,
        headers: {
          Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
          "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }
      })
      .then((response) => {
        const {
          data: {next_redirect_pc_url, tid}
        } = response;
        window.localStorage.setItem("tid", tid);
        setData({next_redirect_pc_url, tid});
        console.log(response);
      });
    }
    postKakaopay();
  }, [])

  const pay = () => {
    window.location.href = data.next_redirect_pc_url;
  }
  return (
    // <></>
    <div>
      <h2>pay page</h2>
      <button class="pay" onClick={pay}>
        <img src={pay_icon}></img>
      </button>
      {/* <a href={ data.next_redirect_pc_url }>
        {data.next_redirect_pc_url}
      </a> */}
    </div>
  );
}

export default PayReady;