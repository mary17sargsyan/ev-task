

let img={
    1: {img: 'img/1-video.jpg',
    title: 'DJI Mini 2 | Linking',
    arrow:'DJI Mini 2 | First Flight'},
    2: {img: 'img/2-video.jpg',
    title: 'DJI Mini 2 | Quickshots',
    arrow:'img/video/ArrowSmallLeft.svg'},
    3: {img: 'img/3video.jpg',

    arrow:'img/video/ArrowSmallLeft.svg',
    title: 'DJI Mini 2 | Linking'},
    4: {img: 'img/4-viedo.jpg',
    title: 'Teacher’s Video Message',
    arrow:'img/video/ArrowSmallLeft.svg'},

    5: {img: 'img/5-video.jpg',
    title: 'DJI Mini 2 | Attaching the 360° Propeller Guard',
    arrow:'img/video/ArrowSmallLeft.svg'},
    
    6: {img: 'img/6-video.jpg',
    arrow:'img/video/ArrowSmallLeft.svg',
    title: 'DJI Mini 2 | DJI FLY Editor'},
   
    7: {img: 'img/7-video.jpg',
    title: 'DJI Mini 2 | QuickTransfer',
    arrow:'img/video/ArrowSmallLeft.svg'},


}

let slideObj={
    1:{
   
            text: "I’m having so much fun creating my educational animation videos with Renderforest’s drag and drop features with its extensive library of templates and music library! My videos look amazing!",
            name: 'Gracy Y',
            aboutName: 'Book Author'
      
    },
    2:{
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
        name: 'slide 2',
        aboutName: 'for slide 2'
    },
    3:{
        text: "Review 1 - I’m having so much fun creating my educational animation videos with Renderforest’s drag and drop features with its extensive library of templates and music library! My videos look amazing!",
        name: 'slide 3',
        aboutName: 'for slide 3'
    },
}



let container =document.getElementById('video-tutorial');

for(let key in img){

    let containerItem = document.createElement('div');
    let containerVideo = document.createElement('div');
    let img1=document.createElement('img');
    let play=document.createElement('img');
    let title =document.createElement('p');
   
    img1.src=img[key].img;
    play.src='img/play.svg'
    containerItem.className="video-tutorial-item";
    containerVideo.className="video-tutorial-item-container transaction";
    img1.className='video-img';
    play.className='circle-video';
    title.className='item-title';
    title.innerHTML=img[key].title;


    containerVideo.appendChild(img1);
    containerVideo.appendChild(play);
    containerItem.appendChild(containerVideo)
    containerItem.appendChild(title)
    container.appendChild(containerItem);
 

}


//collapsible
let coll = document.getElementsByClassName("collapsible");

const objCollapsible={
 camera:[
    {
      id:1,
      title: ' What color options are available for DJI Mini 2?',
      content: 'Currently, light gray is the only color option for DJI Mini 2. However, the DIY Creative Kit is available, which can be used to personalize and decorate DJI Mini 2. The DIY Creative Kit can be purchased separately at the DJI Online Store.'
    },
    {
      id:2,

      title: '  What is the weight of DJI Mini 2?',
      content: 'The standard weight of the aircraft (including battery, propellers, and a microSD card) is 242 grams. Actual product weight may vary. Registration is not required in some countries and regions. Check local rules and regulations before use.'
    },
    {
      id:3,

      title: ' How do I turn on DJI Mini 2 after unboxing?',
      content: 'To ensure transportation safety, DJI Mini 2 flight batteries are set to Sleep mode before shipping. Simply connect the aircraft with the battery charger to activate the battery and begin using. After activating the battery, press the power button once and then press and hold to turn on the aircraft.'    },
    {
      id:4,

      title: ' What app does DJI Mini 2 work with? Where can I download it? What mobile devices is the app compatible with?',
      content: 'DJI Mini 2 can only be used with the DJI Fly app. You can download the DJI Fly app from major application stores or from the Downloads page on the DJI official website (https://www.dji.com/mini-2/downloads). Please check compatibility on the website.'
    },
    {
      id:5,
      title: '  What is the weight of DJI Mini 2?',
      content: 'Connect your mobile device with the remote controller, then connect with DJI Mini 2 via the DJI Fly app. Follow the app instructions to activate DJI Mini 2.'
    },
    {
      id:6,
      title: '   Where can I find tips about using DJI Mini 2?',
      content: 'DJI Mini 2 comes with a user manual and comprehensive tutorials, which you can get from the Flight Academy in the DJI Fly app.'
    },
    {
      id:7,
      
      title: ' Does DJI Mini 2 have internal storage? Can I insert a microSD card? If yes, what kinds of microSD cards are recommended?',
      content: 'No. A microSD card is required in order to store images and footage. Recommended microSD cards are: Capacity Manufacturer/Model 16GB: SanDisk Extreme 32GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Industrial, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar 633x, Lexar 667x 64GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 128GB: Samsung Pro Plus, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 256GB: SanDisk Extreme V30 A1, SanDisk Extreme V30 A2'
    },
  
  ],
  product:[
    {
      id:1,
      title: '  What color options are available for DJI Mini 2?',
      content: 'Currently, light gray is the only color option for DJI Mini 2. However, the DIY Creative Kit is available, which can be used to personalize and decorate DJI Mini 2. The DIY Creative Kit can be purchased separately at the DJI Online Store.'
    },
    {
      id:2,

      title: '  What is the weight of DJI Mini 2?',
      content: 'The standard weight of the aircraft (including battery, propellers, and a microSD card) is 242 grams. Actual product weight may vary. Registration is not required in some countries and regions. Check local rules and regulations before use.'
    },
    {
      id:3,

      title: ' How do I turn on DJI Mini 2 after unboxing?',
      content: 'To ensure transportation safety, DJI Mini 2 flight batteries are set to Sleep mode before shipping. Simply connect the aircraft with the battery charger to activate the battery and begin using. After activating the battery, press the power button once and then press and hold to turn on the aircraft.'    },
    {
      id:4,

      title: '  What app does DJI Mini 2 work with? Where can I download it? What mobile devices is the app compatible with?',
      content: 'DJI Mini 2 can only be used with the DJI Fly app. You can download the DJI Fly app from major application stores or from the Downloads page on the DJI official website (https://www.dji.com/mini-2/downloads). Please check compatibility on the website.'
    },
    {
      id:5,
      title: 'What is the weight of DJI Mini 2?',
      content: 'Connect your mobile device with the remote controller, then connect with DJI Mini 2 via the DJI Fly app. Follow the app instructions to activate DJI Mini 2.'
    },
    {
      id:6,
      title: '   Where can I find tips about using DJI Mini 2?',
      content: 'DJI Mini 2 comes with a user manual and comprehensive tutorials, which you can get from the Flight Academy in the DJI Fly app.'
    },
    {
      id:7,
      
      title: ' Does DJI Mini 2 have internal storage? Can I insert a microSD card? If yes, what kinds of microSD cards are recommended?',
      content: 'No. A microSD card is required in order to store images and footage. Recommended microSD cards are: Capacity Manufacturer/Model 16GB: SanDisk Extreme 32GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Industrial, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar 633x, Lexar 667x 64GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 128GB: Samsung Pro Plus, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 256GB: SanDisk Extreme V30 A1, SanDisk Extreme V30 A2'
    },
  
  ],
 
  remote:[
    
    {
      id:3,

      title: ' How do I turn on DJI Mini 2 after unboxing?',
      content: 'To ensure transportation safety, DJI Mini 2 flight batteries are set to Sleep mode before shipping. Simply connect the aircraft with the battery charger to activate the battery and begin using. After activating the battery, press the power button once and then press and hold to turn on the aircraft.'    },
    {
      id:4,

      title: '  What app does DJI Mini 2 work with? Where can I download it? What mobile devices is the app compatible with?',
      content: 'DJI Mini 2 can only be used with the DJI Fly app. You can download the DJI Fly app from major application stores or from the Downloads page on the DJI official website (https://www.dji.com/mini-2/downloads). Please check compatibility on the website.'
    },
    {
      id:5,
      title: '  What is the weight of DJI Mini 2?',
      content: 'Connect your mobile device with the remote controller, then connect with DJI Mini 2 via the DJI Fly app. Follow the app instructions to activate DJI Mini 2.'
    },
    {
      id:6,
      title: '  Where can I find tips about using DJI Mini 2?',
      content: 'DJI Mini 2 comes with a user manual and comprehensive tutorials, which you can get from the Flight Academy in the DJI Fly app.'
    },
    {
      id:7,
      
      title: 'Does DJI Mini 2 have internal storage? Can I insert a microSD card? If yes, what kinds of microSD cards are recommended?',
      content: 'No. A microSD card is required in order to store images and footage. Recommended microSD cards are: Capacity Manufacturer/Model 16GB: SanDisk Extreme 32GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Industrial, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar 633x, Lexar 667x 64GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 128GB: Samsung Pro Plus, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 256GB: SanDisk Extreme V30 A1, SanDisk Extreme V30 A2'
    },
  
  ],
  battery:[
   
    {
      id:5,
      title: ' What is the weight of DJI Mini 2?',
      content: 'Connect your mobile device with the remote controller, then connect with DJI Mini 2 via the DJI Fly app. Follow the app instructions to activate DJI Mini 2.'
    },
    {
      id:6,
      title: '   Where can I find tips about using DJI Mini 2?',
      content: 'DJI Mini 2 comes with a user manual and comprehensive tutorials, which you can get from the Flight Academy in the DJI Fly app.'
    },
    {
      id:7,
      
      title: ' Does DJI Mini 2 have internal storage? Can I insert a microSD card? If yes, what kinds of microSD cards are recommended?',
      content: 'No. A microSD card is required in order to store images and footage. Recommended microSD cards are: Capacity Manufacturer/Model 16GB: SanDisk Extreme 32GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Industrial, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar 633x, Lexar 667x 64GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 128GB: Samsung Pro Plus, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 256GB: SanDisk Extreme V30 A1, SanDisk Extreme V30 A2'
    },
  
  ],
  update:[
  
    {
      id:5,
      title: '  What is the weight of DJI Mini 2?',
      content: 'Connect your mobile device with the remote controller, then connect with DJI Mini 2 via the DJI Fly app. Follow the app instructions to activate DJI Mini 2.'
    },
    {
      id:6,
      title: '  Where can I find tips about using DJI Mini 2?',
      content: 'DJI Mini 2 comes with a user manual and comprehensive tutorials, which you can get from the Flight Academy in the DJI Fly app.'
    },
    {
      id:7,
      
      title: '  Does DJI Mini 2 have internal storage? Can I insert a microSD card? If yes, what kinds of microSD cards are recommended?',
      content: 'No. A microSD card is required in order to store images and footage. Recommended microSD cards are: Capacity Manufacturer/Model 16GB: SanDisk Extreme 32GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Industrial, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar 633x, Lexar 667x 64GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 128GB: Samsung Pro Plus, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 256GB: SanDisk Extreme V30 A1, SanDisk Extreme V30 A2'
    },
  
  ],
  accessory:[
    
    {
      id:7,
      
      title: '  Does DJI Mini 2 have internal storage? Can I insert a microSD card? If yes, what kinds of microSD cards are recommended?',
      content: 'No. A microSD card is required in order to store images and footage. Recommended microSD cards are: Capacity Manufacturer/Model 16GB: SanDisk Extreme 32GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Industrial, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Pro V30 A1, SanDisk Extreme Pro V30 A2, Lexar 633x, Lexar 667x 64GB: Samsung Pro Endurance, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 128GB: Samsung Pro Plus, Samsung Evo Plus, SanDisk Extreme V30 A1, SanDisk Extreme V30 A2, SanDisk Extreme Plus V30 A1, SanDisk Extreme Plus V30 A2, Lexar 633x, Lexar 667x, Lexar 1000x, Lexar High Endurance, Toshiba EXCERIA M303 V30 A1, Netac Pro V30 A1 256GB: SanDisk Extreme V30 A1, SanDisk Extreme V30 A2'
    },
  
  ],

    
  
}



function openHide (){
  for (let i = 0; i < coll.length; i++) {
    console.log('collapse')
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}
let collaps = document.getElementById('faq');
collapsible('camera');


function collapsible(id){




  for(let key in objCollapsible[id]){
    let collapsibleItem = document.createElement('div');

    let titleCollapseItem=document.createElement('p');
    let content=document.createElement('div');
    let contentTitle=document.createElement('p');
   
    collapsibleItem.className="collapsible-items";
    titleCollapseItem.className="collapsible";
    content.className="content-collapse"
    console.log(objCollapsible[id][key].title)
    titleCollapseItem.innerHTML=objCollapsible[id][key].title;
    contentTitle.innerHTML=objCollapsible[id][key].content;
    content.appendChild(contentTitle)
    collapsibleItem.appendChild(titleCollapseItem);
    collapsibleItem.appendChild(content);
    collaps.appendChild(collapsibleItem);
  }
  openHide()

}








let titleFaq=document.getElementById('titleFaq');

function slideFaq (id){

switch(id){
  
  case 'product':
    titleFaq.innerHTML='Product';
    break;
    case 'camera':
      titleFaq.innerHTML='Camera';
      break;
      case 'remote':
        titleFaq.innerHTML='Remote Controller and Image Transmission';
        break;
        case 'battery':
          titleFaq.innerHTML='Propulsion and Battery';
          break;
          case 'update':
            titleFaq.innerHTML='Firmware Update';
            break;
            case 'accessory':
              titleFaq.innerHTML='Accessory Compatibility';
              break;
}


document.querySelectorAll('.collapsible-items').forEach(function(a){
  a.remove()
  })
collapsible(id);
}

openSearch=()=>{
  let search=document.getElementsByClassName('input-search');
  let searchIcon=document.getElementById('searchHeader')
 
  if (search[0].style.visibility === "visible") {
 
    search[0].style.visibility = "hidden";
    search[0].style.opacity = "0";
    searchIcon.innerHTML='search'
  } else {
    searchIcon.innerHTML='cancel'
    search[0].style.visibility = "visible";
    search[0].style.opacity = "1";
 
  }
}


function openSideBar(){
  let bar=document.getElementsByClassName('header-menu-xs');
  if (bar[0].style.visibility === "visible") {
 
    bar[0].style.visibility = "hidden";
    bar[0].style.opacity = "0";
 
  } else {
  
    bar[0].style.visibility = "visible";
    bar[0].style.opacity = "1";
 
  }
}
/*



 camera:[
    {
        id:1,
        title:"Can DJI Mini 2's camera zoom? How do I use it?",
        content: 'DJI Mini 2 supports digital zoom, namely: 4K: 2x 2.7K: 3x FHD: 4x In the video recording view of the DJI Fly app, tap the zoom icon, touch the screen with two fingers, or use the dial while pressing the Fn button on the remote controller to zoom in.' ,

    },
    {
      id:2,
      title:'Does DJI Mini 2 support portrait mode?' ,
      content:"No" ,

  },
  {
    id:3,
    title: 'Does DJI Mini 2 support panorama?' ,
    content: "Yes. It supports Sphere, 180°, and Wide-Angle." ,

},
{
  id:4,
  title: 'Does DJI Mini 2 support panorama?' ,
  content: "Yes" ,

},
{
  id:5,
  title: 'Does DJI Mini 2 support panorama?',
  content:'Yes. You can adjust shutter, ISO, and white balance in M mode.' ,

},

  ],

  remote:[{
    id:1,
  title: 'What advantages does OcuSync 2.0 have compared to Wi-Fi?' ,
  content: "OcuSync 2.0 supports both 2.4 GHz and 5.8 GHz frequency bands. It features stronger interference resistance due to automatic frequency switching, delivering video transmission feeds at up to 10 km (when unobstructed, free of interference, and FCC-compliant)." ,
  },
  {
    id:5,
    title: 'What is DJI Mini 2’s maximum video transmission resolution?',
    content:'720p @ 30fps.' ,
  
  },

],
battery:[{
  id:1,
title: 'What advantages does OcuSync 2.0 have compared to Wi-Fi?' ,
content: "OcuSync 2.0 supports both 2.4 GHz and 5.8 GHz frequency bands. It features stronger interference resistance due to automatic frequency switching, delivering video transmission feeds at up to 10 km (when unobstructed, free of interference, and FCC-compliant)." ,
},
{
  id:5,
  title: 'What is DJI Mini 2’s maximum video transmission resolution?',
  content:'720p @ 30fps.' ,

},
],
update:[{
  id:1,
title: 'What advantages does OcuSync 2.0 have compared to Wi-Fi?' ,
content: "OcuSync 2.0 supports both 2.4 GHz and 5.8 GHz frequency bands. It features stronger interference resistance due to automatic frequency switching, delivering video transmission feeds at up to 10 km (when unobstructed, free of interference, and FCC-compliant)." ,
},
{
  id:5,
  title: 'What is DJI Mini 2’s maximum video transmission resolution?',
  content:'720p @ 30fps.' ,

}
],
accessory:[{
  id:1,
title: 'What advantages does OcuSync 2.0 have compared to Wi-Fi?' ,
content: "OcuSync 2.0 supports both 2.4 GHz and 5.8 GHz frequency bands. It features stronger interference resistance due to automatic frequency switching, delivering video transmission feeds at up to 10 km (when unobstructed, free of interference, and FCC-compliant)." ,
},
{
  id:5,
  title: 'What is DJI Mini 2’s maximum video transmission resolution?',
  content:'720p @ 30fps.' ,

},
]
*/