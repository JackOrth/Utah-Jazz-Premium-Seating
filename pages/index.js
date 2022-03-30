import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'





export default function Home() {
  return (
    <div>
      <Head>
        <title>Premium Seating</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <div className="flex justify-between bg-white">
            <h1 className="text-3xl font-bold uppercase px-12 py-10">Eide Bailly Suite Level</h1>
            <div className ="uppercase px-12 py-10">
              <button className="mr-2 border-2 border-black rounded px-4">Download Info</button>
              <button className="border-2 border-black rounded px-4">Contact Us</button>
            </div>
          </div>
          <div>
            <Image 
            className="mb=0"
            src="/photo1.jpg"
            alt="Image1"
            width="1500px"
            height="675px"
            />
              <p className="px-14 py-3 bg-[#fbed2a]">Did you know? Whether you are closing an important business deal or celebrating with your employees, renting a suite for a Jazz game is perfect for any occasion. Call or text 801.325.2203 to learn more.</p>
          </div>
        </header>
        <div className="text-white bg-black divide-y px-12">
          <div className="flex justify-between py-5">
            <h3 className="text-2xl font-bold">About</h3>
              <div>
                <h4 className="text-xl font-bold">Location</h4>
                  <p>Suite Level (Level 4)</p>
                  <button className='mt-8 mb-8 border-2 border-black rounded px-4 bg-[#fced29] text-black'>View Arena Map</button>
              </div>
              <div>
                <h4 className="text-xl font-bold">Capacity</h4>
                  <p>Accommodates 18-32 people</p>
              </div>
              <div>
                <h4 className="text-xl font-bold">Event Availability</h4>
                  <p>Utah Jazz Games (including playoffs)</p>
                  <p>Concerts and select special events</p>
              </div>
          </div>
          <div className="flex justify-between py-5">
            <h3 className="text-2xl font-bold">Benefits & <br></br>Amenities</h3>
              <div className="ml-15">
                <ul className="marker:text-[#fced29] list-disc">
                  <li>Private Suite</li>
                  <li>420 - 490 square feet depending on the location</li>
                  <li>Lounge seating area for four with coffee table at back of suite</li>
                  <li>High-top counter in middle and drink rails a the back of the fixed-seating area</li>
                  <li>Dedicated suite attendant for each game and arena event</li>
                </ul>
            </div>
            <div className="mr-16 pr-10">
                <ul className="marker:text-[#fced29] list-disc">
                  <li>Flat screen TV in each suite</li>
                  <li>WiFi access</li>
                  <li>18-32 tickets in a luxury suite (varies by location)</li>
                  <li>VIP parking passes</li>
                  <li>Food credit for catering to both Utah Jazz games and arena events</li>
                </ul>
            </div>
          </div>
          <div className="flex justify-between py-5">
            <h3 className="text-2xl font-bold">Parking &<br></br> Check-In</h3>
              <div className="ml-15">
                <p>VIP parking in the Park Place lot located right next to Vivint Smart-Home Arena</p>
                <button className='mt-8 mb-8 border-2 border-black rounded px-4 bg-[#fced29] text-black'>View Parking Map</button>
              </div>
              <div className="pr-10">
                <p>Easy check-in: Talk to the host at any suite level (level 4) entrance to check in</p>
                <button className='mt-8 mb-8 border-2 border-black rounded px-4 bg-[#fced29] text-black'>View Check-In Locations</button>
              </div>
          </div>
          <div className="py-5">
            <h3 className="text-2xl font-bold">Possible Uses</h3>
              <div className="flex justify-between py-5">
              <div className="mr-10">
                <h4 className="font-bold text-xl border-b">Business<br></br> Development</h4>
                  <p>Client Entertainment</p>
                  <p>Relationship Development</p>
                  <p>Generate Referrals By Inviting Clients To Bring Colleagues & Friends</p>
              </div>
              <div className="mr-10 ">
                <h4 className="font-bold text-xl border-b">Client<br></br> Relation</h4>
                  <p>Renew Accounts</p>
                  <p>Reduce Attrition</p>
                  <p>Current Customer Upsell</p>
                  <p>New Product/Service Launch</p>
              </div>
              <div className="mr-10">
                <h4 className="font-bold text-xl border-b">Employee<br></br> Usage</h4>
                  <p>Employee Recruitment & Retention</p>
                  <p>Employee Benefit Programs</p>
                  <p>Employee Incentives</p>
                  <p>Internal Contests</p>
                  <p>Team Building</p>
                  <p>Employee Families</p>
                  <p>Holiday Events/Parties</p>
                  <p>Conferences</p>
              </div>
              <div className="mr-10">
                <h4 className="font-bold text-xl border-b">Executive Utilization</h4>
                  <p>Executive Team Building</p>
                  <p>Quarterly Meetings</p>
                  <p>Investors & Shareholders</p>
                  <p>Personal Entertainment</p>
              </div>
              <div >
                <h4 className="font-bold text-xl border-b">Community<br></br> Relations</h4>
                  <p>Complement Current Charitable Programs</p>
                  <p>Donate for Auctions or Raffles</p>
                  <p>Host 501(c)(3)<br></br> Organizations</p>
              </div>
              </div>
          </div>
        </div>
        <div>
        <Image 
        src='/photo2.jpg'
        alt='Image2'
        width="1500px"
        height="823px"
        />
          <p className="text-center text-white bg-black p-10 mx-20">Tailor your food and beverage experience to your group each night. Choose from an expansive menu based on who you will be hosting for that event. Submit your food and beverage orders 2 business days prior to the event. Access to your suite and food service will start 90 minutes prior to tipoff</p>
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
      </main>
    </div>
  )
}