import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const Data = [
            {
            'title' : 'iphone',
            'description' : 'The iPhone is a smartphone that combines a mobile phone, digital camera, music player, and personal computing technologies.',
            'images' : [
           "https://images.unsplash.com/photo-1700805810965-bfea8f8109ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           "https://images.unsplash.com/photo-1701680853149-1b5240a95eeb?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
           "https://images.unsplash.com/photo-1647866276881-62c3caa1a9fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ] 
            },
            {
              title: "Wireless Earbuds",
              description: "Compact and powerful, offering high-quality sound with noise-cancellation. good product in present Days",
              images: [ "https://images.unsplash.com/photo-1584635234347-ce88034d9501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
                "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                 "https://images.unsplash.com/photo-1595519760904-689c165ec2f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
                 ]
            },
            {
              title: "Gaming Laptop",
              description: "High-performance laptop designed for gaming with advanced graphics and cooling system.good product",
              images: ["https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                 "https://images.unsplash.com/photo-1526657782461-9fe13402a841?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  ]
            },
            {
              title: "Smartwatch",
              description: "Wearable technology with fitness tracking, notifications, and customizable watch faces. good product in present Days",
              images: ["https://plus.unsplash.com/premium_photo-1711051476626-1e8c8b79f122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
                 "https://images.unsplash.com/photo-1569411032431-07598b0012c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
                   ]
            },
            {
              title: "Bluetooth Speaker",
              description: "Portable speaker with deep bass and clear sound, perfect for any occasion.good product in present Days",
              images: ["https://images.unsplash.com/photo-1520860100614-a714deb4805f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                 "https://images.unsplash.com/photo-1600691222598-51c23d20bb05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
                  ]
            },
            {
              title: "4K Television",
              description: "Ultra-high-definition TV with vibrant colors and smart features for streaming.good product in present Days",
              images: ["https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "tv2.jpg", "tv3.jpg"]
            },
            {
              title: "DSLR Camera",
              description: "Professional camera with high-resolution sensors and multiple shooting modes.good product in present Days",
              images: ["https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"]
            },
            {
              title: "Tablet",
              description: "Lightweight and powerful tablet with a crystal-clear display and responsive touch.good product in present Days",
              images: ["https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
            },
            {
              title: "Gaming Console",
              description: "Next-gen gaming console with fast load times and a vast library of games.good product in present Days",
              images: ["https://images.unsplash.com/photo-1690467485207-db6fbf1b8014?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"]
            },
            {
              title: " Headphones",
              description: "Over-ear headphones with premium sound quality and active noise cancellation.good product in present Days",
              images: ["https://images.unsplash.com/photo-1529602266431-5e205a27eb68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8"]
            }


  ];
  return (
      <>
      <header>
          <h1> PRODUCTS</h1>
        </header>
      <div className='Main-contianer'> 
      {
        Data.map((value) =>(
          <Card  imageUrl={value}/>
        ))
      }
      
    </div>

    </>
  )
}


export default App
