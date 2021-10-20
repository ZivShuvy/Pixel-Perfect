import Person from '../assets/img/features/person.png'
import Settings from '../assets/img/features/settings.png'
import Graph from '../assets/img/features/graph.png'
import Shape1 from '../assets/img/hero/shape1.png'
import Shape2 from '../assets/img/features/shape2.png'
import Shape3 from '../assets/img/features/shape1.png'
import Shape4 from '../assets/img/features/shape3.png'

export function Features() {
    return (
        <section className="features-section full main-container">
            <div className="features-container flex">
                <div className="heading flex column">
                    <hr />
                    <h2>Build & manage distributed teams like no one else.</h2>
                </div>
                <div className="features flex column">
                    <section className="feature flex align-center">
                        <div className="icon"><div className="circle" /><img src={Person} /></div>
                        <div className="text flex column">
                            <h3>Experienced Individuals</h3>
                            <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                        </div>
                    </section>
                    <section className="feature flex align-center">
                        <div className="icon"><div className="circle" /><img src={Settings} /></div>
                        <div className="text flex column">
                            <h3>Easy to Implement</h3>
                            <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                        </div>
                    </section>
                    <section className="feature flex align-center">
                        <div className="icon"><div className="circle" /><img src={Graph} /></div>
                        <div className="text flex column">
                            <h3>Enhanced Productivity</h3>
                            <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                        </div>
                    </section>
                </div>
            </div>
            <div className="shapes-container">
                <img src={Shape1} />
                <img src={Shape2} />
                <img src={Shape3} />
                <img src={Shape4} />
            </div>
        </section>
    )
}