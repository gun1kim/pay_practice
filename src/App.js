// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// function App() {
//   let [data, setData] = useState([]);


//    data = {
//     next_redirect_pc_url: "",
//     tid: "",
//     params: {
//       cid: "TC0ONETIME",
//       partner_order_id: "partner_order_id",
//       partner_user_id: "partner_user_id",
//       item_name: "테스트",
//       quantity: 1,
//       total_amount: 10000,
//       vat_amount: 200,
//       tax_free_amount: 0,
//       approval_url: "http://localhost:3000/",
//       fail_url: "http://localhost:3000/",
//       cancel_url: "http://localhost:3000/",
//     },
//   };

//   useEffect(() => {
//     const { params } = data;

//     axios({
//       url: "/v1/payment/ready",
//       mehtod: "POST",
//       headers: {
//         Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
//         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//       },
//       params,
//     }).then((response) => {
//       const {
//         data: { next_redirect_pc_url, tid }
//       } = response;

//       console.log(next_redirect_pc_url);
//       console.log(tid);
//       this.setData({ next_redirect_pc_url, tid });
//     });
//   }, []);




//   return (<div>
//     <h2>Pay page</h2>
//     {/* <a href={next_redirect_pc_url}> */}
//       {/* {next_redirect_pc_url} */}
//     {/* </a> */}
//   </div>);
// }

// export default App;

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const payData = async () => {
    const URL = "/v1/payment/ready";
    // let next_redirect_pc_url = "";
    // let tid = "";
    await axios.post(
      URL, {
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
        approval_url: "http://localhost:3000/",
        fail_url: "http://localhost:3000/",
        cancel_url: "http://localhost:3000/",
      },
      headers: {
        Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      }, 
      params,
    }).then((response) => {
      const {
        data: {next_redirect_pc_url, tid}
      } = response;
      console.log(next_redirect_pc_url);
      console.log(tid);
      this.setData({ next_redirect_pc_url, tid});
    });
  }

  return (
    <div>
      <h2>pay page</h2>
      <a href={ next_redirect_pc_url }>
        {next_redirect_pc_url}
      </a>
    </div>
  );
}

export default App;