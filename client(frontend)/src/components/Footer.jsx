import '../assets/css/Footer.css'
    function Footer() {
    return (
    <footer className="footer">
        <div className="footer-content">
        <p>© {new Date().getFullYear()} AmazonClone. All rights reserved.</p>
        <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Help</a>
        </div>
        </div>
    </footer>
    )
}
export default Footer