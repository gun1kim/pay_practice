// import { useState, useEffect } from "react";
// import axios from "axios";

// const kpConfig = {
//   next_redirect_pc_url: "",
//   tid: "",
//   params: {
//     cid: "TC0ONETIME",
//         partner_order_id: "partner_order_id",
//         partner_user_id: "partner_user_id",
//         item_name: "테스트",
//         quantity: 1,
//         total_amount: 10000,
//         vat_amount: 200,
//         tax_free_amount: 0,
//         approval_url: "http://localhost:3000/",
//         fail_url: "http://localhost:3000/",
//         cancel_url: "http://localhost:3000/",
//   },
// };

// function App() {
//   const [data, setData] = useState({});
//   const { params } = kpConfig;
  
//   useEffect(() => {
//     const postKakaopay = async () => {
//       const data = await axios.post('/v1/payment/ready', null, {
//         params,
//         headers: {
//           Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
//           "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
//         }
//       })
//       .then((response) => {
//         const {
//           data: {next_redirect_pc_url, tid}
//         } = response;
//         setData({next_redirect_pc_url, tid});
//         console.log(response);
//       });
//     }
//     postKakaopay();
//   }, [])
//   return (
//     // <></>
//     <div>
//       <h2>pay page</h2>
//       <a href={ data.next_redirect_pc_url }>
//         {data.next_redirect_pc_url}
//       </a>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import PayReady from "./PayReady";
import PayResult from "./PayResult";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/payready' exact={true} Component={PayReady} />
        <Route path='/payresult' Component={PayResult} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
