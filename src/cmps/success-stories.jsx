import Quotations from '../assets/img/quotations.png'
import Person1 from '../assets/img/person1.png'
import Person2 from '../assets/img/person2.png'
import Person3 from '../assets/img/person3.png'
export function SuccessStories() {
    return (
        <section className="success-stories-section full main-container">
            <div className="success-stories-container flex column align-center">
                <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
                <div className="cards-container flex">
                    <div className="card flex column">
                        <img src={Quotations} />
                        <p> “The team perfectly fit the specialized skill set required.
                            They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h4>Kady Baker</h4>
                        <span>Product Manager at Bookmark</span>
                        <img src={Person1} />
                    </div>
                    <div className="card flex column">
                        <img src={Quotations} />
                        <p>“We needed to automate our entire onboarding process.
                            The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <h4>Aiysha Reese</h4>
                        <span>Founder of Manage</span>
                        <img src={Person2} />
                    </div>
                    <div className="card flex column">
                        <img src={Quotations} />
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio.
                            The launch was an instant success with 100k downloads in the first month.”</p>
                        <h4>Arthur Clarke</h4>
                        <span>Co-founder of MyPhysio</span>
                        <img src={Person3} />
                    </div>
                </div>
            </div>
        </section>
    )
}