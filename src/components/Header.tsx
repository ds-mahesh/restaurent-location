const Header = () =>{
return(
<div className="centered-container bg-gray-600">
      <nav className="flex items-center justify-between">
        <div className="pl-40">
          <img
            src="https://th.bing.com/th/id/R.68406c3de726360877777cd923cfa288?rik=PT9gY6Fed1%2fGBg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2frestaurant-png-hd-restaurant-week-new-orleans-1920.png&ehk=shPTorTrtaxkyaWgpM3xn%2bF70tSm%2fe6OnL%2b%2fJZwMxo4%3d&risl=&pid=ImgRaw&r=0"
            width="full"
            height=""></img> </div>
        <ul className="submenu flex  justify-center gap-x-10 text-2xl font-normal">
            <li><a href="https://communityfibre.co.uk/">HOME</a></li>
            <li><a href="https://communityfibre.co.uk/tv">ABOUT</a></li>
            <li><a href="https://communityfibre.co.uk/landline">SERVICES</a></li>
            <li><a href="https://communityfibre.co.uk/deals">IMAGES</a></li>
            {/* <li><a href="https://communityfibre.co.uk/why-choose-community-fibre">Why choose us</a></li> */}
        </ul>
       
        <div className="mr-80">
          {/* <a href="https://communityfibre.co.uk/#postcode-search-modal" >Get Started</a> */}
        </div>
      </nav>
    </div>
    );
}

export default Header;