import React from 'react'

import Dinakshie from "../../assets/Cast/dinakshie.png"
import Uddika from "../../assets/Cast/Uddika.png"
import Mahendra from "../../assets/Cast/Mahendra.png"
import Sarath from "../../assets/Cast/Sarath.png"
import Mihiri from "../../assets/Cast/Mihira.png"
import Piyumi from "../../assets/Cast/Piyumi.png"
import Saman from "../../assets/Cast/Saman.png"
import Pahandi from "../../assets/Cast/Pahandi.png"

function Cast() {
  return (
    <div className='mt-10'>
<section class="bg-whit">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-bold font-redhat text-gray-900 ">Cast</h2>
         
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 ">
              <img class="bg-gray-200   mx-auto mb-4 w-36 h-36 rounded-full" src={Dinakshie} alt="Bonnie Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 ">
                  <a href="#">දිනක්ෂි ප්‍රියසාද්</a>
              </h3>
              
           
          </div>
          <div class="text-center text-gray-500">
              <img class="bg-gray-200 mx-auto mb-4 w-36 h-36 rounded-full" src={Uddika} alt="Helene Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900">
                  <a href="#">උද්දික ප්‍රේමරත්න</a>
              </h3>
              
 
          </div>
          <div class="text-center text-gray-500 ">
              <img class="bg-gray-200 mx-auto mb-4 w-36 h-36 rounded-full" src={Pahandi} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 ">
                  <a href="#">පහන්දි නෙතාරා</a>
              </h3>
              
          </div>
          <div class="text-center text-gray-500">
              <img class="mx-auto bg-gray-200 mb-4 w-36 h-36 rounded-full" src={Mahendra} alt="Jese Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 ">
                  <a href="#">මහේන්ද්‍ර පෙරේරා</a>
              </h3>
              
       
          </div>
          <div class="text-center text-gray-500 ">
              <img class="mx-auto bg-gray-200 mb-4 w-36 h-36 rounded-full" src={Sarath} alt="Joseph Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900">
                  <a href="#">සරත් කොතලාවල </a>
              </h3>
              
            
          </div>
          <div class="text-center text-gray-500 ">
              <img class="mx-auto bg-gray-200 mb-4 w-36 h-36 rounded-full" src={Mihiri} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 ">
                  <a href="#">මිහිර සිරිතිලක</a>
              </h3>
              
          </div>
          <div class="text-center text-gray-500">
              <img class="bg-gray-200 mx-auto mb-4 w-36 h-36 rounded-full" src={Piyumi} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900">
                  <a href="#">පියුමි බොතේජු</a>
              </h3>
            
          </div>
          <div class="text-center text-gray-500 ">
              <img class="bg-gray-200 mx-auto mb-4 w-36 h-36 rounded-full" src={Saman} alt="Sofia Avatar"/>
              <h3 class="mb-1 text-2 font-bold tracking-tight text-gray-900 ">
                  <a href="#">සමන් හේමරත්න</a>
              </h3>
              
          </div>
          

      </div>  
  </div>
</section>

    </div>
  )
}

export default Cast
