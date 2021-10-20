import Shape1 from '../assets/img/hero/shape1.png'
import Shape2 from '../assets/img/hero/shape2.png'
import Shape3 from '../assets/img/hero/shape3.png'
import Shape4 from '../assets/img/hero/shape4.png'
import Shape5 from '../assets/img/hero/shape5.png'
export function AppHero() {
    return (
        <section className="app-hero flex">
            <h1>Find the best <span>talent</span></h1>
            <div className="flex column">
                <hr />
                <p>Finding the right people and building high performing teams can be hard.
                    Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
            <div className="shapes-container">
                <img src={Shape1} />
                <img src={Shape2} />
                <img src={Shape3} />
                <img src={Shape4} />
                <img src={Shape5} />
            </div>
        </section>
    )
}