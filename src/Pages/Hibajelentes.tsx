import { Component, ReactNode } from "react";

class Hibajelentes extends Component{
    render(): ReactNode {
        return(
            <div>
                <h1>Hibajelentés</h1>
                <form>
                    <div className="mb-3">
                        <label>
                            Név
                        </label>
                        <input
                        type="text"
                        id="nameInput"
                        name="name"
                         />
                    </div>
                    <div className="mb-3">
                        <label>
                            Email
                        </label>
                        <input
                        type="email"
                        id="contactInput"
                        name="email"
                         />
                    </div>
                    <div className="mb-3">
                        <label>
                            Üzenet
                        </label>
                        <textarea
                        id="messageTextarea"
                        name="message"
                         />
                    </div>
                    <button type="submit">
                        Beküldés
                    </button>
                </form>
                (
            <div>
              Köszönjük a hibabejelentést!
            </div>
          )
        </div>
      );
    };
    }
    

export default Hibajelentes;