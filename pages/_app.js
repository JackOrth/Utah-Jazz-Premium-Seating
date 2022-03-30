import Link from 'next/link'
import Image from 'next/image'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <div className = "flex justify-between mx-12 py-8 text-[#ddd124] bg-black border-b">
        <Link href="/">
          <a className="text-white">Utah Jazz Premium Seating</a>
        </Link>
        <nav>
          <Link href="/premium">
            <a>Luxury Suites</a>
          </Link>
          <Link href="/premium">
            <a className="px-8">Exclusive Clubs</a>
          </Link>
          <Link href="#contact">
            <a>Contact Us</a>
          </Link>
        </nav>
      </div>
      <Component {...pageProps} />
      <footer id="contact" className="px-12 py-12 bg-[#282828] text-white flex justify-between">
        <div className="w-1/2">
          <h3 className="text-2xl font-bold uppercase pb-8">Contact Us</h3>
          <h5 className="pb-8">801-325-2105</h5>
          <h5 className="pb-8">bizdev@utahjazz.com</h5>
          <p>With options like single-game tickets, suite rentals and special group rates, experiencing Utah Jazz basketball has never been more convenient! Just let us know what you’re interested in and we can customize a package to fit your group and budget.</p>
        </div>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"/>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text"/>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Phone Number</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text"/>
          </div>
          <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">Options</label>
            <select className="block text-black text-sm font-bold mb-2">
              <option value="a">I am interested in purchasing tickets for a suite</option>
              <option value="b">I have a question about tickets I already have purchased</option>
              <option value="c">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Message</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text"/>
          </div>
          <button className='mt-8 mb-8 rounded px-4 bg-[#fced29] text-[#282828]'>Submit</button>
        </form>
      </footer>
    </div>
  )
}

export default MyApp

