import { AppHero } from "../cmps/app-hero"
import { Features } from "../cmps/features"
import { SuccessStories } from '../cmps/success-stories'
import Shape1 from '../assets/img/get-started/shape1.png'
import Shape2 from '../assets/img/hero/shape4.png'
import Shape3 from '../assets/img/features/shape1.png'
import Shape4 from '../assets/img/features/shape3.png'

export function HomePage() {
    return (
        <div className="home-page main-container">
            <AppHero />
            <Features />
            <SuccessStories />
            <section className="get-started-section full main-container">
                <div className="get-started flex">
                    <h1>Ready to get started?</h1>
                    <button>contact us</button>
                </div>
                <div className="shapes-container">
                    <img src={Shape1} />
                    <img src={Shape2} />
                    <img src={Shape3} />
                    <img src={Shape4} />
                </div>
            </section>
        </div>
    )
}