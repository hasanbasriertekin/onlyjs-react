import './_hero.module.scss'

export function Hero(){
    return(
        <>
            <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold"> Lezzet dolu bir maceraya hazır olun!</h1>
                        <p className="fs-4">Lezzetin sınırlarını zorlayan, taptaze malzemelerle donatılmış pizzalarımızla sizleri enfes bir lezzet yolculuğuna çıkarmak için buradayız! Keyifli bir zamanda, en sevdiğiniz lezzetlerle sizi buluşturmak için sabırsızlanıyoruz.</p>
                        <a className="btn btn-warning btn-lg" href="#!">Sipariş??</a>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Hero;