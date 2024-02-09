import { useState } from "react";

const NewsletterForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [rodo, setRodo] = useState('');

    const handleSubmit = e=> {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setRodo(false);
    const dataToSend = {
        firstName,
        lastName,
        email,
      };

    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(dataToSend)

    fetch('/postNewsData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then(function(response) {
            return response.json()
        }).then(function(body) {
            alert("Dodaliśmy cię do naszej bazy danych. Do usłyszenia w krótce!");
        });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Imię"
            onChange={e=> setFirstName(e.target.value)}
            value={firstName}
            required
        />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Nazwisko"
          value={lastName}
          onChange={e=> setLastName(e.target.value)}
          required
        />
        <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={e=> setEmail(e.target.value)}
            required
        />
        <div>
            <input
                type="checkbox"
                name="rodo"
                id="rodo"
                onChange={e=> setRodo(e.target.value)}
                value={rodo}
                required
            />
            <label htmlFor="rodo">
                Wyrażam zgodę na przetwarzanie moich danych osobowych w celach handlowych i marketingowych
            </label>
        </div>
        <button type="submit">Zapisz się do newslettera</button>
      </form>
    </div>
  );
};

export default NewsletterForm;