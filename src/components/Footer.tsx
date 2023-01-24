const Footer = () =>{
    return(
<footer className="text-center lg:text-left bg-blue-500 text-gray-600">
        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        </div>
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


            <div className="">
              <h6 className="">Restaurant</h6>
              <ul className="footer-links text-xl mb-4 text-black">
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/legal-stuff">Legal Stuff</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/jobs">Careers</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/press">Media Centre</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/community-connect/blog">Community Connect Blog</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.zendesk.com/hc/en-gb/requests/new">Contact Us</a></li>
              </ul>
            </div>


            <div className="">
              <h6 className="">Useful links</h6>
              <ul className="footer-links text-xl mb-4 text-black">
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/covid-19-faqs">COVID-19</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/site-map">Site Map</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/student-discount">Student Discount</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/refer-a-friend">Refer a Friend</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.co.uk/existing-customers">Existing Customers</a></li>
               <li className="text-black text-2xl ml-4"><a href="https://communityfibre.zendesk.com/hc/en-gb">FAQs</a></li>
              </ul>
            </div>




            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Connect
              </h6>
              <p className="flex justify-right items-right   border-gray-300">


                <a href="#" ><img src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2F8JYcEJbtSvS1YPOASYrM&w=1920&q=75"></img></a>

                <a href="#!" className="ml-2 mr-4 text-gray-600">

                  <img src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2FmFQC6pvGSlyZAAB1zkN2&w=1920&q=75"></img></a>



                <a href="#!" className="ml-2 mr-4 text-gray-600">

                  <img src="https://communityfibre.co.uk/_next/image?url=https%3A%2F%2Fcdn.buttercms.com%2F6rzZHRkToOEbGHVd83z2&w=1920&q=75"></img></a>

              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Visit-Us
              </h6>
              <div>
                <a href=""><h5>Address:</h5>446, Lane No. 4, Raja Park,
                           Jaipur – 302004, Rajasthan</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer;