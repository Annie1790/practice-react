import { useState } from "react";

const WelcomeMessage = ({ firstName, lastName }) => {
    return (
        <p>Welcome {firstName} {lastName}</p>
    )
};

const ErrorMessage = () => {
    return (
        <p>Fields can't be empty!</p>
    )
};

const App = () => {
    const [showFormValid, setShowFormValid] = useState(false);
    const [showFormInvalid, setShowFormInvalid] = useState(false);
    const [name, setName] = useState({
        firstName: "",
        lastName: ""
    })

    const resetValidity = () => {
        setShowFormValid(false);
        setShowFormInvalid(false);
    }

    const handleSubmit = (event) => {
        //at this stage, you cannot reach the target value as the target is the DOM element itself, save your datas onChange and set it with useState
        if (name.firstName !== "" && name.lastName !== "") {
            event.preventDefault();
            setShowFormValid(true)
        } else {
            event.preventDefault();
            setShowFormInvalid(true)
        }

    };

    const watchFirstname = (event) => {
        resetValidity()
        setName({
            //spread operator
            ...name,
            firstName: event.target.value.trim(),
        })
    };

    const watchLastName = (event) => {
        resetValidity()
        setName({
            ...name,
            lastName: event.target.value.trim(),
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    onChange={watchFirstname}></input>

                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    onChange={watchLastName}>
                </input>
                <button type="submit">Submit</button>
            </form>
            <div>
                {showFormValid && <WelcomeMessage firstName={name.firstName} lastName={name.lastName}></WelcomeMessage>}
                {showFormInvalid && <ErrorMessage></ErrorMessage>}
            </div>
        </div>
    )
};

export default App;