// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// // const query = window.location.search;
// // const param = new URLSearchParams(query);
// // const token = param.get("pg_token");    

// function PayResult() {
//     const [token, setToken] = useState("");

//     // const token = parameter.get("pg_token");
//     // console.log(token);
//     // const [token, setToken] = useState("")

//     // const query = window.location.search;
//     // const param = new URLSearchParams(query);
//     // setToken(param.get("pg_token"))

//     // console.log(url);
//     // console.log(parameter);
//     const data = {
//         params: {
//             cid: "TC0ONETIME",
//             // localstorage에서 tid값을 읽어온다.
//             tid: window.localStorage.getItem("tid"),
//             partner_order_id: "partner_order_id",
//             partner_user_id: "partner_user_id",
//             pg_token: "",
//         },
//     };
//     const url = window.location.href;
//     const query = window.location.search;
//     const param = new URLSearchParams(query);
//     // const token = param.get('pg_token');
//     console.log(param.get("pg_token"));
//     setToken(param.get("pg_token"));
//     data.params = token;

//     useEffect(() => {
//         const { params } = data;
//         axios({
//             url: "/v1/payment/approve",
//             method: "POST",
//             params,
//             headers: {
//                 Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
//                 "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
//             },
            
//         }).then((response) => {
            
//             console.log(params.pg_token);
//             console.log(response);
//         });
//     }, []);

//     PayResult();
//     return (
//         <div>
//             <h2>Result Page</h2>
//         </div>
//     )

// }

// export default PayResult;

import React, { useEffect, useState } from "react";
import axios from "axios";

function PayResult() {
  const [params, setParams] = useState({
    cid: "TC0ONETIME",
    tid: window.localStorage.getItem("tid"),
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: "",
  });

//   const query = window.location.search;
//   const param = new URLSearchParams(query);

//   // url에 붙어서 온 pg_token을 결제 API에 줄 params에 할당
//   setParams({ ...params, pg_token: param.get("pg_token") });
  useEffect(() => {
        const query = window.location.search;
    const param = new URLSearchParams(query);

    // url에 붙어서 온 pg_token을 결제 API에 줄 params에 할당
    setParams({ ...params, pg_token: param.get("pg_token") });
    
  },[])

  useEffect(() => {


    axios({
      url: "/v1/payment/approve",
      method: "POST",
      headers: {
        Authorization: "KakaoAK de0e3076b485b703b1f1a4a2419440e6",
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      params: params,
    }).then((response) => {
      // 결제 승인에 대한 응답 출력
      console.log(params);
      console.log(response);
    });
  }, [params]);

  return (
    <div>
      <h2>Result page</h2>
    </div>
  );
}

export default PayResult;