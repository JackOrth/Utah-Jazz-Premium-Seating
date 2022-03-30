import Head from 'next/head'
import Image from 'next/image'


export default function Premium() {
  return (
    <div>
      <Head>
        <title>Premium Seating</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <div>
            <div className="bg-black text-white px-12 pt-14 pb-28 text-center">
              <h1 className="text-6xl font-bold uppercase">Premium Seating</h1>
              <h2 className="text-3xl uppercase text-[#fced29] mt-4 mb-5">The best way to enjoy all the excitement</h2>
              <p className="mb-8">Whether you’re entertaining business clients, closing a major deal, or socializing with family and friends, a luxury suite provides all the convenience, comfort and service you desire. As the home of the Utah Jazz and the country’s most popular touring musical acts and family shows, Vivint Arena is the place to meet, greet, see and be seen in Utah.</p>
              <a href="#contact"className='mt-12 mb-8 border-2 border-yellow rounded px-4 bg-black text-[#fced29]'>Contact Us</a>
            </div>
          </div>
          <div>
              <div className="flex justify-center px-12 bg-[#e3e5e3]">
                <div className="-mt-14 bg-black text-left text-white  mr-4">
                    <Image 
                    src="/photo4.jpg"
                    alt="photo4"
                    height={400}
                    width={620}
                    />
                    <div className="px-8">
                        <h4 className="py-3 text-xl font-bold text-[#fced29]">Luxury Suites</h4>
                        <p>Your suite can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah by becoming a Vivint Arena luxury suite holder.</p>
                        <button  className='mt-8 mb-8 border-2 border-yellow rounded px-4 bg-black text-[#fced29]'>Learn More</button>
                    </div>
                </div>
                <div className="-mt-14 bg-black text-white ml-4 mr-15">
                    <Image 
                    src="/photo5.jpg"
                    alt="photo5"
                    height={389}
                    width={690}
                    />
                    <div className="px-8">
                        <h4 className="py-3 text-xl font-bold text-[#fced29]">Exclusive Clubs</h4>
                        <p>Membership into one of our exlusive clubs can enhance your corporate profile and give you an advantage over your competitors. It offers the chance to communicate your message in a luxurious setting while making entertaining as easy as it is elegant. Take advantage of the most unique and exciting way to entertain in Utah with one of our exclusive club memberships at Vivint Arena.</p>
                        <button className='mt-8 mb-8 border-2 border-yellow rounded px-4 bg-black text-[#fced29]'>Learn More</button>
                    </div>
                </div>
              </div>
          </div>
          <div className="bg-[#e3e5e3] text-color-[#060606] px-12 pt-10">
            <div className="w-1/2">
            <h4 className="pt-8 text-2xl font-bold">Digital Tickets</h4>
            <p className="mt-8">All tickets will be digital and accessible in the Utah Jazz + Vivint Arena App. Printed tickets will no longer be an option.<br></br>This move to digital-only has been made for several reasons:</p>
            <ul className="mt-8 list-disc">
              <li>Helps to prevent fraudulent tickets from being circulated</li>
              <li>Increases safety and security by providing an easier way to track who’s using tickets and entering the arena</li>
              <li>Allows for a convenient transfer process—you can transfer your tickets with the touch of a button</li>
              <li>Helps to prevent fraudulent tickets from being circulated.</li>
              <li>Increases safety and security by providing an easier way to track who’s using tickets and entering the arena.</li>
              <li>Allows for a convenient transfer process—you can transfer your tickets with the touch of a button.</li>
            </ul>
            <p>If you have questions or concerns about digital tickets, please contact your account representative.</p>
            <button className='mt-8 mb-8 border-2 border-black rounded px-4 bg-[#fced29]'>Learn more about digital tickets</button>
            </div>
          </div>
          <div className="bg-black px-12 py-8 text-2xl text-white">
            <div>
              <h4 className="text-2xl uppercase text-[#fced29] font-bold">Luxury Suites</h4>
                <div className="flex justify-center uppercase pt-10">
                   <div className="relative text-center mr-4">
                   <Image
                        src="/photo6.jpg"
                        alt="photo6"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                        <h5 className="absolute top-2/4 left-[30%]">Eide Bailly Suite Level</h5>
                   </div>
                   <div className="relative text-center">
                   <Image
                        src="/photo7.jpg"
                        alt="photo7"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                    <h5 className="absolute top-2/4 left-[33%]">Level 3 Udo Lounge</h5>  
                   </div>
                </div>
                <div className="flex justify-center uppercase text-1xl pt-5">
                   <div className="relative text-center mr-4">
                   <Image
                        src="/photo8.jpg"
                        alt="photo8"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                        <h5 className="absolute top-2/4 left-[35%]">Loge Boxes</h5>
                   </div>
                   <div className="relative text-center">
                   <Image
                        src="/photo4.jpg"
                        alt="photo4"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                    <h5 className="absolute top-2/4 left-[35%]">Courtside Suites</h5>  
                   </div>
                </div>
            </div>
            <div>
              <h4 className="text-2xl uppercase font-bold text-[#fced29] pt-10">Exclusive Clubs</h4>
                <div className="flex justify-center uppercase text-1xl pt-10">
                   <div className="relative text-center mr-4">
                   <Image
                        src="/photo9.jpg"
                        alt="photo9"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                        <h5 className="absolute top-2/4 left-[35%]">Toyota Club</h5>
                   </div>
                   <div className="relative text-center text-white">
                   <Image
                        src="/photo10.jpg"
                        alt="photo10"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                    <h5 className="absolute top-2/4 left-[35%]">Eide Bailly Club</h5>  
                   </div>
                </div>
                <div className="flex justify-center text-white uppercase text-1xl pt-5">
                   <div className="relative text-center mr-4">
                   <Image
                        src="/photo11.jpg"
                        alt="photo11"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                        <h5 className="absolute top-2/4 left-[30%]">WCF Insurance Club</h5>
                   </div>
                   <div className="relative text-center text-white">
                   <Image
                        src="/photo12.jpg"
                        alt="photo12"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                    <h5 className="absolute top-2/4 left-[42%]">Lexus Club</h5>  
                   </div>
                </div>
                <div className="flex justify-center text-white uppercase text-1xl pt-5">
                   <div className="relative text-center mr-4">
                   <Image
                        src="/photo13.jpg"
                        alt="photo13"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                        <h5 className="absolute top-2/4 left-[28%]">Courtside Club<br></br>Presented By Entrata</h5>
                   </div>
                   <div className="relative text-center text-white">
                   <Image
                        src="/photo14.jpg"
                        alt="photo14"
                        width={665}
                        height={365}
                        className="opacity-50"
                   />
                    <h5 className="absolute top-2/4 left-[28%]">Legends Club<br></br>Presented By LGCY Power</h5>  
                   </div>
                </div>
            </div>
          </div>
      </main>
    </div>
  )
}