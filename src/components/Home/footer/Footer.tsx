
import logo from '../../../assets/images/logo (1).png'


function Footer() {
    return (
        <div className='bg-slate-900'>
        <footer className="footer p-10  text-white py-8">
            <aside>
                <img src={logo} alt="" />
                <p className='py-4'>Disatar Relief<br />Providing reliable tech since 2020</p>
            </aside>
            <nav>
                <h6 className="footer-title">Home</h6>
                <a className="link link-hover">Dashboard</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Sign up</a>
                <a className="link link-hover">All Donations</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            
        </footer>
        <footer className="footer footer-center p-4 mt-6 text-white ">
        <aside>
          <p>Desater Relief © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
</div>
    )
}

export default Footer
