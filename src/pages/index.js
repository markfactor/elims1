
import { useState } from 'react';

import Link from 'next/link';

import '@/app/globals.css'
import axios from 'axios';

import Image from 'next/image';
import { useEffect } from 'react';



export default function Layout({children}) {

    const [list, setList] = useState([])
    
    useEffect(()=> {
        axios.get(process.env.APP_SERVER + "getItems")
        .then((response,error) => {
            console.log(response.data)
        })
    })


    return(
        <>

            <script async  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"> </script>
            <script async  src="https://code.iconify.design/iconify-icon/0.0.2/iconify-icon.min.js"> </script>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
            <script async  src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
            <script async  src="https://cdn.tailwindcss.com"></script>            
            <link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet" />                
            <script async  src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/datepicker.min.js"></script>
            <script async  src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <script async src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

          

            <div id="body-div">
            <div id="bg-div"></div>
            </div> 

            <div id="bg-overlay">

              
            
              </div>
        </>
    )
}
