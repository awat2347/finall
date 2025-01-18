import React from 'react'
import s from './erorr.module.scss'
const Erorr = () => {
  return (
    <>
       <section>
        <div className="container">
            <div className={s.wrapper}>
                <div className={s.text}>

                
                <div className={s.erorr}>
                <h4>404 Error</h4>
                <h1>Page Not Found</h1>
                </div>
                    <div className={s.Oops}>
                    <p>Oops! It looks like the page you were looking for is not here. Here are some possible reasons why:</p>
                    <ul>
                        <li>The page may have been moved or deleted.</li>
                        <li>You may have mistyped the URL.</li>
                        <li>
There may be a temporary problem with our server.
You can try the following options to find what you're looking for:</li>
                        <li>Check the URL for typos or errors and try again.</li>
                        <li>Go back to our homepage and browse from there.</li>
                    </ul>
                    <p>If you believe there's an issue with our website, please contact us using the information provided on our contact page</p>
<button>back home</button>
                    </div>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default Erorr