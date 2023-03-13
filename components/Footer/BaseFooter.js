const BaseFooter = () => {
    return (
        <>
            <div className="footer__base w-100 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 pt-2">
                            <p><span>Dawn Driving Tuition</span> &copy; {new Date().getFullYear()} </p>
                        </div>
                        <div className="col-12 col-md-6 pt-2">
                            <p>Site by Ben West</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BaseFooter
